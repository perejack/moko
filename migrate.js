#!/usr/bin/env node

// Migration script to move existing hardcoded data to Supabase
// Run with: node migrate.js

const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client
const supabase = createClient(
  'https://uguecuqpsnlxihdkiihr.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVndWVjdXFwc25seGloZGtpaWhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5MDQ0OTMsImV4cCI6MjA1MjQ4MDQ5M30.Sl8Wmre3Kk9v1w0k2GOi6kY2m5Y4Z4Y4Y4Y4Y4Y4Y4Y'
);

// Import data (we'll read the actual files)
const fs = require('fs');
const path = require('path');

async function migrateData() {
  console.log('🚀 Starting data migration to Supabase...\n');

  try {
    // Read all data files
    const dataFiles = [
      { category: 'Sofas', file: './src/data/sofas.ts', mapping: { title: 'title', priceRange: 'price_range', image: 'image', gallery: 'images', description: 'description', features: 'features', dimensions: 'dimensions', related: 'related' } },
      { category: 'Mattresses', file: './src/data/mattresses.ts', mapping: { title: 'title', priceRange: 'price_range', image: 'image', gallery: 'images', description: 'description', features: 'features', dimensions: 'dimensions', related: 'related' } },
      { category: 'Beds', file: './src/data/beds.ts', mapping: { title: 'title', priceRange: 'price_range', image: 'image', gallery: 'images', description: 'description', features: 'features', dimensions: 'dimensions', related: 'related' } },
      { category: 'Carpets', file: './src/data/carpets.ts', mapping: { title: 'title', priceRange: 'price_range', image: 'image', gallery: 'images', description: 'description', features: 'features', dimensions: 'dimensions', related: 'related' } },
      { category: 'TV Stands', file: './src/data/tvstands.ts', mapping: { title: 'title', priceRange: 'price_range', image: 'image', gallery: 'images', description: 'description', features: 'features', dimensions: 'dimensions', related: 'related' } },
    ];

    let totalProducts = 0;
    const allProducts = [];

    for (const dataFile of dataFiles) {
      console.log(`📁 Processing ${dataFile.category}...`);
      
      try {
        const fileContent = fs.readFileSync(dataFile.file, 'utf8');
        
        // Extract the array data using regex
        const regex = new RegExp(`export const\\s+\\w+\\s*=\\s*(\\[[\\s\\S]*?\\]);`, 'm');
        const match = fileContent.match(regex);
        
        if (match) {
          // Clean and parse the data
          const dataStr = match[1]
            .replace(/`/g, '"')
            .replace(/'/g, '"')
            .replace(/\n\s+/g, ' ')
            .replace(/\s+/g, ' ');
          
          const products = JSON.parse(dataStr);
          
          for (const product of products) {
            const mappedProduct = {
              title: product.title,
              slug: product.slug,
              price: product.priceRange ? product.priceRange.split('–')[0].trim() : 'KSh 0',
              price_range: product.priceRange || 'KSh 0',
              image: product.image,
              images: product.gallery || [product.image],
              category: dataFile.category,
              description: product.description || '',
              features: product.features || [],
              dimensions: product.dimensions || [],
              whats_good: product.features ? product.features.slice(0, 3) : [],
              related: product.related || []
            };
            
            allProducts.push(mappedProduct);
            totalProducts++;
          }
          
          console.log(`✅ Found ${products.length} ${dataFile.category.toLowerCase()}`);
        } else {
          console.log(`❌ Could not parse ${dataFile.file}`);
        }
      } catch (error) {
        console.error(`❌ Error processing ${dataFile.file}:`, error.message);
      }
    }

    console.log(`\n📊 Total products to migrate: ${totalProducts}`);

    // Clear existing products
    console.log('🗑️  Clearing existing products...');
    const { error: clearError } = await supabase
      .from('products')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000');

    if (clearError) {
      console.error('❌ Error clearing products:', clearError.message);
      return;
    }

    // Insert products in batches
    console.log('📥 Inserting products...');
    const batchSize = 50;
    
    for (let i = 0; i < allProducts.length; i += batchSize) {
      const batch = allProducts.slice(i, i + batchSize);
      
      const { error: insertError } = await supabase
        .from('products')
        .insert(batch);

      if (insertError) {
        console.error(`❌ Error inserting batch ${Math.floor(i/batchSize) + 1}:`, insertError.message);
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
    console.error('💥 Migration failed:', error.message);
  }
}

// Run migration
migrateData();
