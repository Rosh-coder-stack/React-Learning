import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
      {
        img:'https://plus.unsplash.com/premium_photo-1661627488979-d6631b4391f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM1fHx3b3JraW5nJTIwcHJvZmVzaW9uYWxzfGVufDB8fDB8fHww',
        intro:'',
        color:'blue',
        tag:'Satisfied'
      },
      {
        img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
        intro:'',
        color:'red',
        tag:'Underserved'
      },
      {
        img:'https://images.unsplash.com/photo-1587614298171-a223667e51c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
        intro:'',
        color:'gray',
        tag:'Underbanked'
      },
      {
        img:'https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
        intro:'',
        color:'olive',
        tag:'Underbanked'
      },
      {
        img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
        intro:'',
        color:'pink',
        tag:'Underbanked'
      },
      {
        img:'https://images.unsplash.com/photo-1555421689-43cad7100750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
        intro:'',
        color:'black',
        tag:'Unnoticed'
      },
    ]
  return (
    
    <div >
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
