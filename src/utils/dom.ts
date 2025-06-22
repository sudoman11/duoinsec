/**
 * Type guard to check if an element is an input or textarea
 */
export function isInputElement(element: EventTarget | null): boolean {
  if (!element || !(element instanceof Element)) {
    return false;
  }
  
  return (
    element.tagName === 'INPUT' ||
    element.tagName === 'TEXTAREA' ||
    element.tagName === 'SELECT'
  );
}