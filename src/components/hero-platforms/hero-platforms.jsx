import './hero-platforms.css'

export default function HeroPlatforms() {

    const consoleImg = ['./playstation.png', './nintendo.png', './xbox.png', './computer.png']

    return (
        <div className="hero-console-platform margin-bottom">
            <img src={consoleImg[0]} alt="playstation"/>
            <img src={consoleImg[1]} alt="nintendo"/>
            <img src={consoleImg[2]} alt="xbox"/>
            <img src={consoleImg[3]} alt="computer"/>
        </div>
    )
}