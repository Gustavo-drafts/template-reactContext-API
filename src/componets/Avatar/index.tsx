import { useAppContext } from "../../hooks/useAppContext"

export function Avatar() {
  const { user } = useAppContext()

  if ( !user ) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <img
        style={{
          width: '15rem',
          height: '15rem',
          borderRadius: '5rem',
        }}
        src={user?.img} />
      <p>{user?.name}</p>
    </div>
  )
}