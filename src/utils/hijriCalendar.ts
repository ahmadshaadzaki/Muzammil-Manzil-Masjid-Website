// Authentic Islamic Hijri Calendar Utility
// Converts any Gregorian Date into accurate Hijri day, month, and year with authentic Arabic month names.

export interface HijriDateInfo {
  day: number;
  monthIndex: number;
  monthEn: string;
  monthAr: string;
  monthUr: string;
  year: number;
  formattedEn: string;
  formattedAr: string;
  formattedUr: string;
  gregorianEn: string;
  gregorianUr: string;
}

export const AUTHENTIC_HIJRI_MONTHS = [
  { en: 'Muḥarram', ar: 'محرم', ur: 'محرم الحرام' },
  { en: 'Ṣafar', ar: 'صفر', ur: 'صفر المظفر' },
  { en: 'Rabīʿ al-Awwal', ar: 'ربيع الأول', ur: 'ربيع الأول' },
  { en: 'Rabīʿ al-Thānī', ar: 'ربيع الثاني', ur: 'ربيع الثاني' },
  { en: 'Jumādá al-Ūlá', ar: 'جمادى الأولى', ur: 'جمادى الأولى' },
  { en: 'Jumādá al-Ākhirah', ar: 'جمادى الثانية', ur: 'جمادى الثانية' },
  { en: 'Rajab', ar: 'رجب', ur: 'رجب المرجب' },
  { en: 'Shaʿbān', ar: 'شعبان', ur: 'شعبان المعظم' },
  { en: 'Ramaḍān', ar: 'رمضان', ur: 'رمضان المبارك' },
  { en: 'Shawwāl', ar: 'شوال', ur: 'شوال المكرم' },
  { en: 'Dhū al-Qaʿdah', ar: 'ذو القعدة', ur: 'ذو القعدة' },
  { en: 'Dhū al-Ḥijjah', ar: 'ذو الحجة', ur: 'ذو الحجة' },
];

/**
 * Calculates authentic Hijri date using Kuwaiti/Astronomical algorithm
 * @param date Gregorian Date object (defaults to current date)
 * @param offsetDays Moon sighting adjustment (-2 to +2 days)
 */
export function getAuthenticHijriDate(date: Date = new Date(), offsetDays: number = 0): HijriDateInfo {
  const targetDate = new Date(date);
  if (offsetDays !== 0) {
    targetDate.setDate(targetDate.getDate() + offsetDays);
  }

  // Format Gregorian date strings
  const gregorianEn = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(targetDate);

  const gregorianUr = new Intl.DateTimeFormat('ur-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(targetDate);

  // Astronomical Conversion Algorithm
  let day = targetDate.getDate();
  let month = targetDate.getMonth() + 1;
  let year = targetDate.getFullYear();

  if (month < 3) {
    year -= 1;
    month += 12;
  }

  const a = Math.floor(year / 100);
  const b = 2 - a + Math.floor(a / 4);
  const julianDay = Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + b - 1524.5;

  const z = julianDay - 1948440 + 10632;
  const n = Math.floor((z - 1) / 10631);
  let r = z - 10631 * n + 354;
  const j = Math.floor((10985 - r) / 5316) * Math.floor((50 * r) / 17719) + Math.floor(r / 5670) * Math.floor((43 * r) / 15238);
  r = r - Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) - Math.floor(j / 16) * Math.floor((15238 * j) / 43) + 29;

  const hijriMonthIndex = Math.floor((24 * r) / 709) - 1;
  const hijriDay = Math.floor(r - Math.floor((709 * (hijriMonthIndex + 1)) / 24));
  const hijriYear = Math.floor(30 * n + j - 30);

  const monthInfo = AUTHENTIC_HIJRI_MONTHS[Math.max(0, Math.min(11, hijriMonthIndex))] || AUTHENTIC_HIJRI_MONTHS[0];

  const toArabicDigits = (num: number) =>
    num.toString().replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[parseInt(d, 10)]);

  const formattedEn = `${hijriDay} ${monthInfo.en} ${hijriYear} AH`;
  const formattedAr = `${toArabicDigits(hijriDay)} ${monthInfo.ar} ${toArabicDigits(hijriYear)} هـ`;
  const formattedUr = `${toArabicDigits(hijriDay)} ${monthInfo.ur} ${toArabicDigits(hijriYear)} هـ`;

  return {
    day: hijriDay,
    monthIndex: hijriMonthIndex,
    monthEn: monthInfo.en,
    monthAr: monthInfo.ar,
    monthUr: monthInfo.ur,
    year: hijriYear,
    formattedEn,
    formattedAr,
    formattedUr,
    gregorianEn,
    gregorianUr,
  };
}
