import { useState } from 'react'
import './App.css'


function App() {


  let [counter , setcounter] = useState(0)

  const addvale = () =>{
    if(counter < 20){
      counter=counter +1
    }
    setcounter(counter)
  }

  const Removevale = () =>{
    if(counter > 0){
      counter=counter -1
    }
    setcounter(counter)
  }


  return (
    <>
      <h2>Add or Remove Value on click button</h2>
      <div>
        <h1>Counter Value {counter}</h1>
      </div>
      <button onClick={addvale}  >Addvalue</button>
      
      <button onClick={Removevale}  >Removevalue</button>
    </>
  )
}

export default App
