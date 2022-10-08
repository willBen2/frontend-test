import React, { HTMLAttributes, useEffect, useState } from 'react';
import { SearchBar } from '~/components';
import './AutoComplete.styles.css';
import Dropdown from '~/components/AutoComplete/Dropdown';
import Option from '~/components/AutoComplete/Option';

interface SearchBarProps<T> {
  options: {title: string, id: number | string}[];
  dropdownClassName?: string;
  dropdownItemClassName?: string;
  onSearchChange: (search: string) => void;
}

function AutoComplete<T>(props: SearchBarProps<T> & HTMLAttributes<HTMLElement>) {
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
      <SearchBar onSearchChange={onChange} search={search} />
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
