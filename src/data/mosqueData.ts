import { Notice, FAQItem, LandmarkDistance, GalleryItem } from '../types';

export const MOSQUE_INFO = {
  nameEn: 'Muzammil Manzil Masjid',
  nameUrdu: 'مسجد مزمل منزل',
  addressPlusCode: 'W34J+G9P',
  location: 'W34J+G9P, Dudhpur Road, Muzammil Manzil, Dodhpur, Aligarh, Uttar Pradesh 202001',
  googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=W34J%2BG9P%2C+Aligarh',
  googleMapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=W34J%2BG9P%2C+Aligarh',
  embedMapUrl: 'https://maps.google.com/maps?q=W34J%2BG9P%2C+Aligarh&t=&z=17&ie=UTF8&iwloc=&output=embed',
  coordinates: {
    lat: 27.90617,
    lng: 78.08078,
  },
  establishedEra: 'Early 20th Century (c. 1910s)',
  founder: 'Nawab Sir Mohammad Muzammilullah Khan Sherwani (KCI)',
  architecturalStyle: 'Syncretic Indo-Islamic & Early Colonial Revival',
  capacity: 'Approx. 400 worshippers',
  facilities: [
    'Clean Central Wudu (Ablution) Fountain Courtyard',
    'Dedicated Shoe Rack & Storage Units',
    'Car & Two-Wheeler Parking inside Muzammil Manzil Alley',
    'Wheelchair Ramp Access to Main Prayer Floor',
    'Filtered Drinking Water Facility',
    'Air-Cooled Main Prayer Hall with Persian-style Prayer Rugs',
  ],
};

export const FRIDAY_PRAYER_INFO = {
  khutbahTime: '01:45 PM',
  jamaatTime: '01:45 PM',
  descriptionEn: 'Friday Congregational Jummah Prayer & Khutbah at 01:45 PM.',
  descriptionUrdu: 'جمعہ مبارک کی باجماعت نماز اور خطبہ دوپہر 01:45 بجے۔',
};

export const NEARBY_LANDMARKS: LandmarkDistance[] = [
  {
    name: 'Dodhpur Crossing (Main Market)',
    distance: '150 meters',
    timeByFoot: '2 mins',
    timeByAuto: '1 min',
    direction: 'North-East',
  },
  {
    name: 'AMU Centenary Gate / Bab-e-Syed',
    distance: '1.2 km',
    timeByFoot: '14 mins',
    timeByAuto: '4 mins',
    direction: 'North-West',
  },
  {
    name: 'Civil Lines Post Office',
    distance: '1.5 km',
    timeByFoot: '18 mins',
    timeByAuto: '5 mins',
    direction: 'North',
  },
  {
    name: 'Aligarh Junction Railway Station',
    distance: '3.8 km',
    timeByFoot: '45 mins',
    timeByAuto: '12 mins',
    direction: 'South-West',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'ext-1',
    title: 'Historic Facade & Arches',
    titleUrdu: 'تاریخی محراب اور پیش منظر',
    category: 'Exterior',
    imageUrl: 'https://images.unsplash.com/photo-1542816417-0983cbe82752?auto=format&fit=crop&w=1200&q=80',
    description: 'Whitewashed multi-foil Islamic arches blended with colonial brickwork inside the Muzammil Manzil courtyard in Dodhpur.',
  },
  {
    id: 'int-1',
    title: 'Central Mihrab & Prayer Hall',
    titleUrdu: 'مرکزی محراب و ہال',
    category: 'Prayer Hall',
    imageUrl: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80',
    description: 'A serene view of the main prayer hall decorated with traditional Arabic calligraphy and plush emerald prayer carpets.',
  },
  {
    id: 'court-1',
    title: 'Sahan (Courtyard) & Wudu Area',
    titleUrdu: 'صحن اور باوضو جگہ',
    category: 'Courtyard',
    imageUrl: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=80',
    description: 'Open-air stone-paved courtyard surrounded by arched corridors, offering a tranquil space for ablution and reflection.',
  },
  {
    id: 'arch-1',
    title: 'Heritage Architectural Detailing',
    titleUrdu: 'معماری و لکڑی کے کام کی جھلک',
    category: 'Architecture',
    imageUrl: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80',
    description: 'Early 20th-century craftsmanship showcasing decorative plasterwork, jali screens, and historic minaret finials.',
  },
  {
    id: 'herit-1',
    title: 'Muzammil Manzil Compound Entrance',
    titleUrdu: 'مزمل منزل مرکزی دروازہ',
    category: 'Heritage',
    imageUrl: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1200&q=80',
    description: 'The stately entrance gate leading to the historic Manzil estate in Dodhpur, reflecting Aligarh’s rich architectural heritage.',
  },
];

