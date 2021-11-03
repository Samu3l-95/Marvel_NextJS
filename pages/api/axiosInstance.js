import axios from 'axios';

const axiosInstance = axios.create();
function createAxiosResponseInterceptor(axiosInstances) {
  return axiosInstances;
}
createAxiosResponseInterceptor(axiosInstance);

export default axiosInstance;
