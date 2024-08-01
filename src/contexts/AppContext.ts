import React, { createContext } from "react";

interface AppContextProps {
  setCartItems: React.Dispatch<React.SetStateAction<number[]>>;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps)