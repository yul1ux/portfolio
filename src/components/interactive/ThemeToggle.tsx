import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      type="button"
      onClick={() => setDarkMode(!darkMode)}
      className="p-1.5 border border-black/20 dark:border-white/20 hover:border-[#C45533] dark:hover:border-[#C45533] transition-colors"
      aria-label="Toggle theme"
      aria-pressed={darkMode}
    >
      {darkMode ? (
        <Sun aria-hidden="true" className="w-4 h-4 text-amber-400" />
      ) : (
        <Moon aria-hidden="true" className="w-4 h-4 text-zinc-700" />
      )}
    </button>
  );
}
