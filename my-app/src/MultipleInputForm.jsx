// import { useState } from "react";

// const MultipleInputForm = () =>{
//     const [fullName, setFullName] = useState({
//         fname: '', 
//         lname: '',
//         email: ''
//     });

//     const inputEvent = (e) => {
//         // console.log(e);
//         // console.log(e.target.value);
//         console.log(e.target.name);

//         const value = e.target.value;
//         const name = e.target.name;
//         setFullName((preVal) => {
//             console.log(preVal.fname);
//             if(name === 'fname'){
//                 return {fname: value, lname: preVal.lname, email: preVal.email};
//             }else if(name === 'lname'){
//                 return {fname: preVal.fname, lname: value, email: preVal.email};
//             }else if(name === 'email'){
//                 return {fname: preVal.fname, lname: preVal.lname, email: value};
//             }
//         })
//     }
//     const submitForm = (ele) => {
//         ele.preventDefault();
//         alert('Form Submitted')
//     }
//     return(
//         <>
//             <form onSubmit={submitForm}>
//                 <h1>Hello! {fullName.fname} {fullName.lname}</h1>
//                 <input type="text" name="fname" value={fullName.fname} placeholder="First Name" onChange={inputEvent} />
//                 <input type="text" name="lname" value={fullName.lname} placeholder="Last Name" onChange={inputEvent} />
//                 <input type="email" name="email" value={fullName.email} placeholder="Email ID" onChange={inputEvent} />
//                 <button type="submit">Submit</button>
//             </form>
//         </>
//     );
// }

// export default MultipleInputForm;

import { useState } from "react";

const MultipleInputForm = () =>{
    const [fullName, setFullName] = useState({
        fname: '', 
        lname: '',
        email: ''
    });

    const inputEvent = (e) => {
        // console.log(e);
        // console.log(e.target.value);
        // console.log(e.target);

        const {name, value} = e.target;
        setFullName((preVal) => {
            // console.log(preVal);
            console.log(typeof e.target.name);
            return {
                ...fullName,
                [name]: value
            }
        })
    }
    const submitForm = (ele) => {
        ele.preventDefault();
        alert('Form Submitted')
    }
    return(
        <>
            <form onSubmit={submitForm}>
                <h1>Hello! {fullName.fname} {fullName.lname}</h1>
                <input type="text" name="fname" value={fullName.fname} placeholder="First Name" onChange={inputEvent} />
                <input type="text" name="lname" value={fullName.lname} placeholder="Last Name" onChange={inputEvent} />
                <input type="email" name="email" value={fullName.email} placeholder="Email ID" onChange={inputEvent} />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default MultipleInputForm;