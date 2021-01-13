import React, { useState, useEffect } from 'react';
import data from './data';
import Person from './Person';
import Title from './Title';
function App() {
  const [people ,setPeople] = useState(data);
  return <section className='section'>
    <Title />
  <Person people={people} />
  </section>;
}

export default App;
