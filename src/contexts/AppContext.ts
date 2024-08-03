import { AxiosInstance } from "axios";
import React, { createContext } from "react";
import type { User } from "../types/user";

interface AppContextProps {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  refreshToken: string;
  setRefreshToken: React.Dispatch<React.SetStateAction<string>>;
  itiAxios: AxiosInstance;
  forceTokenRefresh: (data: any) => void;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps)