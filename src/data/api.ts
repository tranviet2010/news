import axiosInstance from "./configApi";


export const getMenu = (data?: any) => axiosInstance.get('menu', data);