import React, { createContext } from "react";

export interface User {
  id: number,
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
  refreshToken: string;
}

interface AppContextProps {
  user: User | null | boolean
  setUser: React.Dispatch<React.SetStateAction<User | null | boolean>>
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps)