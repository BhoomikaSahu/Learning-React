import { useState } from "react";

const Time = () => {
    // let hour = new Date().getHours();
    // let minute = new Date().getMinutes();
    // let second = new Date().getSeconds();

    // const [hour, setHour] = useState(new Date().getHours());
    // const [minute, setMinute] = useState(new Date().getMinutes());
    // const [second, setSecond] = useState(new Date().getSeconds());

    // const Inc = () => {
    //     setHour(new Date().getHours())
    //     setMinute(new Date().getMinutes())
    //     setSecond(new Date().getSeconds())
    // }

    const[currTime, setTime] = useState(new Date().toLocaleTimeString());
    const UpdatedTime = () => setTime(new Date().toLocaleTimeString());

    return (
        <>
            <h1>{currTime}</h1>
            <button onClick={UpdatedTime}>Click</button>
        </>
    )
}

export default Time;