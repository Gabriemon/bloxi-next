"use client"
import React from "react"

export default function Age({currentState}) {
    return (
       <div>
            <h1>AGE</h1>
            <div>{JSON.stringify(currentState)}</div>
       </div>
    )
}