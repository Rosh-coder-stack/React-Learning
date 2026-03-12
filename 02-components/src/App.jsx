import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div>
      <div className = 'card'>
        <h1>Roshni</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque vel, ullam explicabo voluptatem velit vero ratione aut, porro consequatur eius, qui libero. Laboriosam nobis nostrum obcaecati dolore voluptas expedita impedit.</p>
      </div >
      {Card()}
    </div>

  )
}

export default App