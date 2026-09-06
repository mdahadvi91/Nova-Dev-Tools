import React, {
useCallback,
useMemo,
useState,
} from 'react';

import {
Check,
Copy,
Eraser,
Type,
} from 'lucide-react';

interface TextToolsProps {
toolType:
| 'counter'
| 'case'
| 'cleaner'
| 'markdown';
}

type CopyState = 'idle' | 'success' | 'error';

const textareaClassName =
'w-full p-4 rounded-2xl liquid-glass border border-slate-300 dark:border-slate-700 text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/50 transition-all leading-relaxed resize-y';

const actionButtonClassName =
'px-3 py-1.5 rounded-xl text-xs font-semibold liquid-glass border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-emerald-500/60 hover:bg-slate-100/60 dark:hover:bg-slate-800/60 transition-all active:scale-[0.98]';

const primaryButtonClassName =
'flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md active:scale-[0.98] transition-all';

const escapeHtml = (
value: string,
): string =>
value
.replace(/&/g, '&')
.replace(/</g, '<')
.replace(/>/g, '>')
.replace(/"/g, '"')
.replace(/'/g, ''');

const inlineMarkdownToHtml = (
value: string,
): string => {
let result = escapeHtml(value);

result = result.replace(
/"([^"]+)`/g,
'<code>$1</code>',
);

result = result.replace(
/**([^*]+)**/g,
'<strong>$1</strong>',
);

result = result.replace(
/([^_]+)/g,
'<strong>$1</strong>',
);

result = result.replace(
//([^~]+)//g,
'<del>$1</del>',
);

result = result.replace(
/(^|[\s(])*([^*\n]+)*(?=$|[\s).,!?:;])/g,
'$1<em>$2</em>',
);

result = result.replace(
/(^|[\s(])([^\n]+)_(?=$|[\s).,!?:;])/g,
'$1<em>$2</em>',
);

result = result.replace(
/[([^]]+)]((https?://[^\s)]+))/g,
'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>',
);

return result;
};

const markdownToHtml = (
markdown: string,
): string => {
if (!markdown.trim()) {
return '';
}

const lines = markdown.replace(
/\r\n?/g,
'\n',
).split('\n');

const output: string[] = [];

let inUnorderedList = false;
let inOrderedList = false;
let inCodeBlock = false;
let codeBuffer: string[] = [];

const closeLists = () => {
if (inUnorderedList) {
output.push('</ul>');
inUnorderedList = false;
}

if (inOrderedList) {
  output.push('</ol>');
  inOrderedList = false;
}

};

const closeCodeBlock = () => {
if (!inCodeBlock) {
return;
}

output.push(
  `<pre><code>${escapeHtml(
    codeBuffer.join('\n'),
  )}</code></pre>`,
);

codeBuffer = [];
inCodeBlock = false;

};

for (let index = 0; index < lines.length; index += 1) {
const rawLine = lines[index];
const line = rawLine.trimEnd();

if (line.trim().startsWith('```')) {
  closeLists();

  if (inCodeBlock) {
    closeCodeBlock();
  } else {
    inCodeBlock = true;
    codeBuffer = [];
  }

  continue;
}

if (inCodeBlock) {
  codeBuffer.push(rawLine);
  continue;
}

if (!line.trim()) {
  closeLists();
  continue;
}

