import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTwoNumber } from "../redux/action";
import "../style/home.css";

export const InputBox = () =>{
    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const dispatch = useDispatch();

    // handle add number function-
    const handleAddNumber = ()=>{
        const numbers = {
            a: firstNumber,
            b: secondNumber
        }
        dispatch(addTwoNumber(numbers))
    }

    return(
        <>
            <div id="input-boxes">
                <div>
                    <label>First Number:</label>
                    <input type="number" placeholder="Type first number" onChange={(e)=>setFirstNumber(e.target.value)} />
                </div>
                <div>
                    <label>Second Number:</label>
                    <input type="number" placeholder="Type second number" onChange={(e)=>setSecondNumber(e.target.value)} />
                </div>
                <button onClick={handleAddNumber}>Generate Steps</button>
            </div>
        </>
    )
}