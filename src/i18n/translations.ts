import type { Language } from '../types';

export interface WorkstationTranslation {
name: string;
badge: string;
description: string;
popularFeatures: string[];
}

export interface TranslationDictionary {
appName: string;
appTagline: string;

heroHeadline: string;
heroSubheadline: string;

searchPlaceholder: string;
searchNoResults: string;
searchHint: string;

privacyBadge: string;
clientSideBadge: string;

popularTools: string;
allTools: string;
launchTool: string;
openTool: string;
back: string;
copy: string;
copied: string;
clear: string;
download: string;
upload: string;
reset: string;
generate: string;
convert: string;
format: string;
minify: string;
validate: string;
encode: string;
decode: string;

favorites: string;
recentTools: string;
noFavorites: string;
noRecentTools: string;

categories: string;
workstations: string;

qr: WorkstationTranslation;
image: WorkstationTranslation;
pdf: WorkstationTranslation;
career: WorkstationTranslation;

workstationsData: WorkstationTranslation;
utilities: WorkstationTranslation;
design: WorkstationTranslation;
calculators: WorkstationTranslation;

actions: {
home: string;
search: string;
settings: string;
favorites: string;
recent: string;
language: string;
theme: string;
light: string;
dark: string;
system: string;
menu: string;
close: string;
};

toolLabels: {
input: string;
output: string;
result: string;
options: string;
settings: string;
preview: string;
characters: string;
words: string;
lines: string;
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
description: string;
privacy: string;
terms: string;
about: string;
contact: string;
copyright: string;
};

toolTitles: Record<string, string>;
toolDescriptions: Record<string, string>;
}

const developerToolTitles: Record<
Language,
Record<string, string>

«= {
en: {
'json-formatter': 'JSON Formatter',
'regex-tester': 'Regex Tester',
'jwt-decoder': 'JWT Decoder',
'uuid-generator': 'UUID Generator',
'hash-generator': 'Hash Generator',
'cron-expression-generator':
'Cron Expression Generator',
'sql-formatter': 'SQL Formatter',
'diff-checker': 'Diff Checker',
'html-formatter': 'HTML Formatter',
'css-formatter': 'CSS Formatter',
'javascript-formatter':
'JavaScript Formatter',
'html-entity-encoder':
'HTML Entity Encoder',
'http-status-code-reference':
'HTTP Status Code Reference',
'mime-type-lookup':
'MIME Type Lookup',
'json-minifier': 'JSON Minifier',
'text-to-slug': 'Text to Slug',
'number-base-converter':
'Number Base Converter',
'color-code-converter':
'Color Code Converter',
},»

bn: {
'json-formatter': 'JSON ফরম্যাটার',
'regex-tester': 'Regex টেস্টার',
'jwt-decoder': 'JWT ডিকোডার',
'uuid-generator': 'UUID জেনারেটর',
'hash-generator': 'Hash জেনারেটর',
'cron-expression-generator':
'Cron Expression জেনারেটর',
'sql-formatter': 'SQL ফরম্যাটার',
'diff-checker': 'Diff চেকার',
'html-formatter': 'HTML ফরম্যাটার',
'css-formatter': 'CSS ফরম্যাটার',
'javascript-formatter':
'JavaScript ফরম্যাটার',
'html-entity-encoder':
'HTML Entity Encoder',
'http-status-code-reference':
'HTTP Status Code Reference',
'mime-type-lookup':
'MIME Type Lookup',
'json-minifier': 'JSON Minifier',
'text-to-slug': 'Text to Slug',
'number-base-converter':
'Number Base Converter',
'color-code-converter':
'Color Code Converter',
},

ar: {
'json-formatter': 'منسق JSON',
'regex-tester': 'اختبار Regex',
'jwt-decoder': 'فك تشفير JWT',
'uuid-generator': 'مولد UUID',
'hash-generator': 'مولد Hash',
'cron-expression-generator':
'مولد Cron Expression',
'sql-formatter': 'منسق SQL',
'diff-checker': 'مقارنة النصوص',
'html-formatter': 'منسق HTML',
'css-formatter': 'منسق CSS',
'javascript-formatter':
'منسق JavaScript',
'html-entity-encoder':
'مشفّر HTML Entity',
'http-status-code-reference':
'مرجع أكواد حالة HTTP',
'mime-type-lookup':
'البحث عن MIME Type',
'json-minifier': 'ضغط JSON',
'text-to-slug': 'تحويل النص إلى Slug',
'number-base-converter':
'محول أنظمة الأعداد',
'color-code-converter':
'محول أكواد الألوان',
},
};

