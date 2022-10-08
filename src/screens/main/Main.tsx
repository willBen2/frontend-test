import React, { useState } from 'react';
import './Main.styles.css';
import { AutoComplete } from '~/components';
import useDebouncedCallback from '~/hooks/useDebouncedCallback';
import useProductsSearch from '~/adapters/useProductsSearch';

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

function Main() {
  const [search, setSearch] = useState<string>('');
  const products = useProductsSearch(search);
  const onChange = useDebouncedCallback((s) => {
    setSearch(s);
  }, [], 500);

  return (
    <>
      <AutoComplete placeholder="Search for products..." onSearchChange={onChange} options={products} />
      <AutoComplete options={mockOptions} onSearchChange={() => {}} />
    </>
  );
}

export default Main;
