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

utilities: WorkstationTranslation;
design: WorkstationTranslation;
calculators: WorkstationTranslation;

workstationsData: WorkstationTranslation;
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

const TOOL_IDS = [
'json-formatter',
'regex-tester',
'jwt-decoder',
'uuid-generator',
'hash-generator',
'cron-expression-generator',
'sql-formatter',
'diff-checker',
'html-formatter',
'css-formatter',
'javascript-formatter',
'html-entity-encoder',
'http-status-code-reference',
'mime-type-lookup',
'json-minifier',
'text-to-slug',
'number-base-converter',
'color-code-converter',
] as const;

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
},»

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

const developerToolDescriptions: Record<
Language,
Record<string, string>

«= {
en: {
'json-formatter':
'Format, validate, beautify, and inspect JSON data directly in your browser.',
'regex-tester':
'Test regular expressions against sample text with fast and clear matching results.',
'jwt-decoder':
'Decode JWT header and payload data locally without sending the token to a server.',
'uuid-generator':
'Generate unique UUID values for applications, databases, APIs, testing, and development.',
'hash-generator':
'Generate cryptographic hashes from text using common hashing algorithms in your browser.',
'cron-expression-generator':
'Create and understand cron expressions for scheduled jobs and automation.',
'sql-formatter':
'Format SQL queries into clean and readable code for database development.',
'diff-checker':
'Compare two text or code inputs and quickly identify their differences.',
'html-formatter':
'Beautify and organize HTML markup into a clean, readable structure.',
'css-formatter':
'Format CSS code into a clean and consistent structure.',
'javascript-formatter':
'Format JavaScript code into readable and organized source code.',
'html-entity-encoder':
'Encode and decode HTML entities for safe and correct HTML text handling.',
'http-status-code-reference':
'Look up HTTP status codes, meanings, and common use cases quickly.',
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
'Application, database, API, testing এবং development-এর জন্য unique UUID তৈরি করুন।',
'hash-generator':
'Browser-এর মধ্যেই text থেকে cryptographic hash তৈরি করুন।',
'cron-expression-generator':
'Scheduled job এবং automation-এর জন্য সহজে Cron expression তৈরি ও বুঝুন।',
'sql-formatter':
'SQL query-কে পরিষ্কার ও readable code structure-এ format করুন।',
'diff-checker':
'দুটি text বা code compare করে তাদের পার্থক্য দ্রুত শনাক্ত করুন।',
'html-formatter':
'HTML markup-কে পরিষ্কার এবং readable structure-এ format করুন।',
'css-formatter':
'CSS code-কে clean এবং consistent structure-এ সাজান।',
'javascript-formatter':
'JavaScript code-কে readable এবং organized source code-এ format করুন।',
'html-entity-encoder':
'HTML entity encode ও decode করে HTML text সঠিকভাবে handle করুন।',
'http-status-code-reference':
'HTTP status code, তাদের অর্থ এবং সাধারণ ব্যবহার দ্রুত খুঁজে দেখুন।',
'mime-type-lookup':
'সাধারণ MIME type এবং সংশ্লিষ্ট file extension খুঁজে নিন।',
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
'اختبر التعبيرات النمطية مقابل النصوص مع نتائج مطابقة واضحة وسريعة.',
'jwt-decoder':
'فك ترميز رأس وبيانات JWT محليًا دون إرسال الرمز إلى خادم.',
'uuid-generator':
'إنشاء UUIDs فريدة للتطبيقات وقواعد البيانات وواجهات API والاختبار والتطوير.',
'hash-generator':
'إنشاء Hash تشفيرية من النصوص باستخدام خوارزميات شائعة داخل المتصفح.',
'cron-expression-generator':
'إنشاء وفهم تعبيرات Cron للمهام المجدولة والأتمتة.',
'sql-formatter':
'تنسيق استعلامات SQL إلى كود واضح وسهل القراءة.',
'diff-checker':
'مقارنة نصين أو مقطعين من التعليمات البرمجية وتحديد الاختلافات بسرعة.',
'html-formatter':
'تنسيق وترتيب HTML في بنية نظيفة وسهلة القراءة.',
'css-formatter':
'تنسيق CSS في بنية نظيفة ومتناسقة.',
'javascript-formatter':
'تنسيق JavaScript إلى كود منظم وسهل القراءة.',
'html-entity-encoder':
'ترميز وفك ترميز كيانات HTML للتعامل الصحيح مع النصوص.',
'http-status-code-reference':
'البحث السريع عن أكواد حالة HTTP ومعانيها واستخداماتها.',
'mime-type-lookup':
'العثور على أنواع MIME الشائعة وامتدادات الملفات المرتبطة بها.',
'json-minifier':
'إزالة المسافات غير الضرورية من JSON وإنشاء مخرجات مضغوطة.',
'text-to-slug':
'تحويل النص إلى Slug نظيف ومتوافق مع عناوين URL.',
'number-base-converter':
'تحويل الأرقام بين الأنظمة الثنائية والثمانية والعشرية والسداسية عشرية وغيرها.',
'color-code-converter':
'تحويل الألوان بين HEX وRGB وHSL وتنسيقات ألوان الويب الشائعة.',
},
};

