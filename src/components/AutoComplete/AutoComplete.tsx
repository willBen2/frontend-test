import React, { HTMLAttributes, useEffect, useState } from 'react';
import { SearchBar } from '~/components';
import './AutoComplete.styles.css';
import Dropdown from '~/components/AutoComplete/Dropdown';
import Option from '~/components/AutoComplete/Option';

interface AutoCompleteProps {
  options: {title: string, id: number | string}[];
  inputTestId?: string;
  dropdownTestId?: string;
  placeholder?: string;
  inputClassname?: string;
  dropdownClassName?: string;
  dropdownItemClassName?: string;
  onSearchChange: (search: string) => void;
}

function AutoComplete(props: AutoCompleteProps & HTMLAttributes<HTMLElement>) {
  const [search, setSearch] = useState<string>('');
  const [showDropdown, setShowDropdown] = useState(false);
  const { onSearchChange, options } = props;

  const onSelect = (s: string) => {
    setShowDropdown(false);
    setSearch(s);
  };

  const onChange = (s: string) => {
    setSearch(s);
  };

  const onFocus = () => {
    setShowDropdown(true);
  };

  useEffect(() => {
    onSearchChange(search);
  }, [search]);

  return (
    <div className={["auto-complete-container", props.className].join(' ')}>
      <SearchBar onSearchChange={onChange} search={search}>
        <SearchBar.Input onFocus={onFocus} data-testid={props.inputTestId} placeholder={props.placeholder} className={props.inputClassname} />
      </SearchBar>
      {
        showDropdown
          ? <Dropdown data-testid={props.dropdownTestId} className={props.dropdownClassName}>
            {
              options.filter(o => o.title.toLowerCase().includes(search.toLowerCase())).map(option => (
                <Option
                  key={option.id}
                  className={props.dropdownItemClassName}
                  onSelect={onSelect}
                  search={search} title={option.title}
                />
              ))
            }
          </Dropdown>
          : null
      }
    </div>
  );
}

export default AutoComplete;
