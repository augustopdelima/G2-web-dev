import { Link } from './link';

export function NavBar() {
    return (
        <nav className='w-full max-w-[90%] '>
            <ul className='flex flex-wrap justify-around text-base font-bold text-white'>
                <li><Link text={"BLACK FRIDAY"} /></li>
                <li><Link text={"PC GAMER"} /></li>
                <li><Link text={"KIT UPGRADE"}/></li>
                <li><Link text={"MONITORES"} /></li>
                <li><Link text={"MONTE SEU PC"} /></li>
                <li><Link text={"ATENDIMENTO"} /></li> 
            </ul>
        </nav>
    );
}