import { useQuery, useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import ProductService from './product.url';

// Query for GET products by status
export const useGetProductByStatus = (status: string) => {
  return useQuery({
    queryKey: ['products', status],
    queryFn: async () => ProductService.getProductByStatus(status),
  });
};

// Mutation for ADD product
export const useAddProduct = (
  options?: UseMutationOptions<AxiosResponse, unknown, Product>,
) => {
  return useMutation<AxiosResponse, unknown, Product>({
    mutationFn: async (data: Product) => {
      const response = await ProductService.addProduct(data);
      return response.data;
    },
    ...options,
  });
};

// Mutation for UPDATE product data
export const useUpdateProductData = (
  options?: UseMutationOptions<AxiosResponse, unknown, { id: string; data: Product }>,
) => {
  return useMutation<AxiosResponse, unknown, { id: string; data: Product }>({
    mutationFn: async ({ id, data }: { id: string; data: Product }) => {
      const response = await ProductService.updateProductData(id, data);
      return response.data;
    },
    ...options,
  });
};

// Mutation for DELETE product
export const useDeleteProduct = (
  options?: UseMutationOptions<void, unknown, string>,
) => {
  return useMutation<void, unknown, string>({
    mutationFn: async (id: string) => {
      await ProductService.deleteProduct(id);
    },
    ...options,
  });
};
