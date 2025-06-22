import { useEffect } from 'react';
import { handleKeyProtection } from '../utils/security/keyProtection';

export function useKeyProtection() {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyProtection, true);
    return () => window.removeEventListener('keydown', handleKeyProtection, true);
  }, []);
}