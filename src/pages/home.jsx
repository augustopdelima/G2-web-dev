import { CardProduct, Carousel } from "../components"

export function Home() {

    const products = [
        {
            id: 1,
            image: 'https://via.placeholder.com/400x300',
            name: 'Notebook Gamer XYZ',
            specs: 'Intel Core i7, 16GB RAM, SSD 512GB, NVIDIA GTX 1650',
            price: 'R$ 7.999,99',
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/400x300',
            name: 'Desktop Workstation ABC',
            specs: 'AMD Ryzen 9, 32GB RAM, SSD 1TB, NVIDIA RTX 3080',
            price: 'R$ 12.999,99',
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/400x300',
            name: 'Ultrabook Slim 13"',
            specs: 'Intel Core i5, 8GB RAM, SSD 256GB, Tela Full HD',
            price: 'R$ 4.999,99',
        },
        {
            id: 4,
            image: 'https://via.placeholder.com/400x300',
            name: 'All-in-One Z',
            specs: 'Intel Core i3, 8GB RAM, HD 1TB, Tela 23" Full HD',
            price: 'R$ 3.999,99',
        },
        {
            id: 5,
            image: 'https://via.placeholder.com/400x300',
            name: 'Gaming Monitor 27"',
            specs: '2560x1440, 144Hz, 1ms, HDR10',
            price: 'R$ 2.999,99',
        },
        {
            id: 6,
            image: 'https://via.placeholder.com/400x300',
            name: 'Teclado Mecânico RGB',
            specs: 'Switches Cherry MX Red, Iluminação RGB',
            price: 'R$ 499,99',
        },
        {
            id: 7,
            image: 'https://via.placeholder.com/400x300',
            name: 'Mouse Gamer Pro',
            specs: '12000 DPI, RGB, 6 Botões Programáveis',
            price: 'R$ 299,99',
        },
        {
            id: 8,
            image: 'https://via.placeholder.com/400x300',
            name: 'Headset Gamer Surround',
            specs: 'Som 7.1, Microfone Destacável, RGB',
            price: 'R$ 599,99',
        },
    ];

    const handleAddToCart = (name) => {
        alert(`${name} adicionado ao carrinho!`);
    };

    const images = [
        'https://via.placeholder.com/1024x274?text=Slide+1',
        'https://via.placeholder.com/1024x274?text=Slide+2',
        'https://via.placeholder.com/1024x274?text=Slide+3',
        'https://via.placeholder.com/1024x274?text=Slide+4',
    ];

    return (
        <section className="w-[80%] h-full flex flex-col items-center gap-8">

            
            <Carousel images={images} />
            

            <h1 className="text-2xl font-extrabold">PRODUTOS EM DESTAQUE</h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <CardProduct
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        specs={product.specs}
                        price={product.price}
                        onAddToCart={() => handleAddToCart(product.name)}
                    />
                ))}
            </div>
        </section>
    )
};