const developerToolDescriptions: Record<
Language,
Record<string, string>

«= {
en: {
'json-formatter':
'Format, validate, and beautify JSON data directly in your browser.',
'regex-tester':
'Test regular expressions against text with fast pattern matching and clear results.',
'jwt-decoder':
'Decode JWT header and payload data locally without sending tokens to a server.',
'uuid-generator':
'Generate unique UUID values quickly for applications, databases, APIs, and development.',
'hash-generator':
'Generate cryptographic hashes from text for development and verification workflows.',
'cron-expression-generator':
'Create and understand cron expressions for scheduled jobs and automated tasks.',
'sql-formatter':
'Format SQL queries into clean, readable code for development and database work.',
'diff-checker':
'Compare two text or code inputs and quickly identify their differences.',
'html-formatter':
'Beautify and organize HTML markup into clean, readable structure.',
'css-formatter':
'Format CSS code into a clean and consistent structure for easier development.',
'javascript-formatter':
'Format JavaScript code into readable, organized source code.',
'html-entity-encoder':
'Encode and decode HTML entities for safe and correct HTML text handling.',
'http-status-code-reference':
'Quickly look up HTTP status codes, meanings, and common use cases.',
'mime-type-lookup':
'Find common MIME types and their corresponding file extensions.',
'json-minifier':
'Remove unnecessary JSON whitespace and produce compact JSON output.',
'text-to-slug':
'Convert text into clean, URL-friendly slugs for websites and applications.',
'number-base-converter':
'Convert numbers between binary, octal, decimal, hexadecimal, and other bases.',
'color-code-converter':
'Convert colors between HEX, RGB, HSL, and other common web color formats.',
},»

bn: {
'json-formatter':
'ব্রাউজারেই JSON ডেটা format, validate এবং সুন্দরভাবে সাজান।',
'regex-tester':
'টেক্সটের সঙ্গে Regular Expression পরীক্ষা করুন এবং দ্রুত matching result দেখুন।',
'jwt-decoder':
'কোনো token server-এ পাঠানো ছাড়াই browser-এর মধ্যে JWT header ও payload decode করুন।',
'uuid-generator':
'Application, database, API এবং development-এর জন্য দ্রুত unique UUID তৈরি করুন।',
'hash-generator':
'Development ও verification কাজের জন্য text থেকে cryptographic hash তৈরি করুন।',
'cron-expression-generator':
'Scheduled job এবং automated task-এর জন্য সহজে Cron expression তৈরি ও বুঝুন।',
'sql-formatter':
'SQL query-কে পরিষ্কার ও readable code structure-এ format করুন।',
'diff-checker':
'দুটি text বা code compare করে তাদের পার্থক্য দ্রুত শনাক্ত করুন।',
'html-formatter':
'HTML markup-কে সুন্দর, পরিষ্কার এবং readable structure-এ format করুন।',
'css-formatter':
'CSS code-কে clean এবং consistent structure-এ সাজান।',
'javascript-formatter':
'JavaScript code-কে readable এবং organized source code-এ format করুন।',
'html-entity-encoder':
'HTML entity encode ও decode করে HTML text সঠিকভাবে handle করুন।',
'http-status-code-reference':
'HTTP status code, তাদের অর্থ এবং সাধারণ ব্যবহার দ্রুত খুঁজে দেখুন।',
'mime-type-lookup':
'সাধারণ MIME type এবং সংশ্লিষ্ট file extension দ্রুত খুঁজে নিন।',
'json-minifier':
'অপ্রয়োজনীয় whitespace সরিয়ে compact JSON তৈরি করুন।',
'text-to-slug':
'Text-কে clean এবং URL-friendly slug-এ রূপান্তর করুন।',
'number-base-converter':
'Binary, octal, decimal, hexadecimal এবং অন্যান্য number base-এর মধ্যে রূপান্তর করুন।',
'color-code-converter':
'HEX, RGB, HSL এবং অন্যান্য web color format-এর মধ্যে color convert করুন।',
},

ar: {
'json-formatter':
'تنسيق والتحقق من بيانات JSON مباشرة داخل المتصفح.',
'regex-tester':
'اختبر التعبيرات النمطية مقابل النصوص مع نتائج مطابقة سريعة وواضحة.',
'jwt-decoder':
'فك ترميز رأس وبيانات JWT محليًا دون إرسال الرموز إلى خادم.',
'uuid-generator':
'إنشاء UUIDs فريدة بسرعة للتطبيقات وقواعد البيانات وواجهات API والتطوير.',
'hash-generator':
'إنشاء قيم Hash تشفيرية من النصوص لأعمال التطوير والتحقق.',
'cron-expression-generator':
'إنشاء وفهم تعبيرات Cron للمهام المجدولة والعمليات الآلية.',
'sql-formatter':
'تنسيق استعلامات SQL إلى كود واضح وسهل القراءة.',
'diff-checker':
'مقارنة نصين أو مقطعين من التعليمات البرمجية وتحديد الاختلافات بسرعة.',
'html-formatter':
'تنسيق وترتيب HTML في بنية نظيفة وسهلة القراءة.',
'css-formatter':
'تنسيق CSS في بنية نظيفة ومتناسقة لتسهيل التطوير.',
'javascript-formatter':
'تنسيق JavaScript إلى كود منظم وسهل القراءة.',
'html-entity-encoder':
'ترميز وفك ترميز كيانات HTML للتعامل الصحيح مع النصوص.',
'http-status-code-reference':
'البحث السريع عن أكواد حالة HTTP ومعانيها واستخداماتها الشائعة.',
'mime-type-lookup':
'العثور على أنواع MIME الشائعة وامتدادات الملفات المرتبطة بها.',
'json-minifier':
'إزالة المسافات غير الضرورية من JSON وإنشاء مخرجات JSON مضغوطة.',
'text-to-slug':
'تحويل النص إلى Slug نظيف ومتوافق مع عناوين URL.',
'number-base-converter':
'تحويل الأرقام بين الأنظمة الثنائية والثمانية والعشرية والسداسية عشرية وغيرها.',
'color-code-converter':
'تحويل الألوان بين HEX وRGB وHSL وتنسيقات ألوان الويب الشائعة الأخرى.',
},
};

