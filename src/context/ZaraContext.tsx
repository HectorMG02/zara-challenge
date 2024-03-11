import { createContext } from 'react';

const Context = createContext({});

interface Props {
  children: React.ReactNode;
}

export function ZaraContextProvider({ children }: Props) {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
}