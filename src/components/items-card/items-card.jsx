import { useState } from 'react'
import './items-card.css'

export default function ItemsCard(props) {

    const [displayShadow, setDisplayShadow] = useState(true);
    const onView = () => {
        setDisplayShadow(!displayShadow)
    }

return (
    <>
        <div id="items-card">
            <div className="container-items-card flex" onMouseOver={onView}>
                <div className="container-img-items-card flex align-end">
                    <img src={props.backgroundImg} className="items-card-img" alt="Imagem de Skins"/>
                </div>
                <div className="container-items-card-description absolute">
                    <h2 className='items-card-h2' >{props.title}</h2>
                    <p className='items-card-p'>{props.subtitle}</p>
                </div>
            </div>
        </div>
    </>
)
}