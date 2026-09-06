import React, { useMemo, useState } from 'react';
import { Check, Copy, Download, RotateCcw } from 'lucide-react';

type DevToolType =
  | 'json'
  | 'json-formatter'
  | 'json-validator'
  | 'json-minifier'
  | 'base64'
  | 'url'
  | 'timestamp'
  | 'password';

interface DevToolsProps {
  toolType: DevToolType | string;
}

type CopyState = 'idle' | 'copied';

const textareaClass =
  'w-full min-h-[280px] resize-y rounded-2xl border border-white/10 bg-black/20 p-4 font-mono text-sm leading-6 text-white outline-none placeholder:text-white/40 focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-400/10';

const inputClass =
  'w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-emerald-400/40';

const buttonClass =
  'inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-40';

const cardClass =
  'rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-lg backdrop-blur-xl';

const safeJsonParse = (
  value: string,
): { success: true; data: unknown } | { success: false; error: string } => {
  try {
    return {
      success: true,
      data: JSON.parse(value),
    };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : 'Invalid JSON.',
    };
  }
};

const formatJson = (value: string): string => {
  const result = safeJsonParse(value);

  if (!result.success) {
    return value;
  }

  return JSON.stringify(result.data, null, 2);
};

const minifyJson = (value: string): string => {
  const result = safeJsonParse(value);

  if (!result.success) {
    return value;
  }

  return JSON.stringify(result.data);
};

const encodeBase64 = (value: string): string => {
  try {
    const bytes = new TextEncoder().encode(value);
    let binary = '';

    bytes.forEach((byte) => {
      binary += String.fromCharCode(byte);
    });

    return btoa(binary);
  } catch {
    return '';
  }
};

const decodeBase64 = (value: string): string => {
  try {
    const binary = atob(value.trim());
    const bytes = Uint8Array.from(binary, (char) =>
      char.charCodeAt(0),
    );

    return new TextDecoder().decode(bytes);
  } catch {
    return '';
  }
};

const encodeUrl = (value: string): string =>
  encodeURIComponent(value);

const decodeUrl = (value: string): string => {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
};

const formatTimestamp = (timestamp: number): string => {
  const date = new Date(timestamp);

  if (Number.isNaN(date.getTime())) {
    return '';
  }

  return date.toISOString();
};

const generatePassword = (
  length: number,
): string => {
  const characters =
    'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*';

  const safeLength = Math.min(
    Math.max(Math.floor(length), 4),
    128,
  );

  const values = new Uint32Array(safeLength);

  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    crypto.getRandomValues(values);

    return Array.from(
      values,
      (value) => characters[value % characters.length],
    ).join('');
  }

  return Array.from(
    { length: safeLength },
    () =>
      characters[
        Math.floor(Math.random() * characters.length)
      ],
  ).join('');
};

const CopyButton: React.FC<{
  value: string;
  onCopied?: () => void;
}> = ({ value, onCopied }) => {
  const [state, setState] =
    useState<CopyState>('idle');

  const handleCopy = async () => {
    if (!value) {
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      setState('copied');
      onCopied?.();

      window.setTimeout(
        () => setState('idle'),
        1400,
      );
    } catch {
      setState('idle');
    }
  };

  return (
    <button
      type="button"
      className={buttonClass}
      onClick={handleCopy}
      disabled={!value}
    >
      {state === 'copied' ? (
        <Check size={16} />
      ) : (
        <Copy size={16} />
      )}

      {state === 'copied' ? 'Copied' : 'Copy'}
    </button>
  );
};

const JsonTool: React.FC<{
  mode: 'format' | 'validate' | 'minify';
}> = ({ mode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const process = () => {
    setError('');

    if (!input.trim()) {
      setOutput('');
      return;
    }

    const result = safeJsonParse(input);

    if (!result.success) {
      setError(result.error);
      setOutput('');
      return;
    }

    if (mode === 'validate') {
      setOutput('Valid JSON');
      return;
    }

    setOutput(
      mode === 'format'
        ? JSON.stringify(result.data, null, 2)
        : JSON.stringify(result.data),
    );
  };

  const clear = () => {
    setInput('');
    setOutput('');
    setError('');
  };

  return (
    <div className="space-y-4">
      <div className={cardClass}>
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="font-semibold text-white">
              JSON {mode === 'format' ? 'Formatter' : mode === 'minify' ? 'Minifier' : 'Validator'}
            </h3>
            <p className="mt-1 text-xs text-white/50">
              Process JSON locally in your browser.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              className={buttonClass}
              onClick={process}
              disabled={!input.trim()}
            >
              Process
            </button>

            <button
              type="button"
              className={buttonClass}
              onClick={clear}
              disabled={!input && !output}
            >
              <RotateCcw size={15} />
              Clear
            </button>
          </div>
        </div>

        <textarea
          value={input}
          onChange={(event) =>
            setInput(event.target.value)
          }
          placeholder='{"name":"Nova","type":"developer"}'
          className={textareaClass}
        />

        {error && (
          <div className="mt-3 rounded-xl border border-red-400/20 bg-red-500/10 p-3 text-xs text-red-300">
            {error}
          </div>
        )}
      </div>

      <div className={cardClass}>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-semibold text-white">
            Result
          </h3>

          <CopyButton value={output} />
        </div>

        <textarea
          value={output}
          readOnly
          placeholder="Result will appear here..."
          className={textareaClass}
        />
      </div>
    </div>
  );
};

const Base64Tool: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className={cardClass}>
        <h3 className="mb-3 font-semibold text-white">
          Input
        </h3>

        <textarea
          value={input}
          onChange={(event) =>
            setInput(event.target.value)
          }
          placeholder="Enter text or Base64..."
          className={textareaClass}
        />
      </div>

      <div className={cardClass}>
        <div className="mb-3 flex flex-wrap gap-2">
          <button
            type="button"
            className={buttonClass}
            onClick={() =>
              setOutput(encodeBase64(input))
            }
            disabled={!input}
          >
            Encode
          </button>

          <button
            type="button"
            className={buttonClass}
            onClick={() =>
              setOutput(decodeBase64(input))
            }
            disabled={!input}
          >
            Decode
          </button>

          <CopyButton value={output} />
        </div>

        <textarea
          value={output}
          readOnly
          placeholder="Result..."
          className={textareaClass}
        />
      </div>
    </div>
  );
};

