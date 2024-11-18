import notebook from "../images/produtos/notebook.webp";
import allIoOne from "../images/produtos/all-io-one.webp";
import { CartProduct, CartProductDetail } from "../components";

export function CartShopping() {
    return (<>
        <div className="p-8 bg-gray-100 ">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

                <CartProduct image={notebook} price={'R$ 3.400,70'} specs={'Intel Core i5, 8GB RAM, SSD 256GB, Tela Full HD'} />

                <CartProduct image={allIoOne} price={'R$ 3.999,99'} specs={'All In One, Intel Core i3, 8GB RAM, HD 1TB, Tela 23" Full HD'} />

            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Carrinho</h2>

                <div>

                   <CartProductDetail specs={'Intel Core i5, 8GB RAM, SSD 256GB, Tela Full HD'}  price={'R$ 3.400,70'} quantity={1}/>
                   <CartProductDetail specs={'All In One, Intel Core i3, 8GB RAM, HD 1TB, Tela 23" Full HD'} price={'R$ 3.999,99'} quantity={1}/>

                    <div className="mt-4 text-right">
                        <h3 className="text-lg font-bold">
                            Total: R$ 7.400,7
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </>);
}