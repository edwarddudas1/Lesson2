import { useState } from "react"

export default function Calculator(){

    const [result, setResult] = useState(0)
    const [num1, setNum1] = useState(0)
    const [num2, setNum3] = useState(0)
    const [operation, setOperation] = useState<string>("")
    
    
    function calc() {
        switch (operation) {
        case "+":
        setResult(num1 + num2)
        break
        case "-":
        setResult(num1 - num2)
        break
        case "*":
        setResult(num1 * num2)
        break
        case "/":
        setResult(num1 / num2)
        break
        default: 
        throw console.error("Помилка");
    }


    }


    

    

    return(
        <>
        <h2>Калькулятор</h2>
        <input onChange={(e) => setNum1(Number(e.target.value))} type="number"/>
        <button onClick={() => setOperation("+")}>+</button>
        <button onClick={() => setOperation("-")}>-</button>
        <button onClick={() => setOperation("*")}>*</button>
        <button onClick={() => setOperation("/")}>/</button>
        <input onChange={(e) => setNum3(Number(e.target.value))} type="number" />
        <button onClick={calc}>=</button>
        <p>Результат: {result}</p>
        </>
    )
}