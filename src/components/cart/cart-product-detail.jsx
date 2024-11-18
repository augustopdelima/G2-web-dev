export function CartProductDetail({specs, price, quantity}) {
    return (
        <div
            className="flex justify-between items-center border-b py-4"
        >
            <div>
                <h3 className="font-semibold">{specs}</h3>
                <p className="text-sm text-gray-600">
                    {price} x {quantity}
                </p>
            </div>
            <div className="flex items-center space-x-4">
                <button

                    className="text-red-500 hover:underline"
                >
                    Remover
                </button>
            </div>
        </div>
    );
}