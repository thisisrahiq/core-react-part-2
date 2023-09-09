import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';
function App() {
  
  function handleClick(){
    alert('button Clicked');
  }

  const handleClick2 = () =>{
    alert('button 2 Clicked');
  }

  const AddToFive = (num) =>  {
    alert(num + 5);
  }


  return (
    <>
      
      <h3>React core Concepts Part 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => {alert('third clicked')}}>Click 3</button>
      <button onClick={() => AddToFive(3)}>Click4</button>
    </>
  )
}

export default App
