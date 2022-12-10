import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import AboutPage from '.';

describe('App', () => {
  test('Should render', () => {
    render(<AboutPage />);

    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });
});
