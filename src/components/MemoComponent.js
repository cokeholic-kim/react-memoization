import React, { useEffect, useMemo, useState } from 'react';

const MemoComponent = () => {
    const [number,setNumber] = useState(0);
    const [isKorea,setIsKorea] = useState(true);
    // 원시형타입 vs 객체타입
    // const location = {
    //     country: isKorea ? '한국':'외국', 
    // };
    const location = useMemo(()=>{
        return{
            country: isKorea? '한국':'외국',
        }
    },[isKorea])
    //함수가 호출될때마다 항상 새로운객체가 생성됨
    // useEffect -->마운트될때, 리렌러링될때(업데이트) ,언마운트될때
    useEffect(()=>{
        console.log('🍎🍎🍎useEffect호출');
    },[location])  
    // 마운트될때와 location이변경될때 실행됨
    return (
        <div>
            <h2>좋아하는 숫자는?</h2>
            <input type="number" value={number}
            onChange={(e)=>setNumber(e.target.value)}
            />
            <h2>이동하실까요</h2>
            <p>나라: {location.country}</p>
            <button onClick={()=>setIsKorea(!isKorea)}>이동</button>
            
        </div>
    );
};

export default MemoComponent;