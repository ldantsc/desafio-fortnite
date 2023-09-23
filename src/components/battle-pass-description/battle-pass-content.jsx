import Button from "../button/button"
import './battle-pass-content.css'

export default function BattlePassDescription() {

    const battlePassImgSrc = "./passe.png"

    return (
        <>
            <div className="battle-pass-logo">
                <img src={battlePassImgSrc} alt="" />
            </div>
            <div className="battle-pass-description">
                <h1>PASSE DE BATALHA</h1>
                <p>Suba de nível e resgate recompensas! Procurando o Pacotão de Batalha? Adicione 25 níveis ao seu Passe de Batalha a qualquer momento!</p>
                <div className="battle-pass-container-button display-block">
                    <Button name="Comprar Passe" width={250} />
                </div>
            </div>
        </>
    )
}