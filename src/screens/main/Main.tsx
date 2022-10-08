import React, { useState } from 'react';
import './Main.styles.css';
import { AutoComplete } from '~/components';
import useDebouncedCallback from '~/hooks/useDebouncedCallback';
import useProductsSearch from '~/adapters/useProductsSearch';

function Main() {
  const [search, setSearch] = useState<string>('');
  const products = useProductsSearch(search);
  const onChange = useDebouncedCallback((s) => {
    setSearch(s);
  }, [], 500);

  return (
    <AutoComplete placeholder="Search for products..." onSearchChange={onChange} options={products} />
  );
}

export default Main;
