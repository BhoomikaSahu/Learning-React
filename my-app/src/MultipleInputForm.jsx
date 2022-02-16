import { useState } from "react";

const MultipleInputForm = () =>{
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [fullname, setFullname] = useState('');

    const firstName = (ele) => {
        console.log(fname);
        setFname(ele.target.value);
    }
    const lastName = (ele) => {
        console.log(lname);
        setLname(ele.target.value);
    }
    
    const submitForm = (ele) => {
        ele.preventDefault();
        setFullname(fname+lname)
    }
    return(
        <>
            <form onSubmit={submitForm}>
                <h1>Hello! {fullname}</h1>
                <input type="text" value={lname} onChange={lastName} />
                <input type="text" value={fname} onChange={firstName} />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default MultipleInputForm;