"use client"
export default function Product({ currentState, setCurrentPage, setCurrentState }) {

    const handleBackClick = () => {

        const newState = currentState.slice(0, currentState.length - 1)
        setCurrentState(newState)

        // Navegar
        setCurrentPage('Age')
    }

    return (
        <>
            <div>
                <h1>Produto</h1>
                <div class="col-start-3">
                    <img src="" alt="" loading="lazy"/>
                </div>
                <div>{JSON.stringify(currentState)}</div>
                <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
                    <button onClick={handleBackClick} className="bg-blue-500 text-white font-bold py-2 px-3 mt-0 rounded">Voltar</button>
                </div>
            </div>
        </>
    )
}
