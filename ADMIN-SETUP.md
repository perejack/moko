# MOKO Furniture Store - Admin Setup Guide

## Overview
This guide will help you set up the admin dashboard for managing furniture products in your MOKO store.

## Features
- **Admin Login**: Secure login with password protection
- **Product Management**: Add, edit, and delete products
- **Category Support**: Manage products across 6 categories:
  - Sofas
  - Mattresses
  - Beds
  - Coffee Tables
  - TV Stands
  - Carpets
- **Image Upload**: Support for product images via URLs
- **Real-time Updates**: Changes reflect immediately on the website

## Setup Instructions

### 1. Supabase Setup
1. Go to your Supabase project: https://app.supabase.com
2. Navigate to your project: `uguecuqpsnlxihdkiihr`
3. Open the **SQL Editor**
4. Copy and paste the contents of `supabase-setup.sql` into the editor
5. Click **Run** to execute all commands

### 2. Admin Access
- **Admin Password**: `2222`
- **Admin Dashboard**: Navigate to `/admin` after login
- **Login Process**:
  1. Click the **Admin** button in the top-right corner
  2. Enter password: `2222`
  3. You'll be redirected to the admin dashboard

### 3. Adding Products
1. Click **Add Product** in the admin dashboard
2. Fill in the product details:
   - **Title**: Product name
   - **Slug**: URL-friendly identifier (e.g., "modern-sofa")
   - **Price**: Display price (e.g., "KSh 45,999")
   - **Image URL**: Direct link to product image
   - **Category**: Select from dropdown
   - **Description**: Detailed product description
   - **Features**: One feature per line
   - **Dimensions**: One dimension per line
   - **What's Good**: Selling points, one per line
   - **Related Products**: Comma-separated slugs of related products

### 4. Image Hosting
For product images, you can:
- Use existing URLs from your current hosting
- Upload to Supabase Storage (already configured)
- Use external image hosting services like Cloudinary, Imgur, etc.

### 5. Categories
The system supports these categories:
- **Sofas**: All types of sofas and couches
- **Mattresses**: Memory foam, spring, latex mattresses
- **Beds**: Platform beds, storage beds, bed frames
- **Coffee Tables**: Center tables, side tables
- **TV Stands**: Entertainment centers, media consoles
- **Carpets**: Area rugs, Persian carpets, modern rugs

## Database Schema

### Products Table
```sql
- id: UUID (auto-generated)
- title: Product name
- slug: URL-friendly identifier
- price: Display price
- price_range: Price range for filtering
- image: Primary product image URL
- images: Array of additional image URLs
- category: One of 6 supported categories
- description: Full product description
- features: Array of product features
- dimensions: Array of product dimensions
- whats_good: Array of selling points
- related: Array of related product slugs
- created_at: Creation timestamp
- updated_at: Last update timestamp
```

## API Endpoints
The system uses these Supabase endpoints:
- **GET** `/rest/v1/products`: Fetch all products
- **GET** `/rest/v1/products?category=eq.{category}`: Filter by category
- **POST** `/rest/v1/products`: Add new product (admin only)
- **PUT** `/rest/v1/products?id=eq.{id}`: Update product (admin only)
- **DELETE** `/rest/v1/products?id=eq.{id}`: Delete product (admin only)

## Security
- **Row Level Security (RLS)**: Enabled for public read access
- **Admin Authentication**: Password-based (stored in localStorage)
- **API Security**: Uses your provided Supabase keys

## Troubleshooting

### Common Issues
1. **Products not showing**: Check if the SQL setup was executed properly
2. **Images not loading**: Ensure image URLs are publicly accessible
3. **Admin login not working**: Verify password is `2222`
4. **Database connection issues**: Check Supabase project URL and keys

### Support
If you encounter issues:
1. Check browser console for error messages
2. Verify Supabase credentials in `src/lib/supabase.ts`
3. Ensure all SQL commands were executed successfully
4. Check network tab for API request failures

## Next Steps
1. Run the SQL setup in Supabase
2. Test admin login with password `2222`
3. Add your first product through the admin dashboard
4. Verify products appear on the website
5. Customize the design and layout as needed