function workstation(
title: string,
badge: string,
description: string,
features: string[],
icon?: string,
): WorkstationTranslation {
return {
title,
name: title,
badge,
description,
features,
popularFeatures: features,
...(icon ? { icon } : {}),
};
}

const workstationTranslations: Record<
Language,
Record<string, WorkstationTranslation>

«= {
en: {
utilities: workstation(
'Developer Essentials',
'DEV CORE',
'Essential browser-based tools for everyday development, debugging, APIs, authentication, validation, and backend workflows.',
[
'JSON Formatter',
'Regex Tester',
'JWT Decoder',
'UUID Generator',
'Hash Generator',
'Cron Generator',
],
'TerminalSquare',
),»

design: workstation(
  'Web & Code Tools',
  'WEB STACK',
  'Practical tools for frontend and backend developers working with SQL, HTML, CSS, JavaScript, HTTP, MIME types, and code comparison.',
  [
    'SQL Formatter',
    'Diff Checker',
    'HTML Formatter',
    'CSS Formatter',
    'JavaScript Formatter',
    'HTML Entity Encoder',
    'HTTP Status Codes',
    'MIME Type Lookup',
  ],
  'Code2',
),

network: workstation(
  'Nova Tools Network',
  'NOVA NETWORK',
  'Explore connected Nova platforms for QR codes, image utilities, PDF tools, and other browser-based productivity tools.',
  [
    'Nova Tools',
    'Nova QR Code',
  ],
  'Globe2',
),

},

bn: {
utilities: workstation(
'Developer Essentials',
'DEV CORE',
'প্রতিদিনের development, debugging, API, authentication, validation এবং backend কাজের জন্য প্রয়োজনীয় browser-based developer tools।',
[
'JSON Formatter',
'Regex Tester',
'JWT Decoder',
'UUID Generator',
'Hash Generator',
'Cron Generator',
],
'TerminalSquare',
),

design: workstation(
  'Web & Code Tools',
  'WEB STACK',
  'SQL, HTML, CSS, JavaScript, HTTP, MIME type এবং code comparison-এর জন্য প্রয়োজনীয় web ও code tools।',
  [
    'SQL Formatter',
    'Diff Checker',
    'HTML Formatter',
    'CSS Formatter',
    'JavaScript Formatter',
    'HTML Entity Encoder',
    'HTTP Status Codes',
    'MIME Type Lookup',
  ],
  'Code2',
),

network: workstation(
  'Nova Tools Network',
  'NOVA NETWORK',
  'QR code, image utilities, PDF tools এবং অন্যান্য browser-based productivity tools-এর জন্য Nova-এর সংযুক্ত platformগুলো দেখুন।',
  [
    'Nova Tools',
    'Nova QR Code',
  ],
  'Globe2',
),

},

ar: {
utilities: workstation(
'أساسيات المطور',
'DEV CORE',
'أدوات أساسية داخل المتصفح للتطوير اليومي وتصحيح الأخطاء وواجهات API والمصادقة والتحقق وأعمال الواجهة الخلفية.',
[
'منسق JSON',
'اختبار Regex',
'فك تشفير JWT',
'مولد UUID',
'مولد Hash',
'مولد Cron',
],
'TerminalSquare',
),

design: workstation(
  'أدوات الويب والبرمجة',
  'WEB STACK',
  'أدوات عملية للعمل مع SQL وHTML وCSS وJavaScript وHTTP وMIME ومقارنة الأكواد.',
  [
    'منسق SQL',
    'مقارنة الأكواد',
    'منسق HTML',
    'منسق CSS',
    'منسق JavaScript',
    'مشفّر HTML Entity',
    'أكواد حالة HTTP',
    'البحث عن MIME Type',
  ],
  'Code2',
),

network: workstation(
  'شبكة Nova Tools',
  'NOVA NETWORK',
  'استكشف منصات Nova المتصلة لأدوات QR والصور وPDF وغيرها من أدوات الإنتاجية عبر المتصفح.',
  [
    'Nova Tools',
    'Nova QR Code',
  ],
  'Globe2',
),

},
};

