export interface SofaProduct {
  slug: string;
  title: string;
  priceRange: string;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  dimensions: string[];
  related: string[];
}

export const sofas: SofaProduct[] = [
  {
    slug: 'mr-biggie-5-seater-sofa',
    title: 'Mr Biggie 5-seater Sofa',
    priceRange: 'KSh 35,798 – KSh 39,148',
    image: 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2024/08/HUM_9636-1-1-500x500.jpg',
    gallery: [
      'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2024/08/HUM_9636-1-1-500x500.jpg',
      // Add more images if available
    ],
    description: `Mr Biggie 5-seater sofa has the two things you most care about: modern design that’s built to last.\n\nThere is room for everyone on this 5-seater sofa. It’s big, spacious and curvy. A quality and sturdy sofa designed to remain strong for you no matter what.`,
    features: [
      'Looks crazy good; A curvy sofa on all its edges and corners for that sexy vibe you like. It’s sturdy, to give your room a mighty look.',
      'Built really well; An extra 20cm per seat (10cm in depth; 10cm in width), compared to a standard 3-seater sofa in Kenya, hence 60cm of more space. It allows more than 3 loungers and at utmost comfort too!',
      'Firm seats made of foam (same as in MoKo mattress) that won’t sink over time, and stapled fabric so it won’t come off easy. It’s here for a good and a long time.',
      'Very stable, with joints glued and screwed and will survive your worst nightmares; moving or jumpy kids? Mr Biggie can take it all without a twitch.'
    ],
    dimensions: [
      'Width – 850 mm (0.8M)',
      'Height – 820 mm (0.8M)',
      'Length – 2410 mm (2.4M)'
    ],
    related: ['jiji-5-seater-sofa-kutana-table', 'jiji-6-seater-sofa-footstool', 'queen-size-moko-mattress']
  },
  {
    slug: 'mr-biggie-1-seater-sofa',
    title: 'Mr Biggie 1-seater Sofa',
    priceRange: 'KSh 10,949 – KSh 11,949',
    image: 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2023/08/HUM_9605-500x500.jpg',
    gallery: [
      'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2023/08/HUM_9605-500x500.jpg',
    ],
    description: `Mr Biggie 1-seater sofa has the two things you most care about: modern design that’s built to last.\n\nThere is room for more with Mr Biggie. It’s big, spacious and curvy. It’s a MoKo sofa designed to outlast you while ensuring you are cozy at the same time.\n\nThe 1 seater sofa is a great addition to your 3/2-seater in making a complete sofa set where you and your family can share hearty laughs.`,
    features: [
      'Looks crazy good; A modern sofa design with curvy edges and corners for that sexy vibe you like. It’s sturdy, to give your room a mighty look.',
      'Built really well; An extra 20cm per seat (10cm in depth; 10cm in width), compared to a standard 1-seater sofa in Kenya, hence more space at maximum comfort.',
      'Firm seats made of foam (same as in MoKo mattress) that won’t sink over time, and stapled fabric so it won’t come off easy. It’s here for a good and a long time.',
      'Very stable, with joints glued and screwed and will survive your worst nightmares; moving or jumpy kids? Mr Biggie can take it all without a twitch.'
    ],
    dimensions: [
      'Width – 850 mm (0.8M)',
      'Height – 820 mm (0.8M)',
      'Length – 1256 mm (1.2M)'
    ],
    related: ['mr-biggie-2-seater-sofa', 'mr-biggie-3-seater-sofa', 'jiji-2-seater-sofa']
  },
  {
    slug: 'mr-biggie-2-seater-sofa',
    title: 'Mr Biggie 2-seater Sofa',
    priceRange: 'KSh 15,449 – KSh 16,999',
    image: 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2022/09/HUM_8639-min-500x500.jpg',
    gallery: [
      'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2022/09/HUM_8639-min-500x500.jpg',
    ],
    description: `Mr Biggie 2-seater sofa has the two things you most care about: modern design that’s built to last.\n\nThere is room for more with this modern sofa design with wide armrests keep you cozy all day. It’s big, spacious and curvy. Worry for yourself becoming a couch potato but never the quality or durability of a MoKo sofa.\n\nYou can add it to the 1/3-seater as your home gets bigger to complete your 6 seater sofa set. The price of Mr Biggie 2-seater sofa varies with fabric used and once you order, we deliver to wherever you are in Kenya!`,
    features: [
      'Looks crazy good; A curvy sofa on all its edges and corners for that sexy vibe you like. It’s sturdy, to give your room a mighty look.',
      'Built really well; An extra 20cm per seat (10cm in depth; 10cm in width), compared to a standard 2-seater sofa in Kenya, hence 40cm of more space. It allows more than 3 loungers and at utmost comfort too!',
      'Firm seats made of foam (same as in MoKo mattress) that won’t sink over time, and stapled fabric so it won’t come off easy. It’s here for a good and a long time.',
      'Very stable, with joints glued and screwed and will survive your worst nightmares; moving or jumpy kids? Mr Biggie can take it all without a twitch.'
    ],
    dimensions: [
      'Width – 850 mm (0.8M)',
      'Height – 820 mm (0.8M)',
      'Length – 1856 mm (1.8M)'
    ],
    related: ['mr-biggie-1-seater-sofa', 'mr-biggie-3-seater-sofa', 'jiji-2-seater-sofa']
  },
  {
    slug: 'mr-biggie-3-seater-sofa',
    title: 'Mr Biggie 3-seater Sofa',
    priceRange: 'KSh 20,299 – KSh 22,149',
    image: 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2022/10/HUM_9665-min-500x500.jpg',
    gallery: [
      'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2022/10/HUM_9665-min-500x500.jpg',
    ],
    description: `Mr Biggie 3-seater sofa has the two things you most care about: modern design that’s built to last.\n\nThere is room for everyone on this 3-seater sofa. It’s big, spacious and curvy. A quality and sturdy sofa designed to remain strong for you no matter what.\n\nYou can add to the 3-seater with a 2 seater and 1 seater as your home gets bigger to complete a 6 seater sofa set design.`,
    features: [
      'Looks crazy good; A curvy sofa on all its edges and corners for that sexy vibe you like. It’s sturdy, to give your room a mighty look.',
      'Built really well; An extra 20cm per seat (10cm in depth; 10cm in width), compared to a standard 3-seater sofa in Kenya, hence 60cm of more space. It allows more than 3 loungers and at utmost comfort too!',
      'Firm seats made of foam (same as in MoKo mattress) that won’t sink over time, and stapled fabric so it won’t come off easy. It’s here for a good and a long time.',
      'Very stable, with joints glued and screwed and will survive your worst nightmares; moving or jumpy kids? Mr Biggie can take it all without a twitch.'
    ],
    dimensions: [
      'Width – 850 mm (0.8M)',
      'Height – 820 mm (0.8M)',
      'Length – 2410 mm (2.4M)'
    ],
    related: ['mr-biggie-2-seater-sofa', 'mr-biggie-1-seater-sofa', 'jilaze-chaise-sofa']
  },
  {
    slug: 'ottoman-with-storage',
    title: 'Ottoman with storage',
    priceRange: 'KSh 5,299 – KSh 6,599',
    image: 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/PHG_8131-1-min-500x500.jpg',
    gallery: [
      'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/PHG_8131-1-min-500x500.jpg',
    ],
    description: `If you find yourself scrambling to clear up every time a guest visits your home, this ottoman with storage will come to your rescue. There is excess space to throw in those misplaced items loitering in your room\n\nAn ottoman can be a storage box, an extension to your chaise or 3 seater sofa and even as a center piece/table for your living room.`,
    features: [
      'It doubles as extra seating as well as a convenient storage unit.',
      'It is designed to line up with your sofa, no matter what position you decide to place it in.',
      '4 Wooden legs hold it above the ground and give it fancy vibe'
    ],
    dimensions: [
      'Length – 0.6M',
      'Width – 0.6M',
      'Height – 0.4M'
    ],
    related: ['footstool-with-storage', 'mr-biggie-3-seater-sofa', 'jilaze-chaise-sofa']
  },
  {
    slug: 'jilaze-chaise-sofa',
    title: 'Jilaze Chaise Sofa',
    priceRange: 'KSh 31,499 – KSh 34,199',
    image: 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/Jilaze-Chaise.jpg',
    gallery: [
      'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/Jilaze-Chaise.jpg',
    ],
    description: `Jilaze Chaise sofa is uniquely designed to accommodate more people than your regular 3-seater sofa without taking up much space in your house. Pimp your house with a modern design sectional sofa which makes a great addition to your L-shaped sofa set.`,
    features: [
      'Looks crazy good; The back is designed to still be functional and comfortable even when the back cushions are used on the floor for more seating space.',
      'You can also use the back cushions on the floor for more people to sit',
      'Extremely space friendly that suits any room and allows more than enough seating area.',
      'Built really well; Removable sofa cushion covers for easy cleaning and maintenance',
      'Cushions are 9-inch thick, filled with foam that will last through years'
    ],
    dimensions: [
      'Width (Back to front) – 0.8M',
      'Length (left to right) – 1.8M'
    ],
    related: ['mr-biggie-3-seater-sofa', 'ottoman-with-storage', 'footstool-with-storage']
  },
  {
    slug: 'footstool-with-storage',
    title: 'Footstool with storage',
    priceRange: 'KSh 6,599 – KSh 7,649',
    image: 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/Footstool-_-Jiji-5-seater-_-Jiji-6-seater1-500x500.jpg',
    gallery: [
      'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/Footstool-_-Jiji-5-seater-_-Jiji-6-seater1-500x500.jpg',
    ],
    description: `The MoKo footstool is the most versatile of all our products. It is a 4-in-1 footstool with storage, can be used as a side table and…wait for it.. a serving tray!\n\nFurnish your living room or bedroom with the functional and stylish MoKo furniture that comes in 3 different fabrics and 5 shades of colour. It’s very cozy for your lovely legs when lounging.\n\nThe best footrest to get you cozy and tidy at the same time.`,
    features: [
      'Like the ottoman, the removable lid reveals a spacious compartment for storing blankets, books, and more',
      'The lid can be used as a flat surface to place your laptop or as a serving tray to serve your partner (or yourself) a dreamy breakfast or play a game of cards on',
      'If you need more seating space, the two cushions attached to the footstool’s lid can be removed, placed on the floor and used for extra seating.',
      'The whole unit can be used as an additional seat or a cushioned footrest.'
    ],
    dimensions: [
      'Width – 525 mm (0.5M)',
      'Height – 420 mm (0.4M)',
      'Length – 625 mm (0.6M)'
    ],
    related: ['ottoman-with-storage', 'jilaze-chaise-sofa', 'mr-biggie-1-seater-sofa']
  },
  {
    slug: 'jiji-6-seater-sofa-footstool',
    title: 'Jiji 6-Seater Sofa + Footstool',
    priceRange: 'KSh 74,998 – KSh 80,248',
    image: 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/Untitled-6-01.png',
    gallery: [
      'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/Untitled-6-01.png',
    ],
    description: `True to its name, which is Swahili for City, the Jiji 6-seater sofa is uniquely designed to be the social hub.\n\nWe’ve tested and confirmed that the 6-seater sofa set can hold up to 10 people so hey, 6 is not the limit. All to say, the Jiji has years of experience in bringing smiles to your living room as you hang out with friends and family.\n\nOh and if you are not into the “crowds of people vibe” and you need a spacious cozy spot to spread your legs as you watch TV, take a nap or even cuddle with bae, Jiji sofa got you. This Jiji 6-seater sofa +Footstool combo only makes your living room more fun with additional seating space, storage and pillows.\n\nDid we mention that there is no need to call a special company to clean your sofa? Simply remove the seat covers and wash them together with your usual laundry.`,
    features: [
      'Looks crazy good; The back is designed to still be functional even when the back cushions are used on the floor for more seating space.',
      'It comes with a small wooden table that has a socket and cable and extra storage but at no extra cost!',
      'Extremely space friendly that suits any room and allows more than enough seating area.',
      'Built really well; Cushions are 9-inch, filled with foam that will last you years',
      'Removable cushion covers for easier cleaning and maintenance',
      'A very strong frame that can withstand 1 tonne'
    ],
    dimensions: [
      'The Chaise is (Back to front) 0.8M Wide and 1.8M Long (left to right)',
      'The 3 seater is (Back to front) 0.8M Wide and 2M Long (left to right)',
      'Footstool: Width – 525 mm (0.5M)',
      'Footstool: Height – 420 mm (0.4M)',
      'Footstool: Length – 625 mm (0.6M)'
    ],
    related: ['jiji-6-seater-sofa-kutana-table', 'jiji-5-seater-sofa-kutana-table', 'jiji-3-seater-sofa']
  },
  {
    slug: 'jiji-6-seater-sofa-kutana-table',
    title: 'Jiji 6 Seater Sofa+Kutana table',
    priceRange: 'KSh 68,399 – KSh 72,799',
    image: 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9684-1-min-500x500.jpg',
    gallery: [
      'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9684-1-min-500x500.jpg',
    ],
    description: `True to its name which is Swahili for City, this Jiji 6 seater sofa is designed to be the social hub. A modern sofa design, spacious seating allowance and plush cushions; it’s the perfect spot to hang out with all your favourite people.\n\nJiji 6 seater is a sectional sofa or what is also commonly known as L shaped sofa (you can arrange it into L shape sofa design). It’s flexible like that. It provides ample seating for family and guests.. You can sit back knowing the design and quality applied will ensure your Jiji keeps your house fancy for a long time to come.`,
    features: [
      'Looks crazy good; The back is designed to still be functional even when the back cushions are used on the floor for more room to snuggle.',
      'It comes with a small wooden table that has a socket and cable and extra storage but at no extra cost!',
      'Extremely space friendly, suits any room and allows more than enough seating area.',
      'Built really well; Cushions are 9-inch thick, filled with foam that will last you years',
      'Removable cushion covers for easier cleaning and maintenance',
      'A very strong frame that can withstand 1 tonne'
    ],
    dimensions: [
      'The Chaise is  (Back to front) 0.8M Wide and 1.8M Long (left to right)',
      'The 3 seater is (Back to front) 0.8M Wide and 2M Long (left to right)'
    ],
    related: ['jiji-6-seater-sofa-footstool', 'jiji-5-seater-sofa-kutana-table', 'jiji-3-seater-sofa']
  },
  {
    slug: 'jiji-5-seater-sofa-kutana-table',
    title: 'Jiji 5 Seater Sofa+Kutana table',
    priceRange: 'KSh 59,899 – KSh 64,099',
    image: 'https://cdn.shortpixel.ai/spai/w_330+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/SAS_0897-500x500.jpg',
    gallery: [
      'https://cdn.shortpixel.ai/spai/w_330+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/SAS_0897-500x500.jpg',
    ],
    description: `True to its name which is Swahili for City, this Jiji 5 seater sofa is designed to be the social hub. It can accommodate a lot of people without taking up much space in your house.\n\nThe sectional sofa design allows you to rearrange and customize the layout to fit your space and all your people too! The best part is anything works, so you can switch things up and recreate your living room from time to time. Ain’t that fun?`,
    features: [
      'Looks crazy good; The back is designed to still be functional even when the back cushions are used on the floor for more seating space.',
      'It comes with a small wooden table that has a socket and cable and extra storage but at no extra cost!',
      'There’s plenty of room for everyone! This is a fun and functional sectional sofa, just go ahead and invite the whole gang over.',
      'Built really well; Cushions are 9-inch, filled with foam that will last you years',
      'When it’s time for a little freshening up, simply remove the cushion covers for easy cleaning.',
      'A very strong frame that can withstand 1 tonne'
    ],
    dimensions: [
      'The Chaise is (Back to front) 0.8M Wide and 1.8M Long (left to right)',
      'The 2 seater is (Back to front) 0.8M Wide and 1.6 Long (left to right)'
    ],
    related: ['jiji-6-seater-sofa-footstool', 'jiji-6-seater-sofa-kutana-table', 'jiji-3-seater-sofa']
  },
  {
    slug: 'jiji-3-seater-sofa',
    title: 'Jiji 3 Seater Sofa',
    priceRange: 'KSh 31,499 – KSh 34,199',
    image: 'https://cdn.shortpixel.ai/spai/w_330+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9690-min-500x500.jpg',
    gallery: [
      'https://cdn.shortpixel.ai/spai/w_330+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_9690-min-500x500.jpg',
    ],
    description: `True to its name, which is Swahili for City, this Jiji 3 seater sectional sofa is uniquely designed to be the social hub. It accommodates more people than your average sofa but without taking up much space in your house.\n\nWith thick, cozy cushions and spacious design suitable for any home, it’s the perfect place to relax and unwind after a long day. The L-shaped design allows you to put it anywhere, at the corner, close to the door, against the wall and wherever you like, really. \n\nAll to say, it has years of experience in bringing smiles to your living room as you hang out solo, with friends or family.\n\nDid we mention that there also no need to call a special company to clean this sofa? Simply remove the seat covers and wash them together with your usual laundry.`,
    features: [
      'Looks crazy good; The back is designed to still be functional even when the back cushions are used on the floor for more seating space.',
      'Extremely space friendly that suits any room and allows more than enough seating area.',
      'Built really well; Cushions are 9-inch, filled with foam that will last you years',
      'Removable cushion covers for easier cleaning and maintenance',
      'A very strong frame that can withstand 1 tonne'
    ],
    dimensions: [
      'Width (back to front) – 0.8M',
      'Length (left to right) – 2.0M'
    ],
    related: ['jiji-6-seater-sofa-footstool', 'jiji-6-seater-sofa-kutana-table', 'jiji-5-seater-sofa-kutana-table']
  },
  {
    slug: 'jiji-2-seater-sofa',
    title: 'Jiji 2 Seater Sofa',
    priceRange: 'KSh 21,499 – KSh 24,299',
    image: 'https://cdn.shortpixel.ai/spai/w_330+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/jiji-2-seater-lifestyle.jpg',
    gallery: [
      'https://cdn.shortpixel.ai/spai/w_330+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/jiji-2-seater-lifestyle.jpg',
    ],
    description: `True to its name which is Swahili for City, this Jiji sectional 2 seater sofa is designed to be the social hub.\nIt is a comfy spot, works with any of your decor preferences and without taking up much space in your house.`,
    features: [
      'Looks crazy good; The back is designed to still be functional even when the back cushions are used on the floor for more seating space.',
      'Extremely space friendly that suits any room and allows more than enough seating area.',
      'Built really well; Cushions are 9-inch, filled with foam that will last you years',
      'Removable cushion covers for easier cleaning and maintenance'
    ],
    dimensions: [
      'Width (Back to front) – 0.8M',
      'Length (left to right) – 1.6M'
    ],
    related: ['jiji-3-seater-sofa', 'jiji-6-seater-sofa-footstool', 'mr-biggie-2-seater-sofa']
  }
  // Add more products as needed
];
