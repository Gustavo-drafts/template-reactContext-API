// VIA CONTEXT COMPONENTS


import { useContext } from "react"
import { DataContext } from "./Component1"



// Importando dados de contexto externo
export function Component2() {
  const { number, handleNumber } = useContext(DataContext)

  return (
    <>
      <h1>
        <span>Componente externo: {number}</span>
        <button onClick={handleNumber}>
          Trocar ciclo ativo
        </button>
      </h1>
    </>
  )
}