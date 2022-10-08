import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('should match with default SearchBar', () => {
    const { container } = render(
      <SearchBar />
    )
    expect(container).toMatchSnapshot();
  });

  it('should fire onSearchChange', () => {
    const onChangeMock = jest.fn();
    render(
      <SearchBar onSearchChange={onChangeMock}>
        <SearchBar.Input data-testid="input" />
      </SearchBar>
    );

    fireEvent.change(screen.getByTestId('input'), {
      target: { value: 'test' },
    });

    expect(onChangeMock).toHaveBeenCalled();
  });
})
