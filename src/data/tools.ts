import { ToolDefinition } from '../types';

export const TOOLS: ToolDefinition[] = [
  // ============================================================
  // WORKSTATION 01
  // DEVELOPER ESSENTIALS
  // ============================================================

  {
    id: 'json-formatter',
    name: 'JSON Formatter & Validator',
    nameKey: 'jsonFormatter',
    description:
      'Format, validate, beautify, and inspect JSON with readable indentation and clear syntax feedback.',
    descKey: 'jsonFormatterDesc',
    category: 'utilities',
    iconName: 'Braces',
    aliases: [
      'json formatter',
      'json beautifier',
      'json validator',
      'json checker',
      'json lint',
      'pretty json',
    ],
    keywords: [
      'json',
      'formatter',
      'validator',
      'beautifier',
      'developer',
      'api',
      'debug',
      'syntax',
    ],
    isPopular: true,
  },

  {
    id: 'regex-tester',
    name: 'Regex Tester',
    nameKey: 'regexTester',
    description:
      'Test regular expressions against sample text with matches, groups, flags, and real-time results.',
    descKey: 'regexTesterDesc',
    category: 'utilities',
    iconName: 'Regex',
    aliases: [
      'regex tester',
      'regular expression tester',
      'regex checker',
      'regexp tester',
      'regex validator',
    ],
    keywords: [
      'regex',
      'regexp',
      'regular expression',
      'pattern',
      'match',
      'groups',
      'developer',
      'validation',
    ],
    isPopular: true,
  },

  {
    id: 'jwt-decoder',
    name: 'JWT Decoder',
    nameKey: 'jwtDecoder',
    description:
      'Decode JSON Web Tokens locally to inspect the header and payload without sending the token to a server.',
    descKey: 'jwtDecoderDesc',
    category: 'utilities',
    iconName: 'KeyRound',
    aliases: [
      'jwt decoder',
      'jwt parser',
      'json web token decoder',
      'token decoder',
      'jwt inspector',
    ],
    keywords: [
      'jwt',
      'token',
      'json web token',
      'authentication',
      'authorization',
      'api',
      'security',
      'decode',
    ],
    isPopular: true,
  },

  {
    id: 'uuid-generator',
    name: 'UUID Generator',
    nameKey: 'uuidGenerator',
    description:
      'Generate random UUIDs for application IDs, database records, APIs, testing, and development workflows.',
    descKey: 'uuidGeneratorDesc',
    category: 'utilities',
    iconName: 'Fingerprint',
    aliases: [
      'uuid generator',
      'guid generator',
      'uuid v4',
      'random uuid',
      'unique id generator',
    ],
    keywords: [
      'uuid',
      'guid',
      'uuid v4',
      'unique id',
      'identifier',
      'developer',
      'testing',
      'api',
    ],
    isPopular: true,
  },

  {
    id: 'hash-generator',
    name: 'Hash Generator',
    nameKey: 'hashGenerator',
    description:
      'Generate cryptographic hashes from text using common hashing algorithms directly in your browser.',
    descKey: 'hashGeneratorDesc',
    category: 'utilities',
    iconName: 'Fingerprint',
    aliases: [
      'hash generator',
      'sha256 generator',
      'sha512 generator',
      'md5 hash',
      'checksum generator',
    ],
    keywords: [
      'hash',
      'sha256',
      'sha512',
      'sha1',
      'md5',
      'checksum',
      'cryptography',
      'security',
    ],
    isPopular: true,
  },

  {
    id: 'cron-expression-generator',
    name: 'Cron Expression Generator',
    nameKey: 'cronGenerator',
    description:
      'Build and understand cron schedules for recurring jobs, automation, servers, and task schedulers.',
    descKey: 'cronGeneratorDesc',
    category: 'utilities',
    iconName: 'Clock3',
    aliases: [
      'cron generator',
      'cron expression',
      'crontab generator',
      'cron builder',
      'schedule expression',
    ],
    keywords: [
      'cron',
      'crontab',
      'scheduler',
      'automation',
      'linux',
      'server',
      'jobs',
      'schedule',
    ],
  },

  // ============================================================
  // WORKSTATION 02
  // WEB & CODE TOOLS
  // ============================================================

  {
    id: 'sql-formatter',
    name: 'SQL Formatter',
    nameKey: 'sqlFormatter',
    description:
      'Format and beautify SQL queries with readable indentation and consistent query structure.',
    descKey: 'sqlFormatterDesc',
    category: 'utilities',
    iconName: 'Database',
    aliases: [
      'sql formatter',
      'sql beautifier',
      'format sql',
      'sql pretty printer',
      'sql code formatter',
    ],
    keywords: [
      'sql',
      'database',
      'query',
      'formatter',
      'mysql',
      'postgresql',
      'developer',
      'code',
    ],
    isPopular: true,
  },

  {
    id: 'diff-checker',
    name: 'Diff Checker',
    nameKey: 'diffChecker',
    description:
      'Compare two blocks of text or code and quickly identify added, removed, and changed lines.',
    descKey: 'diffCheckerDesc',
    category: 'utilities',
    iconName: 'GitCompareArrows',
    aliases: [
      'diff checker',
      'text compare',
      'code compare',
      'difference checker',
      'compare files',
    ],
    keywords: [
      'diff',
      'compare',
      'text',
      'code',
      'git',
      'changes',
      'difference',
      'developer',
    ],
    isPopular: true,
  },

  {
    id: 'html-formatter',
    name: 'HTML Formatter',
    nameKey: 'htmlFormatter',
    description:
      'Beautify and format HTML markup with clean indentation for easier development and debugging.',
    descKey: 'htmlFormatterDesc',
    category: 'utilities',
    iconName: 'Code2',
    aliases: [
      'html formatter',
      'html beautifier',
      'format html',
      'html pretty printer',
    ],
    keywords: [
      'html',
      'formatter',
      'beautifier',
      'markup',
      'frontend',
      'web development',
      'code',
    ],
  },

  {
    id: 'css-formatter',
    name: 'CSS Formatter',
    nameKey: 'cssFormatter',
    description:
      'Format and beautify CSS code with consistent indentation and readable rule structure.',
    descKey: 'cssFormatterDesc',
    category: 'utilities',
    iconName: 'Braces',
    aliases: [
      'css formatter',
      'css beautifier',
      'format css',
      'css pretty printer',
    ],
    keywords: [
      'css',
      'formatter',
      'beautifier',
      'stylesheet',
      'frontend',
      'web development',
      'code',
    ],
  },

  {
    id: 'javascript-formatter',
    name: 'JavaScript Formatter',
    nameKey: 'javascriptFormatter',
    description:
      'Format and beautify JavaScript code for cleaner structure, indentation, and easier debugging.',
    descKey: 'javascriptFormatterDesc',
    category: 'utilities',
    iconName: 'Braces',
    aliases: [
      'javascript formatter',
      'js formatter',
      'js beautifier',
      'format javascript',
      'format js',
    ],
    keywords: [
      'javascript',
      'js',
      'formatter',
      'beautifier',
      'frontend',
      'node',
      'code',
      'developer',
    ],
  },

  {
    id: 'html-entity-encoder',
    name: 'HTML Entity Encoder & Decoder',
    nameKey: 'htmlEntityEncoder',
    description:
      'Encode special characters into HTML entities or decode HTML entities back into readable text.',
    descKey: 'htmlEntityEncoderDesc',
    category: 'utilities',
    iconName: 'CodeXml',
    aliases: [
      'html entity encoder',
      'html entity decoder',
      'html escape',
      'html unescape',
      'html entities',
    ],
    keywords: [
      'html',
      'entity',
      'encode',
      'decode',
      'escape',
      'unescape',
      'web',
      'frontend',
    ],
  },

  {
    id: 'http-status-code-reference',
    name: 'HTTP Status Code Reference',
    nameKey: 'httpStatusReference',
    description:
      'Quickly search and understand HTTP status codes, their meanings, and common API use cases.',
    descKey: 'httpStatusReferenceDesc',
    category: 'utilities',
    iconName: 'Globe',
    aliases: [
      'http status codes',
      'http code reference',
      'status code checker',
      'api status codes',
      'http response codes',
    ],
    keywords: [
      'http',
      'status',
      'api',
      'response',
      '200',
      '404',
      '500',
      'web',
      'developer',
    ],
  },

  {
    id: 'mime-type-lookup',
    name: 'MIME Type Lookup',
    nameKey: 'mimeTypeLookup',
    description:
      'Find common MIME types for file extensions and quickly identify the correct Content-Type value.',
    descKey: 'mimeTypeLookupDesc',
    category: 'utilities',
    iconName: 'FileType2',
    aliases: [
      'mime type lookup',
      'content type lookup',
      'mime checker',
      'file mime type',
      'mime type finder',
    ],
    keywords: [
      'mime',
      'mime type',
      'content type',
      'file extension',
      'http',
      'api',
      'web',
      'server',
    ],
  },

  // ============================================================
  // SUPPORTING DEVELOPER UTILITIES
  // ============================================================

  {
    id: 'json-minifier',
    name: 'JSON Minifier',
    nameKey: 'jsonMinifier',
    description:
      'Remove unnecessary whitespace from JSON to create compact payloads for APIs and production use.',
    descKey: 'jsonMinifierDesc',
    category: 'utilities',
    iconName: 'Minimize2',
    aliases: [
      'json minifier',
      'minify json',
      'compress json',
      'compact json',
    ],
    keywords: [
      'json',
      'minify',
      'compress',
      'api',
      'payload',
      'compact',
      'developer',
    ],
  },

  {
    id: 'text-to-slug',
    name: 'Text to URL Slug',
    nameKey: 'textToSlug',
    description:
      'Convert titles and text into clean, lowercase, URL-friendly slugs for websites and applications.',
    descKey: 'textToSlugDesc',
    category: 'utilities',
    iconName: 'Link',
    aliases: [
      'slug generator',
      'url slug generator',
      'text to slug',
      'seo slug',
      'permalink generator',
    ],
    keywords: [
      'slug',
      'url',
      'seo',
      'permalink',
      'text',
      'website',
      'developer',
      'cms',
    ],
  },

  {
    id: 'number-base-converter',
    name: 'Number Base Converter',
    nameKey: 'numberBaseConverter',
    description:
      'Convert numbers between binary, decimal, hexadecimal, and octal representations.',
    descKey: 'numberBaseConverterDesc',
    category: 'utilities',
    iconName: 'Binary',
    aliases: [
      'binary converter',
      'hex converter',
      'decimal converter',
      'octal converter',
      'base converter',
    ],
    keywords: [
      'binary',
      'decimal',
      'hexadecimal',
      'hex',
      'octal',
      'number base',
      'programming',
      'developer',
    ],
  },

  {
    id: 'color-code-converter',
    name: 'Color Code Converter',
    nameKey: 'colorCodeConverter',
    description:
      'Convert web colors between HEX, RGB, HSL, and common CSS color representations.',
    descKey: 'colorCodeConverterDesc',
    category: 'design',
    iconName: 'Palette',
    aliases: [
      'hex rgb converter',
      'rgb hex converter',
      'hsl converter',
      'css color converter',
      'color converter',
    ],
    keywords: [
      'color',
      'hex',
      'rgb',
      'hsl',
      'css',
      'frontend',
      'web',
      'design',
    ],
  },
];

/**
 * Categories used by the existing Nova Tools navigation system.
 *
 * The actual homepage workstation presentation is handled by
 * the HomePage layer. Keeping the catalogue category stable here
 * prevents unnecessary changes to the existing navigation architecture.
 */
export const CATEGORIES: {
  id: ToolDefinition['category'];
  nameKey: string;
  iconName: string;
}[] = [
  {
    id: 'utilities',
    nameKey: 'utilities',
    iconName: 'Wrench',
  },
  {
    id: 'design',
    nameKey: 'design',
    iconName: 'Palette',
  },
];
