import { AxiosResponse } from "axios";
import axiosInstance from "../axiosInstance";

function getAllProduct(params?: Member[]): Promise<AxiosResponse> {
  return axiosInstance.get('/products', { params });
}

const ProductService = {
  getAllProduct,
};

export default ProductService;