const actions: Record<
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
| 'qr'
| 'image'
| 'pdf'
| 'career'
| 'utilities'
| 'design'
| 'calculators'
| 'workstationsData'
| 'workstations'
| 'tools'
| 'toolTitles'
| 'toolDescriptions'

«= {
en: {
appName: 'Nova Dev Tools',
appTagline: 'Free online tools for developers',»

heroHeadline:
  'Powerful Developer Tools. Simple Workflow.',
heroSubheadline:
  'Fast, free, and privacy-first tools for developers, programmers, and web creators.',

searchPlaceholder: 'Search developer tools...',
searchNoResults: 'No tools found.',
searchHint:
  'Search by tool name, keyword, or category.',
searchToolsPlaceholder: 'Search tools...',
toolsAvailable: 'tools available',

privacyBadge:
  'Privacy-first • Browser-based',
clientSideBadge:
  'Your data stays in your browser whenever possible.',
clientSideShort:
  'Runs locally in your browser.',

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
saved: 'Saved',
addToFavorites: 'Add to favorites',
removeFromFavorites:
  'Remove from favorites',

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
searchToolsPlaceholder:
  'Tools খুঁজুন...',
toolsAvailable:
  'টি tool available',

privacyBadge:
  'Privacy-first • Browser-based',
clientSideBadge:
  'সম্ভব হলে আপনার data browser-এর মধ্যেই থাকে।',
clientSideShort:
  'আপনার browser-এর মধ্যেই locally চলে।',

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
saved: 'Saved',
addToFavorites:
  'Favorite-এ যোগ করুন',
removeFromFavorites:
  'Favorite থেকে সরান',

categories: 'Categories',
workstations: 'Workstations',
tool: 'Tool',
tools: 'Tools',
popular: 'জনপ্রিয়',
showAllTools: 'সব Tools দেখুন',
noToolsFound:
  'কোনো tool পাওয়া যায়নি',
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
searchToolsPlaceholder:
  'ابحث عن الأدوات...',
toolsAvailable:
  'أدوات متاحة',

privacyBadge:
  'الخصوصية أولاً • تعمل عبر المتصفح',
clientSideBadge:
  'تبقى بياناتك داخل المتصفح كلما أمكن ذلك.',
clientSideShort:
  'تعمل محليًا داخل متصفحك.',

popularTools:
  'الأدوات الشائعة',
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
saved: 'محفوظ',
addToFavorites:
  'إضافة إلى المفضلة',
removeFromFavorites:
  'إزالة من المفضلة',

categories: 'الفئات',
workstations: 'محطات العمل',
tool: 'أداة',
tools: 'الأدوات',
popular: 'شائع',
showAllTools:
  'عرض جميع الأدوات',
noToolsFound:
  'لم يتم العثور على أدوات',
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

const result: Record<
string,
LocalizedToolTranslation

«= {};»

TOOL_IDS.forEach((toolId) => {
result[toolId] = {
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

return result;
}

function legacyWorkstation(
title: string,
badge: string,
description: string,
): WorkstationTranslation {
return workstation(
title,
badge,
description,
[],
);
}

function buildTranslation(
language: Language,
): TranslationDictionary {
const base =
baseTranslations[language] ||
baseTranslations.en;

const workstationSet =
workstationTranslations[language] ||
workstationTranslations.en;

const localizedTools =
buildLocalizedTools(language);

const utilities =
workstationSet.utilities;

const design =
workstationSet.design;

const network =
workstationSet.network;

return {
...base,

actions:
  actions[language] ||
  actions.en,

toolLabels:
  toolLabels[language] ||
  toolLabels.en,

qr: legacyWorkstation(
  utilities.title,
  utilities.badge,
  utilities.description,
),

image: legacyWorkstation(
  design.title,
  design.badge,
  design.description,
),

pdf: legacyWorkstation(
  network.title,
  network.badge,
  network.description,
),

career: legacyWorkstation(
  network.title,
  network.badge,
  network.description,
),

utilities,
design,

calculators:
  legacyWorkstation(
    network.title,
    network.badge,
    network.description,
  ),

workstationsData: utilities,

workstations: {
  utilities,
  design,
  network,
},

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
