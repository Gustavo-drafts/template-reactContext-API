// VIA INTERNA DO COMPONENTE

import { createContext, useContext, useEffect, useState } from "react";
import { Component2 } from "./Component2";
import { Componente3 } from "./Component3";


interface Props {
  number: number;
  handleNumber: () => void;
}

// Provedor da variável '.Provider' onde os dados serão usados globalmente ou por componentes filhos 
export const DataContext = createContext({} as Props) // '{} as any' objeto com qualquer typagem

/**
 * COMPONENTE PAI - High order (Provedor de dados e funções de contexto)     
 */
export function Pai() {
  const [number, setNumber] = useState(0)
  const [message, setMessage] = useState<string>('início')

  // Enviando via 'props' 
  function changeMessage() {
    useEffect(() => {
      if (number === 0) {
        setMessage('')
      }
      else {
        setMessage(`Apertou ${number} vezes!`)
      }
    }, [number])
  }
  changeMessage()


  // Enviando 'handleCycle' via contexto
  function handleNumber() {
    setNumber(number + 1)
  }



  return (
    <>
      <DataContext.Provider value={{ number, handleNumber }}>
        <Componente1 />
        <Component2 />
      </DataContext.Provider>
      <Componente3
        message={message}
      />
    </>
  )
}


// Uso de dados de contexto internamente
function Componente1() {
  const { number } = useContext(DataContext)

  return (
    <h1>Componente interno: {number}</h1>
  )
}





