import { useState } from "react";

const HandleArray = () => {
    let Data = [
        {id: 1, fname: 'Bhoomika', lname: 'Sahu'},
        {id: 2, fname: 'Palak', lname: 'Sahu'},
        {id: 3, fname: 'Shreya', lname: 'Sahu'},
        {id: 4, fname: 'Reet', lname: 'Sahu'},
        {id: 5, fname: 'Anmol', lname: 'Sahu'}
    ] 
    const [newArray, setNewArray] = useState(Data);
    const clearData = () => {
        setNewArray([]);
    }
    return(
        <>
            {
                newArray.map((ele) => {
                    return(
                        <>
                            <h1 key={ele.id}>{`${ele.fname} ${ele.lname}`} </h1>
                        </>
                    );
                }) 
            }
            <button onClick={clearData}>Clear</button>
        </>
    );
}

export default HandleArray;