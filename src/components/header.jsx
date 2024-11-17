import { ReactComponent as CartLogo } from '../images/cart-shopping.svg';
import { ReactComponent as UserLogo } from '../images/user.svg';
import logo from '../images/logo.png';
import { SearchBar } from './search-bar';
import { NavBar } from './nav-bar'; 


export function Header() {
    return (
        <header className='flex flex-col gap-2 justify-between bg-gradient-to-r from-cyan-500 to-blue-500 items-center p-4'>

            <div className='flex justify-between items-center gap-4 w-full max-w-[90%] max-h-[50%] flex-wrap'>
                
                <div className='flex items-center'>
                    <img className="h-20 object-contain" src={logo} alt="logo da loja" />
                    <h1 className='text-xl font-black text-white'>COMPUTER SHOP</h1>                    
                </div>
                

                <SearchBar />

                <div className='flex items-center gap-2'>
                    <UserLogo className='w-8 h-8'/>
                    <div className='flex flex-col'>
                        <a className='text-base font-bold cursor-pointer hover:text-white'>Entre</a>
                        <a className='text-base font-bold cursor-pointer hover:text-white'>Cadastre-se</a>
                    </div>
                </div>
                <button className='hover:bg-white ease-in duration-300 rounded p-2'><CartLogo className='w-12 h-8' /></button>
            </div>
            
            <NavBar />
        
            
        </header>
    )
}

