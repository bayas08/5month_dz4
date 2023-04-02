import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Division, Minus, Multiply, Plus} from "../redux/actions";

const Calculator = () => {
    const dispatch = useDispatch()
    const {num} = useSelector(state => state)
    const [calc, setCalc] = useState('')
    const [calc2, setCalc2] = useState('')

    const Calc = ({target}) => {
        setCalc(target.value)
    }

    const Calc2 = ({target}) => {
        setCalc2(target.value)
    }

    const plus = () => {
        dispatch(Plus(+calc + +calc2))
    }
    const minus = () => {
        dispatch(Minus(calc - calc2))
    }
    const multiply = () => {
        dispatch(Multiply(calc / calc2))
    }
    const division = () => {
        dispatch(Division(calc * calc2))
    }

    return (
        <div>
            <div>
                <input type="text" value={calc} onChange={Calc}/>
                <input type="text" value={calc2} onChange={Calc2}/>
            </div>
            <div>
                <button onClick={plus}>+</button>
                <button onClick={minus}>-</button>
                <button onClick={multiply}>*</button>
                <button onClick={division}>/</button>
            </div>
            {
                !calc.length || !calc2.length ? 'Loading' : <h2>{num}</h2>
            }
        </div>
    );
};

export default Calculator;