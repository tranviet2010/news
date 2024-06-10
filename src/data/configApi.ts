import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:198/api/v1', // Thay đổi URL của API của bạn ở đây
  timeout: 10000, // Timeout của mỗi request, tính bằng milliseconds
  headers: {
    'Content-Type': 'application/json', // Định dạng dữ liệu bạn gửi đi, có thể là 'application/json', 'multipart/form-data', vv.
  },
});

// Interceptors để xử lý request và response trước khi chúng được gửi đi hoặc được xử lý
axiosInstance.interceptors.request.use(
  (config) => {
    // Xử lý trước khi request được gửi đi, như thêm header hoặc xử lý dữ liệu
    return config;
  },
  (error) => {
    // Xử lý lỗi request
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Xử lý trước khi response được trả về cho client
    return response;
  },
  (error) => {
    // Xử lý lỗi response
    return Promise.reject(error);
  }
);

export default axiosInstance;