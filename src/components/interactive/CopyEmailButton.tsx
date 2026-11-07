import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('soethiha5125@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={copyEmail}
      aria-label={copied ? 'Email copied to clipboard' : 'Copy email address'}
      className="px-3 py-1.5 bg-[#171717] dark:bg-[#E5E4DF] text-[#F5F4EF] dark:text-[#171717] hover:bg-[#B8472A] dark:hover:bg-[#B8472A] dark:hover:text-white text-xs transition-colors flex items-center gap-1.5 shrink-0"
    >
      {copied ? (
        <Check aria-hidden="true" className="w-3.5 h-3.5" />
      ) : (
        <Copy aria-hidden="true" className="w-3.5 h-3.5" />
      )}
      <span aria-live="polite" aria-atomic="true">
        {copied ? 'COPIED' : 'COPY'}
      </span>
    </button>
  );
}
