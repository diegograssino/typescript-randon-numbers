import React, {useEffect, useState} from "react";

import Button from "./components/Button";
import Number from "./components/Number";
function App(): JSX.Element {
  const INITIAL_STATE: number[] = [1, 2, 3];

  const [numbers, setNumbers] = useState<number[]>(INITIAL_STATE);
  const [matches, setMatches] = useState<number>(0);

  function randomNumber(): void {
    setNumbers(INITIAL_STATE.map(() => Math.floor(Math.random() * 3)));
  }

  function isAMatch(someNumbers: number[]): boolean {
    return someNumbers.every((number: number) => number === someNumbers[1]);
  }

  useEffect(() => {
    if (isAMatch(numbers)) {
      setMatches((m) => m + 1);
    }
  }, [numbers]);

  return (
    <div>
      {numbers.map((number, index) => (
        <Number key={index} number={number} />
      ))}
      <Button onRandom={randomNumber} />

      {isAMatch(numbers) && <h2>YOU HAVE {matches} MATCH!</h2>}
    </div>
  );
}

export default App;
