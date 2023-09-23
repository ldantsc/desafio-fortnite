import { Link } from 'react-scroll'
import LogoDantsDev from '../logo-dantsdev/logo-dantsdev'
import './footer.css'

export default function Footer() {
    return (
        <div id="footer-container" className='footer-container'>
            <div id="footer-container-social-media" className='flex justify-between align-end'>
                <a href='https://www.epicgames.com/site/pt-BR/home' target='_blank' rel="noopener noreferrer" title='Link Epic Games'>
                    <img className='logo-epic-games' src="./epic.png" alt="Logo Epic Games" />
                </a>
                <div className='footer-social-media flex align-end'>
                    <p>Acompanhe nas redes</p>
                    <a href="https://web.facebook.com/BrasilFN" target='_blank' rel="noopener noreferrer" title='Link Facebook Fortinite'><img src="./facebook.png" alt="Facebook Logo"/></a>
                    <a href="https://twitter.com/FortniteGame" target='_blank' rel="noopener noreferrer" title='Link Twitter Fortnite'><img src="./twitter.png" alt="Twitter Logo"/></a>
                    <a href="https://www.youtube.com/epicfortnite" target='_blank' rel="noopener noreferrer" title='Link Youtube Fortnite'><img src="./youtube.png" alt="Youtube Logo"/></a>               
                </div>
                <a href='https://www.linkedin.com/in/dantsc/' target='_blank' rel="noopener noreferrer" title='Link Linkedin Lucas Dantas'>
                    <LogoDantsDev />
                </a>
            </div>
            <div className="footer-container-about">
                <p className='copywrite-epic'>Partes dos materiais utilizados são marcas registradas e/ou obras protegidas por direitos autorais da <strong>Epic Games, Inc.</strong> Todos os direitos reservados pela <strong>Epic</strong>. Este material <strong>não é oficial</strong> e não é endossado pela Epic.</p>
                <div className='copywrite-explow'>
                    <p>Desafio Fortnite by <strong>Explow Studio</strong> feito por <strong>dants.dev</strong></p>
                    <a href='https://www.explow.studio/' target='_blank' rel="noopener noreferrer" title='Link Explow Studio'><img src="./explow.png" alt="Logo Explow"/></a>
                </div>
            </div>
            <div className='footer-top-return'>
                <Link to="hero" spy={true} smooth={true} duration={1000}>
                <p>Voltar ao topo</p>
                <img className='icon-top-return' src="./icon-top.png" alt="Voltar para o Inicio"/>
                </Link>
            </div>
        </div>
    )
}
