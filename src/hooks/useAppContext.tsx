// HOOK CONTEXT PARA SER USADO EM TODA APLICAÇÃO

import { useContext } from "react";
import { AppContext } from "../store/context";


export function useAppContext() {
  const context = useContext( AppContext )

  return context;
}