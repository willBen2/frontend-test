import React, { HTMLAttributes, useEffect, useState } from 'react';
import { SearchBar } from '~/components';
import './AutoComplete.styles.css';
import Dropdown from '~/components/AutoComplete/Dropdown';
import Option from '~/components/AutoComplete/Option';

interface AutoCompleteProps {
  options: {title: string, id: number | string}[];
  placeholder?: string;
  inputClassname?: string;
  dropdownClassName?: string;
  dropdownItemClassName?: string;
  onSearchChange: (search: string) => void;
}

function AutoComplete(props: AutoCompleteProps & HTMLAttributes<HTMLElement>) {
  const [search, setSearch] = useState<string>('');
  const { onSearchChange, options } = props;

  const onSelect = (s: string) => {
    setSearch(s);
  };

  const onChange = (s: string) => {
    setSearch(s);
  };

  useEffect(() => {
    onSearchChange(search);
  }, [search]);

  return (
    <div className={["auto-complete-container", props.className].join(' ')}>
      <SearchBar onSearchChange={onChange} search={search}>
        <SearchBar.Input placeholder={props.placeholder} className={props.inputClassname} />
      </SearchBar>
      <Dropdown className={props.dropdownClassName}>
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
    </div>
  );
}

export default AutoComplete;
