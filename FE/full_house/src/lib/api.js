import axios from 'axios';

const baseUrl = 'http://127.0.0.1:5000/';

export function getAllCompanies() {
  return axios.get(`${baseUrl}companies`);
}

export function createStudent(studentObj) {
  return axios.post(`${baseUrl}create-student`, studentObj);
}

export function deleteStudent(key, value) {
  return axios.post(`${baseUrl}get-company?key=${key}&value=${value}`);
}
