import { useContext } from "react"
import { PageContexts } from "../contexts/GlobalContext"



export function ContextPage() {
  const data = useContext(PageContexts)

  data.user = 'Gustavo'
  data.description = 'Developer'
  data.price = 5000
  

  return (
    <>
      <table>
        <th>
          <td>{data.user}</td>
          <br />
          <td>{data.description}</td>
          <br />
          <td>{data.price}</td>
        </th>
      </table>
    </>
  )
}