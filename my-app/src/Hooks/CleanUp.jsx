import { useState, useEffect } from "react";

const CleanUp = () => {

    const [width, setWidth] = useState(window.screen.width);
    
    useEffect(() => {
        window.addEventListener("resize", ()=>setWidth(window.screen.width))
    })
    return (
        <>
            <h1>Width of Screen</h1>
            <h1>{width}</h1>
        </>
    );
}

export default CleanUp;