import BattlePassContent from "../../components/battle-pass-description/battle-pass-content"
import BattlePassImg from "../../components/battle-pass-img/battle-pass-img"
import './styles.css'

export default function BattlePass() {
    return (
        <section id="battle-pass">
            <div id="battle-pass-container" className="battle-pass-container flex align-center bg-blue-radial">
                    <div className="battle-pass-container-content flex align-center container">
                        <BattlePassContent />
                    </div>
                    <div id="battle-pass-container-img" className="battle-pass-container-img flex align-end">
                        <BattlePassImg />
                    </div>
                </div>
        </section>
    )
}