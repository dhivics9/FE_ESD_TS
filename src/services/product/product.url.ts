import { AxiosResponse } from "axios";
import axiosInstance from "../axiosInstance";  // Assuming you're using axiosInstance

function getProductByStatus(status: string): Promise<AxiosResponse> {
  const url = `/product?on_development=${status.toUpperCase()}`;
  return axiosInstance.get(url);
}

function addProduct(data: Product): Promise<AxiosResponse> {
  return axiosInstance.post('/product/add', data);
}

function updateProductData(id: string, data: Product): Promise<AxiosResponse> {
  return axiosInstance.put(`/product/${id}`, data);
}

function deleteProduct(id: string): Promise<AxiosResponse> {
  return axiosInstance.delete(`/product/${id}`);
}

const ProductService = {
  getProductByStatus,
  addProduct,
  updateProductData,
  deleteProduct
};

export default ProductService;
