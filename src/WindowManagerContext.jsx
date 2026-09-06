import { createContext, useContext } from "react";

export const WindowManagerContext = createContext(null);

export function useWindowManager() {
  return useContext(WindowManagerContext);
}