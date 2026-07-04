// memoization - Store the result of an expensive computation and reuse it if the inputs haven't changed.
// using useMemo always is a bad idea, because  Store previous value. Compare dependencies.Manage cache.
import { useMemo } from "react";
import { useState } from "react"

const App = () => {
  const [count, setCount] = useState(0);

  // function expensiveCal(){
  //   console.log("calculating...")

  //   let total = 0;
  //   for(let i=0; i<1000000; i++){
  //     total += i
  //   }
  //   return total
  // }
  
  // const total = expensiveCal()

  const total = useMemo(() => {
    console.log("calculating...")
    let total = 0;
    for(let i=0; i<1000000000; i++){
      total += i;
    }
    return total;
    
  }, [])
  return(
    <div>
      <h2>Count: {count}</h2>
      <br></br>
      <h2>{total}</h2>

      <button onClick={() => setCount(count => count + 1)}>
        Increment
      </button>
    </div>
  )
}

export default App