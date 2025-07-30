# Data Migration Guide - Moving Existing Products to Database

## Overview
This guide will help you migrate all your existing hardcoded product data from the local files into the Supabase database, making them dynamic and manageable through the admin dashboard.

## Migration Steps

### 1. Database Setup (Already Done)
- ✅ SQL schema created in `supabase-setup.sql`
- ✅ Products table with all required fields
- ✅ RLS policies configured

### 2. Run the Migration

#### **Option A: Using TypeScript (Recommended)**
```bash
# Install ts-node if not already installed
npm install -g ts-node

# Run the migration
npx ts-node migrate-data.ts
```

#### **Option B: Using Node.js**
```bash
# Install dependencies
npm install @supabase/supabase-js

# Run the migration
node migrate.js
```

#### **Option C: Manual Migration**
1. Run the SQL setup in Supabase
2. Use the admin dashboard to manually add products
3. Copy data from existing files

### 3. Verify Migration
After running the migration, you should see:
- All existing products in the database
- Products appear in the admin dashboard
- Products display on the website

## Data Mapping

### Source Files to Database
| Local File | Database Category | Products Count |
|------------|-------------------|----------------|
| `src/data/sofas.ts` | Sofas | ~20+ products |
| `src/data/mattresses.ts` | Mattresses | ~15+ products |
| `src/data/beds.ts` | Beds | ~10+ products |
| `src/data/carpets.ts` | Carpets | ~25+ products |
| `src/data/tvstands.ts` | TV Stands | ~8+ products |

### Field Mapping
| Local Field | Database Field | Notes |
|-------------|----------------|--------|
| `title` | `title` | Product name |
| `slug` | `slug` | URL identifier |
| `priceRange` | `price_range` | Full price range |
| `priceRange.split('–')[0]` | `price` | Lower bound price |
| `image` | `image` | Primary image |
| `gallery` | `images` | Array of images |
| `description` | `description` | Full description |
| `features` | `features` | Product features |
| `dimensions` | `dimensions` | Product dimensions |
| `features.slice(0,3)` | `whats_good` | Top selling points |
| `related` | `related` | Related product slugs |

## Verification Commands

### Check Database
```sql
-- Count products by category
SELECT category, COUNT(*) as count 
FROM products 
GROUP BY category 
ORDER BY count DESC;

-- Check sample products
SELECT title, category, price_range 
FROM products 
LIMIT 10;
```

### Check via API
```bash
# Get all products
curl https://uguecuqpsnlxihdkiihr.supabase.co/rest/v1/products \
  -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

# Get products by category
curl "https://uguecuqpsnlxihdkiihr.supabase.co/rest/v1/products?category=eq.Sofas" \
  -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

## Troubleshooting

### Common Issues

1. **Migration fails with "module not found"**
   ```bash
   npm install typescript ts-node @types/node
   ```

2. **Supabase connection error**
   - Check your internet connection
   - Verify Supabase credentials in `src/lib/supabase.ts`
   - Ensure the database is set up correctly

3. **Data validation errors**
   - Check for duplicate slugs
   - Ensure all required fields are present
   - Verify image URLs are accessible

4. **Missing products after migration**
   - Check the console for error messages
   - Verify data in Supabase dashboard
   - Check browser network tab for API errors

### Debug Migration
```bash
# Run with verbose output
DEBUG=1 npx ts-node migrate-data.ts

# Check specific category
node -e "
  const { migrateAllData } = require('./migrate-data');
  migrateAllData().then(() => console.log('Done'));
"
```

## Post-Migration Steps

### 1. Update Category Pages
Replace static imports with dynamic data fetching:

**Before:**
```typescript
import { sofas } from '../data/sofas';
```

**After:**
```typescript
import { useProducts } from '../hooks/useProducts';
const { products: sofas, loading } = useProducts('Sofas');
```

### 2. Test Admin Dashboard
1. Navigate to `/admin`
2. Login with password `2222`
3. Verify all products appear
4. Test adding/editing products

### 3. Update Routes (Optional)
Create dynamic versions of category pages:
- DynamicSofas.tsx
- DynamicMattresses.tsx
- DynamicBeds.tsx
- DynamicCarpets.tsx
- DynamicTVStands.tsx

### 4. Performance Optimization
- Add caching for frequently accessed data
- Implement pagination for large datasets
- Add search and filtering capabilities

## Rollback Plan
If you need to rollback:

1. **Clear database:**
   ```sql
   DELETE FROM products;
   ```

2. **Revert to static data:**
   - Keep the existing data files
   - Don't delete the original imports
   - Simply switch back to using static imports

## Support
If you encounter issues:
1. Check the browser console for errors
2. Verify Supabase credentials
3. Check network tab for API responses
4. Review the migration logs

## Next Steps
1. Run the migration script
2. Verify data in admin dashboard
3. Test dynamic product display
4. Update category pages to use dynamic data
5. Remove hardcoded data files (optional)
