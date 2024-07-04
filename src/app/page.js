"use client"
import { React, useState, setState } from "react";
import Gender from "./Components/gender";
import Age from "./Components/age";


function MyComponent ({value, doSomething}) {
  return <button onClick={() => doSomething('Age')}>The Value: {value}</button>

}

export default function Home() {

  // Main entry point

  const [currentPage, setCurrentPage] = useState('Gender')

  const [currentState, setCurrentState] = useState([])
  

  const navigateTo = (where) => {
    setCurrentPage(where)
  }


  return (
    <div>
      {currentPage === 'Gender' && <Gender setCurrentPage={setCurrentPage} currentState={currentState} setCurrentState={setCurrentState}/>}
      {currentPage === 'Age' && <Age setCurrentPage={setCurrentPage} currentState={currentState}/>}
    </div>
  );
}
