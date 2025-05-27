import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { App } from './App';

describe('App', () => {
  beforeEach(() => {
    globalThis.matchMedia =
      globalThis.matchMedia ||
      (() => ({
        matches: false,
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      }));
  });

  it('should pass', () => {
    render(<App />);
  });

  it('should display dashboard title with correct text', async () => {
    render(<App />);
    const titleElement = await screen.findByText('BugReport', {
      selector: '.ab-Dashboard__title',
    });

    expect(titleElement).toBeDefined();
  });
});
