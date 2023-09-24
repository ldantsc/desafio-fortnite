import LogoFortnite from "../logo-fortnite/logo-fortnite"
import Button from "../button/button"
import './hero-description.css'

export default function HeroDescription() {

    const description = "Chame seus amigos e mergulhe em um jogo massivo de combate que combina saque, criação, tiroteio e caos. O resultado é uma experiência online competitiva e totalmente imprevisível que só fica maior e mais radical a cada temporada."

    return (
        <>        
            <p className="">Boas vindas ao mundo de</p>
            <LogoFortnite width="400"/>
            <p className="hero-description-text">{description}</p>
            <Button name="Jogue Agora" />
        </>
    )
}