import React  from 'react';
// I prefer to use css modules, or less modules, but I'm keeping it simple
import './SearchBar.styles.css';
import { Input } from '~/components';

interface SearchBarProps {
  search?: string;
  onSearchChange?: (search: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  const { onSearchChange = () => {}, search } = props;
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className="input-container">
      <Input className="input" value={search} onChange={onChange} />
    </div>
  );
}

export default SearchBar;
