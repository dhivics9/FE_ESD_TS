import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "./url";
import { getBearerHeader } from './../utils/service';

function getAllMembers(token: string): Promise<AxiosResponse> {
  const url = `${BASE_URL}/members`;
  return axios.get(url, { headers: getBearerHeader(token) });
}

function getMembersByRole(token: string, role: string): Promise<AxiosResponse> {
  const url = `${BASE_URL}/members?role=${role}`;
  return axios.get(url, { headers: getBearerHeader(token) });
}

function addMember(token: string, data: Member): Promise<AxiosResponse> {
  const url = `${BASE_URL}/members`;
  return axios.post(url, data, { headers: getBearerHeader(token) });
}

function updateMemberData(token: string, id: string, data: Member): Promise<AxiosResponse> {
  const url = `${BASE_URL}/members/${id}`;
  return axios.put(url, data, { headers: getBearerHeader(token) });
}

function deleteMember(token: string, id: string): Promise<AxiosResponse> {
  const url = `${BASE_URL}/members/${id}`;
  return axios.delete(url, { headers: getBearerHeader(token) });
}

const MemberService = {
  getAllMembers,
  getMembersByRole,
  addMember,
  updateMemberData,
  deleteMember
};

export default MemberService;