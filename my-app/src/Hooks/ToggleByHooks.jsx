import { useState } from "react";

const ToggleByHooks = () => {
    const [name, setName] = useState('Bhoomika');
    const clickMe = () => {
        let myName = 'Bhoomika';
        if(myName === name)
            setName('Palak');
        else
            setName('Bhoomika');
    }
    
    return(
        <>
            <h1>{name}</h1>
            <button onClick={clickMe}>Click me</button>
        </>
    );
}

export default ToggleByHooks;