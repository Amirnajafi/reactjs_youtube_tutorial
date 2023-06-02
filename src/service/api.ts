import axios , {InternalAxiosRequestConfig} from "axios";

const api = axios.create({
  baseURL: "http://dev.amirnajafi.com:8080/",
});

api.interceptors.request.use((req :InternalAxiosRequestConfig)=>{
  const token = localStorage.getItem("token");
  if (token){
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
})

export default api;
