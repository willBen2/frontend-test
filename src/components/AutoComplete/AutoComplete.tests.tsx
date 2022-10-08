import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import AutoComplete from './AutoComplete';

const mockOptions = [
  {
    title: 'test',
    id: 1,
  },
  {
    title: 'testing',
    id: 2,
  },
  {
    title: 'tes t',
    id: 3,
  },
  {
    title: 't es t',
    id: 4,
  },
]

describe('AutoComplete', () => {
  it('should match with default AutoComplete', () => {
    const onChangeMock = jest.fn();
    const { container } = render(
      <AutoComplete  onSearchChange={onChangeMock} options={mockOptions} />
    )
    expect(container).toMatchSnapshot();
  });

  it('should not show dropdown', () => {
    const onChangeMock = jest.fn();
    render(
      <AutoComplete
        dropdownTestId="dropdown"
        options={mockOptions}
        onSearchChange={onChangeMock}
      />
    );

    const dropdowns = screen.queryAllByTestId('dropdown');
    expect(dropdowns.length).toBe(0);
  });

  it('should show dropdown', () => {
    const onChangeMock = jest.fn();
    render(
      <AutoComplete
        inputTestId="input"
        dropdownTestId="dropdown"
        options={mockOptions}
        onSearchChange={onChangeMock}
      />
    );

    fireEvent.focus(screen.getByTestId('input'));

    const dropdown = screen.getByTestId('dropdown');
    expect(dropdown).toBeDefined();
  });

  it('should fire onSearchChange', () => {
    const onChangeMock = jest.fn();
    render(
      <AutoComplete
        inputTestId="input"
        options={mockOptions}
        onSearchChange={onChangeMock}
      />
    );

    fireEvent.change(screen.getByTestId('input'), {
      target: { value: 'test' },
    });

    expect(onChangeMock).toHaveBeenCalled();
  });

  it('should have two items', () => {
    const onChangeMock = jest.fn();
    const { container } = render(
      <AutoComplete
        inputTestId="input"
        dropdownTestId="dropdown"
        options={mockOptions}
        onSearchChange={onChangeMock}
      />
    );

    fireEvent.focus(screen.getByTestId('input'));
    fireEvent.change(screen.getByTestId('input'), {
      target: { value: 'test' },
    });

    const dropdown = screen.getByTestId('dropdown');
    expect(dropdown.children.length).toBe(2);
  });
})
