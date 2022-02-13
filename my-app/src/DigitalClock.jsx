import { useState } from "react";

const Clock = () => {
    const[currTime, setTime] = useState(new Date().toLocaleTimeString());
    const UpdatedTime = () => setTime(new Date().toLocaleTimeString());
    setInterval(UpdatedTime, 1000);

    return (
        <>
            <h1>{currTime}</h1>
        </>
    )
}

export default Clock;