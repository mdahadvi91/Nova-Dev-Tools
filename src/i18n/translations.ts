import type { Language } from '../types';

export interface WorkstationTranslation {
title: string;
name: string;
badge: string;
description: string;
features: string[];
popularFeatures: string[];
icon?: string;
}

export interface LocalizedToolTranslation {
name: string;
description: string;
}

export interface TranslationDictionary {
appName: string;
appTagline: string;

heroHeadline: string;
heroSubheadline: string;

searchPlaceholder: string;
searchNoResults: string;
searchHint: string;
searchToolsPlaceholder: string;
toolsAvailable: string;

privacyBadge: string;
clientSideBadge: string;
clientSideShort: string;

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
saved: string;
addToFavorites: string;
removeFromFavorites: string;

categories: string;
workstations: string;
tool: string;
tools: string;
popular: string;
showAllTools: string;
noToolsFound: string;
noToolsFoundDescription: string;

qr: WorkstationTranslation;
image: WorkstationTranslation;
pdf: WorkstationTranslation;
career: WorkstationTranslation;

workstationsData: WorkstationTranslation;
utilities: WorkstationTranslation;
design: WorkstationTranslation;
calculators: WorkstationTranslation;

workstations: Record<string, WorkstationTranslation>;
tools: Record<string, LocalizedToolTranslation>;
toolTitles: Record<string, string>;
toolDescriptions: Record<string, string>;

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
}

const developerToolTitles: Record<Language, Record<string, string>> = {
en: {
'json-formatter': 'JSON Formatter',
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
'html-entity-encoder': 'HTML Entity Encoder',
'http-status-code-reference': 'HTTP Status Code Reference',
'mime-type-lookup': 'MIME Type Lookup',
'json-minifier': 'JSON Minifier',
'text-to-slug': 'Text to Slug',
'number-base-converter': 'Number Base Converter',
'color-code-converter': 'Color Code Converter',
},

bn: {
'json-formatter': 'JSON ফরম্যাটার',
'regex-tester': 'Regex টেস্টার',
'jwt-decoder': 'JWT ডিকোডার',
'uuid-generator': 'UUID জেনারেটর',
'hash-generator': 'Hash জেনারেটর',
'cron-expression-generator': 'Cron Expression জেনারেটর',
'sql-formatter': 'SQL ফরম্যাটার',
'diff-checker': 'Diff চেকার',
'html-formatter': 'HTML ফরম্যাটার',
'css-formatter': 'CSS ফরম্যাটার',
'javascript-formatter': 'JavaScript ফরম্যাটার',
'html-entity-encoder': 'HTML Entity Encoder',
'http-status-code-reference': 'HTTP Status Code Reference',
'mime-type-lookup': 'MIME Type Lookup',
'json-minifier': 'JSON Minifier',
'text-to-slug': 'Text to Slug',
'number-base-converter': 'Number Base Converter',
'color-code-converter': 'Color Code Converter',
},

ar: {
'json-formatter': 'منسق JSON',
'regex-tester': 'اختبار Regex',
'jwt-decoder': 'فك تشفير JWT',
'uuid-generator': 'مولد UUID',
'hash-generator': 'مولد Hash',
'cron-expression-generator': 'مولد Cron Expression',
'sql-formatter': 'منسق SQL',
'diff-checker': 'مقارنة النصوص',
'html-formatter': 'منسق HTML',
'css-formatter': 'منسق CSS',
'javascript-formatter': 'منسق JavaScript',
'html-entity-encoder': 'مشفّر HTML Entity',
'http-status-code-reference': 'مرجع أكواد حالة HTTP',
'mime-type-lookup': 'البحث عن MIME Type',
'json-minifier': 'ضغط JSON',
'text-to-slug': 'تحويل النص إلى Slug',
'number-base-converter': 'محول أنظمة الأعداد',
'color-code-converter': 'محول أكواد الألوان',
},
};

