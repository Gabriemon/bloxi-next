"use client"
import React, { useState } from "react"

export default function Gender({setCurrentPage, currentState, setCurrentState}) {
    

    const handleMeninoClick = () => {
        // Setear estado
        setCurrentState([{type: 'gender', value: 'menino'}])
        // Navegar
        setCurrentPage('Age')

    }

    return (
        <>
    <h3 className="flex justify-center mb-4 font-semibold text-gray-900 dark:text-white pt-6 mt-9">Gênero</h3>
    <div>Current State: {JSON.stringify(currentState)}</div>
    <div class="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
        <button onClick={handleMeninoClick} class="bg-blue-500 text-white font-bold py-2 px-3 mt-0 rounded">Masculino</button>
    </div>
    <div class="container py-0 px-10 mx-0 min-w-full flex flex-col items-center">
        <button onClick={() => setCurrentPage('Age')} class="bg-rose-500 text-white font-bold py-2 px-3 mt-0 rounded">Feminino</button>
    </div>
    </>

)
}  
    

