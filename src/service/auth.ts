import api from "./api";

interface RegisterParams {
    username: string;
    password: string;
    name: string;
    family: string;
}
export const register  = async (data : RegisterParams) => {
    return await api.post("api/auth/signup", data);
}
interface LoginParams {
    username: string;
    password: string;
}
export const login  = async (data : LoginParams) => {
    return await api.post("api/auth/signin", data);
}