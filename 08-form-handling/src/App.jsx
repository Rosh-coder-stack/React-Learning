import React from 'react'

const 
input
 = () => {
  const submitHandler = (e)=>{
    e.preventDefault() // prevent auto reloading of form 
    console.log('Form Submitted')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter your name  '/>
        <button>submit</button>
      </form>

    </div>
  )
}

export default 
input
