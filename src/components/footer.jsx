import { ReactComponent as InstagramLogo } from '../images/instagram.svg';
import { ReactComponent as TwitterLogo } from '../images/twitter.svg';
import { ReactComponent as FacebookLogo } from '../images/facebook.svg';

export function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-200 py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5">

                <div>
                    <h3 className="text-xl font-bold mb-4">Sobre Nós</h3>
                    <p>
                        Somos especialistas em tecnologia, oferecendo as melhores opções de computadores,
                        acessórios e serviços. Garantimos qualidade e inovação para nossos clientes.
                    </p>
                </div>


                <div>
                    <h3 className="text-xl font-bold mb-4">Produtos</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:text-gray-400">Notebooks</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">Desktops</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">Acessórios</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">Monitores</a>
                        </li>
                    </ul>
                </div>


                <div>
                    <h3 className="text-xl font-bold mb-4">Suporte</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:text-gray-400">Central de Ajuda</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">Garantia</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">Contato</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">Perguntas Frequentes</a>
                        </li>
                    </ul>
                </div>


                <div>
                    <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full "
                        >
                            <InstagramLogo className='w-10 h-10 rounded-full' />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full "
                        >
                            <TwitterLogo className='w-8 h-8 '/>
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full"
                        >
                           <FacebookLogo className='w-10 h-10' />
                        </a>
                    </div>
                </div>
            </div>


            <div className="border-t border-gray-700 mt-10 pt-5 text-center">
                <p>&copy; 2024 Computer Shop. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}