import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Data from './Components/Data'
const App = () => {
   const obj = Data.map((item)=>{
      return <Hero
              key={item.id}
              imageUrl={item.imageUrl}
              location={item.location}
              title={item.title}
              startDate={item.startDate}
              endDate={item.endDate}
              description={item.description}
                                              />
   })
  return (
    <div>
      <Navbar/>
           {obj}
    </div>
  )
}

export default App
