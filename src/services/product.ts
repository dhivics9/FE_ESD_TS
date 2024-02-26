import axios, { AxiosResponse } from "axios";
import { getBearerHeader } from "../utils/service";
import { BASE_URL } from "./url";

function getProductByStatus(token: string, status: string): Promise<AxiosResponse> {
  const url = `${BASE_URL}/product?on_development=${status.toUpperCase()}`;
  return axios.get(url, { headers: getBearerHeader(token) });
}

function addProduct(token: string, data: Product): Promise<AxiosResponse> {
  const url = `${BASE_URL}/product/add`;
  return axios.post(url, data, { headers: getBearerHeader(token) });
}

function updateProductData(token: string, id: string, data: Product): Promise<AxiosResponse> {
  const url = `${BASE_URL}/product/${id}`;
  return axios.put(url, data, { headers: getBearerHeader(token) });
}

function deleteProduct(token: string, id: string): Promise<AxiosResponse> {
  const url = `${BASE_URL}/product/${id}`;
  return axios.delete(url, { headers: getBearerHeader(token) });
}

const ProductService = {
  getProductByStatus,
  addProduct,
  updateProductData,
  deleteProduct
};

export default ProductService;
