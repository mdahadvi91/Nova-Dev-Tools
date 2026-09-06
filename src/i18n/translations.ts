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
searchToolsPlaceholder: string;
searchNoResults: string;
searchHint: string;

privacyBadge: string;
clientSideBadge: string;
clientSideShort: string;

popularTools: string;
allTools: string;
launchTool: string;
openTool: string;

back: string;
backToHome: string;

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
toolsAvailable: string;
tool: string;
tools: string;

saved: string;
addToFavorites: string;
removeFromFavorites: string;

popular: string;
showAllTools: string;
noToolsFound: string;
noToolsFoundDescription: string;
exploreTools: string;

qr: WorkstationTranslation;
image: WorkstationTranslation;
pdf: WorkstationTranslation;
career: WorkstationTranslation;
calculators: WorkstationTranslation;

utilities: WorkstationTranslation;
design: WorkstationTranslation;

workstations: Record<string, WorkstationTranslation>;
workstationsData: WorkstationTranslation;

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

type ToolId = (typeof TOOL_IDS)[number];

const TOOL_NAMES: Record<Language, Record<ToolId, string>> = {
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

const TOOL_DESCRIPTIONS: Record<Language, Record<ToolId, string>> = {
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

function createToolMap(
language: Language,
): Record<string, LocalizedToolTranslation> {
return TOOL_IDS.reduce(
(result, id) => {
result[id] = {
name: TOOL_NAMES[language][id],
description: TOOL_DESCRIPTIONS[language][id],
};
return result;
},
{} as Record<string, LocalizedToolTranslation>,
);
}

function createWorkstation(
title: string,
badge: string,
description: string,
features: string[],
icon: string,
): WorkstationTranslation {
return {
title,
name: title,
badge,
description,
features,
popularFeatures: features,
icon,
};
}

const workstationTranslations: Record<
Language,
Record<string, WorkstationTranslation>

«= {
en: {
utilities: createWorkstation(
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

design: createWorkstation(
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

network: createWorkstation(
  'Nova Tools Network',
  'NOVA NETWORK',
  'Explore other Nova tool platforms for QR codes, image utilities, PDF tools, and additional browser-based productivity tools.',
  [
    'Nova Tools',
    'Nova QR Code',
    'Connected Nova Sites',
  ],
  'Globe2',
),

},

bn: {
utilities: createWorkstation(
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

design: createWorkstation(
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

network: createWorkstation(
  'Nova Tools Network',
  'NOVA NETWORK',
  'QR code, image utilities, PDF tools এবং অন্যান্য browser-based productivity tools-এর জন্য Nova-এর অন্য platformগুলো দেখুন।',
  [
    'Nova Tools',
    'Nova QR Code',
    'Connected Nova Sites',
  ],
  'Globe2',
),

},

ar: {
utilities: createWorkstation(
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

design: createWorkstation(
  'أدوات الويب والبرمجة',
  'WEB STACK',
  'أدوات عملية لمطوري الواجهة الأمامية والخلفية للعمل مع SQL وHTML وCSS وJavaScript وHTTP وMIME ومقارنة الأكواد.',
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

network: createWorkstation(
  'شبكة Nova Tools',
  'NOVA NETWORK',
  'استكشف منصات Nova الأخرى لأدوات QR والصور وPDF وغيرها من أدوات الإنتاجية التي تعمل عبر المتصفح.',
  [
    'Nova Tools',
    'Nova QR Code',
    'مواقع Nova المتصلة',
  ],
  'Globe2',
),

},
};

function createActions(language: Language) {
const values = {
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
},

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

return values[language];
}

function createToolLabels(language: Language) {
const values = {
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
},

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

return values[language];
}

function createBaseTranslation(
language: Language,
): Omit<
TranslationDictionary,
| 'actions'
| 'toolLabels'
| 'toolTitles'
| 'toolDescriptions'
| 'tools'
| 'workstations'
| 'workstationsData'
| 'utilities'
| 'design'
| 'qr'
| 'image'
| 'pdf'
| 'career'
| 'calculators'

«{
const values = {
en: {
appName: 'Nova Dev Tools',
appTagline: 'Free online tools for developers',»

  heroHeadline: 'Powerful Developer Tools. Simple Workflow.',
  heroSubheadline:
    'Fast, free, and privacy-first tools for developers, programmers, and web creators.',

  searchPlaceholder: 'Search developer tools...',
  searchToolsPlaceholder: 'Search tools...',
  searchNoResults: 'No tools found.',
  searchHint: 'Search by tool name, keyword, or category.',

  privacyBadge: 'Fast, private and browser-based',
  clientSideBadge:
    'Your data stays in your browser whenever possible.',
  clientSideShort: 'Browser-based',

  popularTools: 'Popular Tools',
  allTools: 'All Tools',
  launchTool: 'Launch Tool',
  openTool: 'Open Tool',

  back: 'Back',
  backToHome: 'Back to Home',

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

  categories: 'Categories',
  workstations: 'Workstations',
  toolsAvailable: 'Tools Available',
  tool: 'tool',
  tools: 'tools',

  saved: 'Saved',
  addToFavorites: 'Add to favorites',
  removeFromFavorites: 'Remove from favorites',

  popular: 'Popular',
  showAllTools: 'Show all tools',
  noToolsFound: 'No tools found',
  noToolsFoundDescription:
    'Try another search term or clear the active filters.',
  exploreTools: 'Explore Tools',

  nav: {
    home: 'Home',
    tools: 'Tools',
    privacy: 'Privacy',
    terms: 'Terms',
    about: 'About',
    contact: 'Contact',
    disclaimer: 'Disclaimer',
  },

  footer: {
    description:
      'Free, privacy-first browser tools for developers and digital creators.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    about: 'About',
    contact: 'Contact',
    copyright: '© Nova Dev Tools. All rights reserved.',
  },
},

bn: {
  appName: 'Nova Dev Tools',
  appTagline: 'Developers-এর জন্য ফ্রি online tools',

  heroHeadline: 'Powerful Developer Tools. Simple Workflow.',
  heroSubheadline:
    'Developer, programmer এবং web creator-দের জন্য দ্রুত, ফ্রি এবং privacy-first tools।',

  searchPlaceholder: 'Developer tools সার্চ করুন...',
  searchToolsPlaceholder: 'Tools সার্চ করুন...',
  searchNoResults: 'কোনো tool পাওয়া যায়নি।',
  searchHint: 'Tool name, keyword অথবা category দিয়ে সার্চ করুন।',

  privacyBadge: 'দ্রুত, private এবং browser-based',
  clientSideBadge:
    'সম্ভব হলে আপনার data আপনার browser-এর মধ্যেই থাকে।',
  clientSideShort: 'Browser-based',

  popularTools: 'জনপ্রিয় Tools',
  allTools: 'সব Tools',
  launchTool: 'Tool চালু করুন',
  openTool: 'Tool খুলুন',

  back: 'পেছনে',
  backToHome: 'হোমে ফিরে যান',

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

  favorites: 'পছন্দের',
  recentTools: 'সাম্প্রতিক Tools',
  noFavorites: 'এখনও কোনো favorite tool নেই।',
  noRecentTools: 'কোনো recently used tool নেই।',

  categories: 'Categories',
  workstations: 'Workstations',
  toolsAvailable: 'উপলব্ধ Tools',
  tool: 'টি tool',
  tools: 'টি tools',

  saved: 'Saved',
  addToFavorites: 'Favorites-এ যোগ করুন',
  removeFromFavorites: 'Favorites থেকে সরান',

  popular: 'জনপ্রিয়',
  showAllTools: 'সব Tools দেখুন',
  noToolsFound: 'কোনো tool পাওয়া যায়নি',
  noToolsFoundDescription:
    'অন্য কোনো search term ব্যবহার করুন অথবা active filter clear করুন।',
  exploreTools: 'Tools দেখুন',

  nav: {
    home: 'হোম',
    tools: 'Tools',
    privacy: 'Privacy',
    terms: 'Terms',
    about: 'About',
    contact: 'Contact',
    disclaimer: 'Disclaimer',
  },

  footer: {
    description:
      'Developer এবং digital creator-দের জন্য free ও privacy-first browser tools।',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    about: 'About',
    contact: 'Contact',
    copyright: '© Nova Dev Tools. সর্বস্বত্ব সংরক্ষিত।',
  },
},

ar: {
  appName: 'Nova Dev Tools',
  appTagline: 'أدوات مجانية عبر الإنترنت للمطورين',

  heroHeadline: 'أدوات تطوير قوية. سير عمل بسيط.',
  heroSubheadline:
    'أدوات سريعة ومجانية تركز على الخصوصية للمطورين والمبرمجين ومنشئي الويب.',

  searchPlaceholder: 'ابحث عن أدوات المطورين...',
  searchToolsPlaceholder: 'ابحث عن الأدوات...',
  searchNoResults: 'لم يتم العثور على أدوات.',
  searchHint: 'ابحث باسم الأداة أو الكلمة المفتاحية أو الفئة.',

  privacyBadge: 'سريع وآمن ويعمل داخل المتصفح',
  clientSideBadge:
    'تبقى بياناتك داخل متصفحك كلما أمكن ذلك.',
  clientSideShort: 'داخل المتصفح',

  popularTools: 'الأدوات الشائعة',
  allTools: 'جميع الأدوات',
  launchTool: 'تشغيل الأداة',
  openTool: 'فتح الأداة',

  back: 'رجوع',
  backToHome: 'العودة إلى الرئيسية',

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

  categories: 'الفئات',
  workstations: 'مساحات الأدوات',
  toolsAvailable: 'الأدوات المتاحة',
  tool: 'أداة',
  tools: 'أدوات',

  saved: 'محفوظ',
  addToFavorites: 'إضافة إلى المفضلة',
  removeFromFavorites: 'إزالة من المفضلة',

  popular: 'شائع',
  showAllTools: 'عرض جميع الأدوات',
  noToolsFound: 'لم يتم العثور على أدوات',
  noToolsFoundDescription:
    'جرّب مصطلح بحث آخر أو امسح عوامل التصفية النشطة.',
  exploreTools: 'استكشف الأدوات',

  nav: {
    home: 'الرئيسية',
    tools: 'الأدوات',
    privacy: 'الخصوصية',
    terms: 'الشروط',
    about: 'حول',
    contact: 'اتصل بنا',
    disclaimer: 'إخلاء المسؤولية',
  },

  footer: {
    description:
      'أدوات مجانية تركز على الخصوصية للمطورين ومنشئي المحتوى الرقمي.',
    privacy: 'سياسة الخصوصية',
    terms: 'شروط الخدمة',
    about: 'حول',
    contact: 'اتصل بنا',
    copyright: '© Nova Dev Tools. جميع الحقوق محفوظة.',
  },
},

};

return values[language];
}

function buildTranslation(
language: Language,
): TranslationDictionary {
const base = createBaseTranslation(language);
const workstations =
workstationTranslations[language];

const fallbackWorkstation =
workstations.utilities;

return {
...base,

actions: createActions(language),
toolLabels: createToolLabels(language),

tools: createToolMap(language),

toolTitles: {
  ...TOOL_NAMES[language],
},

toolDescriptions: {
  ...TOOL_DESCRIPTIONS[language],
},

workstations,

workstationsData: fallbackWorkstation,

utilities:
  workstations.utilities,

design:
  workstations.design,

calculators:
  workstations.network,

qr:
  workstations.utilities,

image:
  workstations.design,

pdf:
  workstations.network,

career:
  workstations.network,

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
language: Language,
toolId: string,
fallback = toolId,
): string {
return (
translations[language]?.tools?.[toolId]?.name ||
translations.en?.tools?.[toolId]?.name ||
fallback
);
}

export function getLocalizedToolDesc(
language: Language,
toolId: string,
fallback = '',
): string {
return (
translations[language]?.tools?.[toolId]?.description ||
translations.en?.tools?.[toolId]?.description ||
fallback
);
}
