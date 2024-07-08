"use client"
import React, { useState } from "react"

export default function Gender({ setCurrentPage, currentState, setCurrentState }) {


    const handleMeninoClick = () => {
        // Setear estado
        setCurrentState([{ type: 'gender', value: 'menino' }])
        // Navegar
        setCurrentPage('Age')
    }
    const handleMeninaCLick = () => {
        const newState = [...currentState, { type: 'gender', value: 'menina' }]
        setCurrentState(newState)
        setCurrentPage('Age')
    }
    
    return (
        <>
            <h3 className="flex justify-center mb-4 font-semibold text-gray-900 dark:text-black pt-6 mt-9">Gênero</h3>
            <div>Current State: {JSON.stringify(currentState)}</div>
            <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
                <button onClick={handleMeninoClick} className="bg-blue-500 text-white font-bold py-2 px-3 mt-0 rounded">Masculino</button>
            </div>
            <div className="container py-0 px-10 mx-0 min-w-full flex flex-col items-center">
                <button onClick={handleMeninaCLick} className="bg-rose-500 text-white font-bold py-2 px-3 mt-0 rounded">Feminino</button>
            </div>
        </>

    )
}


