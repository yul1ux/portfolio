import { useEffect, useState, type KeyboardEvent } from 'react';

type TerminalLog = { type: 'sys' | 'user' | 'err'; text: string };

export default function TerminalPanel() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [cmdInput, setCmdInput] = useState('');
  const [cmdLogs, setCmdLogs] = useState<TerminalLog[]>([
    { type: 'sys', text: 'ST-OS v2.4.0 (x86_64-cloud-native)' },
    { type: 'sys', text: 'Type "help" for available commands.' },
  ]);

  useEffect(() => {
    const handleToggle = (event: MouseEvent) => {
      if (
        event.target instanceof Element &&
        event.target.closest('[data-terminal-toggle]')
      ) {
        setTerminalOpen((open) => !open);
      }
    };

    document.addEventListener('click', handleToggle);
    return () => document.removeEventListener('click', handleToggle);
  }, []);

  useEffect(() => {
    document
      .querySelectorAll<HTMLButtonElement>('[data-terminal-toggle]')
      .forEach((button) => {
        button.setAttribute('aria-expanded', String(terminalOpen));
      });
  }, [terminalOpen]);

  useEffect(() => {
    if (!terminalOpen) return;

    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        setTerminalOpen(false);
        document
          .querySelector<HTMLButtonElement>('[data-terminal-toggle]')
          ?.focus();
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [terminalOpen]);

  const handleCommand = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && cmdInput.trim()) {
      const input = cmdInput.trim().toLowerCase();
      const newLogs: TerminalLog[] = [
        ...cmdLogs,
        { type: 'user', text: `$ ${cmdInput}` },
      ];

      if (input === 'help') {
        newLogs.push({
          type: 'sys',
          text: 'Available commands: whoami, stack, status, clear, contact',
        });
      } else if (input === 'whoami') {
        newLogs.push({
          type: 'sys',
          text: 'Soe Thiha - Cloud Engineer, Infrastructure Architect, Middle-earth explorer.',
        });
      } else if (input === 'stack') {
        newLogs.push({
          type: 'sys',
          text: 'AWS, Kubernetes, Terraform, Go, Python, Linux, Ansible, Prometheus, Grafana',
        });
      } else if (input === 'status') {
        newLogs.push({
          type: 'sys',
          text: 'All system nodes operational. Latency: 14ms. High Availability: ACTIVE.',
        });
      } else if (input === 'contact') {
        newLogs.push({
          type: 'sys',
          text: 'Email: soe.thiha@cloudengineers.dev | GitHub: @soethiha',
        });
      } else if (input === 'clear') {
        setCmdLogs([]);
        setCmdInput('');
        return;
      } else {
        newLogs.push({
          type: 'err',
          text: `Command not found: ${cmdInput}. Type "help".`,
        });
      }

      setCmdLogs(newLogs);
      setCmdInput('');
    }
  };

  if (!terminalOpen) return null;

  return (
    <section
      id="cloud-terminal"
      role="region"
      aria-label="Cloud terminal"
      className="fixed inset-x-0 top-16 z-30 border-b border-black/10 dark:border-white/10 bg-[#1A1A18] text-emerald-400 font-mono-tech text-xs p-4 shadow-2xl transition-all"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-zinc-400">
          <span>SYSTEM TERMINAL {'\u00e2\u20ac\u201d'} ACTIVE SESSION</span>
          <button
            type="button"
            aria-label="Close cloud terminal"
            onClick={() => {
              setTerminalOpen(false);
              document
                .querySelector<HTMLButtonElement>('[data-terminal-toggle]')
                ?.focus();
            }}
            className="hover:text-white"
          >
            {'\u00e2\u0153\u2022'} [ESC]
          </button>
        </div>
        <div
          role="log"
          aria-label="Terminal output"
          aria-relevant="additions"
          className="max-h-48 overflow-y-auto space-y-1 mb-3 pr-2"
        >
          {cmdLogs.map((log, index) => (
            <div
              key={index}
              className={
                log.type === 'user'
                  ? 'text-white font-semibold'
                  : log.type === 'err'
                    ? 'text-rose-400'
                    : 'text-emerald-400/90'
              }
            >
              {log.text}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 text-white">
          <span className="text-emerald-400">$</span>
          <label className="sr-only" htmlFor="cloud-terminal-command">
            Cloud terminal command
          </label>
          <input
            id="cloud-terminal-command"
            type="text"
            value={cmdInput}
            onChange={(event) => setCmdInput(event.target.value)}
            onKeyDown={handleCommand}
            placeholder="type command (help, status, whoami, stack, clear)..."
            className="terminal-command-input bg-transparent border-none outline-none flex-1 text-xs text-white placeholder-zinc-400 focus:ring-0"
            autoFocus
          />
        </div>
      </div>
    </section>
  );
}
