import { useEffect, useState } from "react";

const UseEffect = () => {

    const [count, setCount] = useState(0);
    const incVal = () => {
        setCount(count+1)
    }
    useEffect(() => {
        document.title = `Chats(${count})`
    })
    return(
        <>
            <h1>{count}</h1>
            <button onClick={incVal}>Click</button>
        </>
    );

}

export default UseEffect;