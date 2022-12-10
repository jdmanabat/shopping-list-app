import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from '.';

describe('App', () => {
  test('Should render', () => {
    render(<HomePage />);

    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
});
