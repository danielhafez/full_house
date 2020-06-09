import axios from 'axios';

const baseUrl = 'http://127.0.0.1:5000/';

export function getAllCompanies() {
  return axios.get(`${baseUrl}companies`);
}

export function createCompany(companyObj) {
  return axios.post(`${baseUrl}create-company`, companyObj);
}

export function createUser(userObj) {
  return axios.post(`${baseUrl}create-user`, userObj);
}

export function searchCompany(key, value) {
  return axios.get(`${baseUrl}get-company?key=${key}&value=${value}`);
}
