
import { useRef } from 'react'

const One = () => {
    const inputRef = useRef(null);
    function handleFocus(){
        inputRef.current.focus()
    }
  return (
    <div>
        <input
            ref={inputRef}
// After creating this DOM element, please store the reference to it inside inputRef.current.
// initially -
// inputRef = {
//     current: null
// }

// after render - 
// inputRef = {
//     current: <input DOM node>
// }
        />

        <button onClick={handleFocus}>
            Focus input 
        </button>
    </div>
  )
}

export default One