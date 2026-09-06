import React, {
useCallback,
useEffect,
useMemo,
useState,
} from 'react';

import {
AlertCircle,
Check,
Clock,
Copy,
KeyRound,
Link2,
RefreshCw,
} from 'lucide-react';

interface DevToolsProps {
toolType:
| 'json'
| 'base64'
| 'url'
| 'timestamp'
| 'password';
}

type CopyState = 'idle' | 'success' | 'error';

const inputClassName =
'w-full rounded-xl liquid-glass border border-slate-300 dark:border-slate-700 font-mono text-xs text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/50 transition-all';

const secondaryButtonClassName =
'px-3 py-1.5 rounded-xl text-xs font-semibold liquid-glass border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100/70 dark:hover:bg-slate-800/70 transition-all';

const primaryButtonClassName =
'px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-all active:scale-[0.98]';

const modeButtonClassName = (
active: boolean,
) =>
"px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold border transition-all ${ active ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm' : 'liquid-glass border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100/70 dark:hover:bg-slate-800/70' }";

const toBase64 = (value: string): string => {
const bytes =
new TextEncoder().encode(value);

let binary = '';

const chunkSize = 0x8000;

for (
let index = 0;
index < bytes.length;
index += chunkSize
) {
binary += String.fromCharCode(
...bytes.subarray(
index,
Math.min(
index + chunkSize,
bytes.length,
),
),
);
}

return btoa(binary);
};

const fromBase64 = (
value: string,
): string => {
const normalized = value
.trim()
.replace(/\s+/g, '');

if (!normalized) {
return '';
}

if (
!/^[A-Za-z0-9+/]*={0,2}$/.test(
normalized,
)
) {
throw new Error(
'Invalid Base64 characters.',
);
}

if (normalized.length % 4 === 1) {
throw new Error(
'Invalid Base64 length.',
);
}

const binary = atob(normalized);
const bytes = new Uint8Array(
binary.length,
);

for (
let index = 0;
index < binary.length;
index += 1
) {
bytes[index] =
binary.charCodeAt(index);
}

return new TextDecoder(
'utf-8',
{ fatal: true },
).decode(bytes);
};

const getSafeTimestampDate = (
timestamp: string,
): Date | null => {
const normalized = timestamp.trim();

if (!normalized) {
return null;
}

if (!/^-?\d+$/.test(normalized)) {
return null;
}

const numericValue = Number(
normalized,
);

if (!Number.isSafeInteger(numericValue)) {
return null;
}

const milliseconds =
Math.abs(numericValue) >
9_999_999_999
? numericValue
: numericValue * 1000;

const date = new Date(milliseconds);

if (Number.isNaN(date.getTime())) {
return null;
}

return date;
};

const createSecureRandomIndex = (
maxExclusive: number,
): number => {
if (
!Number.isInteger(maxExclusive) ||
maxExclusive <= 0
) {
throw new Error(
'Invalid random range.',
);
}

const maxUint32 = 0xffffffff;
const limit =
Math.floor(
(maxUint32 + 1) /
maxExclusive,
) * maxExclusive;

const randomBuffer =
new Uint32Array(1);

let randomValue: number;

do {
window.crypto.getRandomValues(
randomBuffer,
);

randomValue = randomBuffer[0];

} while (randomValue >= limit);

return randomValue % maxExclusive;
};

export const DevTools: React.FC<
DevToolsProps

