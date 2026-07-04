
//useCallback caches a function so React can reuse the same function reference across renders until one of its dependencies changes.

import { useState } from "react"
import Child from "./Child"
const App = () => {
  const [count, setCount] = useState(0)
  function handleClick() {
    console.log("clicked")
  }
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        increment
      </button>

      <Child onClick={handleClick}/>
    </>
  )
}

export default App