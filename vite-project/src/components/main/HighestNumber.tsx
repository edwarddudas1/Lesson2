import { useState } from "react"

export default function HighestNumber() {
    const [result, setResult] = useState(0)
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [num3, setNum3] = useState(0)

    function operation(num1: number, num2: number, num3: number){

        if (num1 > num2 && num1 > num3 ) {
            setResult(num1)
        } else if (num2 > num1 && num2 > num3) {
            setResult(num2)
        } else if (num3 > num1 && num3 > num2) {
            setResult(num3)
        }
    }



    return(
        <>
        <h2>Введіть 3 числа</h2>
        <input onChange={(e) => setNum1(Number(e.target.value))} type="number"/>
        <input onChange={(e) => setNum2(Number(e.target.value))} type="number"/>
        <input onChange={(e) => setNum3(Number(e.target.value))} type="number"/>
        <button onClick={() => operation(num1, num2, num3)}>Обчислити</button>
        <p>Найбільше число, яке ви ввели - {result}</p>
        </>
    )
}