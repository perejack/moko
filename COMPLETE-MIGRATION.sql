-- ============================================================================
-- COMPLETE DATA MIGRATION SQL
-- MOKO Furniture Store - Moving all hardcoded data to database
-- ============================================================================

-- Clear existing data
DELETE FROM products;

-- ============================================================================
-- SOFAS - Complete product data migration
-- ============================================================================
INSERT INTO products (title, slug, price, price_range, image, images, category, description, features, dimensions, whats_good, related) VALUES
-- Mr Biggie Series
('Mr Biggie 5-seater Sofa', 'mr-biggie-5-seater-sofa', 'KSh 35,798', 'KSh 35,798 – KSh 39,148', 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2024/08/HUM_9636-1-1-500x500.jpg', ARRAY['https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2024/08/HUM_9636-1-1-500x500.jpg'], 'Sofas', 'Mr Biggie 5-seater sofa has modern design that''s built to last. It''s big, spacious and curvy with sturdy construction.', ARRAY['Curvy modern design', 'Extra 20cm per seat for comfort', 'Firm foam seats', 'Sturdy construction', 'Easy assembly'], ARRAY['Width: 850mm', 'Height: 820mm', 'Length: 2410mm'], ARRAY['Perfect for large families', 'Modern curvy design', 'Built to last', 'Extra spacious seating'], ARRAY['jiji-5-seater-sofa-kutana-table', 'jiji-6-seater-sofa-footstool', 'queen-size-moko-mattress']),

('Mr Biggie 3-seater Sofa', 'mr-biggie-3-seater-sofa', 'KSh 20,949', 'KSh 20,949 – KSh 22,499', 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2022/09/HUM_8637-min-500x500.jpg', ARRAY['https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2022/09/HUM_8637-min-500x500.jpg'], 'Sofas', 'Mr Biggie 3-seater sofa with modern design built to last. Spacious and curvy for ultimate comfort.', ARRAY['Modern curvy design', '20cm extra per seat', 'Firm foam construction', 'Sturdy frame', 'Long-lasting materials'], ARRAY['Width: 850mm', 'Height: 820mm', 'Length: 2410mm'], ARRAY['Perfect for families', 'Modern design', 'Built to last', 'Comfortable seating'], ARRAY['mr-biggie-2-seater-sofa', 'mr-biggie-1-seater-sofa', 'jiji-3-seater-sofa']),

('Mr Biggie 2-seater Sofa', 'mr-biggie-2-seater-sofa', 'KSh 15,449', 'KSh 15,449 – KSh 16,999', 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2022/09/HUM_8639-min-500x500.jpg', ARRAY['https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2022/09/HUM_8639-min-500x500.jpg'], 'Sofas', 'Mr Biggie 2-seater sofa with modern design built to last. Perfect for couples or smaller spaces.', ARRAY['Curvy modern design', 'Extra seating space', 'Firm foam seats', 'Sturdy construction', 'Easy maintenance'], ARRAY['Width: 850mm', 'Height: 820mm', 'Length: 1860mm'], ARRAY['Perfect for couples', 'Modern design', 'Built to last', 'Space efficient'], ARRAY['mr-biggie-1-seater-sofa', 'mr-biggie-3-seater-sofa', 'jiji-2-seater-sofa']),

('Mr Biggie 1-seater Sofa', 'mr-biggie-1-seater-sofa', 'KSh 10,949', 'KSh 10,949 – KSh 11,949', 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2023/08/HUM_9605-500x500.jpg', ARRAY['https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2023/08/HUM_9605-500x500.jpg'], 'Sofas', 'Mr Biggie 1-seater sofa perfect for single seating or as an addition to complete your sofa set.', ARRAY['Single seating perfection', 'Curvy modern design', 'Firm foam construction', 'Sturdy frame', 'Easy maintenance'], ARRAY['Width: 850mm', 'Height: 820mm', 'Length: 1256mm'], ARRAY['Perfect single seating', 'Modern design', 'Built to last', 'Versatile addition'], ARRAY['mr-biggie-2-seater-sofa', 'mr-biggie-3-seater-sofa', 'jiji-1-seater-sofa']),

-- Jiji Series
('Jiji 6 Seater Sofa with Footstool', 'jiji-6-seater-sofa-footstool', 'KSh 37,499', 'KSh 37,499 – KSh 40,199', 'https://cdn.shortpixel.ai/spai/w_330+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9690-min-500x500.jpg', ARRAY['https://cdn.shortpixel.ai/spai/w_330+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9690-min-500x500.jpg'], 'Sofas', 'Jiji 6 seater sectional sofa designed to be the social hub. Perfect for large gatherings with removable cushion covers.', ARRAY('Functional back design', 'Space-friendly layout', '9-inch foam cushions', 'Removable covers', 'Strong frame'), ARRAY('Width: 0.8M', 'Length: 3.2M'), ARRAY('Perfect for large gatherings', 'Space-friendly design', 'Easy maintenance', 'Built to last'), ARRAY('jiji-5-seater-sofa-kutana-table', 'jiji-6-seater-sofa-kutana-table', 'jiji-3-seater-sofa')),

('Jiji 5 Seater Sofa with Kutana Table', 'jiji-5-seater-sofa-kutana-table', 'KSh 31,499', 'KSh 31,499 – KSh 34,199', 'https://cdn.shortpixel.ai/spai/w_330+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9690-min-500x500.jpg', ARRAY['https://cdn.shortpixel.ai/spai/w_330+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9690-min-500x500.jpg'], 'Sofas', 'Jiji 5 seater sectional sofa with kutana table - social hub for your home.', ARRAY('Functional back design', 'Space-friendly layout', '9-inch foam cushions', 'Removable covers', 'Includes kutana table'), ARRAY('Width: 0.8M', 'Length: 2.4M'), ARRAY('Perfect for social gatherings', 'Includes kutana table', 'Space-friendly design', 'Easy maintenance'), ARRAY('jiji-6-seater-sofa-footstool', 'jiji-3-seater-sofa', 'jiji-2-seater-sofa')),

('Jiji 3 Seater Sofa', 'jiji-3-seater-sofa', 'KSh 31,499', 'KSh 31,499 – KSh 34,199', 'https://cdn.shortpixel.ai/spai/w_330+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9690-min-500x500.jpg', ARRAY['https://cdn.shortpixel.ai/spai/w_330+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9690-min-500x500.jpg'], 'Sofas', 'Jiji 3 seater sectional sofa designed as a social hub for your home. Accommodates more people without taking much space.', ARRAY('Functional back design', 'Space-friendly layout', '9-inch foam cushions', 'Removable covers', 'Strong frame'), ARRAY('Width: 0.8M', 'Length: 2.0M'), ARRAY('Perfect for families', 'Space-friendly design', 'Easy maintenance', 'Social hub design'), ARRAY('jiji-6-seater-sofa-footstool', 'jiji-6-seater-sofa-kutana-table', 'jiji-5-seater-sofa-kutana-table')),

('Jiji 2 Seater Sofa', 'jiji-2-seater-sofa', 'KSh 21,499', 'KSh 21,499 – KSh 24,299', 'https://cdn.shortpixel.ai/spai/w_330+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/jiji-2-seater-lifestyle.jpg', ARRAY['https://cdn.shortpixel.ai/spai/w_330+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/jiji-2-seater-lifestyle.jpg'], 'Sofas', 'Jiji 2 seater sectional sofa perfect for smaller spaces without compromising on comfort or style.', ARRAY('Functional back design', 'Space-friendly layout', '9-inch foam cushions', 'Removable covers', 'Strong frame'), ARRAY('Width: 0.8M', 'Length: 1.6M'), ARRAY('Perfect for couples', 'Space-friendly design', 'Easy maintenance', 'Compact yet comfortable'), ARRAY('jiji-3-seater-sofa', 'jiji-6-seater-sofa-footstool', 'mr-biggie-2-seater-sofa');

-- ============================================================================
-- MATTRESSES - Complete product data migration
-- ============================================================================
INSERT INTO products (title, slug, price, price_range, image, images, category, description, features, dimensions, whats_good, related) VALUES
('MoKo 4 by 6 Mattress', 'moko-4-by-6-mattress', 'KSh 7,499', 'KSh 7,499 – KSh 9,499', 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg', ARRAY['https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg'], 'Mattresses', 'MoKo 4 by 6 mattress provides comfortable sleep for single sleepers with high-quality foam construction.', ARRAY('High-quality foam', 'Excellent support', 'Comfortable sleep', 'Durable materials', 'Hypoallergenic'), ARRAY('Width: 122cm', 'Length: 183cm', 'Height: 15cm'), ARRAY('Perfect for single sleepers', 'Excellent support', 'Durable construction', 'Comfortable sleep'), ARRAY('bed-frame-4x6', 'pillow-set', 'mattress-protector')),

('MoKo 5 by 6 Mattress', 'moko-5-by-6-mattress', 'KSh 9,499', 'KSh 9,499 – KSh 11,499', 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg', ARRAY['https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg'], 'Mattresses', 'MoKo 5 by 6 mattress perfect for couples with premium foam construction for optimal comfort.', ARRAY('Premium foam', 'Optimal comfort', 'Perfect for couples', 'Long-lasting', 'Premium quality'), ARRAY('Width: 152cm', 'Length: 183cm', 'Height: 15cm'), ARRAY('Perfect for couples', 'Optimal comfort', 'Premium quality', 'Long-lasting'), ARRAY('bed-frame-5x6', 'pillow-set', 'mattress-protector')),

('MoKo 6 by 6 Mattress', 'moko-6-by-6-mattress', 'KSh 11,499', 'KSh 11,499 – KSh 13,499', 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg', ARRAY['https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg'], 'Mattresses', 'MoKo 6 by 6 mattress offers luxurious comfort for maximum sleeping space with premium construction.', ARRAY('Luxurious comfort', 'Maximum space', 'Premium construction', 'Excellent comfort', 'Premium quality'), ARRAY('Width: 183cm', 'Length: 183cm', 'Height: 15cm'), ARRAY('Luxurious comfort', 'Maximum space', 'Premium quality', 'Excellent comfort'), ARRAY('bed-frame-6x6', 'pillow-set', 'mattress-protector')),

('MoKo Orthopedic Mattress', 'moko-orthopedic-mattress', 'KSh 14,999', 'KSh 14,999 – KSh 18,999', 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg', ARRAY['https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg'], 'Mattresses', 'MoKo Orthopedic mattress provides exceptional back support with medical-grade foam construction.', ARRAY('Orthopedic support', 'Medical-grade foam', 'Spinal alignment', 'Exceptional support', 'Medical-grade quality'), ARRAY('Available in all sizes', 'Height: 20cm'), ARRAY('Orthopedic support', 'Medical-grade quality', 'Spinal alignment', 'Exceptional support'), ARRAY('orthopedic-bed-frame', 'memory-foam-pillow', 'mattress-protector')),

('MoKo Memory Foam Mattress', 'moko-memory-foam-mattress', 'KSh 12,999', 'KSh 12,999 – KSh 15,999', 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg', ARRAY['https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg'], 'Mattresses', 'MoKo Memory Foam mattress adapts to body shape with pressure relief and temperature regulation.', ARRAY('Memory foam technology', 'Body adaptation', 'Pressure relief', 'Temperature regulation', 'Personalized support'), ARRAY('Available in all sizes', 'Height: 20cm'), ARRAY('Memory foam comfort', 'Body adaptation', 'Pressure relief', 'Temperature control'), ARRAY('memory-foam-bed-frame', 'memory-foam-pillow', 'mattress-protector');

-- ============================================================================
-- BEDS - Complete product data migration
-- ============================================================================
INSERT INTO products (title, slug, price, price_range, image, images, category, description, features, dimensions, whats_good, related) VALUES
('MoKo 4 by 6 Bed Frame', 'moko-4-by-6-bed-frame', 'KSh 15,999', 'KSh 15,999 – KSh 18,999', 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg', ARRAY['https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg'], 'Beds', 'MoKo 4 by 6 bed frame with solid wood construction for sturdy support and durability.', ARRAY('Solid wood construction', 'Sturdy support system', 'Easy assembly', 'Modern design', 'Durable finish'), ARRAY('Width: 122cm', 'Length: 183cm', 'Height: 35cm'), ARRAY('Sturdy construction', 'Easy assembly', 'Modern design', 'Durable finish'), ARRAY('moko-4-by-6-mattress', 'bedside-table', 'bedding-set')),

('MoKo 5 by 6 Bed Frame', 'moko-5-by-6-bed-frame', 'KSh 18,999', 'KSh 18,999 – KSh 21,999', 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg', ARRAY['https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg'], 'Beds', 'MoKo 5 by 6 bed frame perfect for couples with premium wood construction and elegant design.', ARRAY('Premium wood construction', 'Elegant design', 'Perfect for couples', 'Easy assembly', 'Sturdy support'), ARRAY('Width: 152cm', 'Length: 183cm', 'Height: 35cm'), ARRAY('Perfect for couples', 'Elegant design', 'Premium quality', 'Easy assembly'), ARRAY('moko-5-by-6-mattress', 'bedside-table', 'bedding-set')),

('MoKo 6 by 6 Bed Frame', 'moko-6-by-6-bed-frame', 'KSh 21,999', 'KSh 21,999 – KSh 24,999', 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg', ARRAY['https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg'], 'Beds', 'MoKo 6 by 6 bed frame offers luxurious sleeping space with premium construction for master bedrooms.', ARRAY('Luxurious sleeping space', 'Premium construction', 'Perfect for master bedrooms', 'Maximum comfort', 'Premium quality'), ARRAY('Width: 183cm', 'Length: 183cm', 'Height: 35cm'), ARRAY('Luxurious space', 'Premium quality', 'Elegant design', 'Maximum comfort'), ARRAY('moko-6-by-6-mattress', 'bedside-table', 'bedding-set')),

('MoKo Storage Bed', 'moko-storage-bed', 'KSh 25,999', 'KSh 25,999 – KSh 29,999', 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg', ARRAY['https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg'], 'Beds', 'MoKo storage bed combines sleeping comfort with practical storage solutions and built-in drawers.', ARRAY('Built-in storage drawers', 'Ample storage space', 'Practical and functional', 'Solid construction', 'Space-saving design'), ARRAY('Available in all sizes', 'Storage: 4 large drawers', 'Height: 40cm'), ARRAY('Practical storage solution', 'Space-saving design', 'Solid construction', 'Functional and stylish'), ARRAY('storage-mattress', 'storage-baskets', 'bedding-set');

-- ============================================================================
-- CARPETS - Complete product data migration
-- ============================================================================
INSERT INTO products (title, slug, price, price_range, image, images, category, description, features, dimensions, whats_good, related) VALUES
('Persian Style Carpet', 'persian-style-carpet', 'KSh 12,999', 'KSh 12,999 – KSh 18,999', 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg', ARRAY['https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg'], 'Carpets', 'Beautiful Persian-style carpet with intricate patterns and rich colors for any room.', ARRAY('Persian-style patterns', 'Intricate designs', 'Rich warm colors', 'High-quality materials', 'Non-slip backing'), ARRAY('Small: 120x180cm', 'Medium: 160x230cm', 'Large: 200x290cm'), ARRAY('Beautiful Persian patterns', 'Rich warm colors', 'High-quality materials', 'Non-slip backing'), ARRAY('sofa-set', 'coffee-table', 'living-room-decor')),

('Modern Geometric Carpet', 'modern-geometric-carpet', 'KSh 8,999', 'KSh 8,999 – KSh 12,999', 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg', ARRAY['https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg'], 'Carpets', 'Modern geometric carpet with contemporary patterns perfect for modern homes.', ARRAY('Modern geometric patterns', 'Contemporary design', 'Durable construction', 'Easy maintenance', 'Stain resistant'), ARRAY('Small: 120x180cm', 'Medium: 160x230cm', 'Large: 200x290cm'), ARRAY('Modern geometric patterns', 'Contemporary design', 'Durable construction', 'Easy maintenance'), ARRAY('modern-sofa', 'coffee-table', 'contemporary-decor')),

('Shaggy Carpet', 'shaggy-carpet', 'KSh 15,999', 'KSh 15,999 – KSh 19,999', 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg', ARRAY['https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg'], 'Carpets', 'Luxurious shaggy carpet with ultra-soft texture perfect for bedrooms.', ARRAY('Ultra-soft texture', 'Luxurious comfort', 'Multiple color options', 'Perfect for bedrooms', 'High-quality materials'), ARRAY('Small: 120x180cm', 'Medium: 160x230cm', 'Large: 200x290cm'), ARRAY('Ultra-soft texture', 'Luxurious comfort', 'Multiple colors', 'High-quality materials'), ARRAY('bedroom-furniture', 'living-room-carpet', 'soft-furnishings'));

-- ============================================================================
-- TV STANDS - Complete product data migration
-- ============================================================================
INSERT INTO products (title, slug, price, price_range, image, images, category, description, features, dimensions, whats_good, related) VALUES
('Modern TV Stand', 'modern-tv-stand', 'KSh 18,999', 'KSh 18,999 – KSh 25,999', 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg', ARRAY['https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg'], 'TV Stands', 'Contemporary TV stand with ample storage and cable management for TVs up to 65 inches.', ARRAY('Fits TVs up to 65 inches', 'Multiple storage compartments', 'Cable management system', 'Modern design', 'Easy assembly'), ARRAY('Width: 150cm', 'Depth: 40cm', 'Height: 50cm'), ARRAY('Fits large TVs', 'Ample storage space', 'Cable management', 'Modern design'), ARRAY('tv-accessories', 'living-room-set', 'entertainment-center')),

('Corner TV Stand', 'corner-tv-stand', 'KSh 15,999', 'KSh 15,999 – KSh 19,999', 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg', ARRAY['https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg'], 'TV Stands', 'Space-saving corner TV stand perfect for maximizing room space.', ARRAY('Space-saving corner design', 'Perfect for corners', 'Ample storage space', 'Media device storage', 'Space maximization'), ARRAY('Width: 120cm', 'Depth: 40cm', 'Height: 45cm'), ARRAY('Space-saving design', 'Perfect for corners', 'Ample storage', 'Space maximization'), ARRAY('corner-sofa', 'media-storage', 'space-saving-furniture');

-- ============================================================================
-- COFFEE TABLES - Complete product data migration
-- ============================================================================
INSERT INTO products (title, slug, price, price_range, image, images, category, description, features, dimensions, whats_good, related) VALUES
('Glass Coffee Table', 'glass-coffee-table', 'KSh 15,999', 'KSh 15,999 – KSh 20,999', 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg', ARRAY['https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg'], 'Coffee Tables', 'Elegant glass coffee table with tempered glass top and sturdy metal frame.', ARRAY('Tempered glass top', 'Sturdy metal frame', 'Modern design', 'Easy to clean', 'Scratch resistant'), ARRAY('Length: 120cm', 'Width: 60cm', 'Height: 45cm'), ARRAY('Elegant design', 'Durable construction', 'Easy maintenance', 'Perfect centerpiece'), ARRAY('sofa-set', 'tv-stand', 'living-room-decor'),

('Wooden Coffee Table', 'wooden-coffee-table', 'KSh 12,999', 'KSh 12,999 – KSh 16,999', 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg', ARRAY['https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9508-min-500x500.jpg'], 'Coffee Tables', 'Classic wooden coffee table with timeless design and durable construction.', ARRAY('Classic wooden design', 'Timeless aesthetics', 'Durable construction', 'Easy maintenance', 'Versatile styling'), ARRAY('Length: 120cm', 'Width: 60cm', 'Height: 45cm'), ARRAY('Classic design', 'Durable construction', 'Timeless aesthetics', 'Versatile styling'), ARRAY('classic-sofa', 'wooden-tv-stand', 'traditional-decor');

-- ============================================================================
-- SUMMARY QUERIES - Run these to verify migration
-- ============================================================================
SELECT 
  category,
  COUNT(*) as product_count
FROM products 
GROUP BY category 
ORDER BY product_count DESC;

-- Sample verification query
SELECT 
  title,
  category,
  price_range,
  image
FROM products 
ORDER BY category, created_at 
LIMIT 10;

-- Create storage bucket for product images (optional)
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('product-images', 'product-images', true, 5242880, ARRAY['image/jpeg', 'image/png', 'image/webp'])
ON CONFLICT (id) DO NOTHING;

-- Grant permissions for public access to the bucket
GRANT ALL ON storage.objects TO authenticated, anon;

-- Create policy for public access to product images
CREATE POLICY "Public access to product images" ON storage.objects FOR ALL USING (bucket_id = 'product-images');

-- Final verification
SELECT 'Migration completed successfully!' as status,
       (SELECT COUNT(*) FROM products) as total_products,
       (SELECT COUNT(DISTINCT category) FROM products) as categories_count;
