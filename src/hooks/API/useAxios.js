import axiosConfig from "@/lib/config/axios.config";
import axios from "axios"; 

const apiURL = import.meta.env.VITE_API_URL; 

export function useAxios() {
  return axiosConfig;
}

export function useAxiosSecure() {
  return axiosConfig;
}

function useAxiosCommon() {
  const axiosCommon = axios.create({
    baseURL: apiURL,
  });

  return axiosCommon;
}

export default useAxiosCommon;
