import { useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [allEntries, setAllEntries] = useState([])

    const submitForm = (event) => {
        event.preventDefault();
        if(email && password){
            const newEntry = {id: new Date().getTime().toString(), email, password}
            setAllEntries([...allEntries, newEntry])
        }
        else{
            alert("Please fill all details")
        }
    }
    return(
        <>
            <form onSubmit={submitForm}>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email" value={email} placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
                <label htmlFor="password">Password: </label>
                <input type="password" name="" id="password" value={password} placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                <button type="submit">Login</button>            
            </form>
            
            {
                allEntries.map((ele) => {
                    const {id, email, password} = ele
                    return(
                        <h1 key={ele.id}>{email} {password}</h1>                            
                    );
                })
            }            
            
        </>
    );
}

export default LoginForm;