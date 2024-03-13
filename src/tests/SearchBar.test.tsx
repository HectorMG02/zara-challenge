import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import SearchBar from '../components/SearchBar/SearchBar';

describe('SearchBar', () => {

  it('should render an input and the amount of results', () => {
    render(<SearchBar value="Test" onChange={() => {}} count={50} />);
    
    const input = screen.getByTestId('search-input');
    const resultsCount = screen.getByText('50 RESULTS');
    
    expect(input).toBeInTheDocument();
    expect(resultsCount).toBeInTheDocument();
  });

  it('should render the singular form of "result" if the count is 1', () => {
    render(<SearchBar value="Test" onChange={() => {}} count={1} />);
    
    const resultsCount = screen.getByText('1 RESULT');
    
    expect(resultsCount).toBeInTheDocument();
  });

  it('should render the plural form of "result" if the count is not 1', () => {
    render(<SearchBar value="Test" onChange={() => {}} count={2} />);
    
    const resultsCount = screen.getByText('2 RESULTS');
    
    expect(resultsCount).toBeInTheDocument();
  });
  
  

  it('should call onChange when the input value changes', async () => {
    const handleChange = vi.fn();
    render(<SearchBar value="" onChange={handleChange} count={0} />);
    
    const input = screen.getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'New value' } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
