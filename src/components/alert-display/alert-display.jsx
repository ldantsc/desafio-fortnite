import LogoDantsDev from "../logo-dantsdev/logo-dantsdev"
import LogoFortnite from "../logo-fortnite/logo-fortnite"
import './alert-display.css'

export default function AlertDisplay() {
    return (
        <div className="container-alert-display">
            <h2>Desafio</h2>
            <LogoFortnite/>
            <img src="./dants.dev.svg" alt="Logo Dants Dev" width={100} />
            <p>VISUALIZAÇÃO DISPONIVEL APENAS PARA DESKTOP OU TELA CHEIA</p>
            <a href="https://github.com/ldantsc/desafio-fortnite" target="_blank">
                <p style={{ textDecoration: "underline" }}>Repositório do projeto</p>
            </a>
        </div >
    )
}