import { Language } from '../types';

export interface WorkstationTranslation {
name: string;
badge: string;
description: string;
popularFeatures: string[];
}

export interface TranslationDictionary {
appName: string;
tagline: string;
heroHeadline: string;
heroSubheadline: string;
searchPlaceholder: string;
searchModalTitle: string;
noResultsFound: string;
privacyBadge: string;
clientSideBadge: string;
popularTools: string;
allTools: string;
launchTool: string;
filterPlaceholder: string;
workstationToolsCount: string;
advertisement: string;
cookieNotice: string;
accept: string;

categories: {
all: string;
popular: string;
image: string;
pdf: string;
qr: string;
career: string;
utilities: string;
design: string;
calculators: string;
ai: string;
};

workstations: {
qr: WorkstationTranslation;
image: WorkstationTranslation;
pdf: WorkstationTranslation;
career: WorkstationTranslation;
utilities: WorkstationTranslation;
design: WorkstationTranslation;
calculators: WorkstationTranslation;
};

actions: {
back: string;
upload: string;
dragDrop: string;
browse: string;
process: string;
processing: string;
download: string;
reset: string;
copy: string;
copied: string;
options: string;
preview: string;
result: string;
remove: string;
apply: string;
openLink: string;
};

toolLabels: {
format: string;
quality: string;
width: string;
height: string;
maintainAspect: string;
originalSize: string;
outputSize: string;
reduction: string;
overlayPosition: string;
safeMargin: string;
qrSize: string;
qrData: string;
qrDataPlaceholder: string;
photoInput: string;
scanabilityGood: string;
scanabilityWarning: string;
selectProfession: string;
generateBio: string;
uploadPhoto: string;
};

nav: {
home: string;
tools: string;
privacy: string;
terms: string;
about: string;
contact: string;
disclaimer: string;
};

footer: {
rights: string;
privacyNotice: string;
legal: string;
quickLinks: string;
madeForWeb: string;
};

toolTitles: Record<string, string>;
toolDescriptions: Record<string, string>;
}

const developerToolTitles = {
en: {
'json-formatter': 'JSON Formatter & Validator',
'regex-tester': 'Regex Tester',
'jwt-decoder': 'JWT Decoder',
'uuid-generator': 'UUID Generator',
'hash-generator': 'Hash Generator',
'cron-expression-generator': 'Cron Expression Generator',
'sql-formatter': 'SQL Formatter',
'diff-checker': 'Diff Checker',
'html-formatter': 'HTML Formatter',
'css-formatter': 'CSS Formatter',
'javascript-formatter': 'JavaScript Formatter',
'html-entity-encoder': 'HTML Entity Encoder & Decoder',
'http-status-code-reference': 'HTTP Status Code Reference',
'mime-type-lookup': 'MIME Type Lookup',
'json-minifier': 'JSON Minifier',
'text-to-slug': 'Text to URL Slug',
'number-base-converter': 'Number Base Converter',
'color-code-converter': 'Color Code Converter',
},

bn: {
'json-formatter': 'JSON ফরম্যাটার ও ভ্যালিডেটর',
'regex-tester': 'Regex Tester',
'jwt-decoder': 'JWT ডিকোডার',
'uuid-generator': 'UUID জেনারেটর',
'hash-generator': 'Hash জেনারেটর',
'cron-expression-generator': 'Cron Expression জেনারেটর',
'sql-formatter': 'SQL ফরম্যাটার',
'diff-checker': 'Diff Checker',
'html-formatter': 'HTML ফরম্যাটার',
'css-formatter': 'CSS ফরম্যাটার',
'javascript-formatter': 'JavaScript ফরম্যাটার',
'html-entity-encoder': 'HTML Entity Encoder ও Decoder',
'http-status-code-reference': 'HTTP Status Code Reference',
'mime-type-lookup': 'MIME Type Lookup',
'json-minifier': 'JSON Minifier',
'text-to-slug': 'Text to URL Slug',
'number-base-converter': 'Number Base Converter',
'color-code-converter': 'Color Code Converter',
},

ar: {
'json-formatter': 'منسق ومدقق JSON',
'regex-tester': 'مختبر Regex',
'jwt-decoder': 'فك ترميز JWT',
'uuid-generator': 'مولد UUID',
'hash-generator': 'مولد Hash',
'cron-expression-generator': 'مولد Cron Expression',
'sql-formatter': 'منسق SQL',
'diff-checker': 'مقارن النصوص والأكواد',
'html-formatter': 'منسق HTML',
'css-formatter': 'منسق CSS',
'javascript-formatter': 'منسق JavaScript',
'html-entity-encoder': 'مشفر وفاك ترميز HTML Entities',
'http-status-code-reference': 'مرجع أكواد HTTP',
'mime-type-lookup': 'البحث عن MIME Type',
'json-minifier': 'مصغر JSON',
'text-to-slug': 'محول النص إلى URL Slug',
'number-base-converter': 'محول أنظمة الأرقام',
'color-code-converter': 'محول أكواد الألوان',
},
} as const;

