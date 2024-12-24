import React, { useState } from 'react'
import NavBar from './component/NavBar'
import NewBoard from './component/NewBoard'
const App = () => {
  const [category,setCategory]=useState("general");
  return (
    <div>
      <NavBar setCategory={setCategory}/>
      <NewBoard category={category}/>
    </div>
  )
}

export default App