const developerToolDescriptions: Record<Language, Record<string, string>> = {
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
},

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
title: 'Developer Essentials',
name: 'Developer Essentials',
badge: 'DEV CORE',
description:
'Essential browser-based tools for everyday development, debugging, APIs, authentication, validation, and backend workflows.',
features: [
'JSON Formatter',
'Regex Tester',
'JWT Decoder',
'UUID Generator',
'Hash Generator',
'Cron Generator',
],
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
  title: 'Web & Code Tools',
  name: 'Web & Code Tools',
  badge: 'WEB STACK',
  description:
    'Practical tools for frontend and backend developers working with SQL, HTML, CSS, JavaScript, HTTP, MIME types, and code comparison.',
  features: [
    'SQL Formatter',
    'Diff Checker',
    'HTML Formatter',
    'CSS Formatter',
    'JavaScript Formatter',
    'HTML Entity Encoder',
    'HTTP Status Codes',
    'MIME Type Lookup',
  ],
  popularFeatures: [
    'SQL Formatter',
    'Diff Checker',
    'HTML Formatter',
    'CSS Formatter',
    'JavaScript Formatter',
    'HTTP Status Codes',
  ],
},

network: {
  title: 'Nova Tools Network',
  name: 'Nova Tools Network',
  badge: 'NOVA NETWORK',
  description:
    'Explore other Nova tool platforms for QR codes, image utilities, PDF tools, and additional browser-based productivity tools.',
  features: [
    'Nova Tools',
    'Nova QR Code',
    'Connected Nova Sites',
  ],
  popularFeatures: [
    'Nova Tools',
    'Nova QR Code',
    'Connected Nova Sites',
  ],
},

calculators: {
  title: 'Nova Tools Network',
  name: 'Nova Tools Network',
  badge: 'NOVA NETWORK',
  description:
    'Explore other Nova tool platforms for QR codes, image utilities, PDF tools, and additional browser-based productivity tools.',
  features: [
    'Nova Tools',
    'Nova QR Code',
    'Connected Nova Sites',
  ],
  popularFeatures: [
    'Nova Tools',
    'Nova QR Code',
    'Connected Nova Sites',
  ],
},

qr: {
  title: 'Developer Essentials',
  name: 'Developer Essentials',
  badge: 'DEV CORE',
  description:
    'Developer-focused utilities for everyday programming and technical workflows.',
  features: [],
  popularFeatures: [],
},

image: {
  title: 'Web & Code Tools',
  name: 'Web & Code Tools',
  badge: 'WEB STACK',
  description:
    'Practical web development and coding utilities.',
  features: [],
  popularFeatures: [],
},

pdf: {
  title: 'Nova Tools Network',
  name: 'Nova Tools Network',
  badge: 'NOVA NETWORK',
  description:
    'Explore connected Nova tool platforms.',
  features: [],
  popularFeatures: [],
},

career: {
  title: 'Nova Tools Network',
  name: 'Nova Tools Network',
  badge: 'NOVA NETWORK',
  description:
    'Explore other Nova tool platforms.',
  features: [],
  popularFeatures: [],
},

},

