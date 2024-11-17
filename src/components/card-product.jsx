export function CardProduct({image, name, specs,price, onAddToCart }) {
    return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
      <img
        className="rounded-t-lg object-cover h-48 w-full"
        src={image}
        alt={name}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500 mt-2">{specs}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-800">{price}</span>
          <button
            onClick={onAddToCart}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
    );
}