import { useState } from "react";

const HandleObject = () => {

    const [obj, setObj] = useState({name:'Bhoomika', age:20, sem: 7});

    const upData = () => {
        setObj({...obj, name:'Palak'})  //spred operator
    }

    return(
        <>
            <h1>{`Name: ${obj.name} age: ${obj.age} sem: ${obj.sem}`}</h1>
            <button onClick={upData}>Clear</button>
        </>
    );
}

export default HandleObject;