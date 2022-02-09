import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Vehicle from './vehicle.js';
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import {Football} from './reactEvents';
// ReactDOM.render(
//     <Football />,
//     document.getElementById('root')
// );

// import IsGoal from './reactConditions';
// ReactDOM.render(
//     <IsGoal isgoal={false} />,
//     document.getElementById('root')
// );

// import {Garage} from './reactConditions';
// ReactDOM.render(
//     // <Garage cars={['Ford', 'BMW', 'Audi']} />,
//     [<h1>Hwllo</h1>, <h2>I am Bhoomika.</h2>],
//     document.getElementById('root')
// );

// Challenge -1
// ReactDOM.render(
//     <>
//         <h1>Netflix Series{`${10+1}`}</h1>
//         <p>List of 5 Best Series.</p>
//         <ol>
//             <li>Dark</li>
//             <li>Extra Curricular</li>
//             <li>My Holo Love</li>
//             <li>My First-2 Love</li>
//             <li>Mr Robot</li>
//         </ol>
//     </>,
//     document.getElementById('root')
// );


// challenge-2
import Currdate from './date';
import CurrTime from './time';
let fname = "Bhoomika";
let lname = "Sahu";
// let date = new Date().toLocaleDateString();
// let time = new Date().toLocaleTimeString();
ReactDOM.render(
    <>
        <h1>{`Hello! My name is ${fname} ${lname}.`}</h1>
        <Currdate />
        <CurrTime />
        {/* <p>Today's date is {date}</p> */}
        {/* <p>Current Time is {time}</p> */}
    </>,           
    document.getElementById('root')
);