const developerToolDescriptions = {
en: {
'json-formatter':
'Format, validate, beautify, and inspect JSON with readable indentation and clear syntax feedback.',

'regex-tester':
  'Test regular expressions against sample text with matches, groups, flags, and real-time results.',

'jwt-decoder':
  'Decode JSON Web Tokens locally to inspect the header and payload without sending the token to a server.',

'uuid-generator':
  'Generate random UUIDs for application IDs, database records, APIs, testing, and development workflows.',

'hash-generator':
  'Generate cryptographic hashes from text using common hashing algorithms directly in your browser.',

'cron-expression-generator':
  'Build and understand cron schedules for recurring jobs, automation, servers, and task schedulers.',

'sql-formatter':
  'Format and beautify SQL queries with readable indentation and consistent query structure.',

'diff-checker':
  'Compare two blocks of text or code and quickly identify added, removed, and changed lines.',

'html-formatter':
  'Beautify and format HTML markup with clean indentation for easier development and debugging.',

'css-formatter':
  'Format and beautify CSS code with consistent indentation and readable rule structure.',

'javascript-formatter':
  'Format and beautify JavaScript code for cleaner structure, indentation, and easier debugging.',

'html-entity-encoder':
  'Encode special characters into HTML entities or decode HTML entities back into readable text.',

'http-status-code-reference':
  'Search and understand HTTP status codes, their meanings, and common API use cases.',

'mime-type-lookup':
  'Find common MIME types for file extensions and identify the correct Content-Type value.',

'json-minifier':
  'Remove unnecessary whitespace from JSON to create compact payloads for APIs and production use.',

'text-to-slug':
  'Convert titles and text into clean, lowercase, URL-friendly slugs for websites and applications.',

'number-base-converter':
  'Convert numbers between binary, decimal, hexadecimal, and octal representations.',

'color-code-converter':
  'Convert web colors between HEX, RGB, HSL, and common CSS color representations.',

},

bn: {
'json-formatter':
'JSON সুন্দরভাবে format, validate, beautify এবং structure inspect করুন।',

'regex-tester':
  'Sample text-এর বিরুদ্ধে regular expression test করুন এবং match, group ও flag ফলাফল দেখুন।',

'jwt-decoder':
  'কোনো token server-এ পাঠানো ছাড়াই browser-এর ভিতরে JWT header ও payload দেখুন।',

'uuid-generator':
  'Application ID, database record, API এবং testing-এর জন্য random UUID তৈরি করুন।',

'hash-generator':
  'বিভিন্ন hashing algorithm ব্যবহার করে browser-এর মধ্যেই cryptographic hash তৈরি করুন।',

'cron-expression-generator':
  'Server, automation এবং recurring job-এর জন্য Cron schedule তৈরি ও বুঝুন।',

'sql-formatter':
  'SQL query পরিষ্কার indentation ও consistent structure-এর মাধ্যমে format করুন।',

'diff-checker':
  'দুটি text বা code block compare করে added, removed এবং changed অংশ দ্রুত খুঁজে বের করুন।',

'html-formatter':
  'HTML markup পরিষ্কার indentation সহ format ও beautify করুন।',

'css-formatter':
  'CSS code consistent indentation ও readable rule structure সহ format করুন।',

'javascript-formatter':
  'JavaScript code পরিষ্কার structure ও indentation সহ beautify করুন।',

'html-entity-encoder':
  'Special character HTML entity-তে encode করুন অথবা HTML entity আবার readable text-এ decode করুন।',

'http-status-code-reference':
  'HTTP status code-এর অর্থ, ব্যবহার এবং API response সম্পর্কে দ্রুত reference দেখুন।',

'mime-type-lookup':
  'File extension অনুযায়ী সঠিক MIME type ও Content-Type খুঁজে বের করুন।',

'json-minifier':
  'JSON-এর অপ্রয়োজনীয় whitespace সরিয়ে compact API payload তৈরি করুন।',

'text-to-slug':
  'Title বা text-কে পরিষ্কার, lowercase এবং URL-friendly slug-এ রূপান্তর করুন।',

'number-base-converter':
  'Binary, decimal, hexadecimal এবং octal-এর মধ্যে number convert করুন।',

'color-code-converter':
  'HEX, RGB, HSL এবং CSS color representation-এর মধ্যে color convert করুন।',

},

ar: {
'json-formatter':
'تنسيق JSON والتحقق منه وتجميله واستعراض بنيته بوضوح داخل المتصفح.',

'regex-tester':
  'اختبر Regular Expressions على نصوص تجريبية مع عرض النتائج والمجموعات والخيارات مباشرة.',

'jwt-decoder':
  'فك ترميز JWT محلياً لعرض Header وPayload دون إرسال الرمز إلى خادم خارجي.',

'uuid-generator':
  'إنشاء UUID عشوائية لاستخدامها في التطبيقات وقواعد البيانات وواجهات API والاختبارات.',

'hash-generator':
  'إنشاء Hash تشفيرية من النصوص باستخدام خوارزميات شائعة مباشرة داخل المتصفح.',

'cron-expression-generator':
  'إنشاء وفهم جداول Cron للمهام المتكررة والخوادم والأتمتة.',

'sql-formatter':
  'تنسيق استعلامات SQL بهيكل واضح ومسافات بادئة سهلة القراءة.',

'diff-checker':
  'مقارنة نصين أو مقطعين من الأكواد واكتشاف الإضافات والحذف والتغييرات بسرعة.',

'html-formatter':
  'تنسيق وتجميل HTML بمسافات بادئة منظمة لتسهيل التطوير وتصحيح الأخطاء.',

'css-formatter':
  'تنسيق CSS بهيكل واضح ومسافات بادئة متناسقة.',

'javascript-formatter':
  'تنسيق وتجميل JavaScript لتحسين البنية والقراءة وتصحيح الأخطاء.',

'html-entity-encoder':
  'ترميز الأحرف الخاصة إلى HTML Entities أو فكها إلى نص مقروء.',

'http-status-code-reference':
  'البحث السريع عن أكواد HTTP ومعانيها واستخداماتها الشائعة في واجهات API.',

'mime-type-lookup':
  'العثور على MIME Type الصحيح حسب امتداد الملف وقيمة Content-Type المناسبة.',

'json-minifier':
  'إزالة المسافات غير الضرورية من JSON لإنشاء بيانات API صغيرة وسريعة.',

'text-to-slug':
  'تحويل العناوين والنصوص إلى Slugs نظيفة وصديقة لعناوين URL.',

'number-base-converter':
  'تحويل الأرقام بين Binary وDecimal وHexadecimal وOctal.',

'color-code-converter':
  'تحويل ألوان الويب بين HEX وRGB وHSL وتمثيلات CSS الشائعة.',

},
} as const;