const commonWorkstations: Record<
Language,
Record<string, WorkstationTranslation>

«= {
en: {
utilities: {
name: 'Developer Essentials',
badge: 'DEV CORE',
description:
'Essential browser-based tools for everyday development, debugging, APIs, authentication, validation, and backend workflows.',
popularFeatures: [
'JSON Formatter',
'Regex Tester',
'JWT Decoder',
'UUID Generator',
'Hash Generator',
'Cron Generator',
],
},»

design: {
  name: 'Web & Code Tools',
  badge: 'WEB STACK',
  description:
    'Practical tools for frontend and backend developers working with SQL, HTML, CSS, JavaScript, HTTP, MIME types, and code comparison.',
  popularFeatures: [
    'SQL Formatter',
    'Diff Checker',
    'HTML Formatter',
    'CSS Formatter',
    'JavaScript Formatter',
    'HTTP Status Codes',
  ],
},

calculators: {
  name: 'Nova Tools Network',
  badge: 'NOVA NETWORK',
  description:
    'Explore other Nova tool platforms for QR codes, image utilities, PDF tools, and additional browser-based productivity tools.',
  popularFeatures: [
    'Nova Tools',
    'Nova QR Code',
    'Connected Nova Sites',
  ],
},

qr: {
  name: 'Developer Essentials',
  badge: 'DEV CORE',
  description:
    'Developer-focused utilities for everyday programming and technical workflows.',
  popularFeatures: [],
},

image: {
  name: 'Web & Code Tools',
  badge: 'WEB STACK',
  description:
    'Practical web development and coding utilities.',
  popularFeatures: [],
},

pdf: {
  name: 'Nova Tools Network',
  badge: 'NOVA NETWORK',
  description:
    'Explore connected Nova tool platforms.',
  popularFeatures: [],
},

career: {
  name: 'Nova Tools Network',
  badge: 'NOVA NETWORK',
  description:
    'Explore other Nova tool platforms.',
  popularFeatures: [],
},

},

bn: {
utilities: {
name: 'Developer Essentials',
badge: 'DEV CORE',
description:
'প্রতিদিনের development, debugging, API, authentication, validation এবং backend কাজের জন্য প্রয়োজনীয় browser-based developer tools।',
popularFeatures: [
'JSON Formatter',
'Regex Tester',
'JWT Decoder',
'UUID Generator',
'Hash Generator',
'Cron Generator',
],
},

design: {
  name: 'Web & Code Tools',
  badge: 'WEB STACK',
  description:
    'SQL, HTML, CSS, JavaScript, HTTP, MIME type এবং code comparison-এর জন্য প্রয়োজনীয় web ও code tools।',
  popularFeatures: [
    'SQL Formatter',
    'Diff Checker',
    'HTML Formatter',
    'CSS Formatter',
    'JavaScript Formatter',
    'HTTP Status Codes',
  ],
},

calculators: {
  name: 'Nova Tools Network',
  badge: 'NOVA NETWORK',
  description:
    'QR code, image utilities, PDF tools এবং অন্যান্য browser-based productivity tools-এর জন্য Nova-এর অন্য platformগুলো দেখুন।',
  popularFeatures: [
    'Nova Tools',
    'Nova QR Code',
    'Connected Nova Sites',
  ],
},

qr: {
  name: 'Developer Essentials',
  badge: 'DEV CORE',
  description:
    'প্রতিদিনের programming এবং technical workflow-এর জন্য developer-focused tools।',
  popularFeatures: [],
},

image: {
  name: 'Web & Code Tools',
  badge: 'WEB STACK',
  description:
    'Web development এবং coding-এর জন্য প্রয়োজনীয় practical tools।',
  popularFeatures: [],
},

pdf: {
  name: 'Nova Tools Network',
  badge: 'NOVA NETWORK',
  description:
    'সংযুক্ত Nova tool platformগুলো explore করুন।',
  popularFeatures: [],
},

career: {
  name: 'Nova Tools Network',
  badge: 'NOVA NETWORK',
  description:
    'Nova-এর অন্যান্য tool platform explore করুন।',
  popularFeatures: [],
},

},

ar: {
utilities: {
name: 'أساسيات المطور',
badge: 'DEV CORE',
description:
'أدوات أساسية داخل المتصفح للتطوير اليومي وتصحيح الأخطاء وواجهات API والمصادقة والتحقق وأعمال الواجهة الخلفية.',
popularFeatures: [
'منسق JSON',
'اختبار Regex',
'فك تشفير JWT',
'مولد UUID',
'مولد Hash',
'مولد Cron',
],
},

design: {
  name: 'أدوات الويب والبرمجة',
  badge: 'WEB STACK',
  description:
    'أدوات عملية لمطوري الواجهة الأمامية والخلفية للعمل مع SQL وHTML وCSS وJavaScript وHTTP وMIME ومقارنة الأكواد.',
  popularFeatures: [
    'منسق SQL',
    'مقارنة الأكواد',
    'منسق HTML',
    'منسق CSS',
    'منسق JavaScript',
    'أكواد حالة HTTP',
  ],
},

calculators: {
  name: 'شبكة Nova Tools',
  badge: 'NOVA NETWORK',
  description:
    'استكشف منصات Nova الأخرى لأدوات QR والصور وPDF وغيرها من أدوات الإنتاجية التي تعمل عبر المتصفح.',
  popularFeatures: [
    'Nova Tools',
    'Nova QR Code',
    'مواقع Nova المتصلة',
  ],
},

qr: {
  name: 'أساسيات المطور',
  badge: 'DEV CORE',
  description:
    'أدوات مخصصة للمطورين للاستخدام اليومي وسير العمل التقني.',
  popularFeatures: [],
},

image: {
  name: 'أدوات الويب والبرمجة',
  badge: 'WEB STACK',
  description:
    'أدوات عملية لتطوير الويب والبرمجة.',
  popularFeatures: [],
},

pdf: {
  name: 'شبكة Nova Tools',
  badge: 'NOVA NETWORK',
  description:
    'استكشف منصات Nova المتصلة.',
  popularFeatures: [],
},

career: {
  name: 'شبكة Nova Tools',
  badge: 'NOVA NETWORK',
  description:
    'استكشف منصات Nova الأخرى.',
  popularFeatures: [],
},

},
};

