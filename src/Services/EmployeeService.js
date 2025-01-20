import axios from 'axios';
import { API_BASE_URL } from '../constants';

const API_URL = API_BASE_URL + '/employees';

export const getEmployees = () => axios.get(API_URL).then((res) => res.data);

export const getEmployeeById = (id) =>
  axios.get(`${API_URL}/${id}`).then((res) => res.data);

export const createEmployee = (employee) =>
  axios.post(API_URL, employee).then((res) => res.data);

export const updateEmployee = (id, employee) =>
  axios.put(`${API_URL}/${id}`, employee).then((res) => res.data);

export const deleteEmployee = (id) =>
  axios.delete(`${API_URL}/${id}`).then((res) => res.data);
