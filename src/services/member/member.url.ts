import { AxiosResponse } from "axios";
import axiosInstance from "../axiosInstance";

function getAllMembers(params?: Member[]): Promise<AxiosResponse> {
  return axiosInstance.get('/members', { params });
}

function addMember(data: FormData): Promise<AxiosResponse> {
  return axiosInstance.post('/members/add', data);
}

function updateMemberData(id: string, data: FormData): Promise<AxiosResponse> {
  return axiosInstance.put(`/members/${id}`, data);
}

function deleteMember(id: string): Promise<AxiosResponse> {
  return axiosInstance.delete(`/members/${id}`);
}

const MemberService = {
  getAllMembers,
  addMember,
  updateMemberData,
  deleteMember
};

export default MemberService;