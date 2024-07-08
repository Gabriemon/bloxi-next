'use client'

export default function Payment ({ setCurrentPage, currentState, setCurrentState }) {

    const handleBackClick = () => {
        const newState = currentState.slice(0, currentState.length - 1);
        setCurrentState(currentState);
        setCurrentPage('Delivery');
}

    return (
        <>
        <div>
            <h1>Pagamento</h1>
        </div>
        </>
    )}