const commonWorkstations = {
en: {
qr: {
name: 'QR & Photo Overlay Workstation',
badge: 'QR Suite',
description:
'QR tools from the previous Nova site.',
popularFeatures: [],
},

image: {
  name: 'Image Suite Workstation',
  badge: 'Image Studio',
  description:
    'Image tools from the previous Nova site.',
  popularFeatures: [],
},

pdf: {
  name: 'PDF Suite Workstation',
  badge: 'Document Studio',
  description:
    'PDF tools from the previous Nova site.',
  popularFeatures: [],
},

career: {
  name: 'Career & Resume Workstation',
  badge: 'Career Hub',
  description:
    'Career tools from the previous Nova site.',
  popularFeatures: [],
},

utilities: {
  name: 'Developer Essentials',
  badge: 'WORKSTATION 01',
  description:
    'Essential browser-based tools for developers, programmers, API work, debugging, data inspection, and everyday coding tasks.',
  popularFeatures: [
    'JSON Formatter',
    'Regex Tester',
    'JWT Decoder',
    'UUID Generator',
    'Hash Generator',
    'Cron Expression Generator',
  ],
},

design: {
  name: 'Web & Code Tools',
  badge: 'WORKSTATION 02',
  description:
    'Practical tools for web development, frontend code, APIs, databases, HTTP, markup, stylesheets, and developer workflows.',
  popularFeatures: [
    'SQL Formatter',
    'Diff Checker',
    'HTML Formatter',
    'CSS Formatter',
    'JavaScript Formatter',
    'HTTP Status Reference',
  ],
},

calculators: {
  name: 'Nova Tools Network',
  badge: 'WORKSTATION 03',
  description:
    'Explore other specialized Nova Tools websites from the network.',
  popularFeatures: [
    'Nova QR Tools',
    'Nova Image Tools',
    'Nova PDF Tools',
  ],
},

},

bn: {
qr: {
name: 'QR ও Photo Overlay Workstation',
badge: 'QR Suite',
description:
'আগের Nova site-এর QR tools।',
popularFeatures: [],
},

image: {
  name: 'Image Suite Workstation',
  badge: 'Image Studio',
  description:
    'আগের Nova site-এর image tools।',
  popularFeatures: [],
},

pdf: {
  name: 'PDF Suite Workstation',
  badge: 'Document Studio',
  description:
    'আগের Nova site-এর PDF tools।',
  popularFeatures: [],
},

career: {
  name: 'Career & Resume Workstation',
  badge: 'Career Hub',
  description:
    'আগের Nova site-এর career tools।',
  popularFeatures: [],
},

utilities: {
  name: 'Developer Essentials',
  badge: 'WORKSTATION 01',
  description:
    'Developer, programmer, API, debugging, data inspection এবং everyday coding-এর জন্য প্রয়োজনীয় browser-based tools।',
  popularFeatures: [
    'JSON Formatter',
    'Regex Tester',
    'JWT Decoder',
    'UUID Generator',
    'Hash Generator',
    'Cron Expression Generator',
  ],
},

design: {
  name: 'Web & Code Tools',
  badge: 'WORKSTATION 02',
  description:
    'Web development, frontend code, API, database, HTTP, HTML, CSS এবং developer workflow-এর প্রয়োজনীয় tools।',
  popularFeatures: [
    'SQL Formatter',
    'Diff Checker',
    'HTML Formatter',
    'CSS Formatter',
    'JavaScript Formatter',
    'HTTP Status Reference',
  ],
},

calculators: {
  name: 'Nova Tools Network',
  badge: 'WORKSTATION 03',
  description:
    'Nova Tools network-এর অন্যান্য specialized website-গুলোতে সরাসরি যান।',
  popularFeatures: [
    'Nova QR Tools',
    'Nova Image Tools',
    'Nova PDF Tools',
  ],
},

},

ar: {
qr: {
name: 'محطة QR وتركيب الصور',
badge: 'QR Suite',
description:
'أدوات QR من موقع Nova السابق.',
popularFeatures: [],
},

image: {
  name: 'محطة الصور',
  badge: 'Image Studio',
  description:
    'أدوات الصور من موقع Nova السابق.',
  popularFeatures: [],
},

pdf: {
  name: 'محطة PDF',
  badge: 'Document Studio',
  description:
    'أدوات PDF من موقع Nova السابق.',
  popularFeatures: [],
},

career: {
  name: 'محطة السيرة المهنية',
  badge: 'Career Hub',
  description:
    'أدوات المسار المهني من موقع Nova السابق.',
  popularFeatures: [],
},

utilities: {
  name: 'أساسيات المطورين',
  badge: 'WORKSTATION 01',
  description:
    'أدوات أساسية للمطورين والبرمجة وواجهات API وتصحيح الأخطاء وفحص البيانات.',
  popularFeatures: [
    'منسق JSON',
    'مختبر Regex',
    'فك JWT',
    'مولد UUID',
    'مولد Hash',
    'مولد Cron',
  ],
},

design: {
  name: 'أدوات الويب والأكواد',
  badge: 'WORKSTATION 02',
  description:
    'أدوات عملية لتطوير الويب وFrontend وAPI وقواعد البيانات وHTTP وHTML وCSS.',
  popularFeatures: [
    'منسق SQL',
    'مقارن الأكواد',
    'منسق HTML',
    'منسق CSS',
    'منسق JavaScript',
    'مرجع HTTP',
  ],
},

calculators: {
  name: 'شبكة Nova Tools',
  badge: 'WORKSTATION 03',
  description:
    'استكشف مواقع Nova Tools المتخصصة الأخرى من خلال الشبكة.',
  popularFeatures: [
    'Nova QR Tools',
    'Nova Image Tools',
    'Nova PDF Tools',
  ],
},

},
} as const;

