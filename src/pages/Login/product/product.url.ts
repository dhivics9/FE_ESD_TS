import { AxiosResponse } from "axios";
import axiosInstance from "../../../services/axiosInstance";  // Assuming you're using axiosInstance

function getProducts(params?: { on_development: boolean }): Promise<AxiosResponse> {
  return axiosInstance.get('/product', { params });
}

function addProduct(data: FormData): Promise<AxiosResponse> {
  return axiosInstance.post('/products/add', data);
}

function updateProductData(id: string, data: FormData): Promise<AxiosResponse> {
  return axiosInstance.put(`/products/${id}`, data);
}

function deleteProduct(id: string): Promise<AxiosResponse> {
  return axiosInstance.delete(`/products/${id}`);
}

const ProductService = {
  getProducts,
  addProduct,
  updateProductData,
  deleteProduct
};

export default ProductService;
