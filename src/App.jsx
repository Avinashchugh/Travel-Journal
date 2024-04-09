import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Data from './Components/Data'
const App = () => {
   const obj = Data.map((item)=>{
      return <Hero key={item.id} {...item}/>
   })
  return (
    <div>
      <Navbar/>
      {obj}
    </div>
  )
}

export default App
