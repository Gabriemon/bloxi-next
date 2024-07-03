"use client"
import { React, useState, setState } from "react";
import Gender from "./Components/gender";
import Age from "./Components/age";

 

export default function Home() {

  // Main entry point

  const [currentPage, setCurrentPage] = useState('Gender')

  return (
    <div>
      {currentPage === 'Gender' && <Gender setCurrentPage={setCurrentPage}/>}
      {currentPage === 'Age' && <Age setCurrentPage={setCurrentPage}/>}
    </div>
  );
}
