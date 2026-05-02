import { api } from "./axios";

const signUpAPI = '/api/auth/register'

export const signUpAuthAPI = async(data) => await api.post(signUpAPI,data)