import React, { useMemo, useState } from 'react';
import { Check, Copy, Eraser, Type } from 'lucide-react';

type ToolType = 'counter' | 'case' | 'cleaner' | 'markdown';

interface TextToolsProps {
  toolType: ToolType;
}

const cardClass =
  'rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-xl';

const buttonClass =
  'inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-50';

const textareaClass =
  'min-h-[260px] w-full resize-y rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white outline-none placeholder:text-white/40 focus:border-white/25';

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const splitWords = (value: string): string[] =>
  value
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .split(/[\s_.|,:;()[\]{}\/-]+/u)
    .filter(Boolean);

const toTitleCase = (value: string): string =>
  splitWords(value)
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
    )
    .join(' ');

const toSentenceCase = (value: string): string => {
  const lower = value.toLowerCase();

  return lower.replace(
    /(^\s*[a-z])|([.!?]\s+[a-z])/g,
    (match) => match.toUpperCase(),
  );
};

const toCamelCase = (value: string): string => {
  const words = splitWords(value);

  return words
    .map((word, index) => {
      const lower = word.toLowerCase();

      if (index === 0) {
        return lower;
      }

      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join('');
};

const toPascalCase = (value: string): string =>
  splitWords(value)
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
    )
    .join('');

const toSnakeCase = (value: string): string =>
  splitWords(value)
    .map((word) => word.toLowerCase())
    .join('_');

const toKebabCase = (value: string): string =>
  splitWords(value)
    .map((word) => word.toLowerCase())
    .join('-');

const toConstantCase = (value: string): string =>
  splitWords(value)
    .map((word) => word.toUpperCase())
    .join('_');

const markdownToHtml = (markdown: string): string => {
  if (!markdown.trim()) {
    return '';
  }

  const lines = markdown.replace(/\r\n?/g, '\n').split('\n');
  const html: string[] = [];

  let inCodeBlock = false;
  let codeLanguage = '';
  let codeLines: string[] = [];
  let unorderedListOpen = false;
  let orderedListOpen = false;

  const closeLists = () => {
    if (unorderedListOpen) {
      html.push('</ul>');
      unorderedListOpen = false;
    }

    if (orderedListOpen) {
      html.push('</ol>');
      orderedListOpen = false;
    }
  };

  const inlineMarkdown = (input: string): string => {
    let result = escapeHtml(input);

    result = result.replace(
      /`([^`]+)`/g,
      '<code class="rounded bg-black/30 px-1.5 py-0.5">$1</code>',
    );

    result = result.replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="underline">$1</a>',
    );

    result = result.replace(
      /\*\*([^*]+)\*\*/g,
      '<strong>$1</strong>',
    );

    result = result.replace(
      /__([^_]+)__/g,
      '<strong>$1</strong>',
    );

    result = result.replace(
      /~~([^~]+)~~/g,
      '<del>$1</del>',
    );

    result = result.replace(
      /(^|[^\*])\*([^*]+)\*(?!\*)/g,
      '$1<em>$2</em>',
    );

    result = result.replace(
      /(^|[^_])_([^_]+)_(?!_)/g,
      '$1<em>$2</em>',
    );

    return result;
  };

  for (const line of lines) {
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        const languageClass = codeLanguage
          ? ` data-language="${escapeHtml(codeLanguage)}"`
          : '';

        html.push(
          `<pre class="overflow-x-auto rounded-xl bg-black/30 p-4"${languageClass}><code>${escapeHtml(
            codeLines.join('\n'),
          )}</code></pre>`,
        );

        inCodeBlock = false;
        codeLanguage = '';
        codeLines = [];
      } else {
        closeLists();
        inCodeBlock = true;
        codeLanguage = line.trim().slice(3).trim();
      }

      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      continue;
    }

    if (!line.trim()) {
      closeLists();
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);

    if (headingMatch) {
      closeLists();

      const level = headingMatch[1].length;
      const content = inlineMarkdown(headingMatch[2]);

      html.push(`<h${level}>${content}</h${level}>`);
      continue;
    }

    if (/^(\*\s{3}|\-\s{3}|___)\s*$/.test(line)) {
      closeLists();
      html.push('<hr />');
      continue;
    }

    const unorderedMatch = line.match(/^\s*[-*+]\s+(.+)$/);

    if (unorderedMatch) {
      if (orderedListOpen) {
        html.push('</ol>');
        orderedListOpen = false;
      }

      if (!unorderedListOpen) {
        html.push('<ul>');
        unorderedListOpen = true;
      }

      html.push(`<li>${inlineMarkdown(unorderedMatch[1])}</li>`);
      continue;
    }

    const orderedMatch = line.match(/^\s*\d+\.\s+(.+)$/);

    if (orderedMatch) {
      if (unorderedListOpen) {
        html.push('</ul>');
        unorderedListOpen = false;
      }

      if (!orderedListOpen) {
        html.push('<ol>');
        orderedListOpen = true;
      }

      html.push(`<li>${inlineMarkdown(orderedMatch[1])}</li>`);
      continue;
    }

    const quoteMatch = line.match(/^\s*>\s?(.*)$/);

    if (quoteMatch) {
      closeLists();
      html.push(`<blockquote>${inlineMarkdown(quoteMatch[1])}</blockquote>`);
      continue;
    }

    closeLists();

    html.push(`<p>${inlineMarkdown(line)}</p>`);
  }

  if (inCodeBlock) {
    html.push(
      `<pre class="overflow-x-auto rounded-xl bg-black/30 p-4"><code>${escapeHtml(
        codeLines.join('\n'),
      )}</code></pre>`,
    );
  }

  closeLists();

  return html.join('\n');
};

const copyText = async (value: string): Promise<boolean> => {
  if (!value) {
    return false;
  }

  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    return false;
  }
};

const CounterTool: React.FC = () => {
  const [text, setText] = useState('');

  const stats = useMemo(() => {
    const trimmed = text.trim();

    const words = trimmed
      ? trimmed.split(/\s+/u).filter(Boolean).length
      : 0;

    const characters = text.length;

    const charactersNoSpaces = text.replace(/\s/g, '').length;

    const sentences = trimmed
      ? trimmed.split(/[.!?]+/u).filter((item) => item.trim()).length
      : 0;

    const paragraphs = trimmed
      ? trimmed.split(/\n\s*\n/u).filter((item) => item.trim()).length
      : 0;

    const lines = text ? text.split(/\r?\n/u).length : 0;

    const readingTime = words > 0 ? Math.ceil(words / 200) : 0;

    return {
      words,
      characters,
      charactersNoSpaces,
      sentences,
      paragraphs,
      lines,
      readingTime,
    };
  }, [text]);

  const handleCopy = async () => {
    await copyText(text);
  };

  return (
    <div className="space-y-4">
      <div className={cardClass}>
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-white">
              Word & Character Counter
            </h3>
            <p className="mt-1 text-xs text-white/50">
              Analyze your text instantly in your browser.
            </p>
          </div>

          <button
            type="button"
            className={buttonClass}
            onClick={handleCopy}
            disabled={!text}
          >
            <Copy size={16} />
            Copy
          </button>
        </div>

        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Type or paste your text here..."
          className={textareaClass}
        />
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <StatCard label="Words" value={stats.words} />
        <StatCard label="Characters" value={stats.characters} />
        <StatCard label="No Spaces" value={stats.charactersNoSpaces} />
        <StatCard label="Sentences" value={stats.sentences} />
        <StatCard label="Paragraphs" value={stats.paragraphs} />
        <StatCard label="Lines" value={stats.lines} />
        <StatCard label="Reading Time" value={`${stats.readingTime} min`} />
      </div>
    </div>
  );
};

const StatCard: React.FC<{
  label: string;
  value: string | number;
}> = ({ label, value }) => (
  <div className={cardClass}>
    <div className="text-xs text-white/50">{label}</div>
    <div className="mt-1 text-xl font-bold text-white">{value}</div>
  </div>
);

const CaseTool: React.FC = () => {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  const converted = useMemo(
    () => ({
      uppercase: text.toUpperCase(),
      lowercase: text.toLowerCase(),
      title: toTitleCase(text),
      sentence: toSentenceCase(text),
      camel: toCamelCase(text),
      pascal: toPascalCase(text),
      snake: toSnakeCase(text),
      kebab: toKebabCase(text),
      constant: toConstantCase(text),
    }),
    [text],
  );

  const handleCopy = async (value: string) => {
    const success = await copyText(value);

    if (success) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    }
  };

  return (
    <div className="space-y-4">
      <div className={cardClass}>
        <div className="mb-3 flex items-center gap-2">
          <Type size={18} className="text-white/70" />
          <div>
            <h3 className="text-base font-semibold text-white">
              Case Converter
            </h3>
            <p className="text-xs text-white/50">
              Convert text into common developer-friendly cases.
            </p>
          </div>
        </div>

        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Enter text to convert..."
          className={textareaClass}
        />
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {Object.entries(converted).map(([key, value]) => (
          <div key={key} className={cardClass}>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide text-white/60">
                {key}
              </span>

              <button
                type="button"
                className={buttonClass}
                onClick={() => handleCopy(value)}
                disabled={!value}
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            <div className="min-h-12 break-words rounded-xl bg-black/20 p-3 text-sm text-white/85">
              {value || 'Your converted text will appear here.'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CleanerTool: React.FC = () => {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  const cleanedText = useMemo(() => {
    return text
      .replace(/\r\n?/g, '\n')
      .split('\n')
      .map((line) => line.replace(/[ \t]+/g, ' ').trim())
      .filter((line) => line.length > 0)
      .join('\n');
  }, [text]);

  const handleCopy = async () => {
    const success = await copyText(cleanedText);

    if (success) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    }
  };

  const clearAll = () => {
    setText('');
  };

  return (
    <div className="space-y-4">
      <div className={cardClass}>
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Eraser size={18} className="text-white/70" />

            <div>
              <h3 className="text-base font-semibold text-white">
                Text Cleaner
              </h3>
              <p className="text-xs text-white/50">
                Remove unnecessary spaces and empty lines.
              </p>
            </div>
          </div>

          <button
            type="button"
            className={buttonClass}
            onClick={clearAll}
            disabled={!text}
          >
            Clear
          </button>
        </div>

        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Paste messy text here..."
          className={textareaClass}
        />
      </div>

      <div className={cardClass}>
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white">
              Cleaned Result
            </h3>
            <p className="text-xs text-white/50">
              Extra spaces and blank lines are removed automatically.
            </p>
          </div>

          <button
            type="button"
            className={buttonClass}
            onClick={handleCopy}
            disabled={!cleanedText}
          >
            {copied ? <Check size={15} /> : <Copy size={15} />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>

        <textarea
          value={cleanedText}
          readOnly
          placeholder="Cleaned text will appear here..."
          className={textareaClass}
        />
      </div>
    </div>
  );
};

const MarkdownTool: React.FC = () => {
  const [markdown, setMarkdown] = useState(
    '# Hello, Nova Tools\n\nWrite **Markdown** here and see the preview instantly.',
  );
  const [copied, setCopied] = useState(false);

  const html = useMemo(() => markdownToHtml(markdown), [markdown]);

  const handleCopyHtml = async () => {
    const success = await copyText(html);

    if (success) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    }
  };

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className={cardClass}>
        <div className="mb-3">
          <h3 className="text-base font-semibold text-white">
            Markdown Input
          </h3>
          <p className="mt-1 text-xs text-white/50">
            Supports headings, lists, links, code blocks, quotes and inline formatting.
          </p>
        </div>

        <textarea
          value={markdown}
          onChange={(event) => setMarkdown(event.target.value)}
          placeholder="Write Markdown..."
          className={textareaClass}
        />
      </div>

      <div className={cardClass}>
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-white">
              Live Preview
            </h3>
            <p className="text-xs text-white/50">
              Rendered HTML preview.
            </p>
          </div>

          <button
            type="button"
            className={buttonClass}
            onClick={handleCopyHtml}
            disabled={!html}
          >
            {copied ? <Check size={15} /> : <Copy size={15} />}
            {copied ? 'Copied' : 'Copy HTML'}
          </button>
        </div>

        <div
          className="prose prose-invert min-h-[260px] max-w-none overflow-auto rounded-2xl bg-black/20 p-5 text-sm leading-7"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
};

export const TextTools: React.FC<TextToolsProps> = ({ toolType }) => {
  switch (toolType) {
    case 'counter':
      return <CounterTool />;

    case 'case':
      return <CaseTool />;

    case 'cleaner':
      return <CleanerTool />;

    case 'markdown':
      return <MarkdownTool />;

    default:
      return null;
  }
};

export default TextTools;
