import { createContext, ReactNode } from "react";

export interface PageUserProps {
  user: string;
  description: string;
  price: number;
}


export const PageContexts = createContext({} as PageUserProps)


interface PageContextProviderProps {
  children: ReactNode
}

export function PageContextsProvider({ user, price, description }: PageUserProps, { children }: PageContextProviderProps) {
  return (
    <PageContexts.Provider value={{ user, description, price }}>
    {children}
    </PageContexts.Provider>
  )
}