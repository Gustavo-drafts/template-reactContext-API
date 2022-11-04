import { createContext, useCallback, useState } from "react";

interface IUser {
  img: string;
  name: string;
}

// tipagem para compartilhamento dos dados
interface IAppContext {
  user?: IUser;
  updateUser( user: IUser ): void; // tipagem da função
}

// Alimentando 'AppContext' com dados que serão compartilhados 
const AppContext = createContext<IAppContext>( {
  user: undefined,
  updateUser: () => { } 
})


// Alimentando 'AppProvider' com funções que serão espalhadas pela aplicação 
function AppProvider({ children }: { children: JSX.Element }) {
  const [data, setData] = useState<IUser>()



// função compartilhada por toda aplicação 'useCallback' armazena o valor em mem para evitar Re-rendering
  const updateUser = useCallback( ( user: IUser ) => {
    setData(user)
  }, [])

// Instanciando o elemento '.Provider'
  return (
    <AppContext.Provider value={{
      user: data,
      updateUser
    }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }