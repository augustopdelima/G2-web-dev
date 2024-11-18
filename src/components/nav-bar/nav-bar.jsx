import { Link } from './link';

export function NavBar() {
    return (
        <nav className='w-full max-w-[90%] '>
            <ul className='flex flex-wrap justify-around text-base font-bold text-white'>
                <li><Link href="#" text={"BLACK FRIDAY"} /></li>
                <li><Link href="#" text={"PC GAMER"} /></li>
                <li><Link href="#" text={"KIT UPGRADE"}/></li>
                <li><Link href="#"  text={"MONITORES"} /></li>
                <li><Link href="#"  text={"MONTE SEU PC"} /></li>
                <li><Link href="#" text={"ATENDIMENTO"} /></li> 
            </ul>
        </nav>
    );
}