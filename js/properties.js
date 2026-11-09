// Property listings — DEMO DATA taken from RE/MAX brochures (demo_houses/*.pdf).
// Each property: id, price (EUR), type, location (lat/lng for the map, approximate),
// beds/baths/area/plot (m²), bilingual title + description, and photos.
// Photos live in images/properties/<id>/1.jpg, 2.jpg, … (1.jpg is the cover).
// Later this file can be managed from a simple admin panel.

(function () {
  const photos = (id, n = 8) => Array.from({ length: n }, (_, i) => `images/properties/${id}/${i + 1}.jpg`);

  const R = {
    centro: { he: 'מרכז פורטוגל', en: 'Central Portugal' },
    north: { he: 'צפון פורטוגל', en: 'Northern Portugal' },
    lisbon: { he: 'אזור ליסבון', en: 'Lisbon area' }
  };

  window.PROPERTIES = [
    {
      id: 'DD-101', price: 30000, type: 'house', region: R.centro, city: { he: 'פיודאו, ארגניל', en: 'Piódão, Arganil' },
      lat: 40.2297, lng: -7.8236, beds: 3, baths: 1, area: 150, plot: 170,
      title: { he: 'בית 3 חדרי שינה בכפר ההררי פיודאו', en: 'Three-bedroom house in the mountain village of Piódão' },
      description: {
        he: 'בית אבן בן כמה קומות (נבנה ב-1980) בפיודאו, אחד הכפרים ההיסטוריים היפים בפורטוגל, בלב הרי סרה דו אסור. 150 מ״ר בנויים על מגרש של 170 מ״ר, שלושה חדרי שינה, חדר רחצה ועליית גג גדולה. דורש שיפוץ — מחיר כניסה נמוך במיוחד עם נוף פתוח להרים.',
        en: 'Multi-storey house (built 1980) in Piódão, one of Portugal\'s most beautiful historic villages, in the Serra do Açor mountains. 150 m² on a 170 m² plot, with three bedrooms, a bathroom and a large attic. Needs renovation — a very low entry price with open mountain views.'
      },
      images: photos('DD-101')
    },
    {
      id: 'DD-102', price: 62000, type: 'farm', region: R.centro, city: { he: 'ארגניל', en: 'Arganil' },
      lat: 40.2181, lng: -8.0539, beds: 0, baths: 0, area: 83, plot: 9063,
      title: { he: 'חווה עם נחל ליד ארגניל', en: 'Farm with a stream near Arganil' },
      description: {
        he: 'כ-9 דונם של קרקע חקלאית ירוקה בעמק שקט, עם נחל זורם, עצים ומבנה קיים של 83 מ״ר (נבנה ב-2013). השטח נוקה ומוכן לעיבוד — מתאים לחקלאות, לבית נופש או לפרויקט תיירות כפרית.',
        en: 'About 0.9 hectares of green farmland in a quiet valley, with a running stream, trees and an existing 83 m² building (built 2013). The land has been cleared and is ready to work — suited to farming, a holiday home or a rural tourism project.'
      },
      images: photos('DD-102')
    },
    {
      id: 'DD-103', price: 149000, type: 'house', region: R.north, city: { he: 'אגוסדורה, פובואה דה ורזים', en: 'Aguçadoura, Póvoa de Varzim' },
      lat: 41.4318, lng: -8.7795, beds: 2, baths: 1, area: 50,
      title: { he: 'בית 2 חדרי שינה ליד החוף באגוסדורה', en: 'Two-bedroom house near the beach in Aguçadoura' },
      description: {
        he: 'בית פורטוגלי מסורתי משנת 1943 בכפר החוף אגוסדורה, דקות מהאוקיינוס וכ-40 דקות מפורטו. 50 מ״ר, שני חדרי שינה וחדר רחצה. הבית דורש שיפוץ מלא — בתמונות מוצגת גם הדמיה של הבית אחרי שיפוץ.',
        en: 'Traditional Portuguese house from 1943 in the beach village of Aguçadoura, minutes from the ocean and about 40 minutes from Porto. 50 m², two bedrooms and a bathroom. Needs full renovation — the photos include a visualisation of the house after renovation.'
      },
      images: photos('DD-103')
    },
    {
      id: 'DD-104', price: 200000, type: 'farm', region: R.north, city: { he: 'ליבראסאו, מרקו דה קנבזש', en: 'Livração, Marco de Canaveses' },
      lat: 41.2420, lng: -8.1650, beds: 0, baths: 0, area: 70, plot: 8924,
      title: { he: 'קרקע עם נוף לנהר טמגה', en: 'Land with views over the Tâmega river' },
      description: {
        he: 'כ-9 דונם על צלע גבעה מעל נהר טמגה, עם נוף לגשר הרכבת ההיסטורי, ומבנה אבן ישן של 70 מ״ר. בתמונות מוצגות גם הדמיות של בית אבן מודרני שאפשר להקים במקום. כשעה מפורטו.',
        en: 'About 0.9 hectares on a hillside above the Tâmega river, looking out over the historic railway viaduct, with an old 70 m² stone building. The photos include visualisations of a modern stone house that could be built on the site. About an hour from Porto.'
      },
      images: photos('DD-104')
    },
    {
      id: 'DD-105', price: 770000, type: 'farm', region: R.north, city: { he: 'גונדר, אמרנטה', en: 'Gondar, Amarante' },
      lat: 41.2660, lng: -8.1000, beds: 0, baths: 0, area: 344, plot: 16388,
      title: { he: 'אחוזה עם אולם אירועים ובריכה באמרנטה', en: 'Estate with event hall and pool in Amarante' },
      description: {
        he: 'אחוזה של כ-16 דונם עם כרם, גנים מטופחים ובריכה. המבנה (משנת 2003, 434 מ״ר ברוטו) כולל אולם אירועים גדול, מטבח מקצועי מאובזר, מחסן וחנייה לכמה רכבים. דירוג אנרגטי B. מתאים להמשך פעילות כאולם אירועים, לתיירות או למגורים.',
        en: 'An estate of about 1.6 hectares with a vineyard, landscaped gardens and a pool. The building (from 2003, 434 m² gross) includes a large event hall, a fully equipped professional kitchen, storage and parking for several cars. Energy rating B. Suited to continuing as an event venue, tourism or a private residence.'
      },
      images: photos('DD-105')
    },
    {
      id: 'DD-106', price: 800000, type: 'business', region: R.lisbon, city: { he: 'קולארש, סינטרה', en: 'Colares, Sintra' },
      lat: 38.7996, lng: -9.4473, beds: 0, baths: 0, area: 295,
      title: { he: 'מסעדה פעילה בבניין אבן בקולארש, סינטרה', en: 'Established restaurant in a stone building in Colares, Sintra' },
      description: {
        he: 'מסעדה מבוססת למכירה כעסק פעיל, בבניין אבן מסורתי עם גג רעפים אדום, ליד חופי סינטרה ובדרך לכף רוקה. 295 מ״ר הכוללים כמה חדרי אוכל עם אח, בר, מרפסת ישיבה חיצונית, מטבח מקצועי מלא, מחסנים ומשרד. דירוג אנרגטי B-.',
        en: 'An established restaurant sold as a going business, in a traditional stone building with a red-tiled roof, near the Sintra beaches on the road to Cabo da Roca. 295 m² with several dining rooms and a fireplace, a bar, an outdoor terrace, a full professional kitchen, storerooms and an office. Energy rating B-.'
      },
      images: photos('DD-106')
    }
  ];
})();
