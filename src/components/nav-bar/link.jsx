export function Link(props) {
    return <a className='hover:text-black cursor-pointer' href={props.href}>{props.text}</a>;
}