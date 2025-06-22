export function handleKeyProtection(e: KeyboardEvent): void {
  // Allow input field operations
  if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
    return ;
  }

  const combinations = {
    devTools: [
      { ctrl: true, shift: true, key: 'I' },
      { ctrl: true, shift: true, key: 'J' },
      { ctrl: true, shift: true, key: 'C' },
      { ctrl: true, key: 'U' },
      { key: 'F12' }
    ],
    printing: [
      { ctrl: true, key: 'P' }
    ],
    saving: [
      { ctrl: true, key: 'S' }
    ],
    viewing: [
      { ctrl: true, key: 'U' },
      { ctrl: true, shift: true, key: 'U' }
    ]
  };

  const matchesCombination = (combo: { ctrl?: boolean; shift?: boolean; key: string }) => {
    return (
      (!combo.ctrl || e.ctrlKey) &&
      (!combo.shift || e.shiftKey) &&
      e.key.toUpperCase() === combo.key.toUpperCase()
    );
  };

  const isBlockedCombination = Object.values(combinations)
    .flat()
    .some(matchesCombination);

  if (isBlockedCombination) {
    e.preventDefault();
    return;
  }
}