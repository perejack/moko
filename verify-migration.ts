import { supabase } from './src/lib/supabase';

const verifyMigration = async () => {
  console.log('🔍 Verifying migration...\n');

  try {
    // Get total count
    const { data: totalCount, error: countError } = await supabase
      .from('products')
      .select('*', { count: 'exact', head: false });

    if (countError) {
      console.error('❌ Error getting count:', countError);
      return;
    }

    console.log(`📊 Total products in database: ${totalCount?.length || 0}`);

    // Get count by category
    const categories = ['Sofas', 'Mattresses', 'Beds', 'Carpets', 'TV Stands'];
    
    for (const category of categories) {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('category', category);

      if (error) {
        console.error(`❌ Error getting ${category}:`, error);
        continue;
      }

      console.log(`📦 ${category}: ${data?.length || 0} products`);

      // Show sample products
      if (data && data.length > 0) {
        console.log(`   Sample: ${data.slice(0, 3).map(p => p.title).join(', ')}`);
      }
    }

    // Check for any issues
    const { data: allProducts } = await supabase
      .from('products')
      .select('*');

    if (allProducts) {
      // Check for missing images
      const missingImages = allProducts.filter(p => !p.image || p.image === '');
      console.log(`⚠️  Products with missing images: ${missingImages.length}`);

      // Check for duplicate slugs
      const slugs = allProducts.map(p => p.slug);
      const uniqueSlugs = new Set(slugs);
      if (slugs.length !== uniqueSlugs.size) {
        console.log(`⚠️  Duplicate slugs found: ${slugs.length - uniqueSlugs.size}`);
      }

      // Check sample data
      console.log('\n📋 Sample product:');
      if (allProducts[0]) {
        const sample = allProducts[0];
        console.log(`   Title: ${sample.title}`);
        console.log(`   Category: ${sample.category}`);
        console.log(`   Price: ${sample.price}`);
        console.log(`   Slug: ${sample.slug}`);
        console.log(`   Features: ${sample.features?.length || 0}`);
        console.log(`   Dimensions: ${sample.dimensions?.length || 0}`);
      }
    }

    console.log('\n✅ Migration verification completed!');

  } catch (error) {
    console.error('❌ Verification failed:', error);
  }
};

// Run verification
verifyMigration();
