// VIA PROPS


// Tipar as variáveis que estão sendo recebidas via 'props'
interface messageProps {
  message: string | undefined;
}

// Inserir como parâmetro para serem usadas dentro do componente
export function Componente3({ message }: messageProps) {


  return (
    <>
      Compartilhamento via props
      <br />
      Valor: {message}
    </>
  )
}