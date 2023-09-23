import LogoFortnite from '../logo-fortnite/logo-fortnite'
import HeaderMenu from '../header-menu/header-menu'
import Button from '../button/button'
import './header.css'

export default function Header() {
    return (
        <div id='header' className='header'>
            <nav id='header-nav' className='flex justify-around align-center'>
                <div id='header-container-logo'>
                    <LogoFortnite width="100" />
                </div>
                <div id='header-menu'>
                    <HeaderMenu />
                </div>
                <div id='header-container-button'>
                    <Button name='Conheça'/>
                </div>
            </nav>
        </div >
    )
}

