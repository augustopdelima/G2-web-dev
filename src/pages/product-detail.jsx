import { useEffect } from 'react';

import notebook from '../images/produtos/notebook.webp';
import { ReactComponent as Check } from '../images/check.svg';

export function ProductDetail() {

    const specs = [
        "Processador Intel Core i5 de 12ª geração",
        "8GB de RAM DDR4",
        "256GB SSD NVMe",
        "Placa de vídeo NVIDIA GeForce GTX 1650 4GB",
        "Tela IPS 15.6” Full HD 120Hz",
        "Teclado mecânico retroiluminado RGB",
        "Webcam Full HD",
        "Sistema Operacional Windows 11 Home",
        "Peso: 2.1kg",
        "Portas: 3x USB-A, 1x USB-C, HDMI 2.0, RJ45",
    ];

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [])

    return (
        <div className="min-h-screen  p-6">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">

                    <div className="flex justify-center items-center">
                        <img
                            src={notebook}
                            alt="notebook"
                            className="max-w-full h-auto object-contain"
                        />
                    </div>


                    <div className="p-6 flex flex-col justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">
                                Notebook Acer Nitro 5
                            </h1>
                            <p className="text-gray-600 text-sm">
                                Intel Core i5, 8GB RAM, GTX 1650, SSD 256GB, Tela Full HD
                            </p>

                            <h2 className="text-2xl font-bold text-blue-600">
                                R$ 3.400,70
                            </h2>
                        </div>

                        <div className="p-6 border-t">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                Calcular Frete
                            </h3>
                            <div className="flex items-center gap-4">
                                <input
                                    type="text"
                                    maxLength={8}
                                    placeholder="Digite seu CEP"
                                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full md:w-1/2"
                                />
                                <button
                                    className="py-2 px-4 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
                                >
                                    Calcular
                                </button>
                            </div>
                        </div>

                        <button
                            className="mt-4 py-3 px-6 bg-blue-500 text-white font-medium rounded-md shadow hover:bg-blue-600 transition"
                        >
                            Adicionar ao Carrinho
                        </button>
                    </div>
                </div>


                <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Especificações Técnicas
                    </h3>
                    <ul className="text-gray-600 flex flex-col gap-4">
                        {specs.map((value) => (
                            <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-md shadow-sm">
                                <Check className='w-5 h-5' />
                                {value}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}