import { useEffect, useState } from 'react';
import Product from '~/entities/Product';
import ProductsAPI from '~/services/products/ProductsApi';

export default function useProductsSearch(search: string): Product[] {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    console.log('SEARC', search);
    const getProducts = async () => {
      const data = await ProductsAPI.searchProducts(search);
      // Why do the map? If the data changes in the server, and all of our application is using some structure
      // we can modify only the Product class to always have the same interface regardless the data from server
      setProducts(data.products.map(p => new Product(p)));
    }
    getProducts();
  }, [search]);
  return products;
}
