import { useState } from "react";

export default function AgeCounter() {
  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState('')

  function calc(year: number) {
    ( year % 4 === 0 ? setResult('Ви народилися у високосний рік'): setResult('Ви народилися у невисокосний рік'))
  }

  return (
    <>
      <input type="number" onClick={(e) => setInputValue(Number(e.target.value))} />
      <button onClick={() => calc(inputValue)}>submit</button>
      <p>{result}</p>
    </>
  );
}