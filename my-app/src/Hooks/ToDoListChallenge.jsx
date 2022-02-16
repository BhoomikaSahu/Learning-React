import { useState } from "react";

const ToDoListChallenge = () => {
    let taskArray = ['Mango', 'Orange', 'Grapes']
    // let tasks = [{id: 1, task: 'React'}, {id: 2, task: 'Node'}, {id: 3, task: 'JS'}, {id: 4, task: 'Mongo'}];
    const [newTaskArray, setNewTaskArray] = useState(taskArray);
    const clearTasks = () => {
        setNewTaskArray([]);
    }
    const doneTask = (index) => {
        const returnNewArray = newTaskArray.filter((ele, currIndex) => {
            return (index !== currIndex);
        } )
        setNewTaskArray(returnNewArray);
    }

    return(
        <>
            {
                newTaskArray.map((ele, index) => {
                    return(
                        <h1>{ele}
                            <button onClick={() => doneTask(index)}>Done</button>
                        </h1>
                    );
                })
            }
            
            <button onClick={clearTasks}>Clear</button>
        </>
    );
}

export default ToDoListChallenge;