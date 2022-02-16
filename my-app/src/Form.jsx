// import { useState } from "react";

// const Form = () => {
//     const [name, setName] = useState('');
//     const [fullName, printFullname] = useState();
//     const event = (arg) => {
//         console.log("Clicked", arg.target.value);
//         setName(arg.target.value);
//     }
//     const submitForm = () => {
//         printFullname(name)
//     }
//     return (
//         <>
//             <h1>Hello! {fullName}</h1>
//             <input type="text" placeholder="Enter Your Name" value={name} onChange={event}/>
//             <button onClick={submitForm}>Submit</button>
//         </>
//     );
// }

// export default Form;

import { useState } from "react";

const Form = () => {
    const [fname, setFirstName] = useState('');
    const [lname, setLastName] = useState('');
    const [fullName, printFullname] = useState();
    const fName = (arg) => {
        console.log("Clicked", arg.target.value);
        setFirstName(arg.target.value);
    }
    const lName = (arg) => {
        console.log("Clicked", arg.target.value);
        setLastName(arg.target.value);
    }
    const submitForm = (e) => {
        e.preventDefault();
        printFullname(fname+lname)
    }
    return (
        <>
            <form onSubmit={submitForm}>
                <h1>Hello! {fullName}</h1>
                <input type="text" placeholder="First Name" value= {fname} onChange={fName}/>
                <input type="text" placeholder="Last Name" value= {lname} onChange={lName}/>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Form;