bn: {
utilities: {
title: 'Developer Essentials',
name: 'Developer Essentials',
badge: 'DEV CORE',
description:
'প্রতিদিনের development, debugging, API, authentication, validation এবং backend কাজের জন্য প্রয়োজনীয় browser-based developer tools।',
features: [
'JSON Formatter',
'Regex Tester',
'JWT Decoder',
'UUID Generator',
'Hash Generator',
'Cron Generator',
],
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
  title: 'Web & Code Tools',
  name: 'Web & Code Tools',
  badge: 'WEB STACK',
  description:
    'SQL, HTML, CSS, JavaScript, HTTP, MIME type এবং code comparison-এর জন্য প্রয়োজনীয় web ও code tools।',
  features: [
    'SQL Formatter',
    'Diff Checker',
    'HTML Formatter',
    'CSS Formatter',
    'JavaScript Formatter',
    'HTML Entity Encoder',
    'HTTP Status Codes',
    'MIME Type Lookup',
  ],
  popularFeatures: [
    'SQL Formatter',
    'Diff Checker',
    'HTML Formatter',
    'CSS Formatter',
    'JavaScript Formatter',
    'HTTP Status Codes',
  ],
},

network: {
  title: 'Nova Tools Network',
  name: 'Nova Tools Network',
  badge: 'NOVA NETWORK',
  description:
    'QR code, image utilities, PDF tools এবং অন্যান্য browser-based productivity tools-এর জন্য Nova-এর অন্য platformগুলো দেখুন।',
  features: [
    'Nova Tools',
    'Nova QR Code',
    'Connected Nova Sites',
  ],
  popularFeatures: [
    'Nova Tools',
    'Nova QR Code',
    'Connected Nova Sites',
  ],
},

calculators: {
  title: 'Nova Tools Network',
  name: 'Nova Tools Network',
  badge: 'NOVA NETWORK',
  description:
    'QR code, image utilities, PDF tools এবং অন্যান্য browser-based productivity tools-এর জন্য Nova-এর অন্য platformগুলো দেখুন।',
  features: [
    'Nova Tools',
    'Nova QR Code',
    'Connected Nova Sites',
  ],
  popularFeatures: [
    'Nova Tools',
    'Nova QR Code',
    'Connected Nova Sites',
  ],
},

qr: {
  title: 'Developer Essentials',
  name: 'Developer Essentials',
  badge: 'DEV CORE',
  description:
    'প্রতিদিনের programming এবং technical workflow-এর জন্য developer-focused tools।',
  features: [],
  popularFeatures: [],
},

image: {
  title: 'Web & Code Tools',
  name: 'Web & Code Tools',
  badge: 'WEB STACK',
  description:
    'Web development এবং coding-এর জন্য প্রয়োজনীয় practical tools।',
  features: [],
  popularFeatures: [],
},

pdf: {
  title: 'Nova Tools Network',
  name: 'Nova Tools Network',
  badge: 'NOVA NETWORK',
  description:
    'সংযুক্ত Nova tool platformগুলো explore করুন।',
  features: [],
  popularFeatures: [],
},

career: {
  title: 'Nova Tools Network',
  name: 'Nova Tools Network',
  badge: 'NOVA NETWORK',
  description:
    'Nova-এর অন্যান্য tool platform explore করুন।',
  features: [],
  popularFeatures: [],
},

},

