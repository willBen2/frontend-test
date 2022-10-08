import ApiClient from '~/services/APIClient';
import { IProduct } from '~/entities/Product';

interface ProductsOut {
  products: IProduct[];
  total?: number;
  skip?: number;
  limit?: number;
}

class ProductsAPI {
  getProducts = async (): Promise<ProductsOut> => {
    return ApiClient.get('products');
  };
  searchProducts = async (search: string): Promise<ProductsOut> => {
    if (!search || search.length < 2) {
      return { products: [] };
    }
    return ApiClient.get('products/search?q=' + search);
  };
}

export default new ProductsAPI();
