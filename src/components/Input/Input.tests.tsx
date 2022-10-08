import React from 'react';
import { render } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('should match with default input', () => {
    const { container } = render(
      <Input />
    )
    expect(container).toMatchSnapshot();
  });
})
