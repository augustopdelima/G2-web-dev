export function CartProduct({image, specs, price}) {
    return (
        <div
            className="border rounded-lg p-4 max-w-56 shadow-sm bg-white flex flex-col items-center"
        >
            <img src={image} alt="notebook" className="w-32 h-32 object-contain mb-4" />
            <h3 className="text-lg font-semibold"></h3>
            <p className="text-gray-400 flex-1">{specs}</p>
            <p className="text-gray-700">{price}</p>
        </div>
    );
}