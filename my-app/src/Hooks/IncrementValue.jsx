import { useState } from "react";

const IncrementValue = () => {
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

export default IncrementValue;