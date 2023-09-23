import logo from '../../logo.svg'
import './logo-fortnite.css'

export default function LogoFortnite(props) {
    return (
        <> 
        <a href="https://www.fortnite.com/" target="_blank" rel="noopener noreferrer">
            <img className="logo-fortnite" src={logo} alt="logo-fortnite" width={props.width}/>
        </a>
        </>
    )
}