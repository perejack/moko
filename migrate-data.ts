import { supabase } from './src/lib/supabase';

// Import all data files
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

const transformProduct = (product: any, category: string): MigrationProduct => ({
  title: product.title,
  slug: product.slug,
  price: product.priceRange ? product.priceRange.split('–')[0].trim() : 'KSh 0',
  price_range: product.priceRange || 'KSh 0',
  image: product.image,
  images: product.gallery || [product.image],
  category,
  description: product.description || '',
  features: product.features || [],
  dimensions: product.dimensions || [],
  whats_good: product.features ? product.features.slice(0, 3) : [],
  related: product.related || []
});

const migrateAllData = async () => {
  console.log('🚀 Starting data migration to Supabase...\n');

  try {
    // Clear existing products
    console.log('🗑️  Clearing existing products...');
    const { error: clearError } = await supabase
      .from('products')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000');

    if (clearError) {
      console.error('❌ Error clearing products:', clearError);
      return;
    }

    // Transform and collect all products
    const allProducts = [
      ...sofas.map(product => transformProduct(product, 'Sofas')),
      ...mattresses.map(product => transformProduct(product, 'Mattresses')),
      ...beds.map(product => transformProduct(product, 'Beds')),
      ...carpets.map(product => transformProduct(product, 'Carpets')),
      ...tvstands.map(product => transformProduct(product, 'TV Stands'))
    ];

    console.log(`📊 Total products to migrate: ${allProducts.length}`);

    // Insert products in batches
    const batchSize = 50;
    for (let i = 0; i < allProducts.length; i += batchSize) {
      const batch = allProducts.slice(i, i + batchSize);
      
      const { error: insertError } = await supabase
        .from('products')
        .insert(batch);

      if (insertError) {
        console.error(`❌ Error inserting batch ${Math.floor(i/batchSize) + 1}:`, insertError);
        continue;
      }

      console.log(`✅ Inserted batch ${Math.floor(i/batchSize) + 1} (${batch.length} products)`);
    }

    // Summary
    const summary = {
      Sofas: allProducts.filter(p => p.category === 'Sofas').length,
      Mattresses: allProducts.filter(p => p.category === 'Mattresses').length,
      Beds: allProducts.filter(p => p.category === 'Beds').length,
      Carpets: allProducts.filter(p => p.category === 'Carpets').length,
      'TV Stands': allProducts.filter(p => p.category === 'TV Stands').length,
    };

    console.log('\n🎉 Migration completed successfully!');
    console.log('📈 Summary:', summary);

  } catch (error) {
    console.error('💥 Migration failed:', error);
  }
};

// Run migration
migrateAllData();
