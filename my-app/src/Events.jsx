import { useState } from "react";

const Events = () => {
    const [color, setColor] = useState('red');
    const [name, setName] = useState('Purple');
    const purple = 'red';
    const updateColor = () => {
        setColor('purple');
        setName("Blue");
    }
    return (
        <>  
            <div style={{backgroundColor : color}}>
                <button onClick={updateColor} style={{backgroundColor : color}}>{name}</button>
                {/* <button onClick={changeBg}>Blue</button>
                <button onClick={changeBg}>Green</button> */}
            </div>
        </>
    );
}

export default Events;