export interface BedProduct {
  slug: string;
  title: string;
  priceRange: string;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  whatsGood: string[];
  related: string[];
}

export const beds: BedProduct[] = [
  {
    slug: 'zzze-hug-headboard-cushion',
    title: 'Zzze Hug Bed Headboard Cushion',
    priceRange: 'KSh 1,549 – KSh 1,749',
    image: 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_0713-min-500x500.jpg',
    gallery: [
      'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_0713-min-500x500.jpg',
    ],
    description: 'The Zzze Hug Bed Headboard Cushion is designed for extra comfort and support while sitting up in bed. Soft, supportive, and easy to attach to your MoKo bed.',
    features: [
      'Soft and supportive headboard cushion',
      'Easy to attach and remove',
      'Perfect for reading or relaxing in bed',
      'Durable and easy to clean fabric',
    ],
    whatsGood: [
      '1-year warranty',
      'Easy returns',
    ],
    related: ['zzze-hug-bed', 'mattress-4-5x6', 'throw-pillows']
  },
  {
    slug: 'zzze-hug-moko-bed',
    title: 'Zzze Hug MoKo Bed',
    priceRange: 'KSh 8,799 – KSh 13,599',
    image: 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/girlbed-500x500.jpg',
    gallery: [
      'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/girlbed-500x500.jpg',
    ],
    description: 'The Zzze Hug MoKo Bed offers sturdy support and a modern look. Designed for comfort and durability, it pairs perfectly with MoKo mattresses and accessories.',
    features: [
      'Sturdy wooden frame for lasting durability',
      'Modern design fits any bedroom',
      'Easy to assemble',
      'Pairs perfectly with MoKo mattresses',
    ],
    whatsGood: [
      '2-year warranty',
      'Easy returns',
    ],
    related: ['zzze-hug-headboard-cushion', 'mattress-5x6', 'throw-pillows']
  }
];
