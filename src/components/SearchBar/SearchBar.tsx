import React, { ReactElement } from 'react';
// I prefer to use css modules, or less modules to avoid class colisions, but I'm keeping it simple
import './SearchBar.styles.css';
import { Input } from '~/components';
import { InputProps } from '~/components/Input/Input';

interface SearchBarProps {
  search?: string;
  children?: ReactElement;
  onSearchChange?: (search: string) => void;
}

interface ISearchComponent extends React.FC<SearchBarProps> {
  Input: typeof SearchInput;
}

interface SearchInput {
  children?: ReactElement;
  search?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchInput(props: SearchInput & InputProps) {
  const { children, search, onChange, ...rest } = props;
  if (children && children.type === Input) {
    return React.cloneElement(children, {
      value: search,
      onChange,
      ...rest,
    });
  }
  return <Input className={props.className} value={search} onChange={onChange} {...rest} />;
}

const SearchBar: ISearchComponent = (props: SearchBarProps) => {
  const { onSearchChange = () => {}, search, children } = props;
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className="input-container">
      <SearchInput className="input" children={children} search={search} onChange={onChange} />
    </div>
  );
}

SearchBar.Input = Input;

export default SearchBar;