const baseActions = {
en: {
back: 'Back',
upload: 'Choose File',
dragDrop:
'Drag and drop your file here, or click to browse',
browse: 'Browse Files',
process: 'Process',
processing: 'Processing...',
download: 'Download Result',
reset: 'Reset',
copy: 'Copy to Clipboard',
copied: 'Copied!',
options: 'Tool Options',
preview: 'Live Preview',
result: 'Result',
remove: 'Remove',
apply: 'Apply Changes',
openLink: 'Open Link Safely',
},

bn: {
back: 'ফিরে যান',
upload: 'ফাইল নির্বাচন করুন',
dragDrop:
'এখানে ফাইল টেনে আনুন অথবা ব্রাউজ করতে ক্লিক করুন',
browse: 'ফাইল নির্বাচন করুন',
process: 'Process করুন',
processing: 'Processing হচ্ছে...',
download: 'Result Download',
reset: 'Reset',
copy: 'Clipboard-এ Copy করুন',
copied: 'Copy হয়েছে!',
options: 'Tool Options',
preview: 'Live Preview',
result: 'Result',
remove: 'Remove',
apply: 'Changes Apply করুন',
openLink: 'নিরাপদে Link খুলুন',
},

ar: {
back: 'رجوع',
upload: 'اختيار ملف',
dragDrop:
'اسحب الملف هنا أو انقر للاستعراض',
browse: 'استعراض الملفات',
process: 'معالجة',
processing: 'جاري المعالجة...',
download: 'تحميل النتيجة',
reset: 'إعادة ضبط',
copy: 'نسخ',
copied: 'تم النسخ!',
options: 'خيارات الأداة',
preview: 'معاينة مباشرة',
result: 'النتيجة',
remove: 'إزالة',
apply: 'تطبيق التغييرات',
openLink: 'فتح الرابط بأمان',
},
} as const;