export const NOTICES: Notice[] = [
  {
    id: 'not-1',
    title: 'Friday Jummah Khutbah & Prayer Timing',
    titleUrdu: 'خطبہ جمعہ اور نماز کے اوقات',
    date: 'July 2026',
    category: 'Jummah',
    content: 'The Urdu bayān starts at 01:00 PM, followed by the Arabic Khutbah at 01:30 PM and Iqamah at 01:45 PM. All brothers are kindly requested to arrive early for Wudu.',
    important: true,
  },
  {
    id: 'not-2',
    title: 'Evening Quranic Tajweed Class for Students',
    titleUrdu: 'روزانہ تجوید القرآن کلاس',
    date: 'Ongoing Daily',
    category: 'Community',
    content: 'Free daily Tajweed & Makhraj recitation sessions conducted between Maghrib and Isha for local students and youth of Dodhpur.',
    important: false,
  },
  {
    id: 'not-3',
    title: 'Courtyard Maintenance & Solar Light Setup',
    titleUrdu: 'صحن کی صفائی و شمسی توانائی',
    date: 'Recent Update',
    category: 'Maintenance',
    content: 'Eco-friendly solar illumination and improved Wudu water filtration systems have been installed for worshipper comfort during night prayers.',
    important: false,
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'Where is Muzammil Manzil Masjid located in Aligarh?',
    questionUrdu: 'مسجد مزمل منزل علی گڑھ میں کہاں واقع ہے؟',
    answer: 'The mosque is located in Dodhpur, Aligarh, inside the historic Muzammil Manzil estate compound, just 150m from Dodhpur Market Crossing and 1.2 km from AMU Centenary Gate (Bab-e-Syed).',
  },
  {
    question: 'What is the history behind Muzammil Manzil?',
    questionUrdu: 'مزمل منزل کی تاریخ کیا ہے؟',
    answer: 'Muzammil Manzil is a celebrated early 20th-century kothi (heritage residence) built by Nawab Sir Mohammad Muzammilullah Khan Sherwani (KCI), a Vice-Chancellor of Aligarh Muslim University (AMU), trustee, and prominent philanthropist. The mosque was constructed within the estate to serve the local neighborhood and estate guests.',
  },
  {
    question: 'Are there proper Wudu (ablution) and parking facilities available?',
    questionUrdu: 'کیا وضو اور پارکنگ کی سہولت دستیاب ہے؟',
    answer: 'Yes, the mosque features a central shaded Wudu courtyard with clean running water, clean shoe racks, and ample parking space for two-wheelers and cars inside the Muzammil Manzil approach lane.',
  },
  {
    question: 'How do I reach the mosque from Aligarh Junction Railway Station?',
    questionUrdu: 'ریلوے اسٹیشن سے کیسے پہنچیں؟',
    answer: 'From Aligarh Junction Railway Station (3.8 km), take an e-rickshaw or auto-rickshaw directly towards Dodhpur Crossing or AMU Circle. Ask the driver for "Muzammil Manzil" or "Dodhpur Masjid". The journey takes approximately 10–15 minutes.',
  },
];
