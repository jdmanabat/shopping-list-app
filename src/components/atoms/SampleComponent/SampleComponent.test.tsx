import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SampleComponent from '.';

describe('App', () => {
  test('Renders Hello world', () => {
    render(<SampleComponent />);

    expect(screen.getByText(/Hello world/i)).toBeDefined();
  });
});
