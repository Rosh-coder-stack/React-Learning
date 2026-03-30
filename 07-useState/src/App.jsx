import React, { useState } from 'react'

const App = () => {
  
  const [a, setA] = useState(20)
  const [name, setName] = useState('Roshni')
  function changeA() {
    setA(a+1);
    setName("Deepak");
  }
  return (
    <div>
      <h1>Value of a is {a} <br /> value of user is {name} </h1>
      <button onClick={changeA} >Click</button>
    </div>
  )
}

export default App
