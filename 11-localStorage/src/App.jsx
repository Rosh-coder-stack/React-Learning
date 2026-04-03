import React from 'react'

const App = () => {
  const name = localStorage.getItem('name')
  console.log(name);
  localStorage.setItem('age', '21')
  const age = localStorage.getItem('age')
  console.log(age);
  let user = {
    username: 'John',
    age: 21,
    city:'Bhopal'
  }
  localStorage.setItem('user', JSON.stringify(user))  //to convert object to string and store in localStorage
  user = localStorage.getItem('user')
  console.log(user);
  //JSON.parse is used to convert string back to object
  // localStorage.removeItem to remove  a particular item from the localStorage
  // localStorage.clear to delete all data in the localStorage
  return (
    <div>App</div>
  )
}

export default App