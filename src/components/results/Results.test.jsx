import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Result from './Results';

describe('Result component', () => {
  afterEach(() => cleanup());
  it('renders search Results', () => {
    const { asFragment } = render(<Result />);
    expect(asFragment()).toMatchSnapshot();
  });
});
