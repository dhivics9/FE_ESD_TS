import { useQuery } from '@tanstack/react-query';
import ProductService from './product.url';

// Query for GET all products
export const useGetAllProducts = (params?: Member[]) => {
  return useQuery({
    queryKey: ['products', params],
    queryFn: async () => {
      const response = await ProductService.getAllProduct(params);
      return response.data.data;
    },
  });
};