ar: {
utilities: {
title: 'أساسيات المطور',
name: 'أساسيات المطور',
badge: 'DEV CORE',
description:
'أدوات أساسية داخل المتصفح للتطوير اليومي وتصحيح الأخطاء وواجهات API والمصادقة والتحقق وأعمال الواجهة الخلفية.',
features: [
'منسق JSON',
'اختبار Regex',
'فك تشفير JWT',
'مولد UUID',
'مولد Hash',
'مولد Cron',
],
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
  title: 'أدوات الويب والبرمجة',
  name: 'أدوات الويب والبرمجة',
  badge: 'WEB STACK',
  description:
    'أدوات عملية لمطوري الواجهة الأمامية والخلفية للعمل مع SQL وHTML وCSS وJavaScript وHTTP وMIME ومقارنة الأكواد.',
  features: [
    'منسق SQL',
    'مقارنة الأكواد',
    'منسق HTML',
    'منسق CSS',
    'منسق JavaScript',
    'مشفّر HTML Entity',
    'أكواد حالة HTTP',
    'البحث عن MIME Type',
  ],
  popularFeatures: [
    'منسق SQL',
    'مقارنة الأكواد',
    'منسق HTML',
    'منسق CSS',
    'منسق JavaScript',
    'أكواد حالة HTTP',
  ],
},

network: {
  title: 'شبكة Nova Tools',
  name: 'شبكة Nova Tools',
  badge: 'NOVA NETWORK',
  description:
    'استكشف منصات Nova الأخرى لأدوات QR والصور وPDF وغيرها من أدوات الإنتاجية التي تعمل عبر المتصفح.',
  features: [
    'Nova Tools',
    'Nova QR Code',
    'مواقع Nova المتصلة',
  ],
  popularFeatures: [
    'Nova Tools',
    'Nova QR Code',
    'مواقع Nova المتصلة',
  ],
},

calculators: {
  title: 'شبكة Nova Tools',
  name: 'شبكة Nova Tools',
  badge: 'NOVA NETWORK',
  description:
    'استكشف منصات Nova الأخرى لأدوات QR والصور وPDF وغيرها من أدوات الإنتاجية التي تعمل عبر المتصفح.',
  features: [
    'Nova Tools',
    'Nova QR Code',
    'مواقع Nova المتصلة',
  ],
  popularFeatures: [
    'Nova Tools',
    'Nova QR Code',
    'مواقع Nova المتصلة',
  ],
},

qr: {
  title: 'أساسيات المطور',
  name: 'أساسيات المطور',
  badge: 'DEV CORE',
  description:
    'أدوات مخصصة للمطورين للاستخدام اليومي وسير العمل التقني.',
  features: [],
  popularFeatures: [],
},

image: {
  title: 'أدوات الويب والبرمجة',
  name: 'أدوات الويب والبرمجة',
  badge: 'WEB STACK',
  description:
    'أدوات عملية لتطوير الويب والبرمجة.',
  features: [],
  popularFeatures: [],
},

pdf: {
  title: 'شبكة Nova Tools',
  name: 'شبكة Nova Tools',
  badge: 'NOVA NETWORK',
  description:
    'استكشف منصات Nova المتصلة.',
  features: [],
  popularFeatures: [],
},

career: {
  title: 'شبكة Nova Tools',
  name: 'شبكة Nova Tools',
  badge: 'NOVA NETWORK',
  description:
    'استكشف منصات Nova الأخرى.',
  features: [],
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

const baseToolLabels: Record<
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

interface BaseTranslation {
appName: string;
appTagline: string;
heroHeadline: string;
heroSubheadline: string;
searchPlaceholder: string;
searchNoResults: string;
searchHint: string;
searchToolsPlaceholder: string;
toolsAvailable: string;
privacyBadge: string;
clientSideBadge: string;
clientSideShort: string;
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
saved: string;
addToFavorites: string;
removeFromFavorites: string;
categories: string;
workstations: string;
tool: string;
tools: string;
popular: string;
showAllTools: string;
noToolsFound: string;
noToolsFoundDescription: string;
nav: TranslationDictionary['nav'];
footer: TranslationDictionary['footer'];
}

const baseTranslations: Record<Language, BaseTranslation> = {
en: {
appName: 'Nova Dev Tools',
appTagline: 'Free online tools for developers',

heroHeadline: 'Powerful Developer Tools. Simple Workflow.',
heroSubheadline:
  'Fast, free, and privacy-first tools for developers, programmers, and web creators.',

searchPlaceholder: 'Search developer tools...',
searchNoResults: 'No tools found.',
searchHint: 'Search by tool name, keyword, or category.',
searchToolsPlaceholder: 'Search tools...',
toolsAvailable: 'tools available',

privacyBadge: 'Privacy-first • Browser-based',
clientSideBadge:
  'Your data stays in your browser whenever possible.',
clientSideShort: 'Runs locally in your browser.',

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
noFavorites: 'You have no favorite tools yet.',
noRecentTools: 'No recently used tools.',
saved: 'Saved',
addToFavorites: 'Add to favorites',
removeFromFavorites: 'Remove from favorites',

categories: 'Categories',
workstations: 'Workstations',
tool: 'Tool',
tools: 'Tools',
popular: 'Popular',
showAllTools: 'Show All Tools',
noToolsFound: 'No tools found',
noToolsFoundDescription:
  'Try a different search term or explore another workstation.',

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
  copyright: '© 2026 Nova Dev Tools. All rights reserved.',
},

},

bn: {
appName: 'Nova Dev Tools',
appTagline: 'ডেভেলপারদের জন্য ফ্রি অনলাইন টুলস',

heroHeadline: 'Powerful Developer Tools. Simple Workflow.',
heroSubheadline:
  'Developer, programmer এবং web creator-দের জন্য দ্রুত, ফ্রি ও privacy-first tools।',

searchPlaceholder: 'Developer tools খুঁজুন...',
searchNoResults: 'কোনো tool পাওয়া যায়নি।',
searchHint: 'Tool name, keyword অথবা category দিয়ে search করুন।',
searchToolsPlaceholder: 'Tools খুঁজুন...',
toolsAvailable: 'টি tool available',

privacyBadge: 'Privacy-first • Browser-based',
clientSideBadge:
  'সম্ভব হলে আপনার data browser-এর মধ্যেই থাকে।',
clientSideShort: 'আপনার browser-এর মধ্যেই locally চলে।',

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
noFavorites: 'এখনও কোনো favorite tool নেই।',
noRecentTools: 'সাম্প্রতিক কোনো tool নেই।',
saved: 'Saved',
addToFavorites: 'Favorite-এ যোগ করুন',
removeFromFavorites: 'Favorite থেকে সরান',

categories: 'Categories',
workstations: 'Workstations',
tool: 'Tool',
tools: 'Tools',
popular: 'জনপ্রিয়',
showAllTools: 'সব Tools দেখুন',
noToolsFound: 'কোনো tool পাওয়া যায়নি',
noToolsFoundDescription:
  'অন্য keyword দিয়ে search করুন অথবা অন্য workstation দেখুন।',

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
  copyright: '© 2026 Nova Dev Tools. সর্বস্বত্ব সংরক্ষিত।',
},

},

ar: {
appName: 'Nova Dev Tools',
appTagline: 'أدوات مجانية عبر الإنترنت للمطورين',

heroHeadline: 'أدوات تطوير قوية. سير عمل بسيط.',
heroSubheadline:
  'أدوات سريعة ومجانية تركز على الخصوصية للمطورين والمبرمجين ومنشئي الويب.',

searchPlaceholder: 'ابحث عن أدوات المطور...',
searchNoResults: 'لم يتم العثور على أدوات.',
searchHint: 'ابحث باسم الأداة أو الكلمة المفتاحية أو الفئة.',
searchToolsPlaceholder: 'ابحث عن الأدوات...',
toolsAvailable: 'أدوات متاحة',

privacyBadge: 'الخصوصية أولاً • تعمل عبر المتصفح',
clientSideBadge:
  'تبقى بياناتك داخل المتصفح كلما أمكن ذلك.',
clientSideShort: 'تعمل محليًا داخل متصفحك.',

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
noFavorites: 'لا توجد أدوات مفضلة حتى الآن.',
noRecentTools: 'لا توجد أدوات مستخدمة مؤخرًا.',
saved: 'محفوظ',
addToFavorites: 'إضافة إلى المفضلة',
removeFromFavorites: 'إزالة من المفضلة',

categories: 'الفئات',
workstations: 'محطات العمل',
tool: 'أداة',
tools: 'الأدوات',
popular: 'شائع',
showAllTools: 'عرض جميع الأدوات',
noToolsFound: 'لم يتم العثور على أدوات',
noToolsFoundDescription:
  'جرّب كلمة بحث مختلفة أو استكشف محطة عمل أخرى.',

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

function buildLocalizedTools(
language: Language,
): Record<string, LocalizedToolTranslation> {
const titles =
developerToolTitles[language] ||
developerToolTitles.en;

const descriptions =
developerToolDescriptions[language] ||
developerToolDescriptions.en;

const toolIds = new Set([
...Object.keys(developerToolTitles.en),
...Object.keys(developerToolDescriptions.en),
...Object.keys(titles),
...Object.keys(descriptions),
]);

const tools: Record<
string,
LocalizedToolTranslation

«= {};»

toolIds.forEach((toolId) => {
tools[toolId] = {
name:
titles[toolId] ||
developerToolTitles.en[toolId] ||
toolId,
description:
descriptions[toolId] ||
developerToolDescriptions.en[toolId] ||
'',
};
});

return tools;
}

function buildTranslation(
language: Language,
): TranslationDictionary {
const base =
baseTranslations[language] ||
baseTranslations.en;

const workstationData =
commonWorkstations[language] ||
commonWorkstations.en;

const localizedTools =
buildLocalizedTools(language);

return {
...base,

actions:
  baseActions[language] ||
  baseActions.en,

toolLabels:
  baseToolLabels[language] ||
  baseToolLabels.en,

qr: workstationData.qr,
image: workstationData.image,
pdf: workstationData.pdf,
career: workstationData.career,

utilities: workstationData.utilities,
design: workstationData.design,
calculators: workstationData.calculators,

workstations: {
  utilities: workstationData.utilities,
  design: workstationData.design,
  network: workstationData.network,
},

workstationsData:
  workstationData.utilities,

tools: localizedTools,

toolTitles:
  developerToolTitles[language] ||
  developerToolTitles.en,

toolDescriptions:
  developerToolDescriptions[language] ||
  developerToolDescriptions.en,

};
}

export const translations: Record<
Language,
TranslationDictionary

«= {
en: buildTranslation('en'),
bn: buildTranslation('bn'),
ar: buildTranslation('ar'),
};»

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