const baseActions: Record<
Language,
TranslationDictionary['actions']

«= {
en: {
home: 'Home',
search: 'Search',
settings: 'Settings',
favorites: 'Favorites',
recent: 'Recent',
language: 'Language',
theme: 'Theme',
light: 'Light',
dark: 'Dark',
system: 'System',
menu: 'Menu',
close: 'Close',
},»

bn: {
home: 'হোম',
search: 'সার্চ',
settings: 'সেটিংস',
favorites: 'পছন্দের',
recent: 'সাম্প্রতিক',
language: 'ভাষা',
theme: 'থিম',
light: 'লাইট',
dark: 'ডার্ক',
system: 'সিস্টেম',
menu: 'মেনু',
close: 'বন্ধ করুন',
},

ar: {
home: 'الرئيسية',
search: 'بحث',
settings: 'الإعدادات',
favorites: 'المفضلة',
recent: 'الأخيرة',
language: 'اللغة',
theme: 'المظهر',
light: 'فاتح',
dark: 'داكن',
system: 'النظام',
menu: 'القائمة',
close: 'إغلاق',
},
};

const toolLabels: Record<
Language,
TranslationDictionary['toolLabels']

«= {
en: {
input: 'Input',
output: 'Output',
result: 'Result',
options: 'Options',
settings: 'Settings',
preview: 'Preview',
characters: 'Characters',
words: 'Words',
lines: 'Lines',
},»

bn: {
input: 'ইনপুট',
output: 'আউটপুট',
result: 'রেজাল্ট',
options: 'অপশন',
settings: 'সেটিংস',
preview: 'প্রিভিউ',
characters: 'অক্ষর',
words: 'শব্দ',
lines: 'লাইন',
},

ar: {
input: 'الإدخال',
output: 'الإخراج',
result: 'النتيجة',
options: 'الخيارات',
settings: 'الإعدادات',
preview: 'المعاينة',
characters: 'الأحرف',
words: 'الكلمات',
lines: 'الأسطر',
},
};