const headingMatch =
  line.match(
    /^(#{1,6})\s+(.+)$/,
  );

if (headingMatch) {
  closeLists();

  const level =
    headingMatch[1].length;

  output.push(
    `<h${level}>${inlineMarkdownToHtml(
      headingMatch[2],
    )}</h${level}>`,
  );

  continue;
}

const unorderedMatch =
  line.match(
    /^\s*[-*+]\s+(.+)$/,
  );

if (unorderedMatch) {
  if (inOrderedList) {
    output.push('</ol>');
    inOrderedList = false;
  }

  if (!inUnorderedList) {
    output.push('<ul>');
    inUnorderedList = true;
  }

  output.push(
    `<li>${inlineMarkdownToHtml(
      unorderedMatch[1],
    )}</li>`,
  );

  continue;
}

const orderedMatch =
  line.match(
    /^\s*\d+\.\s+(.+)$/,
  );

if (orderedMatch) {
  if (inUnorderedList) {
    output.push('</ul>');
    inUnorderedList = false;
  }

  if (!inOrderedList) {
    output.push('<ol>');
    inOrderedList = true;
  }

  output.push(
    `<li>${inlineMarkdownToHtml(
      orderedMatch[1],
    )}</li>`,
  );

  continue;
}

const quoteMatch =
  line.match(
    /^\s*>\s?(.*)$/,
  );

if (quoteMatch) {
  closeLists();

  output.push(
    `<blockquote>${inlineMarkdownToHtml(
      quoteMatch[1],
    )}</blockquote>`,
  );

  continue;
}

const horizontalRule =
  /^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(
    line,
  );

if (horizontalRule) {
  closeLists();
  output.push('<hr />');
  continue;
}

const tableSeparator =
  /^\s*\|?(\s*:?-+:?\s*\|)+\s*$/.test(
    line,
  );

if (tableSeparator) {
  continue;
}

const tableMatch =
  line.trim().startsWith('|') &&
  line.trim().endsWith('|');

if (tableMatch) {
  closeLists();

  const cells = line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) =>
      inlineMarkdownToHtml(
        cell.trim(),
      ),
    );

  const isFirstTableRow =
    !output.some((item) =>
      item.startsWith('<table'),
    );

  if (isFirstTableRow) {
    output.push('<table><thead><tr>');

    cells.forEach((cell) => {
      output.push(
        `<th>${cell}</th>`,
      );
    });

    output.push(
      '</tr></thead><tbody>',
    );
  } else {
    output.push('<tr>');

    cells.forEach((cell) => {
      output.push(
        `<td>${cell}</td>`,
      );
    });

    output.push('</tr>');
  }

  continue;
}

closeLists();

const imageMatch =
  line.match(
    /^!([^]*)\](https?:\/\/[^\s)]+)$/,
  );

if (imageMatch) {
  const alt = escapeHtml(
    imageMatch[1],
  );

  const src = escapeHtml(
    imageMatch[2],
  );

  output.push(
    `<img src="${src}" alt="${alt}" loading="lazy" />`,
  );

  continue;
}

output.push(
  `<p>${inlineMarkdownToHtml(
    line,
  )}</p>`,
);

}

closeLists();
closeCodeBlock();

const html = output.join('\n');

return html.replace(
/(<table[\s\S]?</thead>)(?![\s\S]?</tbody>)/,
'$1<tbody>',
);
};

const getWords = (
value: string,
): string[] => {
const trimmed = value.trim();

if (!trimmed) {
return [];
}

return trimmed.split(/\s+/u);
};

const getGraphemeCount = (
value: string,
): number => {
if (!value) {
return 0;
}

if (
typeof Intl !== 'undefined' &&
'Segmenter' in Intl
) {
try {
const Segmenter = (
Intl as typeof Intl & {
Segmenter?: new (
locales?: string | string[],
options?: {
granularity?: string;
},
) => {
segment(
input: string,
): Iterable<unknown>;
};
}
).Segmenter;

  if (Segmenter) {
    const segmenter =
      new Segmenter(
        undefined,
        {
          granularity: 'grapheme',
        },
      );

    return Array.from(
      segmenter.segment(value),
    ).length;
  }
} catch {
  // Fall through to Array.from.
}

}

return Array.from(value).length;
};

const splitWordsForCase = (
value: string,
): string[] =>
value
.trim()
.replace(
/([a-z\d])([A-Z])/g,
'$1 $2',
)
.replace(
/([A-Z]+)([A-Z][a-z])/g,
'$1 $2',
)
.split(/[\s_-./\|,:;()[]{}]+/u)
.map((word) => word.trim())
.filter(Boolean);

const capitalizeWord = (
word: string,
): string => {
if (!word) {
return '';
}

const lower = word.toLocaleLowerCase();

return (
lower.charAt(0).toLocaleUpperCase() +
lower.slice(1)
);
};

export const TextTools: React.FC<
TextToolsProps

