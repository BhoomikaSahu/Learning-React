// const missedGoal = () => {
//     return <h1>Missed Goal!!</h1>
// }

// const goal = () => {
//     return <h1>Goal!!</h1>
// }

// const IsGoal = (prop) => {
//     const con = prop.isgoal
//     if(!con)
//         return goal();
//     else    
//         return missedGoal();
// }

// export default IsGoal;

// const Garage = (props) => {
//     const cars = props.cars;
//     return (
//         <>
//             <h1>Garage</h1>
//             {cars.length > 0 && 
//                 <h2>There is {cars.length} cars in garage</h2>
//             }
//         </>
//     );
// }

function Garage(props) {
    const cars = props.cars;
    return (
      <>
        <h1>Garage</h1>
         
          <h2>
            You have {cars.length} cars in your garage.
          </h2>
      </>
    );
  }
  

export {Garage};