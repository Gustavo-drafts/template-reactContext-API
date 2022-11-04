
import { HomePage } from './pages/HomePage'
import './App.css'
import { useEffect } from 'react'
import { useAppContext } from './hooks/useAppContext'

export function App() {
  // usando um hook de contexto
  const { updateUser, user } = useAppContext()

  // simulando um request ao context
  async function getData() {
    // simular um delay de 2 seg, de um request
    await new Promise( ( done ) => setTimeout( done, 1500 ) )
    return {
      img: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
      name: 'Guto',
    }
  }

  useEffect( () => {
    if ( !user ) {
      getData().then( ( data ) => {
        updateUser( data )
      } )
    }
  }, [] )

  return (
    <HomePage />
  )
}
