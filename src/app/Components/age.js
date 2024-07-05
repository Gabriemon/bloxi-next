"use client"
import React, {useState }from "react"

export default function Age({ setCurrentPage, currentState, setCurrentState }) {
    console.log('setCurrentState', setCurrentState) 

    const handleAge = (age) => {

    const newState = [...currentState, { type: 'age', value: age}] 
        // Setar estado
        setCurrentState(newState)
        setCurrentPage('Product')
    }

    const handleBackClick = () => {
        
        const newState = currentState.slice(0, currentState.length - 1)
        setCurrentState(newState)
        
        // Navegar
        setCurrentPage('Gender')

    }

    return (
        <>
                <center className="flex justify-center">
                <div class="inline-flex rounded-md shadow-sm" role="group">
                    <button type="button" onClick={() => handleAge(4)} className="flex justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                        4
                    </button>
                    <button type="button" onClick={() => handleAge(5)}className="flex justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                        5
                    </button>
                    <button type="button" onClick={() => handleAge(6)} className="flex justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                        6
                    </button>
                </div></center>
            <div>
                <div>{JSON.stringify(currentState)}</div>
            </div>
            <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
                <button onClick={handleBackClick} className="bg-blue-500 text-white font-bold py-2 px-3 mt-0 rounded">Voltar</button>
            </div>
        </>
    )
}