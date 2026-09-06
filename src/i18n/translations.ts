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
    utilities: WorkstationTranslation;
    design: WorkstationTranslation;
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

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    appName: 'Nova Dev Tools',
    tagline: 'Fast, Private Developer Tools',
    heroHeadline: 'Powerful Developer Tools, Directly in Your Browser',
    heroSubheadline:
      'Format, validate, convert, test, generate, and transform developer data with fast client-side tools. Your data stays in your browser.',
    searchPlaceholder: 'Search developer tools...',
    searchModalTitle: 'Search Nova Dev Tools',
    noResultsFound: 'No tools found matching your query.',
    privacyBadge: '100% Client-Side Processing',
    clientSideBadge: 'Your data stays in your browser',
    popularTools: 'Popular Developer Tools',
    allTools: 'All Developer Tools',
    launchTool: 'Launch Tool',
    filterPlaceholder: 'Filter tools in workstation...',
    workstationToolsCount: 'developer tools running directly in your browser.',
    advertisement: 'Advertisement',
    cookieNotice:
      'Nova Dev Tools uses privacy-compliant cookies and Google AdSense to provide free developer utilities while respecting your privacy.',
    accept: 'Accept & Close',

    categories: {
      all: 'All Tools',
      popular: 'Popular',
      image: 'Image Tools',
      pdf: 'PDF Tools',
      qr: 'QR Tools',
      career: 'Career Tools',
      utilities: 'Developer Essentials',
      design: 'Web & Code Tools',
      calculators: 'Calculators',
      ai: 'AI Tools',
    },

    workstations: {
      utilities: {
        name: 'Developer Essentials',
        badge: 'Core Dev Tools',
        description:
          'Essential developer utilities for formatting data, testing patterns, decoding tokens, generating identifiers, creating hashes, and working with cron expressions.',
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
        badge: 'Web Dev Suite',
        description:
          'Practical tools for web developers to format code, compare text, encode HTML entities, inspect HTTP and MIME information, convert number bases, and work with colors.',
        popularFeatures: [
          'SQL Formatter',
          'Diff Checker',
          'HTML Formatter',
          'CSS Formatter',
          'JavaScript Formatter',
          'HTML Entity Encoder',
          'HTTP Status Reference',
          'MIME Type Lookup',
          'JSON Minifier',
          'Text to Slug',
          'Number Base Converter',
          'Color Code Converter',
        ],
      },
    },

    actions: {
      back: 'Back',
      upload: 'Choose File',
      dragDrop: 'Drag and drop your file here, or click to browse',
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

    toolLabels: {
      format: 'Output Format',
      quality: 'Quality',
      width: 'Width (px)',
      height: 'Height (px)',
      maintainAspect: 'Keep Aspect Ratio',
      originalSize: 'Original Size',
      outputSize: 'Output Size',
      reduction: 'Size Reduction',
      overlayPosition: 'Position',
      safeMargin: 'Safe Margin',
      qrSize: 'QR Code Size',
      qrData: 'QR Data',
      qrDataPlaceholder: 'Enter URL, text, phone number, or other data...',
      photoInput: 'Upload Image',
      scanabilityGood: 'Scanability Check: Good contrast and safe margin.',
      scanabilityWarning:
        'Warning: The code size or margin may be too small for reliable scanning.',
      selectProfession: 'Select Profession / Field',
      generateBio: 'Generate Professional Bio',
      uploadPhoto: 'Upload Profile Photo',
    },

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
      rights: 'All rights reserved.',
      privacyNotice:
        'Nova Dev Tools processes supported data directly inside your browser. Your private developer data is not uploaded to our servers for processing.',
      legal: 'Legal & Trust',
      quickLinks: 'Navigation',
      madeForWeb: 'Built for speed, privacy, and modern developers.',
    },

    toolTitles: {
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

    toolDescriptions: {
      'json-formatter':
        'Format, validate, beautify, and inspect JSON data with clear readable structure and error feedback.',
      'regex-tester':
        'Test regular expressions against sample text and inspect matches, groups, and pattern behavior.',
      'jwt-decoder':
        'Decode JSON Web Token header and payload data locally without sending your token to a server.',
      'uuid-generator':
        'Generate unique UUID identifiers quickly for applications, databases, APIs, and development projects.',
      'hash-generator':
        'Generate cryptographic hash values from text using supported hashing algorithms directly in your browser.',
      'cron-expression-generator':
        'Build and understand cron expressions using an interactive schedule builder for automated jobs.',
      'sql-formatter':
        'Format SQL queries into clean, readable, consistently structured code for development and debugging.',
      'diff-checker':
        'Compare two text blocks and clearly identify added, removed, and changed content.',
      'html-formatter':
        'Beautify and format HTML markup into clean, readable, consistently indented code.',
      'css-formatter':
        'Format and beautify CSS code with clean indentation and readable structure.',
      'javascript-formatter':
        'Beautify JavaScript source code into a clean and readable format for development and debugging.',
      'html-entity-encoder':
        'Encode and decode HTML entities to safely represent special characters in web content.',
      'http-status-code-reference':
        'Quickly look up HTTP status codes, their meanings, categories, and common usage.',
      'mime-type-lookup':
        'Find MIME types for common file extensions and identify the correct content type for web applications.',
      'json-minifier':
        'Remove unnecessary whitespace from JSON and produce compact JSON suitable for APIs and storage.',
      'text-to-slug':
        'Convert titles and text into clean URL-friendly slugs for websites, blogs, and applications.',
      'number-base-converter':
        'Convert numbers between binary, octal, decimal, and hexadecimal number systems instantly.',
      'color-code-converter':
        'Convert colors between HEX, RGB, HSL, and other common color formats for web development and design.',
    },
  },

  bn: {
    appName: 'নোভা ডেভ টুলস',
    tagline: 'দ্রুত ও প্রাইভেট ডেভেলপার টুলস',
    heroHeadline: 'শক্তিশালী ডেভেলপার টুলস, সরাসরি আপনার ব্রাউজারে',
    heroSubheadline:
      'ডেভেলপার ডেটা ফরম্যাট, ভ্যালিডেট, কনভার্ট, টেস্ট, জেনারেট এবং ট্রান্সফর্ম করুন দ্রুত ক্লায়েন্ট-সাইড টুল দিয়ে। আপনার ডেটা ব্রাউজারেই থাকে।',
    searchPlaceholder: 'ডেভেলপার টুল খুঁজুন...',
    searchModalTitle: 'নোভা ডেভ টুলস অনুসন্ধান',
    noResultsFound: 'আপনার অনুসন্ধানের সাথে মিলে কোনো টুল পাওয়া যায়নি।',
    privacyBadge: '১০০% ক্লায়েন্ট-সাইড প্রসেসিং',
    clientSideBadge: 'আপনার ডেটা ব্রাউজারেই থাকে',
    popularTools: 'জনপ্রিয় ডেভেলপার টুলস',
    allTools: 'সকল ডেভেলপার টুলস',
    launchTool: 'টুল চালু করুন',
    filterPlaceholder: 'ওয়ার্কস্টেশনে টুল খুঁজুন...',
    workstationToolsCount: 'টি ডেভেলপার টুল সরাসরি আপনার ব্রাউজারে কাজ করে।',
    advertisement: 'বিজ্ঞাপন',
    cookieNotice:
      'নোভা ডেভ টুলস আপনার গোপনীয়তা সম্মান করে বিনামূল্যে ডেভেলপার ইউটিলিটি প্রদান করতে প্রাইভেসি-কমপ্লায়েন্ট কুকিজ এবং Google AdSense ব্যবহার করে।',
    accept: 'সম্মত ও বন্ধ করুন',

    categories: {
      all: 'সকল টুলস',
      popular: 'জনপ্রিয়',
      image: 'ইমেজ টুলস',
      pdf: 'পিডিএফ টুলস',
      qr: 'কিউআর টুলস',
      career: 'ক্যারিয়ার টুলস',
      utilities: 'ডেভেলপার এসেনশিয়াল',
      design: 'ওয়েব ও কোড টুলস',
      calculators: 'ক্যালকুলেটর',
      ai: 'এআই টুলস',
    },

    workstations: {
      utilities: {
        name: 'ডেভেলপার এসেনশিয়াল',
        badge: 'কোর ডেভ টুলস',
        description:
          'ডেটা ফরম্যাট, প্যাটার্ন টেস্ট, টোকেন ডিকোড, ইউনিক আইডি জেনারেট, হ্যাশ তৈরি এবং ক্রন এক্সপ্রেশন ব্যবহারের জন্য প্রয়োজনীয় ডেভেলপার টুলস।',
        popularFeatures: [
          'জেসন ফরম্যাটার',
          'রেজেক্স টেস্টার',
          'JWT ডিকোডার',
          'UUID জেনারেটর',
          'হ্যাশ জেনারেটর',
          'ক্রন এক্সপ্রেশন জেনারেটর',
        ],
      },

      design: {
        name: 'ওয়েব ও কোড টুলস',
        badge: 'ওয়েব ডেভ স্যুট',
        description:
          'ওয়েব ডেভেলপারদের জন্য কোড ফরম্যাট, টেক্সট তুলনা, HTML এনকোড, HTTP ও MIME তথ্য দেখা, নাম্বার বেস কনভার্ট এবং কালার নিয়ে কাজ করার কার্যকর টুলস।',
        popularFeatures: [
          'SQL ফরম্যাটার',
          'ডিফ চেকার',
          'HTML ফরম্যাটার',
          'CSS ফরম্যাটার',
          'JavaScript ফরম্যাটার',
          'HTML Entity Encoder',
          'HTTP Status Reference',
          'MIME Type Lookup',
          'JSON Minifier',
          'Text to Slug',
          'Number Base Converter',
          'Color Code Converter',
        ],
      },
    },

    actions: {
      back: 'ফিরে যান',
      upload: 'ফাইল নির্বাচন করুন',
      dragDrop: 'এখানে ফাইল টেনে আনুন অথবা ব্রাউজ করতে ক্লিক করুন',
      browse: 'ফাইল ব্রাউজ করুন',
      process: 'প্রক্রিয়া করুন',
      processing: 'প্রক্রিয়াকরণ হচ্ছে...',
      download: 'ফলাফল ডাউনলোড করুন',
      reset: 'রিসেট',
      copy: 'ক্লিপবোর্ডে কপি করুন',
      copied: 'কপি হয়েছে!',
      options: 'টুল অপশন',
      preview: 'লাইভ প্রিভিউ',
      result: 'ফলাফল',
      remove: 'মুছে ফেলুন',
      apply: 'পরিবর্তন প্রয়োগ করুন',
      openLink: 'নিরাপদে লিঙ্ক খুলুন',
    },

    toolLabels: {
      format: 'আউটপুট ফরম্যাট',
      quality: 'গুণমান',
      width: 'প্রস্থ (px)',
      height: 'উচ্চতা (px)',
      maintainAspect: 'অনুপাত বজায় রাখুন',
      originalSize: 'মূল সাইজ',
      outputSize: 'আউটপুট সাইজ',
      reduction: 'সাইজ কমেছে',
      overlayPosition: 'পজিশন',
      safeMargin: 'নিরাপদ মার্জিন',
      qrSize: 'QR কোড সাইজ',
      qrData: 'QR ডেটা',
      qrDataPlaceholder: 'URL, টেক্সট, ফোন নম্বর বা অন্য তথ্য লিখুন...',
      photoInput: 'ছবি আপলোড করুন',
      scanabilityGood: 'স্ক্যানাবিলিটি: ভালো কনট্রাস্ট ও নিরাপদ মার্জিন।',
      scanabilityWarning:
        'সতর্কতা: কোডের সাইজ বা মার্জিন খুব ছোট হলে স্ক্যান করতে সমস্যা হতে পারে।',
      selectProfession: 'পেশা / ক্ষেত্র নির্বাচন করুন',
      generateBio: 'প্রফেশনাল বায়ো তৈরি করুন',
      uploadPhoto: 'প্রোফাইল ছবি আপলোড করুন',
    },

    nav: {
      home: 'হোম',
      tools: 'টুলস',
      privacy: 'গোপনীয়তা নীতি',
      terms: 'ব্যবহারের শর্তাবলী',
      about: 'নোভা ডেভ টুলস সম্পর্কে',
      contact: 'যোগাযোগ',
      disclaimer: 'দাবিত্যাগ',
    },

    footer: {
      rights: 'সর্বস্বত্ব সংরক্ষিত।',
      privacyNotice:
        'নোভা ডেভ টুলস সমর্থিত ডেটা সরাসরি আপনার ব্রাউজারে প্রসেস করে। আপনার ব্যক্তিগত ডেভেলপার ডেটা প্রসেসিংয়ের জন্য আমাদের সার্ভারে আপলোড করা হয় না।',
      legal: 'আইন ও নিরাপত্তা',
      quickLinks: 'ন্যাভিগেশন',
      madeForWeb: 'গতি, গোপনীয়তা ও আধুনিক ডেভেলপারদের জন্য তৈরি।',
    },

    toolTitles: {
      'json-formatter': 'জেসন ফরম্যাটার',
      'regex-tester': 'রেজেক্স টেস্টার',
      'jwt-decoder': 'JWT ডিকোডার',
      'uuid-generator': 'UUID জেনারেটর',
      'hash-generator': 'হ্যাশ জেনারেটর',
      'cron-expression-generator': 'ক্রন এক্সপ্রেশন জেনারেটর',
      'sql-formatter': 'SQL ফরম্যাটার',
      'diff-checker': 'ডিফ চেকার',
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

    toolDescriptions: {
      'json-formatter':
        'জেসন ডেটা সুন্দরভাবে ফরম্যাট, ভ্যালিডেট এবং সহজে পড়ার উপযোগী স্ট্রাকচারে দেখুন।',
      'regex-tester':
        'স্যাম্পল টেক্সটের ওপর নিয়মিত এক্সপ্রেশন টেস্ট করুন এবং ম্যাচ ও গ্রুপের ফলাফল দেখুন।',
      'jwt-decoder':
        'কোনো টোকেন সার্ভারে পাঠানো ছাড়াই JWT-এর header এবং payload ব্রাউজারেই ডিকোড করুন।',
      'uuid-generator':
        'অ্যাপ্লিকেশন, ডেটাবেস, API এবং ডেভেলপমেন্ট প্রজেক্টের জন্য দ্রুত ইউনিক UUID তৈরি করুন।',
      'hash-generator':
        'বিভিন্ন সমর্থিত hashing algorithm ব্যবহার করে সরাসরি ব্রাউজারে টেক্সটের cryptographic hash তৈরি করুন।',
      'cron-expression-generator':
        'ইন্টার‍্যাক্টিভ schedule builder ব্যবহার করে automation-এর জন্য cron expression তৈরি ও বুঝুন।',
      'sql-formatter':
        'SQL query-কে পরিষ্কার, সুন্দর এবং consistent structure-এ format করুন।',
      'diff-checker':
        'দুটি text block তুলনা করে কোন অংশ যোগ, বাদ বা পরিবর্তন হয়েছে তা পরিষ্কারভাবে দেখুন।',
      'html-formatter':
        'HTML markup-কে সুন্দর indentation ও পরিষ্কার structure-এ format করুন।',
      'css-formatter':
        'CSS code-কে পরিষ্কার indentation এবং readable structure-এ beautify করুন।',
      'javascript-formatter':
        'JavaScript source code-কে development ও debugging-এর জন্য পরিষ্কার readable format-এ সাজান।',
      'html-entity-encoder':
        'ওয়েব কনটেন্টে special character নিরাপদে ব্যবহারের জন্য HTML entity encode এবং decode করুন।',
      'http-status-code-reference':
        'HTTP status code-এর অর্থ, category এবং সাধারণ ব্যবহার দ্রুত খুঁজে দেখুন।',
      'mime-type-lookup':
        'সাধারণ file extension-এর MIME type খুঁজে বের করুন এবং web application-এর সঠিক content type শনাক্ত করুন।',
      'json-minifier':
        'JSON থেকে অপ্রয়োজনীয় whitespace সরিয়ে API ও storage-এর জন্য compact JSON তৈরি করুন।',
      'text-to-slug':
        'ওয়েবসাইট, blog এবং application-এর জন্য title বা text-কে পরিষ্কার URL-friendly slug-এ রূপান্তর করুন।',
      'number-base-converter':
        'Binary, Octal, Decimal এবং Hexadecimal number system-এর মধ্যে দ্রুত সংখ্যা রূপান্তর করুন।',
      'color-code-converter':
        'Web development ও design-এর জন্য HEX, RGB, HSL এবং অন্যান্য জনপ্রিয় color format-এর মধ্যে রূপান্তর করুন।',
    },
  },

  ar: {
    appName: 'نوفا ديف تولز',
    tagline: 'أدوات مطورين سريعة وخاصة',
    heroHeadline: 'أدوات قوية للمطورين مباشرة داخل متصفحك',
    heroSubheadline:
      'قم بتنسيق بيانات المطورين والتحقق منها وتحويلها واختبارها وتوليدها باستخدام أدوات سريعة تعمل محلياً في المتصفح. بياناتك تبقى داخل متصفحك.',
    searchPlaceholder: 'ابحث عن أدوات المطورين...',
    searchModalTitle: 'البحث في نوفا ديف تولز',
    noResultsFound: 'لم يتم العثور على أدوات تطابق بحثك.',
    privacyBadge: 'معالجة محلية ١٠٠٪',
    clientSideBadge: 'بياناتك تبقى داخل متصفحك',
    popularTools: 'أدوات المطورين الشائعة',
    allTools: 'جميع أدوات المطورين',
    launchTool: 'تشغيل الأداة',
    filterPlaceholder: 'تصفية الأدوات في محطة العمل...',
    workstationToolsCount: 'أداة للمطورين تعمل مباشرة داخل متصفحك.',
    advertisement: 'إعلان',
    cookieNotice:
      'تستخدم نوفا ديف تولز ملفات تعريف ارتباط متوافقة مع الخصوصية وGoogle AdSense لتقديم أدوات مجانية للمطورين مع احترام خصوصيتك.',
    accept: 'موافق وإغلاق',

    categories: {
      all: 'جميع الأدوات',
      popular: 'شائعة',
      image: 'أدوات الصور',
      pdf: 'أدوات PDF',
      qr: 'أدوات QR',
      career: 'أدوات مهنية',
      utilities: 'أساسيات المطورين',
      design: 'أدوات الويب والبرمجة',
      calculators: 'الآلات الحاسبة',
      ai: 'أدوات الذكاء الاصطناعي',
    },

    workstations: {
      utilities: {
        name: 'أساسيات المطورين',
        badge: 'أدوات المطور الأساسية',
        description:
          'أدوات أساسية لتنسيق البيانات واختبار الأنماط وفك الرموز وإنشاء المعرفات الفريدة وتوليد التجزئة والعمل مع تعبيرات Cron.',
        popularFeatures: [
          'منسق JSON',
          'اختبار Regex',
          'فك JWT',
          'مولد UUID',
          'مولد Hash',
          'مولد Cron Expression',
        ],
      },

      design: {
        name: 'أدوات الويب والبرمجة',
        badge: 'حزمة تطوير الويب',
        description:
          'أدوات عملية لمطوري الويب لتنسيق الأكواد ومقارنة النصوص وترميز كيانات HTML وفحص معلومات HTTP وMIME وتحويل أنظمة الأرقام والعمل مع الألوان.',
        popularFeatures: [
          'منسق SQL',
          'مقارن النصوص',
          'منسق HTML',
          'منسق CSS',
          'منسق JavaScript',
          'مُرمّز كيانات HTML',
          'مرجع HTTP Status',
          'البحث عن MIME Type',
          'مصغر JSON',
          'Text to Slug',
          'محول أنظمة الأرقام',
          'محول أكواد الألوان',
        ],
      },
    },

    actions: {
      back: 'رجوع',
      upload: 'اختر ملفاً',
      dragDrop: 'اسحب الملف وأفلته هنا، أو انقر للاستعراض',
      browse: 'استعراض الملفات',
      process: 'معالجة',
      processing: 'جاري المعالجة...',
      download: 'تحميل النتيجة',
      reset: 'إعادة ضبط',
      copy: 'نسخ إلى الحافظة',
      copied: 'تم النسخ!',
      options: 'خيارات الأداة',
      preview: 'معاينة مباشرة',
      result: 'النتيجة',
      remove: 'إزالة',
      apply: 'تطبيق التغييرات',
      openLink: 'فتح الرابط بأمان',
    },

    toolLabels: {
      format: 'صيغة الإخراج',
      quality: 'الجودة',
      width: 'العرض (بكسل)',
      height: 'الارتفاع (بكسل)',
      maintainAspect: 'الحفاظ على تناسق الأبعاد',
      originalSize: 'الحجم الأصلي',
      outputSize: 'حجم الناتج',
      reduction: 'تقليل الحجم',
      overlayPosition: 'الموضع',
      safeMargin: 'الهامش الآمن',
      qrSize: 'حجم رمز QR',
      qrData: 'بيانات QR',
      qrDataPlaceholder: 'أدخل رابطاً أو نصاً أو رقم هاتف أو بيانات أخرى...',
      photoInput: 'رفع صورة',
      scanabilityGood: 'فحص القراءة: تباين جيد وهامش آمن.',
      scanabilityWarning:
        'تنبيه: قد يكون حجم الرمز أو الهامش صغيراً جداً لضمان القراءة الموثوقة.',
      selectProfession: 'اختر المهنة / المجال',
      generateBio: 'إنشاء نبذة مهنية',
      uploadPhoto: 'رفع الصورة الشخصية',
    },

    nav: {
      home: 'الرئيسية',
      tools: 'الأدوات',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      about: 'عن نوفا ديف تولز',
      contact: 'اتصل بنا',
      disclaimer: 'إخلاء المسؤولية',
    },

    footer: {
      rights: 'جميع الحقوق محفوظة.',
      privacyNotice:
        'تقوم نوفا ديف تولز بمعالجة البيانات المدعومة مباشرة داخل متصفحك. لا يتم رفع بيانات المطورين الخاصة بك إلى خوادمنا لمعالجتها.',
      legal: 'الخصوصية والثقة',
      quickLinks: 'التنقل',
      madeForWeb: 'مصمم للسرعة والخصوصية والمطورين العصريين.',
    },

    toolTitles: {
      'json-formatter': 'منسق JSON',
      'regex-tester': 'اختبار Regex',
      'jwt-decoder': 'فك تشفير JWT',
      'uuid-generator': 'مولد UUID',
      'hash-generator': 'مولد Hash',
      'cron-expression-generator': 'مولد Cron Expression',
      'sql-formatter': 'منسق SQL',
      'diff-checker': 'مقارن النصوص',
      'html-formatter': 'منسق HTML',
      'css-formatter': 'منسق CSS',
      'javascript-formatter': 'منسق JavaScript',
      'html-entity-encoder': 'مرمز كيانات HTML',
      'http-status-code-reference': 'مرجع أكواد HTTP',
      'mime-type-lookup': 'البحث عن MIME Type',
      'json-minifier': 'مصغر JSON',
      'text-to-slug': 'محول النص إلى Slug',
      'number-base-converter': 'محول أنظمة الأرقام',
      'color-code-converter': 'محول أكواد الألوان',
    },

    toolDescriptions: {
      'json-formatter':
        'تنسيق والتحقق من بيانات JSON وعرضها في بنية واضحة وسهلة القراءة مع إظهار الأخطاء.',
      'regex-tester':
        'اختبر التعبيرات النمطية مقابل نص تجريبي واعرض المطابقات والمجموعات وسلوك النمط.',
      'jwt-decoder':
        'فك بيانات Header وPayload الخاصة بـ JWT محلياً دون إرسال الرمز المميز إلى خادم.',
      'uuid-generator':
        'إنشاء معرفات UUID فريدة بسرعة للتطبيقات وقواعد البيانات وواجهات API ومشاريع التطوير.',
      'hash-generator':
        'إنشاء قيم Hash تشفيرية من النص باستخدام خوارزميات Hash المدعومة مباشرة داخل متصفحك.',
      'cron-expression-generator':
        'إنشاء وفهم تعبيرات Cron باستخدام أداة تفاعلية لجدولة المهام الآلية.',
      'sql-formatter':
        'تنسيق استعلامات SQL في كود نظيف ومنظم وسهل القراءة للتطوير وتصحيح الأخطاء.',
      'diff-checker':
        'مقارنة نصين وعرض المحتوى المضاف والمحذوف والمتغير بوضوح.',
      'html-formatter':
        'تنسيق HTML وترتيبه بمسافات بادئة واضحة وبنية سهلة القراءة.',
      'css-formatter':
        'تنسيق وتجميل أكواد CSS مع مسافات بادئة وبنية منظمة.',
      'javascript-formatter':
        'تجميل كود JavaScript وتحويله إلى صيغة نظيفة وسهلة القراءة للتطوير وتصحيح الأخطاء.',
      'html-entity-encoder':
        'ترميز وفك ترميز كيانات HTML لتمثيل الأحرف الخاصة بأمان في محتوى الويب.',
      'http-status-code-reference':
        'البحث السريع عن أكواد HTTP ومعانيها وتصنيفاتها واستخداماتها الشائعة.',
      'mime-type-lookup':
        'العثور على MIME Type لامتدادات الملفات الشائعة وتحديد نوع المحتوى المناسب لتطبيقات الويب.',
      'json-minifier':
        'إزالة المسافات غير الضرورية من JSON وإنشاء JSON مضغوط مناسب لواجهات API والتخزين.',
      'text-to-slug':
        'تحويل العناوين والنصوص إلى Slug نظيف ومتوافق مع عناوين URL للمواقع والمدونات والتطبيقات.',
      'number-base-converter':
        'تحويل الأرقام بسرعة بين الأنظمة الثنائية والثمانية والعشرية والسداسية عشرية.',
      'color-code-converter':
        'تحويل الألوان بين HEX وRGB وHSL وتنسيقات الألوان الشائعة الأخرى لتطوير الويب والتصميم.',
    },
  },
};

/**
 * Helper to get localized tool name
 */
export const getLocalizedToolName = (
  toolId: string,
  fallbackName: string,
  lang: Language
): string => {
  const dict = translations[lang] || translations.en;
  return dict.toolTitles[toolId] || fallbackName;
};

/**
 * Helper to get localized tool description
 */
export const getLocalizedToolDesc = (
  toolId: string,
  fallbackDesc: string,
  lang: Language
): string => {
  const dict = translations[lang] || translations.en;
  return dict.toolDescriptions[toolId] || fallbackDesc;
};
