
import { useEffect } from "react";
import { useState } from "react"
//Any operation that affects something outside the component or depends on something outside the component.
// useEffect lets us perform side effects after React has updated the UI.

// 1. having no dependency array -> will run after every render.
// 2. empty dependency array -> will runn only once, that too after first render (api calls, initial setup).
// 3. [count] -> will run only when count changes

// cleanup function - an optional function you can return from inside the React useEffect Hook to stop, undo, or clean up side effects before they cause performance issues or bugs.
// when it runs - before the effect runs again and when the component unmounts.

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data)
    }
    fetchUsers()
  },[])
  return (
    <div>
      {users.map((user) => (
        <h3 key={user.id}>
          {user.name}
        </h3>
      ))}
    </div>
  )
}

export default App;