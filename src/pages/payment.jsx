import { FormField } from "../components";

export function PaymentPage() {
    return (
        <div className="flex h-4/6 mt-8 justify-center">
            <div className="w-full bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Pagamento</h1>

                <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-700">Resumo do Pedido</h2>
                    <div className="border-t mt-4">
                        <div className="flex justify-between py-2">
                            <span>Notebook Gamer X</span>
                            <span>R$ 3.400,70</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span>All In One Y</span>
                            <span>R$ 4.000,00</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span>Frete</span>
                            <span>R$ 50,00</span>
                        </div>
                        <div className="flex justify-between py-2 font-semibold">
                            <span>Total</span>
                            <span>R$ 7.450,70</span>
                        </div>
                    </div>
                </div>

                <form className="flex flex-col gap-4">
                    <FormField label="Nome no Cartão" type="text" id="name" name="name" placeholder="Ex: João da Silva" required />

                    <FormField label="Número do Cartão" type="text" id="cardNumber" name="cardNumber" required placeholder="1234 5678 9012 3456" />


                    <div className="grid grid-cols-2 gap-4">

                        <FormField label="Data de Validade" type="text" id="expiryDate" name="expiryDate" required placeholder="MM/AA" />

                        <FormField label="CCV" type="text" id="cvv" name="cvv" required placeholder="123" />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 shadow-lg transition"
                    >
                        Confirmar Pagamento
                    </button>
                </form>
            </div>
        </div>
    );
};