«= ({ toolType }) => {
const [copyState, setCopyState] =
useState<CopyState>('idle');»

// JSON
const [jsonInput, setJsonInput] =
useState(
'{\n  "name": "Nova Dev Tools",\n  "status": "production"\n}',
);

const [jsonError, setJsonError] =
useState<string | null>(null);

const [jsonIndent, setJsonIndent] =
useState<2 | 4>(2);

// Base64
const [b64Input, setB64Input] =
useState('Hello from Nova Dev Tools!');

const [b64Mode, setB64Mode] =
useState<'encode' | 'decode'>(
'encode',
);

// URL
const [urlInput, setUrlInput] =
useState(
'https://example.com/search?q=developer tools',
);

const [urlMode, setUrlMode] =
useState<'encode' | 'decode'>(
'encode',
);

// Timestamp
const [nowTs, setNowTs] =
useState<number>(() =>
Math.floor(
Date.now() / 1000,
),
);

const [customTs, setCustomTs] =
useState(() =>
Math.floor(
Date.now() / 1000,
).toString(),
);

// Password
const [pwdLength, setPwdLength] =
useState(16);

const [incUpper, setIncUpper] =
useState(true);

const [incNumbers, setIncNumbers] =
useState(true);

const [incSymbols, setIncSymbols] =
useState(true);

const [generatedPwd, setGeneratedPwd] =
useState('');

const [passwordError, setPasswordError] =
useState<string | null>(null);

const clearCopyState = useCallback(
() => {
setCopyState('idle');
},
[],
);

const copyToClipboard =
useCallback(
async (text: string) => {
if (!text) {
setCopyState('error');

      window.setTimeout(
        clearCopyState,
        2000,
      );

      return;
    }

    try {
      await navigator.clipboard.writeText(
        text,
      );

      setCopyState('success');
    } catch {
      setCopyState('error');
    }

    window.setTimeout(
      clearCopyState,
      2000,
    );
  },
  [clearCopyState],
);

const formatJson = useCallback(
(spaces: 2 | 4 = jsonIndent) => {
try {
const parsed =
JSON.parse(jsonInput);

    setJsonInput(
      JSON.stringify(
        parsed,
        null,
        spaces,
      ),
    );

    setJsonError(null);
  } catch (error) {
    setJsonError(
      error instanceof Error
        ? error.message
        : 'Invalid JSON input.',
    );
  }
},
[jsonIndent, jsonInput],

);

const minifyJson = useCallback(
() => {
try {
const parsed =
JSON.parse(jsonInput);

    setJsonInput(
      JSON.stringify(parsed),
    );

    setJsonError(null);
  } catch (error) {
    setJsonError(
      error instanceof Error
        ? error.message
        : 'Invalid JSON input.',
    );
  }
},
[jsonInput],

);

const validateJson = useCallback(
() => {
try {
JSON.parse(jsonInput);
setJsonError(null);
} catch (error) {
setJsonError(
error instanceof Error
? error.message
: 'Invalid JSON input.',
);
}
},
[jsonInput],
);

const getB64Output = useMemo(
() => {
try {
return b64Mode === 'encode'
? toBase64(b64Input)
: fromBase64(b64Input);
} catch (error) {
return "Error: ${ error instanceof Error ? error.message : 'Invalid Base64 input.' }";
}
},
[b64Input, b64Mode],
);

const getUrlOutput = useMemo(
() => {
try {
return urlMode === 'encode'
? encodeURIComponent(urlInput)
: decodeURIComponent(
urlInput,
);
} catch (error) {
return "Error: ${ error instanceof Error ? error.message : 'Invalid URL encoded input.' }";
}
},
[urlInput, urlMode],
);

const generatePassword =
useCallback(() => {
let chars =
'abcdefghijklmnopqrstuvwxyz';

  if (incUpper) {
    chars +=
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  if (incNumbers) {
    chars += '0123456789';
  }

  if (incSymbols) {
    chars +=
      '!@#$%^&*()_+-=[]{}|;:,.<>?';
  }

  if (!chars.length) {
    setGeneratedPwd('');
    setPasswordError(
      'Select at least one character set.',
    );
    return;
  }

  setPasswordError(null);

  let result = '';

  for (
    let index = 0;
    index < pwdLength;
    index += 1
  ) {
    result +=
      chars[
        createSecureRandomIndex(
          chars.length,
        )
      ];
  }

  setGeneratedPwd(result);
}, [
  incNumbers,
  incSymbols,
  incUpper,
  pwdLength,
]);

useEffect(() => {
if (toolType === 'password') {
generatePassword();
}
}, [
toolType,
generatePassword,
]);

useEffect(() => {
setCopyState('idle');
}, [toolType]);

const timestampDate =
useMemo(
() =>
getSafeTimestampDate(
customTs,
),
[customTs],
);

const refreshTimestamp =
useCallback(() => {
const timestamp = Math.floor(
Date.now() / 1000,
);

  setNowTs(timestamp);
  setCustomTs(
    timestamp.toString(),
  );
}, []);

const copyButtonLabel =
copyState === 'success'
? 'Copied'
: copyState === 'error'
? 'Copy Failed'
: 'Copy';

const CopyIcon =
copyState === 'success'
? Check
: copyState === 'error'
? AlertCircle
: Copy;

return (
<div className="space-y-6">
{/* JSON FORMATTER / VALIDATOR / MINIFIER */}
{toolType === 'json' && (
<div className="space-y-4">
<div className="flex flex-wrap items-center justify-between gap-3">
<div className="flex flex-wrap items-center gap-2">
<button
type="button"
onClick={() =>
formatJson(
jsonIndent,
)
}
className={
primaryButtonClassName
}
>
Format JSON
</button>

          <button
            type="button"
            onClick={
              minifyJson
            }
            className={
              secondaryButtonClassName
            }
          >
            Minify JSON
          </button>

          <button
            type="button"
            onClick={
              validateJson
            }
            className={
              secondaryButtonClassName
            }
          >
            Validate
          </button>

          <select
            value={jsonIndent}
            onChange={(event) =>
              setJsonIndent(
                Number(
                  event.target.value,
                ) as 2 | 4,
              )
            }
            aria-label="JSON indentation"
            className="px-3 py-1.5 rounded-xl liquid-glass border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 outline-none"
          >
            <option value="2">
              2 spaces
            </option>
            <option value="4">
              4 spaces
            </option>
          </select>
        </div>

        <button
          type="button"
          onClick={() =>
            copyToClipboard(
              jsonInput,
            )
          }
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl liquid-glass border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
        >
          <CopyIcon
            className={`w-3.5 h-3.5 ${
              copyState ===
              'success'
                ? 'text-emerald-500'
                : copyState ===
                    'error'
                  ? 'text-red-500'
                  : ''
            }`}
          />

          <span>
            {copyButtonLabel}{' '}
            JSON
          </span>
        </button>
      </div>

      <textarea
        rows={16}
        value={jsonInput}
        onChange={(event) => {
          setJsonInput(
            event.target.value,
          );
          setJsonError(null);
        }}
        onBlur={validateJson}
        spellCheck={false}
        placeholder="Paste JSON here..."
        className={`${inputClassName} p-4 leading-relaxed resize-y min-h-[260px]`}
      />

      {jsonError ? (
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-600 dark:text-red-400 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />

          <div>
            <p className="font-bold">
              JSON Syntax Error
            </p>

            <p className="mt-0.5 break-words">
              {jsonError}
            </p>
          </div>
        </div>
      ) : (
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
          <Check className="w-4 h-4 flex-shrink-0" />

          <span>
            Valid JSON
          </span>
        </div>
      )}
    </div>
  )}

  {/* BASE64 ENCODER / DECODER */}
  {toolType === 'base64' && (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() =>
            setB64Mode('encode')
          }
          className={modeButtonClassName(
            b64Mode === 'encode',
          )}
        >
          Encode to Base64
        </button>

        <button
          type="button"
          onClick={() =>
            setB64Mode('decode')
          }
          className={modeButtonClassName(
            b64Mode === 'decode',
          )}
        >
          Decode from Base64
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Input
          </label>

          <textarea
            rows={10}
            value={b64Input}
            onChange={(event) =>
              setB64Input(
                event.target.value,
              )
            }
            spellCheck={false}
            placeholder={
              b64Mode === 'encode'
                ? 'Enter text to encode...'
                : 'Paste Base64 to decode...'
            }
            className={`${inputClassName} p-3 resize-y`}
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2 gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Output
            </span>

            <button
              type="button"
              onClick={() =>
                copyToClipboard(
                  getB64Output,
                )
              }
              className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
            >
              <Copy className="w-3 h-3" />
              Copy
            </button>
          </div>

          <textarea
            readOnly
            rows={10}
            value={getB64Output}
            spellCheck={false}
            className="w-full p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 font-mono text-xs text-slate-700 dark:text-slate-300 outline-none resize-y"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 text-[11px] text-slate-500">
        <Binary className="w-3.5 h-3.5" />
        <span>
          Unicode-safe Base64
          processing runs locally
          in your browser.
        </span>
      </div>
    </div>
  )}

  {/* URL ENCODER / DECODER */}
  {toolType === 'url' && (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() =>
            setUrlMode('encode')
          }
          className={modeButtonClassName(
            urlMode === 'encode',
          )}
        >
          URL Encode
        </button>

        <button
          type="button"
          onClick={() =>
            setUrlMode('decode')
          }
          className={modeButtonClassName(
            urlMode === 'decode',
          )}
        >
          URL Decode
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Input
          </label>

          <textarea
            rows={8}
            value={urlInput}
            onChange={(event) =>
              setUrlInput(
                event.target.value,
              )
            }
            spellCheck={false}
            placeholder={
              urlMode === 'encode'
                ? 'Enter text or URL to encode...'
                : 'Paste encoded URL text...'
            }
            className={`${inputClassName} p-3 resize-y`}
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2 gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Output
            </span>

            <button
              type="button"
              onClick={() =>
                copyToClipboard(
                  getUrlOutput,
                )
              }
              className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
            >
              <Copy className="w-3 h-3" />
              Copy
            </button>
          </div>

          <textarea
            readOnly
            rows={8}
            value={getUrlOutput}
            spellCheck={false}
            className="w-full p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 font-mono text-xs text-slate-700 dark:text-slate-300 outline-none resize-y"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 text-[11px] text-slate-500">
        <Link2 className="w-3.5 h-3.5" />

        <span>
          Encoding is performed
          locally without sending
          your input to a server.
        </span>
      </div>
    </div>
  )}

  {/* TIMESTAMP CONVERTER */}
  {toolType === 'timestamp' && (
    <div className="space-y-5">
      <div className="p-4 sm:p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="min-w-0">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
            Current Unix Epoch
            Time
          </span>

          <p className="text-2xl sm:text-3xl font-mono font-black text-slate-900 dark:text-white mt-1 break-all">
            {nowTs}
          </p>
        </div>

        <button
          type="button"
          onClick={
            refreshTimestamp
          }
          className="self-start sm:self-auto flex items-center gap-1.5 px-3 py-2 rounded-xl liquid-glass border border-white/10 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-white/10 transition-all"
        >
          <RefreshCw className="w-3.5 h-3.5" />

          Refresh
        </button>
      </div>

      <div className="p-4 sm:p-6 rounded-2xl liquid-glass border border-slate-200 dark:border-slate-800 space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
            Unix Timestamp
          </label>

          <input
            type="text"
            inputMode="numeric"
            value={customTs}
            onChange={(event) =>
              setCustomTs(
                event.target.value,
              )
            }
            placeholder="e.g. 1735689600"
            className={`${inputClassName} px-3.5 py-2.5`}
          />

          <p className="mt-2 text-[10px] text-slate-500">
            Supports both seconds
            and milliseconds.
          </p>
        </div>

        {timestampDate ? (
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-3 text-xs overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
              <span className="text-slate-500 font-semibold shrink-0">
                UTC:
              </span>

              <span className="font-mono font-bold text-slate-800 dark:text-slate-200 break-all sm:text-right">
                {timestampDate.toUTCString()}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
              <span className="text-slate-500 font-semibold shrink-0">
                ISO 8601:
              </span>

              <span className="font-mono font-bold text-slate-800 dark:text-slate-200 break-all sm:text-right">
                {timestampDate.toISOString()}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
              <span className="text-slate-500 font-semibold shrink-0">
                Local:
              </span>

              <span className="font-mono font-bold text-slate-800 dark:text-slate-200 break-all sm:text-right">
                {timestampDate.toString()}
              </span>
            </div>
          </div>
        ) : (
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-700 dark:text-amber-300 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />

            <span>
              Enter a valid Unix
              timestamp.
            </span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 text-[11px] text-slate-500">
        <Clock className="w-3.5 h-3.5" />

        <span>
          All timestamp conversions
          happen locally in your
          browser.
        </span>
      </div>
    </div>
  )}

  {/* SECURE PASSWORD GENERATOR */}
  {toolType === 'password' && (
    <div className="space-y-5">
      <div className="p-4 sm:p-6 rounded-2xl liquid-glass border border-slate-200 dark:border-slate-800 space-y-5">
        <div className="p-4 rounded-xl bg-slate-950 text-white font-mono text-sm sm:text-base break-all select-all min-h-[58px] flex items-center justify-between gap-3">
          <span className="break-all">
            {generatedPwd ||
              'Generate a password'}
          </span>

          <button
            type="button"
            disabled={!generatedPwd}
            onClick={() =>
              copyToClipboard(
                generatedPwd,
              )
            }
            className="p-2 hover:bg-slate-800 rounded-lg text-emerald-400 disabled:opacity-40 disabled:cursor-not-allowed shrink-0 transition-colors"
            title="Copy Password"
            aria-label="Copy password"
          >
            {copyState ===
            'success' ? (
              <Check className="w-5 h-5" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
          </button>
        </div>

        {passwordError && (
          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-600 dark:text-red-400 flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />

            <span>
              {passwordError}
            </span>
          </div>
        )}

        <div>
          <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
            <span>
              Password Length
            </span>

            <span className="font-bold">
              {pwdLength}{' '}
              characters
            </span>
          </div>

          <input
            type="range"
            min="8"
            max="64"
            value={pwdLength}
            onChange={(event) =>
              setPwdLength(
                Number(
                  event.target.value,
                ),
              )
            }
            aria-label="Password length"
            className="w-full accent-emerald-600"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          <label className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 cursor-pointer">
            <input
              type="checkbox"
              checked={incUpper}
              onChange={(event) =>
                setIncUpper(
                  event.target
                    .checked,
                )
              }
              className="rounded accent-emerald-600"
            />

            <span>
              Uppercase
              (A-Z)
            </span>
          </label>

          <label className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 cursor-pointer">
            <input
              type="checkbox"
              checked={incNumbers}
              onChange={(event) =>
                setIncNumbers(
                  event.target
                    .checked,
                )
              }
              className="rounded accent-emerald-600"
            />

            <span>
              Numbers (0-9)
            </span>
          </label>

          <label className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 cursor-pointer">
            <input
              type="checkbox"
              checked={incSymbols}
              onChange={(event) =>
                setIncSymbols(
                  event.target
                    .checked,
                )
              }
              className="rounded accent-emerald-600"
            />

            <span>
              Symbols
            </span>
          </label>
        </div>

        <button
          type="button"
          onClick={
            generatePassword
          }
          className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <RefreshCw className="w-4 h-4" />

          <span>
            Generate New Secure
            Password
          </span>
        </button>
      </div>

      <div className="flex items-center gap-2 text-[11px] text-slate-500">
        <KeyRound className="w-3.5 h-3.5" />

        <span>
          Password generation uses
          your browser's cryptographic
          random number generator.
        </span>
      </div>
    </div>
  )}
</div>

);
};
