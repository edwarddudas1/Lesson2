import ModalWindow from "./components/main/ModalWindow"
import AgeCounter from "./components/main/AgeCounter"
import GuessNumber from "./components/main/GuessNumber"
import Calculator from "./components/main/Calculator"
import RockPaperScissors from "./components/main/RockPaperScissors"
import HighestNumber from "./components/main/HighestNumber"
import ChooseScientists from "./components/main/ChooseScientists"
import Header from "./components/header/header"
import './App.css'

function App() {
  return (
    <>
    <Header></Header>
    <ModalWindow/>
    <h1>Mini-project</h1>
    <AgeCounter/>
    <GuessNumber/>
    <Calculator/>
    <RockPaperScissors/>
    <HighestNumber/>
    <ChooseScientists/>
    </>
  )
}

export default App
