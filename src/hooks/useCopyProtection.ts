import { useEffect } from 'react';
import { isInputElement } from '../utils/dom';

export function useCopyProtection() {
  useEffect(() => {
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      alert('Copying content is disabled for security reasons.');
    };

    const handleSelect = (e: Event) => {
      const target = e.target;
      if (!isInputElement(target)) {
        e.preventDefault();
        window.getSelection()?.removeAllRanges();
      }
    };

    document.addEventListener('copy', handleCopy);
    document.addEventListener('selectstart', handleSelect);

    return () => {
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('selectstart', handleSelect);
    };
  }, []);
}