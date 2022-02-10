import Currdate from './date';
import CurrTime from './time';
let fname = "Bhoomika";
let lname = "Sahu";
// let date = new Date().toLocaleDateString();
// let time = new Date().toLocaleTimeString();

function DateTime(){
    return (
        <>
         <h1>{`Hello! My name is ${fname} ${lname}.`}</h1>
         <Currdate />
         <p>{Currdate()}</p>
         <CurrTime />
         {/* <p>Today's date is {date}</p> */}
         {/* <p>Current Time is {time}</p> */}
     </>
    );
}

export default DateTime;