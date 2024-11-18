import { ReactComponent as CartLogo } from '../images/cart-shopping.svg';
import { ReactComponent as UserLogo } from '../images/user.svg';
import logo from '../images/logo.png';
import { SearchBar } from './search-bar';
import { NavBar } from './nav-bar';
import { Link } from '@tanstack/react-router';


export function Header() {
    return (
        <header className='flex flex-col gap-2 justify-between bg-gradient-to-r from-cyan-500 to-blue-500 items-center p-4'>

            <div className='flex justify-between items-center gap-4 w-full max-w-[90%] max-h-[50%] flex-wrap'>

                <div className='flex items-center'>
                    <Link href='/'>
                        <img className="h-20 object-contain" src={logo} alt="logo da loja" />
                    </Link>
                    <h1 className='text-xl font-black text-white'>COMPUTER SHOP</h1>
                </div>


                <SearchBar />

                <div className='flex items-center gap-2'>
                    <UserLogo className='w-8 h-8' />
                    <div className='flex flex-col'>
                        <Link href='/register' className='text-base font-bold cursor-pointer hover:text-white'>Entre</Link>
                        <Link href='/register' className='text-base font-bold cursor-pointer hover:text-white'>Cadastre-se</Link>
                    </div>
                </div>

                <Link href='/cart' className='hover:bg-white relative ease-in duration-300 rounded cursor-pointer p-2'>
                    <CartLogo className='w-12 h-8' />
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        2
                    </span>
                </Link>
                
            </div>

            <NavBar />


        </header>
    )
}

