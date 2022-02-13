import { useState } from "react";

const ClickFunc = () => {
    let [count, setCount] = useState(1);
    const Inc = () => {
        setCount(++count);
        console.log(count);
    }
    
    return (
        <>
            <h1>{count}</h1>
            <button onClick={Inc}>Click</button>
        </>
    )
}

export default ClickFunc;