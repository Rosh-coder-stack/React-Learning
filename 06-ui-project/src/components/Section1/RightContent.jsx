import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users); 
  return (
    <div id="right" className='h-full p-6 w-2/3 flex flex-nowrap gap-10 overflow-x-auto rounded-4xl'>
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag}/>
      })}

    </div>
  )
}

export default RightContent
