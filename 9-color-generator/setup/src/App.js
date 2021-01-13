import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor] = useState('');
  const [error, setError] = useState(false);
  const [list,setList] = useState(new Values('#0000ff').all(10))
  const handleSubmit = (e)=>{
    e.preventDefault();
    try{
      let colors = new Values(color).all(10);
      setList(colors)
      console.log(colors);
    } catch(error){
      setError(true);
      console.log(error);
    }
    
  
  }
  return (
  <>
  <section className='container'>
    <h3>generate a color</h3>
    <form onSubmit={handleSubmit}>
      <input type='text' value={color} onChange={(e)=>{setColor(e.target.value)}} 
      placeholder='#0000FF' className={`${error?'error':null}`}
      />
      <button className='btn' type='submit'>generate</button>
    </form>
  </section>
  <section className='colors'>
    {
      list.map((color, index)=>{
        return <SingleColor key={index} {...color} index={index} hex={color.hex}/>
      })
    }
  </section>
  </>
  )
  
}

export default App
