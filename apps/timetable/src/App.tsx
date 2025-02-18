import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { handleOperation,Operation } from '@timetable-monorepo/shared'

function App() {
  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);
  const [result,setResult] = useState(0);

  const submitOperation = (operation:Operation) => {
    setResult(handleOperation(num1,num2,operation));
}

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div>
            <p>The result is: {result}</p>
        </div>

        <form>
        <input type="number" name="num1" value={num1} onChange={e => setNum1(parseFloat(e.target.value))} />
        <input type="number" name="num2" value={num2} onChange={e => setNum2(parseFloat(e.target.value))} />
        
        <button type='button' onClick={() => submitOperation(Operation.add)}>Add</button>
        <button type='button' onClick={() => submitOperation(Operation.subtract)}>Subtract</button>
        <button type='button' onClick={() => submitOperation(Operation.divide)}>Divide</button>
        <button type='button' onClick={() => submitOperation(Operation.multiply)}>Multiply</button>
        </form>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
