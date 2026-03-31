import React,{useState} from 'react'

import { X } from 'lucide-react';
const App = () => {
  const[title,setTitle ] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
  const submitHandler = (e)=>{
    console.log('Form Submitted');
  }
  const deleteNote = (idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1);
    setTask(copyTask);
    
  }

  return (
    <div className='h-screen lg:flex bg-black text-white p-10 justify-between'>
            <form onSubmit={(e)=>{
        e.preventDefault()
        const copyTask = [...task];
        copyTask.push({title,details})
        setTask(copyTask)
        console.log(copyTask);
        
        
        setTitle('');
        setDetails('');
        
      }} className='flex flex-col gap-4 items-start  p-10 '>
        <h1 className='text-3xl font-bold'>Add Notes</h1>

        
          <input type="text" placeholder='Enter Task Heading' className='px-5 py-2 border-2  rounded w-full outline-none font-medium' value={title} onChange={(e)=>{
            setTitle(e.target.value)
            
            }} 
            />

          <textarea type="text" placeholder='Write details' className='px-5 py-2  border-2 rounded h-32 w-full outline-none font-medium' value={details} onChange={(e)=>{
            setDetails(e.target.value);
            
          }}/>

          <button className='bg-white active:bg-gray-500 text-black px-5 py-2  rounded w-full outline-none font-medium'>Add Note</button>
        
        
        
      </form>
      <div className=' lg:w-1/2 lg:border-l-2 p-10 '>
        <h1 className='text-3xl font-bold'>Your Notes</h1>
        <div className='flex gap-5 flex-wrap justify-start justify-start overflow-auto h-[90%] mt-5  '>
          {task.map(function(elem,idx){
            return <div key={idx} className=" lfex justify-between flex-col items-start relative h-52 bg-cover w-40 rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3bUzcfjXEgpNynCGXAL2naN49al7QDepIQ&s')] ">
              <div className='mb-8'>
                <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight font-medium text-gray-500'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx);
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white mt-10'>Delete</button>
            </div>
            
          })}
          
      </div>
        
      </div>
    </div>
  )
}

export default App