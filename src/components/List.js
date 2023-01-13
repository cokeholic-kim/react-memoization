import React, { useEffect, useState } from 'react';

const List = ({getItems}) => {
    const[items,setItems] = useState([]);
    useEffect(()=>{
        setItems(getItems())
        console.log("숫자가 변동되었습니다.")
    },[getItems])
    const divArray = [<div key={1}>a</div>,<div key={2}>b</div >,<div key={3}>c</div>]
    return (

        <div>
            {items.map((item,index)=><div key={index}>{item}</div>)}
            {divArray}
        </div>
    );
};

export default List;