«= ({ toolType }) => {
const [text, setText] =
useState(
'Nova Dev Tools is a fast, privacy-first developer toolkit for everyday coding and web development tasks.',
);»

const [copyState, setCopyState] =
useState<CopyState>('idle');

const copyText = useCallback(
async (value: string) => {
if (!value) {
setCopyState('error');

    window.setTimeout(
      () => setCopyState('idle'),
      2000,
    );

    return;
  }

  try {
    await navigator.clipboard.writeText(
      value,
    );

    setCopyState('success');
  } catch {
    setCopyState('error');
  }

  window.setTimeout(
    () => setCopyState('idle'),
    2000,
  );
},
[],

);

const words = useMemo(
() => getWords(text),
[text],
);

const wordCount = words.length;

const charCount = useMemo(
() => getGraphemeCount(text),
[text],
);

const charNoSpaces = useMemo(
() =>
getGraphemeCount(
text.replace(/\s+/gu, ''),
),
[text],
);

const sentenceCount = useMemo(() => {
const trimmed = text.trim();

if (!trimmed) {
  return 0;
}

const matches =
  trimmed.match(
    /[^.!?]+(?:[.!?]+|$)/gu,
  );

return matches
  ? matches.filter((sentence) =>
      sentence.trim(),
    ).length
  : 0;

}, [text]);

const paragraphCount = useMemo(() => {
const trimmed = text.trim();

if (!trimmed) {
  return 0;
}

return trimmed
  .split(/\n\s*\n/gu)
  .filter(Boolean).length;

}, [text]);

const readingTimeMin = Math.max(
1,
Math.ceil(wordCount / 200),
);

const lineCount = text
? text.split(/\r?\n/u).length
: 0;

const toTitleCase = (
value: string,
): string =>
value.replace(
/\p{L}[\p{L}\p{M}\p{N}'’-]*/gu,
(word) =>
capitalizeWord(word),
);

const toCamelCase = (
value: string,
): string => {
const wordsForCase =
splitWordsForCase(value);

if (!wordsForCase.length) {
  return '';
}

return (
  wordsForCase[0].toLocaleLowerCase() +
  wordsForCase
    .slice(1)
    .map(capitalizeWord)
    .join('')
);

};

const toPascalCase = (
value: string,
): string =>
splitWordsForCase(value)
.map(capitalizeWord)
.join('');

const toSnakeCase = (
value: string,
): string =>
splitWordsForCase(value)
.map((word) =>
word.toLocaleLowerCase(),
)
.join('_');

const toKebabCase = (
value: string,
): string =>
splitWordsForCase(value)
.map((word) =>
word.toLocaleLowerCase(),
)
.join('-');

const toConstantCase = (
value: string,
): string =>
splitWordsForCase(value)
.map((word) =>
word.toLocaleUpperCase(),
)
.join('_');

const removeExtraSpaces = useCallback(
() => {
setText((current) =>
current
.replace(/[ \t]+/gu, ' ')
.replace(
/^[ \t]+|[ \t]+$/gmu,
'',
),
);
},
[],
);

const removeEmptyLines = useCallback(
() => {
setText((current) =>
current
.split(/\r?\n/u)
.filter(
(line) =>
line.trim().length > 0,
)
.join('\n'),
);
},
[],
);

const removeDuplicateLines =
useCallback(() => {
setText((current) => {
const lines =
current.split(/\r?\n/u);

    const seen = new Set<string>();

    const uniqueLines =
      lines.filter((line) => {
        const normalized =
          line.trim();

        if (
          seen.has(normalized)
        ) {
          return false;
        }

        seen.add(normalized);

        return true;
      });

    return uniqueLines.join('\n');
  });
}, []);

const trimLines = useCallback(() => {
setText((current) =>
current
.split(/\r?\n/u)
.map((line) => line.trim())
.join('\n'),
);
}, []);

const collapseLineBreaks =
useCallback(() => {
setText((current) =>
current
.replace(
/\n{3,}/gu,
'\n\n',
)
.trim(),
);
}, []);

const reverseText = useCallback(() => {
setText((current) =>
Array.from(current)
.reverse()
.join(''),
);
}, []);

const markdownHtml = useMemo(
() => markdownToHtml(text),
[text],
);

const markdownPreview = useMemo(
() => {
if (!markdownHtml) {
return (
'<p>Start writing Markdown to see the live preview.</p>'
);
}

  return markdownHtml;
},
[markdownHtml],

);

const markdownCopyValue =
markdownHtml;

const copyLabel =
copyState === 'success'
? 'Copied'
: copyState === 'error'
? 'Copy Failed'
: 'Copy';

return (
<div className="space-y-6">
{/* WORD & CHARACTER COUNTER */}
{toolType === 'counter' && (
<div className="space-y-5">
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
<div className="p-4 rounded-2xl liquid-glass border border-slate-200 dark:border-slate-700 text-center">
<span className="text-2xl font-extrabold text-slate-900 dark:text-white">
{wordCount}
</span>

          <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mt-1">
            Words
          </p>
        </div>

        <div className="p-4 rounded-2xl liquid-glass border border-slate-200 dark:border-slate-700 text-center">
          <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
            {charCount}
          </span>

          <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mt-1">
            Characters
          </p>
        </div>

        <div className="p-4 rounded-2xl liquid-glass border border-slate-200 dark:border-slate-700 text-center">
          <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
            {charNoSpaces}
          </span>

          <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mt-1">
            No Spaces
          </p>
        </div>

        <div className="p-4 rounded-2xl liquid-glass border border-slate-200 dark:border-slate-700 text-center">
          <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
            {sentenceCount}
          </span>

          <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mt-1">
            Sentences
          </p>
        </div>

        <div className="p-4 rounded-2xl liquid-glass border border-slate-200 dark:border-slate-700 text-center">
          <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
            {paragraphCount}
          </span>

          <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mt-1">
            Paragraphs
          </p>
        </div>

        <div className="p-4 rounded-2xl liquid-glass border border-emerald-500/20 bg-emerald-500/5 text-center">
          <span className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">
            ~{readingTimeMin}m
          </span>

          <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mt-1">
            Reading
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 text-[11px] text-slate-500">
        <span>
          {lineCount} line
          {lineCount === 1
            ? ''
            : 's'}
        </span>

        <span>
          Reading speed: ~200
          words/minute
        </span>
      </div>

      <textarea
        rows={12}
        value={text}
        onChange={(event) =>
          setText(
            event.target.value,
          )
        }
        spellCheck
        placeholder="Type or paste text to analyze..."
        className={textareaClassName}
      />
    </div>
  )}

  {/* CASE CONVERTER */}
  {toolType === 'case' && (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() =>
            setText((value) =>
              value.toLocaleUpperCase(),
            )
          }
          className={
            actionButtonClassName
          }
        >
          UPPERCASE
        </button>

        <button
          type="button"
          onClick={() =>
            setText((value) =>
              value.toLocaleLowerCase(),
            )
          }
          className={
            actionButtonClassName
          }
        >
          lowercase
        </button>

        <button
          type="button"
          onClick={() =>
            setText(toTitleCase(text))
          }
          className={
            actionButtonClassName
          }
        >
          Title Case
        </button>

        <button
          type="button"
          onClick={() =>
            setText(
              toCamelCase(text),
            )
          }
          className={
            actionButtonClassName
          }
        >
          camelCase
        </button>

        <button
          type="button"
          onClick={() =>
            setText(
              toPascalCase(text),
            )
          }
          className={
            actionButtonClassName
          }
        >
          PascalCase
        </button>

        <button
          type="button"
          onClick={() =>
            setText(
              toSnakeCase(text),
            )
          }
          className={
            actionButtonClassName
          }
        >
          snake_case
        </button>

        <button
          type="button"
          onClick={() =>
            setText(
              toKebabCase(text),
            )
          }
          className={
            actionButtonClassName
          }
        >
          kebab-case
        </button>

        <button
          type="button"
          onClick={() =>
            setText(
              toConstantCase(text),
            )
          }
          className={
            actionButtonClassName
          }
        >
          CONSTANT_CASE
        </button>
      </div>

      <textarea
        rows={12}
        value={text}
        onChange={(event) =>
          setText(
            event.target.value,
          )
        }
        spellCheck={false}
        placeholder="Enter text to convert..."
        className={textareaClassName}
      />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-[11px] text-slate-500">
          {getGraphemeCount(text)}{' '}
          characters
        </span>

        <button
          type="button"
          onClick={() =>
            copyText(text)
          }
          className={
            primaryButtonClassName
          }
        >
          {copyState ===
          'success' ? (
            <Check className="w-3.5 h-3.5" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}

          <span>
            {copyState ===
            'success'
              ? 'Copied to Clipboard'
              : copyState === 'error'
                ? 'Copy Failed'
                : 'Copy Converted Text'}
          </span>
        </button>
      </div>
    </div>
  )}

  {/* TEXT CLEANER */}
  {toolType === 'cleaner' && (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={
            removeExtraSpaces
          }
          className={
            actionButtonClassName
          }
        >
          Remove Extra Spaces
        </button>

        <button
          type="button"
          onClick={
            removeEmptyLines
          }
          className={
            actionButtonClassName
          }
        >
          Remove Empty Lines
        </button>

        <button
          type="button"
          onClick={
            removeDuplicateLines
          }
          className={
            actionButtonClassName
          }
        >
          Remove Duplicate Lines
        </button>

        <button
          type="button"
          onClick={trimLines}
          className={
            actionButtonClassName
          }
        >
          Trim Lines
        </button>

        <button
          type="button"
          onClick={
            collapseLineBreaks
          }
          className={
            actionButtonClassName
          }
        >
          Normalize Breaks
        </button>

        <button
          type="button"
          onClick={reverseText}
          className={
            actionButtonClassName
          }
        >
          Reverse Text
        </button>
      </div>

      <textarea
        rows={12}
        value={text}
        onChange={(event) =>
          setText(
            event.target.value,
          )
        }
        spellCheck={false}
        placeholder="Paste text to clean..."
        className={textareaClassName}
      />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-[11px] text-slate-500">
          <Eraser className="w-3.5 h-3.5" />

          <span>
            {wordCount} words ·{' '}
            {charCount} characters
          </span>
        </div>

        <button
          type="button"
          onClick={() =>
            copyText(text)
          }
          className={
            primaryButtonClassName
          }
        >
          {copyState ===
          'success' ? (
            <Check className="w-3.5 h-3.5" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}

          <span>
            {copyState ===
            'success'
              ? 'Copied'
              : copyState === 'error'
                ? 'Copy Failed'
                : 'Copy Cleaned Text'}
          </span>
        </button>
      </div>
    </div>
  )}

  {/* MARKDOWN PREVIEW */}
  {toolType === 'markdown' && (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Type className="w-3.5 h-3.5" />
              Markdown Editor
            </span>

            <span className="text-[10px] text-slate-400">
              {wordCount} words
            </span>
          </div>

          <textarea
            rows={16}
            value={text}
            onChange={(event) =>
              setText(
                event.target.value,
              )
            }
            spellCheck={false}
            placeholder={`# Hello Nova

Write Markdown here.

- Fast

- Private

- Browser-based"} className={"${textareaClassName} font-mono text-xs min-h-[320px]`}
  />
  </div>
  
        <div className="space-y-2">
        <div className="flex flex-wrap justify-between items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Live Preview
          </span>

          <button
            type="button"
            onClick={() =>
              copyText(
                markdownCopyValue,
              )
            }
            className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
          >
            {copyState ===
            'success' ? (
              <Check className="w-3 h-3" />
            ) : (
              <Copy className="w-3 h-3" />
            )}

            {copyLabel} HTML
          </button>
        </div>

        <div
          className="p-5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 min-h-[320px] overflow-auto text-sm text-slate-800 dark:text-slate-200"
          dangerouslySetInnerHTML={{
            __html: markdownPreview,
          }}
        />
      </div>
    </div>

    <div className="flex items-center gap-2 text-[11px] text-slate-500">
      <Type className="w-3.5 h-3.5" />

      <span>
        Markdown is parsed locally
        in your browser. Links open
        in a new tab.
      </span>
    </div>
  </div>
)}
  
    </div>
);

};
