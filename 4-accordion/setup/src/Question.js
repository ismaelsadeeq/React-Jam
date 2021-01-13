import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id,title,info}) => {
  
  const [state, setState] = useState(false);

  const changeState = ()=>{
    setState(!state)
  }

  return <article className='question'>
    <header>
       <h4>{title}</h4>
       <button onClick={changeState} className='btn'>{state?<AiOutlineMinus/> :<AiOutlinePlus />}</button>
    </header>
    <p>{state?info:''}</p>
  </article>;
};

export default Question;
