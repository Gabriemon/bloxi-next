import { useEffect, useState } from "react";

export default function Product({ currentState, setCurrentPage, setCurrentState }) {
    const [products, setProducts] = useState([]);

    const handleBackClick = () => {
        const newState = currentState.slice(0, currentState.length - 1);
        setCurrentState(newState);
        setCurrentPage('Age');
    };

    const handleSelectProduct = () => {
        setCurrentState(currentState);
        setCurrentPage('Delivery');
        
    const newState = [...currentState, { type: 'produto', value: products }]
        // Setar estado
        setCurrentState(newState)
        setCurrentPage('Delivery')
    }

    useEffect(() => {
        const loadProducts = async () => {

            const products = [
                {
                    imageUrl: 'https://acdn.mitiendanube.com/stores/003/499/407/products/8613-4_1-33aa2f3c79e04da52d17079680463240-1024-1024.webp',
                    nome: 'Juice',
                    price: '50'
                },
                {
                    imageUrl: 'https://acdn.mitiendanube.com/stores/003/499/407/products/8613-7_1-7fa96ea92df4b183e617079690265210-1024-1024.webp',
                    nome: 'Spit',
                    price: '50'
                },
                {
                    imageUrl: 'https://acdn.mitiendanube.com/stores/003/499/407/products/8613-3_1-e32f9ef0a3cd68130717079678887213-1024-1024.webp',
                    nome: 'IceCream',
                    price: '50'
                },
            ];
            setProducts(products);
        };

        loadProducts();
    }, []);

    return (
        <>
            <div className="div py-10 px-10 mx-0 min-w-full flex flex-col items-center">
                <h1>PRODUTOS</h1>
                <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
                    {products.map((p, index) => (
                        <div key={index} className="flex flex-col items-center py-6">
                            <img className="w-96 h-96" src={p.imageUrl} alt={p.nome} />
                            <button onClick={handleSelectProduct} className="bg-blue-500 text-white font-bold py-2 px-3 mt-2 rounded">
                                Selecionar produto
                            </button>
                        </div>
                    ),)}
                </div>
                <div>{JSON.stringify(currentState)}</div>
                <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
                    <button onClick={handleBackClick} className="bg-blue-500 text-white font-bold py-2 px-3 mt-0 rounded">
                        Voltar
                    </button>
                </div>
            </div>


        </>
    );
}
