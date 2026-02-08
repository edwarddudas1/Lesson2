
import './App.css'

function App() {

let age: number = 50;
let name:  string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitiaSize: undefined = undefined;
let callback = (a: number): number => {
  return 100 + a
};
console.log(age, name, toggle)
console.log(callback(2))
  return (
    <>
    <h1>first project on tp</h1>
    </>
  )
}

export default App
