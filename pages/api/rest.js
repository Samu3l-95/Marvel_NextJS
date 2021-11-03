import axiosInstance from './axiosInstance';

const URL = 'http://gateway.marvel.com/v1';
const header = {};
header['content-type'] = 'application/json';

async function request(method, uri, data = {}, headers = {}, extras = {}) {
  const response = await axiosInstance({
    method,
    url: URL + uri,
    data,
    headers,
    timeout: 10000,
    ...extras,
  });

  if (response && response.data) {
    if (response.data.success) return response.data.data;
    return response.data;
  }
  return response;
}

async function getRest(uri) {
  return request('get', uri, {}, header);
}

async function postRest(uri, data) {
  return request('post', uri, data, header);
}

async function patchRest(uri, data) {
  return request('patch', uri, data, header);
}

async function putRest(uri, data, header) {
  return request('put', uri, data, header);
}

async function deleteRest(uri, data, header) {
  return request('delete', uri, data, header);
}

export default {
  getRest,
  patchRest,
  postRest,
  putRest,
  deleteRest,
};