const baseTranslations: Record<
Language,
Omit<
TranslationDictionary,
| 'actions'
| 'toolLabels'
| 'toolTitles'
| 'toolDescriptions'
| 'qr'
| 'image'
| 'pdf'
| 'career'
| 'utilities'
| 'design'
| 'calculators'
| 'workstationsData'

«= {
en: {
appName: 'Nova Dev Tools',
appTagline:
'Free online tools for developers',»

heroHeadline:
  'Powerful Developer Tools. Simple Workflow.',
heroSubheadline:
  'Fast, free, and privacy-first tools for developers, programmers, and web creators.',

searchPlaceholder:
  'Search developer tools...',
searchNoResults:
  'No tools found.',
searchHint:
  'Search by tool name, keyword, or category.',

privacyBadge:
  'Privacy-first • Browser-based',
clientSideBadge:
  'Your data stays in your browser whenever possible.',

popularTools: 'Popular Tools',
allTools: 'All Tools',
launchTool: 'Launch Tool',
openTool: 'Open Tool',
back: 'Back',
copy: 'Copy',
copied: 'Copied',
clear: 'Clear',
download: 'Download',
upload: 'Upload',
reset: 'Reset',
generate: 'Generate',
convert: 'Convert',
format: 'Format',
minify: 'Minify',
validate: 'Validate',
encode: 'Encode',
decode: 'Decode',

favorites: 'Favorites',
recentTools: 'Recent Tools',
noFavorites:
  'You have no favorite tools yet.',
noRecentTools:
  'No recently used tools.',

categories: 'Categories',
workstations: 'Workstations',

nav: {
  home: 'Home',
  tools: 'Tools',
  privacy: 'Privacy Policy',
  terms: 'Terms',
  about: 'About',
  contact: 'Contact',
  disclaimer: 'Disclaimer',
},

footer: {
  description:
    'Free, fast, and privacy-first developer tools for everyday coding and web development.',
  privacy: 'Privacy',
  terms: 'Terms',
  about: 'About',
  contact: 'Contact',
  copyright:
    '© 2026 Nova Dev Tools. All rights reserved.',
},

},

bn: {
appName: 'Nova Dev Tools',
appTagline:
'ডেভেলপারদের জন্য ফ্রি অনলাইন টুলস',

heroHeadline:
  'Powerful Developer Tools. Simple Workflow.',
heroSubheadline:
  'Developer, programmer এবং web creator-দের জন্য দ্রুত, ফ্রি ও privacy-first tools।',

searchPlaceholder:
  'Developer tools খুঁজুন...',
searchNoResults:
  'কোনো tool পাওয়া যায়নি।',
searchHint:
  'Tool name, keyword অথবা category দিয়ে search করুন।',

privacyBadge:
  'Privacy-first • Browser-based',
clientSideBadge:
  'সম্ভব হলে আপনার data browser-এর মধ্যেই থাকে।',

popularTools: 'জনপ্রিয় Tools',
allTools: 'সব Tools',
launchTool: 'Tool চালু করুন',
openTool: 'Tool খুলুন',
back: 'ফিরে যান',
copy: 'কপি',
copied: 'কপি হয়েছে',
clear: 'ক্লিয়ার',
download: 'ডাউনলোড',
upload: 'আপলোড',
reset: 'রিসেট',
generate: 'তৈরি করুন',
convert: 'রূপান্তর করুন',
format: 'ফরম্যাট',
minify: 'Minify',
validate: 'Validate',
encode: 'Encode',
decode: 'Decode',

favorites: 'পছন্দের Tools',
recentTools: 'সাম্প্রতিক Tools',
noFavorites:
  'এখনও কোনো favorite tool নেই।',
noRecentTools:
  'সাম্প্রতিক কোনো tool নেই।',

categories: 'Categories',
workstations: 'Workstations',

nav: {
  home: 'হোম',
  tools: 'Tools',
  privacy: 'Privacy Policy',
  terms: 'Terms',
  about: 'About',
  contact: 'Contact',
  disclaimer: 'Disclaimer',
},

footer: {
  description:
    'প্রতিদিনের coding ও web development-এর জন্য ফ্রি, দ্রুত এবং privacy-first developer tools।',
  privacy: 'Privacy',
  terms: 'Terms',
  about: 'About',
  contact: 'Contact',
  copyright:
    '© 2026 Nova Dev Tools. সর্বস্বত্ব সংরক্ষিত।',
},

},

ar: {
appName: 'Nova Dev Tools',
appTagline:
'أدوات مجانية عبر الإنترنت للمطورين',

heroHeadline:
  'أدوات تطوير قوية. سير عمل بسيط.',
heroSubheadline:
  'أدوات سريعة ومجانية تركز على الخصوصية للمطورين والمبرمجين ومنشئي الويب.',

searchPlaceholder:
  'ابحث عن أدوات المطور...',
searchNoResults:
  'لم يتم العثور على أدوات.',
searchHint:
  'ابحث باسم الأداة أو الكلمة المفتاحية أو الفئة.',

privacyBadge:
  'الخصوصية أولاً • تعمل عبر المتصفح',
clientSideBadge:
  'تبقى بياناتك داخل المتصفح كلما أمكن ذلك.',

popularTools: 'الأدوات الشائعة',
allTools: 'جميع الأدوات',
launchTool: 'تشغيل الأداة',
openTool: 'فتح الأداة',
back: 'رجوع',
copy: 'نسخ',
copied: 'تم النسخ',
clear: 'مسح',
download: 'تنزيل',
upload: 'رفع',
reset: 'إعادة تعيين',
generate: 'إنشاء',
convert: 'تحويل',
format: 'تنسيق',
minify: 'ضغط',
validate: 'تحقق',
encode: 'ترميز',
decode: 'فك الترميز',

favorites: 'المفضلة',
recentTools: 'الأدوات الأخيرة',
noFavorites:
  'لا توجد أدوات مفضلة حتى الآن.',
noRecentTools:
  'لا توجد أدوات مستخدمة مؤخرًا.',

categories: 'الفئات',
workstations: 'محطات العمل',

nav: {
  home: 'الرئيسية',
  tools: 'الأدوات',
  privacy: 'سياسة الخصوصية',
  terms: 'الشروط',
  about: 'حول',
  contact: 'اتصل بنا',
  disclaimer: 'إخلاء المسؤولية',
},

footer: {
  description:
    'أدوات تطوير مجانية وسريعة تركز على الخصوصية للاستخدام اليومي في البرمجة وتطوير الويب.',
  privacy: 'الخصوصية',
  terms: 'الشروط',
  about: 'حول',
  contact: 'اتصل بنا',
  copyright:
    '© 2026 Nova Dev Tools. جميع الحقوق محفوظة.',
},

},
};

