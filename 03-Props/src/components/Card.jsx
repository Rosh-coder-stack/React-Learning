import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
        <img src="https://images.unsplash.com/photo-1773929484011-13d062a73b24?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>{props.user} ,{props.age}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolor voluptates quidem architecto iste accusamus veniam temporibus neque animi earum, officia excepturi rerum porro quos, labore ipsum autem? Deleniti, tempore.
          </p>
          <button>
            view profile
          </button>
      </div>
  )
}


export default Card