const toolLabels = {
en: {
format: 'Format',
quality: 'Quality',
width: 'Width (px)',
height: 'Height (px)',
maintainAspect: 'Keep Aspect Ratio',
originalSize: 'Original Size',
outputSize: 'Output Size',
reduction: 'Size Reduction',
overlayPosition: 'Position',
safeMargin: 'Safe Margin',
qrSize: 'QR Size',
qrData: 'QR Data',
qrDataPlaceholder:
'Enter URL, text, or data...',
photoInput: 'Upload Image',
scanabilityGood:
'Good contrast and readable structure.',
scanabilityWarning:
'Check the size and contrast before using the result.',
selectProfession: 'Select Profession',
generateBio: 'Generate Professional Bio',
uploadPhoto: 'Upload Photo',
},

bn: {
format: 'Format',
quality: 'Quality',
width: 'Width (px)',
height: 'Height (px)',
maintainAspect:
'Aspect Ratio বজায় রাখুন',
originalSize: 'Original Size',
outputSize: 'Output Size',
reduction: 'Size Reduction',
overlayPosition: 'Position',
safeMargin: 'Safe Margin',
qrSize: 'QR Size',
qrData: 'QR Data',
qrDataPlaceholder:
'URL, text অথবা data লিখুন...',
photoInput: 'Image Upload',
scanabilityGood:
'Contrast এবং structure ভালো আছে।',
scanabilityWarning:
'Result ব্যবহার করার আগে size ও contrast পরীক্ষা করুন।',
selectProfession:
'Profession নির্বাচন করুন',
generateBio:
'Professional Bio তৈরি করুন',
uploadPhoto: 'Photo Upload',
},

ar: {
format: 'التنسيق',
quality: 'الجودة',
width: 'العرض (px)',
height: 'الارتفاع (px)',
maintainAspect:
'الحفاظ على النسبة',
originalSize: 'الحجم الأصلي',
outputSize: 'الحجم الناتج',
reduction: 'تقليل الحجم',
overlayPosition: 'الموضع',
safeMargin: 'الهامش الآمن',
qrSize: 'حجم QR',
qrData: 'بيانات QR',
qrDataPlaceholder:
'أدخل الرابط أو النص أو البيانات...',
photoInput: 'رفع صورة',
scanabilityGood:
'التباين والبنية مناسبين.',
scanabilityWarning:
'تحقق من الحجم والتباين قبل استخدام النتيجة.',
selectProfession: 'اختر المهنة',
generateBio: 'إنشاء نبذة مهنية',
uploadPhoto: 'رفع الصورة',
},
} as const;

