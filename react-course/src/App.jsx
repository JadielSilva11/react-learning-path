import { useState } from 'react';
import './App.css'

function App() {

  let [count, setCount] = useState(0);

  function iteracao() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Iniciando no JSX</h1>
      <p>Contador é: <button onClick={iteracao}>{count}</button></p>
    </div>
  )
}

export default App;