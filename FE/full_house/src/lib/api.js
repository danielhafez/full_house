import axios from "axios";

const baseUrl = "http://127.0.0.1:80/";

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

export function updateCompany(key, value, newKey, newValue) {
  return axios.post(
    `${baseUrl}update-company?search_key=${key}&search_value=${value}?new_key=${newKey}&new_value=${newValue}`
  );
}

export function sendImage(img) {
  return axios.post(`${baseUrl}predict`, img);
  //   {
  //     headers: {
  //       accept: 'application/json',
  //       'Accept-Language': 'en-US,en;q=0.8',
  //       'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
  //     },
  //   });
}
