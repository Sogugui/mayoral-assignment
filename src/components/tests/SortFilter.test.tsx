import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useRouter } from 'next/router';
import SortFilter from '../ui/SortFilter';

// Mock useRouter
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('SortFilter', () => {
  const mockPush = jest.fn();
  const mockSortWithoutQuery = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      query: {},
      pathname: '/test-path',
      push: mockPush,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders SortFilter component', () => {
    render(<SortFilter />);
    expect(screen.getByText('Featured')).toBeInTheDocument();
    expect(screen.getByText('Price: Low to High')).toBeInTheDocument();
    expect(screen.getByText('Price: High to Low')).toBeInTheDocument();
  });

  test('calls sortWithoutQuery when provided', () => {
    render(<SortFilter sortWithoutQuery={mockSortWithoutQuery} />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'lowest' } });
    expect(mockSortWithoutQuery).toHaveBeenCalledWith('lowest');
  });

  test('calls router.push with correct query when sortWithoutQuery is not provided', () => {
    render(<SortFilter />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'highest' } });
    expect(mockPush).toHaveBeenCalledWith({
      pathname: '/test-path',
      query: { sort: 'highest' },
    });
  });
});
