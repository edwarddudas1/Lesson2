import { useState } from "react"

export default function RockPaperScissors(){
    const [playerValue, setPlayerValue] = useState<string | null>(null)
    const [computerValue, setComputerValue] = useState<string | null>(null)
    const [showComputer, setShowComputer] = useState(false)
    const [result, setResult] = useState<string>("")
    const [score, setScore] = useState({player: 0, computer: 0})

    function computerChoice(){
        const choices = ["rock", "paper", "scissors"]
        const value = Math.floor(Math.random() * 3)
        return choices[value]
    }

    function handleClick(choice: string){
        setPlayerValue(choice)


        const computer = computerChoice()
        setComputerValue(computer)

        if(choice === computer){
            setResult("Нічия")
            
        } else if(choice === "rock" && computer === "scissors"){
            setResult("Ви перемогли")
        } else if(choice === "paper" && computer === "rock"){
            setResult("Ви перемогли")
        } else if(choice === "scissors" && computer === "paper"){
            setResult("Ви перемогли")
        }
    }
    function showComputerResult(){
        setShowComputer(prev => !prev)
    }


    return(
        <>
        <h2>Камінь - ножиці - папір</h2>
        <div>
    <button onClick={() => handleClick("rock")}>Камінь</button>
            <button onClick={() => handleClick("scissors")}>ножиці</button>
            <button onClick={() => handleClick("paper")}>папір</button>
        </div>
        <div>
            <p>Рахунок:</p>
            <p>Комп’ютер - {score.computer}</p>
            <p>Ви - {score.player}</p>
        </div>
        <p>{result}</p>
        <button onClick={showComputerResult}>Варіант комп’ютера</button>
        {showComputer && <p>Вибір комп'ютера: {computerValue}</p>}

        </>
    )
}