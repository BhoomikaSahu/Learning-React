import { useEffect, useState } from "react";

const Conditions = () => {

    const [count, setCount] = useState(0);
    useEffect(() => {
        if(count > 0)
            document.title = `Chat(${count})`;
        else
            document.title = `Chat`;
    })

    return(
        <>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count+1);
            }}>Click</button>
        </>
    );
}

export default Conditions;