export const translations: Record<
Language,
TranslationDictionary

«= {
en: {
appName: 'Nova Dev Tools',
tagline: 'Free Online Developer Tools',»

heroHeadline:
  'Powerful Developer Tools, Directly in Your Browser',

heroSubheadline:
  'Format code, inspect data, test patterns, convert values, debug web projects, and handle everyday developer tasks without unnecessary complexity.',

searchPlaceholder:
  'Search developer tools...',

searchModalTitle:
  'Search Nova Dev Tools',

noResultsFound:
  'No tools found matching your search.',

privacyBadge:
  '100% Client-Side Processing',

clientSideBadge:
  'Your input stays in your browser',

popularTools:
  'Popular Developer Tools',

allTools:
  'Developer Tool Directory',

launchTool:
  'Launch Tool',

filterPlaceholder:
  'Filter tools in workstation...',

workstationToolsCount:
  'developer tools running directly in your browser.',

advertisement:
  'Advertisement',

cookieNotice:
  'Nova Dev Tools uses privacy-conscious technologies and Google AdSense to provide free online tools. Tool input is processed locally whenever the tool supports client-side processing.',

accept:
  'Accept & Close',

categories: {
  all: 'All Tools',
  popular: 'Popular',
  image: 'Image Tools',
  pdf: 'PDF Tools',
  qr: 'QR Tools',
  career: 'Career Tools',
  utilities: 'Developer Tools',
  design: 'Web & Code',
  calculators: 'Calculators',
  ai: 'AI Tools',
},

workstations:
  commonWorkstations.en,

actions:
  baseActions.en,

toolLabels:
  toolLabels.en,

nav: {
  home: 'Home',
  tools: 'Tools',
  privacy: 'Privacy Policy',
  terms: 'Terms of Service',
  about: 'About Nova Dev Tools',
  contact: 'Contact Us',
  disclaimer: 'Disclaimer',
},

footer: {
  rights:
    'All rights reserved.',

  privacyNotice:
    'Nova Dev Tools is designed with browser-first processing. Sensitive input should remain on your device when a tool performs its work locally.',

  legal:
    'Legal & Trust',

  quickLinks:
    'Navigation',

  madeForWeb:
    'Engineered for speed, privacy, and developer productivity.',
},

toolTitles:
  developerToolTitles.en,

toolDescriptions:
  developerToolDescriptions.en,

},

bn: {
appName:
'Nova Dev Tools',

tagline:
  'ফ্রি অনলাইন Developer Tools',

heroHeadline:
  'Powerful Developer Tools, সরাসরি আপনার Browser-এ',

heroSubheadline:
  'Code format করুন, data inspect করুন, pattern test করুন, value convert করুন এবং everyday development task দ্রুত সম্পন্ন করুন।',

searchPlaceholder:
  'Developer tool খুঁজুন...',

searchModalTitle:
  'Nova Dev Tools অনুসন্ধান',

noResultsFound:
  'আপনার search-এর সাথে কোনো tool পাওয়া যায়নি।',

privacyBadge:
  '100% Client-Side Processing',

clientSideBadge:
  'Tool input browser-এর মধ্যেই থাকে',

popularTools:
  'জনপ্রিয় Developer Tools',

allTools:
  'Developer Tool Directory',

launchTool:
  'Tool চালু করুন',

filterPlaceholder:
  'Workstation-এর tools filter করুন...',

workstationToolsCount:
  'টি developer tool সরাসরি আপনার browser-এ চলে।',

advertisement:
  'বিজ্ঞাপন',

cookieNotice:
  'Nova Dev Tools ফ্রি online tools দেওয়ার জন্য privacy-conscious technology এবং Google AdSense ব্যবহার করে। যেসব tool client-side processing সমর্থন করে, সেগুলোর input browser-এর মধ্যেই process হয়।',

accept:
  'Accept ও Close',

categories: {
  all: 'সব Tools',
  popular: 'জনপ্রিয়',
  image: 'Image Tools',
  pdf: 'PDF Tools',
  qr: 'QR Tools',
  career: 'Career Tools',
  utilities: 'Developer Tools',
  design: 'Web & Code',
  calculators: 'Calculators',
  ai: 'AI Tools',
},

workstations:
  commonWorkstations.bn,

actions:
  baseActions.bn,

toolLabels:
  toolLabels.bn,

nav: {
  home: 'হোম',
  tools: 'Tools',
  privacy: 'Privacy Policy',
  terms: 'Terms of Service',
  about: 'Nova Dev Tools সম্পর্কে',
  contact: 'যোগাযোগ',
  disclaimer: 'Disclaimer',
},

footer: {
  rights:
    'সর্বস্বত্ব সংরক্ষিত।',

  privacyNotice:
    'Nova Dev Tools browser-first processing-এর জন্য তৈরি। কোনো tool local processing করলে sensitive input আপনার device-এর মধ্যেই থাকে।',

  legal:
    'Legal & Trust',

  quickLinks:
    'Navigation',

  madeForWeb:
    'Speed, privacy এবং developer productivity-এর জন্য তৈরি।',
},

toolTitles:
  developerToolTitles.bn,

toolDescriptions:
  developerToolDescriptions.bn,

},

ar: {
appName:
'Nova Dev Tools',

tagline:
  'أدوات مطورين مجانية عبر الإنترنت',

heroHeadline:
  'أدوات قوية للمطورين مباشرة داخل متصفحك',

heroSubheadline:
  'نسّق الأكواد، افحص البيانات، اختبر الأنماط، حوّل القيم، وتعامل مع مهام التطوير اليومية بسرعة وسهولة.',

searchPlaceholder:
  'ابحث عن أدوات المطورين...',

searchModalTitle:
  'البحث في Nova Dev Tools',

noResultsFound:
  'لم يتم العثور على أدوات مطابقة لبحثك.',

privacyBadge:
  'معالجة محلية 100٪',

clientSideBadge:
  'تبقى مدخلاتك داخل المتصفح',

popularTools:
  'أدوات المطورين الشائعة',

allTools:
  'دليل أدوات المطورين',

launchTool:
  'تشغيل الأداة',

filterPlaceholder:
  'تصفية الأدوات في محطة العمل...',

workstationToolsCount:
  'أداة للمطورين تعمل مباشرة داخل متصفحك.',

advertisement:
  'إعلان',

cookieNotice:
  'تستخدم Nova Dev Tools تقنيات تراعي الخصوصية وGoogle AdSense لتوفير أدوات مجانية. تتم معالجة المدخلات محلياً عندما تدعم الأداة المعالجة داخل المتصفح.',

accept:
  'موافق وإغلاق',

categories: {
  all: 'جميع الأدوات',
  popular: 'شائعة',
  image: 'أدوات الصور',
  pdf: 'أدوات PDF',
  qr: 'أدوات QR',
  career: 'أدوات مهنية',
  utilities: 'أدوات المطورين',
  design: 'الويب والأكواد',
  calculators: 'الحاسبات',
  ai: 'أدوات الذكاء الاصطناعي',
},

workstations:
  commonWorkstations.ar,

actions:
  baseActions.ar,

toolLabels:
  toolLabels.ar,

nav: {
  home: 'الرئيسية',
  tools: 'الأدوات',
  privacy: 'سياسة الخصوصية',
  terms: 'شروط الخدمة',
  about: 'عن Nova Dev Tools',
  contact: 'اتصل بنا',
  disclaimer: 'إخلاء المسؤولية',
},

footer: {
  rights:
    'جميع الحقوق محفوظة.',

  privacyNotice:
    'تم تصميم Nova Dev Tools بمعالجة تركز على المتصفح. عندما تعمل الأداة محلياً، تبقى المدخلات الحساسة على جهازك.',

  legal:
    'الخصوصية والثقة',

  quickLinks:
    'التنقل',

  madeForWeb:
    'صُممت للسرعة والخصوصية وإنتاجية المطورين.',
},

toolTitles:
  developerToolTitles.ar,

toolDescriptions:
  developerToolDescriptions.ar,

},
};

/**

* Get a localized tool name.
  */
  export const getLocalizedToolName = (
  toolId: string,
  fallbackName: string,
  lang: Language,
  ): string => {
  const dictionary =
  translations[lang] ||
  translations.en;

return (
dictionary.toolTitles[toolId] ||
fallbackName
);
};

/**

* Get a localized tool description.
  */
  export const getLocalizedToolDesc = (
  toolId: string,
  fallbackDesc: string,
  lang: Language,
  ): string => {
  const dictionary =
  translations[lang] ||
  translations.en;

return (
dictionary.toolDescriptions[toolId] ||
fallbackDesc
);
};
