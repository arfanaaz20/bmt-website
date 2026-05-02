import { api } from "./axios"

const holidayAPI = '/api/holidayparks/all'

export const getHolidayDataAPI = async () => await api.get(holidayAPI)