import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Text from '../components/Text/Text';

describe('Text', () => {
  it('should render the text with level h1', () => {
    render(<Text level="h1" />);
    const text = screen.getByTestId('text');
    expect(text.tagName).toBe('H1');
  })

    it('should render the text with level h2', () => {
        render(<Text level="h2" />);
        const text = screen.getByTestId('text');
        expect(text.tagName).toBe('H2');
    })

    it('should render the text with level p1', () => {
        render(<Text level="p1" />);
        const text = screen.getByTestId('text');
        expect(text.tagName).toBe('P');
    })

    it('should render the text with level p2', () => {
        render(<Text level="p2" />);
        const text = screen.getByTestId('text');
        expect(text.tagName).toBe('P');
    })

    it('should render the text with level p3', () => {
        render(<Text level="p3" />);
        const text = screen.getByTestId('text');
        expect(text.tagName).toBe('P');
    })
   
});
