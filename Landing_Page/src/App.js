import { useState } from 'react';import './App.css';
import Calculator from './components/calculator';

function App() {
  const [count, setCount] = useState(0)

  return (
   
       <div>
       <h1 style={{color:'white'}}>Calculator</h1>
        <Calculator/>
       </div>
   
  )
}

export default App;
