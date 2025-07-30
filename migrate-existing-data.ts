// Migration script to move existing hardcoded data to Supabase
// Run this after setting up the database

import { supabase } from './src/lib/supabase';

// Import existing data
import { sofas } from './src/data/sofas';
import { mattresses } from './src/data/mattresses';
import { beds } from './src/data/beds';
import { carpets } from './src/data/carpets';
import { tvstands } from './src/data/tvstands';

interface MigrationProduct {
  title: string;
  slug: string;
  price: string;
  price_range: string;
  image: string;
  images: string[];
  category: string;
  description: string;
  features: string[];
  dimensions: string[];
  whats_good: string[];
  related: string[];
}

// Function to migrate sofas
const migrateSofas = async () => {
  const products: MigrationProduct[] = sofas.map(sofa => ({
    title: sofa.title,
    slug: sofa.slug,
    price: sofa.priceRange.split('–')[0].trim(), // Take the lower price
    price_range: sofa.priceRange,
    image: sofa.image,
    images: sofa.gallery || [sofa.image],
    category: 'Sofas',
    description: sofa.description,
    features: sofa.features,
    dimensions: sofa.dimensions,
    whats_good: sofa.features.slice(0, 3), // Use first 3 features as "what's good"
    related: sofa.related || []
  }));

  return products;
};

// Function to migrate mattresses
const migrateMattresses = async () => {
  const products: MigrationProduct[] = mattresses.map(mattress => ({
    title: mattress.title,
    slug: mattress.slug,
    price: mattress.priceRange.split('–')[0].trim(),
    price_range: mattress.priceRange,
    image: mattress.image,
    images: mattress.gallery || [mattress.image],
    category: 'Mattresses',
    description: mattress.description,
    features: mattress.features,
    dimensions: mattress.dimensions,
    whats_good: mattress.features.slice(0, 3),
    related: mattress.related || []
  }));

  return products;
};

// Function to migrate beds
const migrateBeds = async () => {
  const products: MigrationProduct[] = beds.map(bed => ({
    title: bed.title,
    slug: bed.slug,
    price: bed.priceRange.split('–')[0].trim(),
    price_range: bed.priceRange,
    image: bed.image,
    images: bed.gallery || [bed.image],
    category: 'Beds',
    description: bed.description,
    features: bed.features,
    dimensions: bed.dimensions,
    whats_good: bed.features.slice(0, 3),
    related: bed.related || []
  }));

  return products;
};

// Function to migrate carpets
const migrateCarpets = async () => {
  const products: MigrationProduct[] = carpets.map(carpet => ({
    title: carpet.title,
    slug: carpet.slug,
    price: carpet.priceRange.split('–')[0].trim(),
    price_range: carpet.priceRange,
    image: carpet.image,
    images: carpet.gallery || [carpet.image],
    category: 'Carpets',
    description: carpet.description,
    features: carpet.features,
    dimensions: carpet.dimensions,
    whats_good: carpet.features.slice(0, 3),
    related: carpet.related || []
  }));

  return products;
};

// Function to migrate TV stands
const migrateTvStands = async () => {
  const products: MigrationProduct[] = tvstands.map(tvstand => ({
    title: tvstand.title,
    slug: tvstand.slug,
    price: tvstand.priceRange.split('–')[0].trim(),
    price_range: tvstand.priceRange,
    image: tvstand.image,
    images: tvstand.gallery || [tvstand.image],
    category: 'TV Stands',
    description: tvstand.description,
    features: tvstand.features,
    dimensions: tvstand.dimensions,
    whats_good: tvstand.features.slice(0, 3),
    related: tvstand.related || []
  }));

  return products;
};

// Main migration function
const migrateAllData = async () => {
  try {
    console.log('Starting migration...');

    // Clear existing products
    const { error: deleteError } = await supabase
      .from('products')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all

    if (deleteError) {
      console.error('Error clearing existing products:', deleteError);
      return;
    }

    console.log('Cleared existing products');

    // Migrate all categories
    const allProducts = [
      ...(await migrateSofas()),
      ...(await migrateMattresses()),
      ...(await migrateBeds()),
      ...(await migrateCarpets()),
      ...(await migrateTvStands()),
    ];

    console.log(`Total products to migrate: ${allProducts.length}`);

    // Insert products in batches to avoid rate limits
    const batchSize = 50;
    for (let i = 0; i < allProducts.length; i += batchSize) {
      const batch = allProducts.slice(i, i + batchSize);
      
      const { error: insertError } = await supabase
        .from('products')
        .insert(batch);

      if (insertError) {
        console.error(`Error inserting batch ${i/batchSize + 1}:`, insertError);
        continue;
      }

      console.log(`Inserted batch ${i/batchSize + 1} (${batch.length} products)`);
    }

    console.log('Migration completed successfully!');
    console.log(`Total products migrated: ${allProducts.length}`);
    
    // Summary by category
    const summary = {
      Sofas: allProducts.filter(p => p.category === 'Sofas').length,
      Mattresses: allProducts.filter(p => p.category === 'Mattresses').length,
      Beds: allProducts.filter(p => p.category === 'Beds').length,
      Carpets: allProducts.filter(p => p.category === 'Carpets').length,
      'TV Stands': allProducts.filter(p => p.category === 'TV Stands').length,
    };
    
    console.log('Migration summary:', summary);

  } catch (error) {
    console.error('Migration failed:', error);
  }
};

// Run migration if this file is executed directly
if (require.main === module) {
  migrateAllData();
}

export { migrateAllData };
