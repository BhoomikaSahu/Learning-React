import {add, sub, mul, divi} from './Calci';

function Calculator(){
    return (
        <>
            <h1>Calculator</h1>
            <ol>
                <li>Addition of two numbers = {add(1000, 500)}</li>
                <li>Subtraction of two numbers = {sub(1000, 500)}</li>
                <li>Multiplication of two numbers = {mul(1000, 500)}</li>
                <li>Division of two numbers = {divi(1001, 500)}</li>
            </ol>
        </>
    );
}

export default Calculator;