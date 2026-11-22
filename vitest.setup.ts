import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

// jsdom has no layout engine, so it doesn't implement scrolling APIs.
Element.prototype.scrollIntoView = vi.fn();

// jsdom doesn't implement modal dialogs; this covers the parts the app relies on.
HTMLDialogElement.prototype.showModal = function () {
  this.open = true;
};
HTMLDialogElement.prototype.close = function () {
  if (!this.open) return;
  this.open = false;
  this.dispatchEvent(new Event('close'));
};

// jsdom doesn't implement matchMedia.
window.matchMedia ??= (query: string) =>
  ({
    matches: false,
    media: query,
    addEventListener: () => {},
    removeEventListener: () => {},
  }) as unknown as MediaQueryList;

afterEach(cleanup);
