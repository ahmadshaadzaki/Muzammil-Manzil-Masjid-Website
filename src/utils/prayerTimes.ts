import { Coordinates, CalculationMethod, PrayerTimes, Madhab } from 'adhan';

export interface SinglePrayerInfo {
  nameEn: string;
  nameUr: string;
  adhan: string;
  jamaat: string;
  rawAdhanDate: Date;
  rawJamaatDate: Date;
}

export interface DailyPrayerScheduleResult {
  fajr: SinglePrayerInfo;
  sunrise: { nameEn: string; nameUr: string; time: string; rawDate: Date };
  dhuhr: SinglePrayerInfo;
  asr: SinglePrayerInfo;
  maghrib: SinglePrayerInfo;
  isha: SinglePrayerInfo;
  currentPrayer: string;
  nextPrayer: string;
  nextPrayerTime: Date | null;
  timeRemainingToNext: string;
  locationName: string;
  isCustomLocation: boolean;
  methodName: string;
  coords: { lat: number; lng: number };
}

export function getDailyPrayerSchedule(
  lat: number = 27.90617,
  lng: number = 78.08078,
  date: Date = new Date(),
  locationName: string = 'Dodhpur, Aligarh',
  isCustomLocation: boolean = false,
  madhab: 'hanafi' | 'shafi' = 'hanafi'
): DailyPrayerScheduleResult {
  const coordinates = new Coordinates(lat, lng);
  const params = CalculationMethod.Karachi();
  
  if (madhab === 'hanafi') {
    params.madhab = Madhab.Hanafi;
  } else {
    params.madhab = Madhab.Shafi;
  }

  const pTimes = new PrayerTimes(coordinates, date, params);

  const formatTime = (d: Date) =>
    d.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

  const addMinutes = (d: Date, mins: number) => new Date(d.getTime() + mins * 60000);

  // Jama'at iqamah timings
  const fajrJamaat = addMinutes(pTimes.fajr, 20);
  const dhuhrJamaat = addMinutes(pTimes.dhuhr, 15);
  const asrJamaat = addMinutes(pTimes.asr, 15);
  const maghribJamaat = addMinutes(pTimes.maghrib, 5);
  const ishaJamaat = addMinutes(pTimes.isha, 15);

  const currentPrayerKey = pTimes.currentPrayer(date);
  const nextPrayerKey = pTimes.nextPrayer(date);
  const nextPrayerTimeObj = pTimes.timeForPrayer(nextPrayerKey);

  // Calculate countdown to next prayer
  let timeRemainingToNext = '';
  if (nextPrayerTimeObj) {
    const diffMs = nextPrayerTimeObj.getTime() - date.getTime();
    if (diffMs > 0) {
      const hours = Math.floor(diffMs / (1000 * 60 * 60));
      const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
      timeRemainingToNext = `${hours > 0 ? `${hours}h ` : ''}${minutes}m ${seconds}s`;
    }
  }

  return {
    fajr: {
      nameEn: 'Fajr',
      nameUr: 'فجر',
      adhan: formatTime(pTimes.fajr),
      jamaat: formatTime(fajrJamaat),
      rawAdhanDate: pTimes.fajr,
      rawJamaatDate: fajrJamaat,
    },
    sunrise: {
      nameEn: 'Sunrise',
      nameUr: 'طلوع آفتاب',
      time: formatTime(pTimes.sunrise),
      rawDate: pTimes.sunrise,
    },
    dhuhr: {
      nameEn: 'Dhuhr',
      nameUr: 'ظہر',
      adhan: formatTime(pTimes.dhuhr),
      jamaat: formatTime(dhuhrJamaat),
      rawAdhanDate: pTimes.dhuhr,
      rawJamaatDate: dhuhrJamaat,
    },
    asr: {
      nameEn: 'Asr',
      nameUr: 'عصر',
      adhan: formatTime(pTimes.asr),
      jamaat: formatTime(asrJamaat),
      rawAdhanDate: pTimes.asr,
      rawJamaatDate: asrJamaat,
    },
    maghrib: {
      nameEn: 'Maghrib',
      nameUr: 'مغرب',
      adhan: formatTime(pTimes.maghrib),
      jamaat: formatTime(maghribJamaat),
      rawAdhanDate: pTimes.maghrib,
      rawJamaatDate: maghribJamaat,
    },
    isha: {
      nameEn: 'Isha',
      nameUr: 'عشاء',
      adhan: formatTime(pTimes.isha),
      jamaat: formatTime(ishaJamaat),
      rawAdhanDate: pTimes.isha,
      rawJamaatDate: ishaJamaat,
    },
    currentPrayer: currentPrayerKey,
    nextPrayer: nextPrayerKey,
    nextPrayerTime: nextPrayerTimeObj,
    timeRemainingToNext,
    locationName,
    isCustomLocation,
    methodName: 'University of Islamic Sciences, Karachi (Hanafi)',
    coords: { lat, lng },
  };
}
