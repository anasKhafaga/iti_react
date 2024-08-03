import axios from "axios";

export const useAxios = (token: string) => {
  
  const itiAxios = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return { itiAxios }

}