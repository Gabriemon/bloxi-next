'use client'

export default function Delivery({ setCurrentPage, currentState, setCurrentState }) {

    const handleBackClick = () => {
        const newState = currentState.slice(0, currentState.length - 1);
        setCurrentState(newState);
        setCurrentPage('Product');
    };

    const handleAdress = () => {
        setCurrentPage('Payment')
    }

    return (
        <>
            <div class="flex justify-center mb-1 mt-9">
                <label for="default-input" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">CEP</label>
                <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-large p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div class="flex justify-center mb-1 mt-9">
                <label for="default-input" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Endreço</label>
                <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-large p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div>{JSON.stringify(currentState)}</div>
            <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
                <button onClick={handleBackClick} className="bg-blue-500 text-white font-bold py-2 px-3 mt-0 rounded">
                    Voltar
                </button>
            </div>
            <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
                <button onClick={handleAdress} className="bg-blue-500 text-white font-bold py-2 px-3 mt-0 rounded">
                    Continuar
                </button>
            </div>

            

        </>


    )
}