import React, { createContext } from "react";
import type { User } from "../types/user";

interface AppContextProps {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps)