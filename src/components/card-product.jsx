import { Link } from "@tanstack/react-router";

export function CardProduct({image, name, specs,price, onAddToCart }) {
    return (
    <div className="max-w-sm flex flex-col bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
      <img
        className="rounded-t-lg object-cover h-48 w-full"
        src={image}
        alt={name}
      />
      <div className="p-4 flex flex-col flex-1 gap-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        
        <span className="flex-1 text-sm  text-gray-500">
          {specs}
        </span>

        <span className="text-xl font-bold text-gray-800">{price}</span>
        
        <div className="flex items-center justify-between gap-4">
          <Link 
          className="self-center p-2 text-center bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors" 
          href="/product-detail"
          >
            Ver mais detalhes
          </Link>
          <button
            onClick={onAddToCart}
            className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Adicionar ao Carrinho
          </button>    
        </div>
      </div>
    </div>
    );
}