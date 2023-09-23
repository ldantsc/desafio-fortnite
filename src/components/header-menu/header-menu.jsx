import { Link } from 'react-scroll'
import './header-menu.css'

export default function HeaderMenu() {
    return (
        <ul id='header-menu-link' className='flex nav-header'>
            <li><Link to="tournaments" spy={true} smooth={true} duration={1000}>Torneios</Link></li>
            <li><Link to="battle-pass" spy={true} smooth={true} duration={1000}>Passe de Batalha</Link></li>
            <li><Link to="v-buck" spy={true} smooth={true} duration={1000}>V-Bucks</Link></li>
            <li><Link to="items" spy={true} smooth={true} duration={1000}>Items</Link></li>
        </ul>
    )
}