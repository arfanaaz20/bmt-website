import {api} from "./axios"

const loginAPI = '/api/auth/login'

export const loginAuthAPI = async (data) => await api.post(loginAPI,data)