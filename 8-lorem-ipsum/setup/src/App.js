import React, { useState } from 'react';
import data from './data';
function App() {
  const [count,setCount] = useState(0);
  const [text,setText] = useState([]);
   
  const handleSubmit = (e)=>{
    e.preventDefault();
    let noOfText = parseInt(count); 
    if(noOfText<=0){
      noOfText=1
    }
    if(noOfText>8){
      noOfText=8
    }
    setText(data.slice(0,noOfText));
  }
  return (
  <section className='section-center'>
    <h3>tired boring lorem ipsum</h3>
    <form className='lorem-form' onSubmit={handleSubmit}>
    <label htmlFor='amount'>
      paragraphs
      </label>
    <input type='number' name='amount' id='amount' value={count}
    onChange={(e)=>setCount(e.target.value)} />
    <button type='submit' className='btn'>generate</button>
    </form>
    <article className='lorem-text'>
    {text.map((paragraphs,key)=>{
      return <p key={key}>{paragraphs}</p>
    })}
    </article>
  </section>
    )
}

export default App;