export const translations: Record<
Language,
TranslationDictionary

«= {
en: {
...baseTranslations.en,
actions: baseActions.en,
toolLabels: toolLabels.en,
qr: commonWorkstations.en.qr,
image: commonWorkstations.en.image,
pdf: commonWorkstations.en.pdf,
career: commonWorkstations.en.career,
utilities:
commonWorkstations.en.utilities,
design:
commonWorkstations.en.design,
calculators:
commonWorkstations.en.calculators,
workstationsData:
commonWorkstations.en.utilities,
toolTitles:
developerToolTitles.en,
toolDescriptions:
developerToolDescriptions.en,
},»

bn: {
...baseTranslations.bn,
actions: baseActions.bn,
toolLabels: toolLabels.bn,
qr: commonWorkstations.bn.qr,
image: commonWorkstations.bn.image,
pdf: commonWorkstations.bn.pdf,
career: commonWorkstations.bn.career,
utilities:
commonWorkstations.bn.utilities,
design:
commonWorkstations.bn.design,
calculators:
commonWorkstations.bn.calculators,
workstationsData:
commonWorkstations.bn.utilities,
toolTitles:
developerToolTitles.bn,
toolDescriptions:
developerToolDescriptions.bn,
},

ar: {
...baseTranslations.ar,
actions: baseActions.ar,
toolLabels: toolLabels.ar,
qr: commonWorkstations.ar.qr,
image: commonWorkstations.ar.image,
pdf: commonWorkstations.ar.pdf,
career: commonWorkstations.ar.career,
utilities:
commonWorkstations.ar.utilities,
design:
commonWorkstations.ar.design,
calculators:
commonWorkstations.ar.calculators,
workstationsData:
commonWorkstations.ar.utilities,
toolTitles:
developerToolTitles.ar,
toolDescriptions:
developerToolDescriptions.ar,
},
};

export function getLocalizedToolName(
toolId: string,
language: Language,
fallback = toolId,
): string {
const dictionary =
developerToolTitles[language] ||
developerToolTitles.en;

return (
dictionary[toolId] ||
developerToolTitles.en[toolId] ||
fallback
);
}

export function getLocalizedToolDesc(
toolId: string,
language: Language,
fallback = '',
): string {
const dictionary =
developerToolDescriptions[language] ||
developerToolDescriptions.en;

return (
dictionary[toolId] ||
developerToolDescriptions.en[toolId] ||
fallback
);
}
