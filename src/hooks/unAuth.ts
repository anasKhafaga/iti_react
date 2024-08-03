import { AxiosError } from "axios";
import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";


export const useUnAuth = (error: AxiosError) => {

  const { refreshToken, forceTokenRefresh } = useContext(AppContext);
  
  useEffect(() => {
    if(error && error.response?.status === 401 && refreshToken) {
      forceTokenRefresh(refreshToken);
    }
  }, [ error ])
  
}