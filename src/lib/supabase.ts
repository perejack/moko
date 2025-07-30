import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uguecuqpsnlxihdkiihr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVndWVjdXFwc25seGloZGtpaWhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3ODQyNTEsImV4cCI6MjA2OTM2MDI1MX0.KNVSDg6xX-eZAlhMTxsOut-GajoXt93HXabUM6x_pzw'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Admin password constant
export const ADMIN_PASSWORD = '2222';

// Product categories
export const CATEGORIES = [
  'Sofas',
  'Mattresses', 
  'Beds',
  'Coffee Tables',
  'TV Stands',
  'Carpets'
] as const;

export type Category = typeof CATEGORIES[number];

export interface Product {
  id?: string;
  title: string;
  slug: string;
  price: string;
  priceRange?: string;
  image: string;
  images?: string[];
  category: Category;
  description: string;
  features: string[];
  dimensions?: string[];
  whatsGood?: string[];
  related?: string[];
  created_at?: string;
  updated_at?: string;
}
