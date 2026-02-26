import { useState } from "react"

export default function GuessNumber() {
    const [inputValue, setInputValue] = useState(0)
    const [result, setResult] = useState("")

    function guess(num: number){
        const random = Math.floor(Math.random() * 10)
        return num === random ? setResult('Ви вгадали число'): setResult('Ви невгадали число')
        
    }


    return(
        <>
        <h2>Вгадай число, яке загадав комп’ютер</h2>
        <input onClick={(e) => setInputValue(Number(e.target.value))} type="number"/>
        <button onClick={() => guess(inputValue)}>Submit</button>
        <p>{result}</p>
        </>
    )
}