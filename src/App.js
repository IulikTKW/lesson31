import { useState } from "react";
import Button from "./components/Button";



function App() {
  const [counter, setCounter] = useState(0)

  const handleChangeCounter = (option) => {
    setCounter((prevState) => {
      return option === 'INC' ? prevState + 1 : prevState - 1
    })
  }

  return (
    <div >
      <p>Counter: {counter}</p>

      <div className="buttons-wrapper">
        <Button
          action={() => {
            handleChangeCounter('INC')
          }}>
          Increment
        </Button>

        <Button
          action={() => {
            handleChangeCounter()
          }}>
          Decrement
        </Button>
      </div>
    </div>
  );
}

export default App;



//1. Creati o componenta titlu care arata un paragraf, primeste titlu care il va afisa si folositil in loc la "Counter:"
//2. Creati careva stiluri pentru acel titlu si alocatile paragrafului

//3. Creati din nou proiectul si faceti toti pasii din nou.