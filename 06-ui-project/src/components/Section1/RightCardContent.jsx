import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-10 flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-bold rounded-full h-20 w-20 flex justify-center items-center '>{props.id}</h2>
        <div>
          <p className='text-shadow-2xs text-lg leading-normal text-white mb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis deserunt, praesentium quidem delectus natus voluptatum!</p>
        </div>
        <div className='flex justify-between'>
          <button style={{backgroundColor:props.color}} className=' text-white font-semibold px-7 py-3 rounded-full '>{props.tag}</button>
          <button style={{backgroundColor:props.color}}><i className="ri-arrow-right-line  text-white font-medium px-3 py-3"></i></button>
        </div>
      </div>
  )
}

export default RightCardContent
