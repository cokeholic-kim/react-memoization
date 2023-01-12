import React, { useState,useMemo } from 'react';

const Calculator = () => {
    const hardCalculate = (number)=>{
        console.log('복잡한 계산')
        for(let i=0;i<10000000;i++){} //시간을 지연시킨다 복잡한'척' 하기
        return number + 100000;
    }
    const easyCalculate = (number) =>{
        console.log('단순한 계산');
        return number + 1;
    }
    const [number1,setNumber1] = useState(1);
    const [number2,setNumber2] = useState(1);
    //useMemo(()=>getNumber(number),[number]);
    const hardSum = useMemo(()=>hardCalculate(number1),[number1]);
    const easySum = useMemo(()=>easyCalculate(number2),[number2]);

    return (
        <div>
            <h3>복잡한 계산기</h3>
            <input type="number" 
            value={number1}
            onChange={(e)=>setNumber1(Number(e.target.value))}
            />
            <span> + 100000 = {hardSum} </span>
            <h3>단순한 계산기</h3>
            <input type="number" 
            value={number2}
            onChange={(e)=>setNumber2(Number(e.target.value))}
            />
            <span> + 1 = {easySum} </span>
        </div>
    );
};

export default Calculator;