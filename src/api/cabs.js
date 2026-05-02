import { api } from "./axios"

const cabsAPI ='/api'

export const getCabsDataAPI = async ()=> await api.get(cabsAPI)