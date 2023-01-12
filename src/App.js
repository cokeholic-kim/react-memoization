import './App.css';
import { useState } from 'react';
import ShowState from './components/ShowState';
import Calculator from './components/Calculator';
import MemoComponent from './components/MemoComponent';

function App() {
  const [number,setNumber] = useState(0);
  const [text,setText] = useState("");
  const increaseNumber = ()=>{
    setNumber(number+1)
  }
  const decreaseNumber = ()=>{
    setNumber(number-1)
  }
  const onChange = (e)=>{
    setText(e.target.value)
  }

  return (
    <div className="App">
      {/* <div>
        <button onClick={increaseNumber}>+1</button>
        <button onClick={decreaseNumber}>-1</button>
        <input type="text" placeholder='lastname' value={text} onChange={onChange}/>
      </div>
      <ShowState number={number} text={text}></ShowState> */}
      {/* <Calculator></Calculator> */}
      <MemoComponent/>
    </div>
  );
}

export default App;
