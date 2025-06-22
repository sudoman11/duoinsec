/**
 * Utility functions for handling security-related features
 */

/**
 * Check if the current context is secure
 */
export const isSecureContext = (): boolean => {
  return window.isSecureContext;
};

/**
 * Prevent text selection for specified elements
 */
export const preventTextSelection = (element: HTMLElement): void => {
  element.style.userSelect = 'none';
  element.style.webkitUserSelect = 'none';
  element.style.msUserSelect = 'none';
  element.style.mozUserSelect = 'none';
};

/**
 * Sanitize user input to prevent XSS
 */
export const sanitizeInput = (input: string): string => {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
};