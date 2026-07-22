export interface PrayerTime {
  id: string;
  name: string;
  arabicName: string;
  adhan: string;
  iqamah: string;
  description?: string;
  isNext?: boolean;
}

export interface Notice {
  id: string;
  title: string;
  titleUrdu?: string;
  date: string;
  category: 'Jummah' | 'Event' | 'Maintenance' | 'Community';
  content: string;
  important?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  titleUrdu?: string;
  category: 'Exterior' | 'Prayer Hall' | 'Courtyard' | 'Architecture' | 'Heritage';
  imageUrl: string;
  description: string;
}

export interface FAQItem {
  question: string;
  questionUrdu?: string;
  answer: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export interface LandmarkDistance {
  name: string;
  distance: string;
  timeByFoot: string;
  timeByAuto: string;
  direction: string;
}