const UrlTool: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  return (
    <div className={cardClass}>
      <div className="mb-3 flex flex-wrap gap-2">
        <button
          type="button"
          className={buttonClass}
          onClick={() => setOutput(encodeUrl(input))}
          disabled={!input}
        >
          Encode URL
        </button>

        <button
          type="button"
          className={buttonClass}
          onClick={() => setOutput(decodeUrl(input))}
          disabled={!input}
        >
          Decode URL
        </button>

        <CopyButton value={output} />
      </div>

      <textarea
        value={input}
        onChange={(event) =>
          setInput(event.target.value)
        }
        placeholder="Enter URL or text..."
        className={textareaClass}
      />

      <textarea
        value={output}
        readOnly
        placeholder="Result..."
        className={`${textareaClass} mt-4`}
      />
    </div>
  );
};

const TimestampTool: React.FC = () => {
  const [timestamp, setTimestamp] = useState(
    String(Date.now()),
  );
  const [dateValue, setDateValue] = useState('');

  const currentTimestamp = Date.now();

  const convertTimestamp = () => {
    const numeric = Number(timestamp);

    if (!Number.isFinite(numeric)) {
      setDateValue('');
      return;
    }

    const milliseconds =
      Math.abs(numeric) < 10000000000
        ? numeric * 1000
        : numeric;

    setDateValue(formatTimestamp(milliseconds));
  };

  const useCurrent = () => {
    setTimestamp(String(currentTimestamp));
    setDateValue(formatTimestamp(currentTimestamp));
  };

  return (
    <div className="space-y-4">
      <div className={cardClass}>
        <h3 className="mb-2 font-semibold text-white">
          Unix Timestamp
        </h3>

        <p className="mb-4 text-xs text-white/50">
          Convert Unix timestamps to readable UTC dates.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            value={timestamp}
            onChange={(event) =>
              setTimestamp(event.target.value)
            }
            className={inputClass}
            inputMode="numeric"
            placeholder="1750000000"
          />

          <button
            type="button"
            className={buttonClass}
            onClick={convertTimestamp}
          >
            Convert
          </button>

          <button
            type="button"
            className={buttonClass}
            onClick={useCurrent}
          >
            Current
          </button>
        </div>
      </div>

      <div className={cardClass}>
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-semibold text-white">
            UTC Result
          </h3>

          <CopyButton value={dateValue} />
        </div>

        <div className="rounded-xl bg-black/20 p-4 font-mono text-sm text-emerald-300">
          {dateValue || 'No result yet.'}
        </div>
      </div>
    </div>
  );
};

const PasswordTool: React.FC = () => {
  const [length, setLength] = useState(20);
  const [password, setPassword] =
    useState(() => generatePassword(20));

  const generate = () => {
    setPassword(generatePassword(length));
  };

  return (
    <div className={cardClass}>
      <h3 className="font-semibold text-white">
        Secure Password Generator
      </h3>

      <p className="mt-1 text-xs text-white/50">
        Generate a random password using browser randomness when available.
      </p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="number"
          min={4}
          max={128}
          value={length}
          onChange={(event) =>
            setLength(
              Math.min(
                128,
                Math.max(
                  4,
                  Number(event.target.value) || 4,
                ),
              ),
            )
          }
          className={inputClass}
        />

        <button
          type="button"
          className={buttonClass}
          onClick={generate}
        >
          Generate
        </button>

        <CopyButton value={password} />
      </div>

      <div className="mt-4 break-all rounded-xl bg-black/20 p-4 font-mono text-sm leading-7 text-emerald-300">
        {password}
      </div>
    </div>
  );
};

export const DevTools: React.FC<DevToolsProps> = ({
  toolType,
}) => {
  const normalizedType = useMemo(() => {
    const value = toolType.toLowerCase();

    if (
      value === 'json' ||
      value === 'json-formatter'
    ) {
      return 'json-formatter';
    }

    if (value === 'json-validator') {
      return 'json-validator';
    }

    if (value === 'json-minifier') {
      return 'json-minifier';
    }

    if (value === 'base64') {
      return 'base64';
    }

    if (value === 'url') {
      return 'url';
    }

    if (value === 'timestamp') {
      return 'timestamp';
    }

    if (value === 'password') {
      return 'password';
    }

    return value;
  }, [toolType]);

  switch (normalizedType) {
    case 'json-formatter':
      return <JsonTool mode="format" />;

    case 'json-validator':
      return <JsonTool mode="validate" />;

    case 'json-minifier':
      return <JsonTool mode="minify" />;

    case 'base64':
      return <Base64Tool />;

    case 'url':
      return <UrlTool />;

    case 'timestamp':
      return <TimestampTool />;

    case 'password':
      return <PasswordTool />;

    default:
      return null;
  }
};

export default DevTools;
