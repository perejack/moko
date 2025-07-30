-- Supabase SQL setup for MOKO furniture store
-- Run these commands in your Supabase SQL editor

-- Create products table
CREATE TABLE IF NOT EXISTS products (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    price TEXT NOT NULL,
    price_range TEXT,
    image TEXT NOT NULL,
    images TEXT[] DEFAULT '{}',
    category TEXT NOT NULL CHECK (category IN ('Sofas', 'Mattresses', 'Beds', 'Coffee Tables', 'TV Stands', 'Carpets')),
    description TEXT NOT NULL,
    features TEXT[] DEFAULT '{}',
    dimensions TEXT[] DEFAULT '{}',
    whats_good TEXT[] DEFAULT '{}',
    related TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_products_created_at ON products(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (read-only)
CREATE POLICY "Public read access" ON products FOR SELECT USING (true);
CREATE POLICY "Admin full access" ON products FOR ALL USING (auth.jwt() IS NOT NULL);

-- Create a simple admin users table (optional, for future expansion)
CREATE TABLE IF NOT EXISTS admin_users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_products_updated_at 
    BEFORE UPDATE ON products 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data for testing
INSERT INTO products (
    title, 
    slug, 
    price, 
    price_range, 
    image, 
    category, 
    description, 
    features, 
    dimensions, 
    whats_good, 
    related
) VALUES 
(
    'Modern 3-Seater Sofa',
    'modern-3-seater-sofa',
    'KSh 45,999',
    'KSh 45,999 - KSh 55,999',
    'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2023/03/HUM_8697-min-1-500x500.jpg',
    'Sofas',
    'A comfortable and stylish 3-seater sofa perfect for modern living spaces. Features high-quality upholstery and sturdy construction.',
    ARRAY['Premium upholstery', 'Sturdy wooden frame', 'Comfortable seating', 'Modern design', 'Easy assembly'],
    ARRAY['Length: 210cm', 'Depth: 85cm', 'Height: 85cm'],
    ARRAY['Perfect for modern homes', 'Comfortable seating for 3 people', 'Easy to clean and maintain', 'Comes with assembly instructions'],
    ARRAY['modern-2-seater-sofa', 'sofa-cushions']
),
(
    'Memory Foam Mattress',
    'memory-foam-mattress',
    'KSh 25,999',
    'KSh 25,999 - KSh 35,999',
    'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2023/03/HUM_8697-min-1-500x500.jpg',
    'Mattresses',
    'Premium memory foam mattress that adapts to your body shape for ultimate comfort and support.',
    ARRAY['Memory foam technology', 'Pressure relief', 'Temperature regulation', 'Hypoallergenic cover', '10-year warranty'],
    ARRAY['Single: 90x190cm', 'Double: 135x190cm', 'Queen: 150x200cm', 'King: 180x200cm'],
    ARRAY['Adapts to body shape', 'Reduces pressure points', 'Improves sleep quality', 'Long-lasting durability'],
    ARRAY['bed-frame', 'pillow-set']
),
(
    'Wooden Platform Bed',
    'wooden-platform-bed',
    'KSh 35,999',
    'KSh 35,999 - KSh 45,999',
    'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2023/03/HUM_8697-min-1-500x500.jpg',
    'Beds',
    'Solid wooden platform bed with modern design and built-in storage. Perfect for contemporary bedrooms.',
    ARRAY['Solid wood construction', 'Built-in storage drawers', 'Modern minimalist design', 'Easy assembly', 'Sturdy support'],
    ARRAY['Single: 100x200cm', 'Double: 140x200cm', 'Queen: 160x200cm', 'King: 180x200cm'],
    ARRAY['Space-saving design', 'Extra storage space', 'Modern aesthetic', 'Durable construction'],
    ARRAY['mattress', 'bedside-table']
),
(
    'Glass Coffee Table',
    'glass-coffee-table',
    'KSh 15,999',
    'KSh 15,999 - KSh 20,999',
    'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2023/03/HUM_8697-min-1-500x500.jpg',
    'Coffee Tables',
    'Elegant glass coffee table with tempered glass top and sturdy metal frame. Perfect centerpiece for your living room.',
    ARRAY['Tempered glass top', 'Sturdy metal frame', 'Modern design', 'Easy to clean', 'Scratch resistant'],
    ARRAY['Length: 120cm', 'Width: 60cm', 'Height: 45cm'],
    ARRAY['Elegant design', 'Durable construction', 'Easy maintenance', 'Perfect for any decor'],
    ARRAY['sofa-set', 'tv-stand']
),
(
    'Modern TV Stand',
    'modern-tv-stand',
    'KSh 18,999',
    'KSh 18,999 - KSh 25,999',
    'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2023/03/HUM_8697-min-1-500x500.jpg',
    'TV Stands',
    'Contemporary TV stand with ample storage space and cable management system. Accommodates TVs up to 65 inches.',
    ARRAY['Fits TVs up to 65 inches', 'Multiple storage compartments', 'Cable management system', 'Modern design', 'Easy assembly'],
    ARRAY['Width: 150cm', 'Depth: 40cm', 'Height: 50cm'],
    ARRAY['Organized storage', 'Clean cable management', 'Modern aesthetic', 'Sturdy construction'],
    ARRAY['tv-accessories', 'living-room-set']
),
(
    'Persian Style Carpet',
    'persian-style-carpet',
    'KSh 12,999',
    'KSh 12,999 - KSh 18,999',
    'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2023/03/HUM_8697-min-1-500x500.jpg',
    'Carpets',
    'Beautiful Persian-style carpet with intricate patterns and rich colors. Adds warmth and elegance to any room.',
    ARRAY['Persian-style patterns', 'High-quality materials', 'Non-slip backing', 'Easy to clean', 'Fade resistant'],
    ARRAY['Small: 120x180cm', 'Medium: 160x230cm', 'Large: 200x290cm'],
    ARRAY['Enhances room decor', 'Comfortable underfoot', 'Durable construction', 'Easy maintenance'],
    ARRAY['sofa-set', 'coffee-table']
);

-- Create storage bucket for product images (optional)
-- You can also use external image URLs
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('product-images', 'product-images', true, 5242880, ARRAY['image/jpeg', 'image/png', 'image/webp'])
ON CONFLICT (id) DO NOTHING;

-- Grant permissions for public access to the bucket
GRANT ALL ON storage.objects TO authenticated, anon;

-- Create policy for public access to product images
CREATE POLICY "Public access to product images" ON storage.objects FOR ALL USING (bucket_id = 'product-images');
