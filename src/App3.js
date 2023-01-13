import React,{useCallback, useState} from 'react';
import Box from './components/Box';

const App3 = () => {
    const [size,setsize] = useState(100);
    const [dark,setDark] = useState(false);
    
    // const getItems = useCallback(()=>{
    //     return [number, number + 1,number + 2] //123
    // },[number]) 

    const createBox = useCallback(()=>{
        return{ //createbox가 호출되면 css가들어있는 객체를 리턴
            backgroundColor:'gray',
            width:`${size}px`,
            height:`${size}px`,
            fontSize:`${size/3}px`
        }
    //인풋숫자에따라 사이즈가변하는 css객체를 box에전달
    //box컴포넌트에서 받아서 setstyle로 style상태에 css객체를 넣어줌 상태값이 변하면서 리렌더링) 
    },[size]) //사이즈가 바뀔때만 이함수가 바뀌게됨(렌더링도 그때만 발생)
    const style = {
        backgroundColor:dark? '#333':"#fff",
        color: dark? '#fff': "#333",
    }
    return (
        <div style={style}>
          <input type="number"
          value={size} onChange={e=>setsize(Number(e.target.value))}/>  
            <Box createBox={createBox}/>
            <button onClick={()=>setDark(!dark)}>변경</button>
        </div>
        
    );
};

export default App3;