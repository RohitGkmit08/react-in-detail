import { useRef } from "react";

function Second() {

    const renderCount = useRef(0);

    // useEffect(() => {
    //     renderCount.current++;
    //     console.log("button clicked", renderCount.current, "times")
    // });

    function handleClick () {
        renderCount.current++;
        console.log("button clicked", renderCount.current, "times")
    }

    return (
        <div>
            <button onClick={handleClick}>
                click 
            </button>
        </div>
    );
}
export default Second;