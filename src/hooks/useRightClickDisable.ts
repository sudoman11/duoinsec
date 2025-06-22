import { useEffect } from 'react';

export function useRightClickDisable() {
  useEffect(() => {
    const handleRightClick = (e: MouseEvent) => {
      e.preventDefault();
      alert('Right click is disabled for security reasons.');
    };

    document.addEventListener('contextmenu', handleRightClick);

    return () => {
      document.removeEventListener('contextmenu', handleRightClick);
    };
  }, []);
}