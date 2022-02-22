import NetflixSeries from './Challenge-1'
import Calculator from './Challenge-2'
import DateTime from './Challenge-3'
import IncrementValue from './Hooks/IncrementValue'
import Time from './Challenge-4'
import Clock from './DigitalClock'
import Events from './Events'
import Form from './Form'
import MultipleInputForm from './MultipleInputForm.jsx'
import ToggleByHooks from './Hooks/ToggleByHooks'
import HandleArray from './Hooks/HandleArray'
import HandleObject from './Hooks/HandleObject'
import ToDoListChallenge from './Hooks/ToDoListChallenge';
import ShortCircuitEvalution from './Hooks/ShortCircuitEvalution'
import LoginForm from './Hooks/LoginForm'
import UseEffect from './Hooks/UseEffectHook'
import Conditions from './Hooks/ConditionsInUseEffect'
import CleanUp from './Hooks/CleanUp'
import { BrowserRouter } from 'react-router-dom'
import RouterComponent from './Router/RouterComponent'
function App(){
    return (
        <>
            {/* <NetflixSeries /> */}
            {/* <Calculator /> */}
            {/* <DateTime /> */}
            {/* <IncrementValue /> */}
            {/* <Time /> */}
            {/* <Clock /> */}
            {/* <MultipleInputForm /> */}
            {/* <ToggleByHooks /> */}
            {/* <HandleObject /> */}
            {/* <ToDoListChallenge /> */}
            {/* <ShortCircuitEvalution /> */}
            {/* <LoginForm /> */}
            {/* <UseEffect /> */}
            {/* <Conditions /> */}
            {/* <CleanUp /> */}

            <BrowserRouter>
                <RouterComponent />   
            </BrowserRouter>
        </>
    );
}
export default App;