import './v-buck-card.css'

function Bonus() {
    return (
        <div className='v-buck-container-bonus absolute'>
            <h3>37% DE BÔNUS</h3>
        </div>
    )
}

export default function VBuckCard(props) {
    return (
        <>
            <div id="v-buck-card" className='flex margin-card'>
                <div className='container-v-buck-card relative flex flex-column align-center justify-between'>
                    {props.bonus ? <Bonus /> : false}
                    <div className="container-v-buck-card-img">
                        <img src={props.img} className="v-buck-card-img" alt='' />
                    </div>
                    <div className="container-v-buck-card-description">
                        <h2>{props.title}</h2>
                        <h3>V-BUCKS</h3>
                    </div>
                    <div className="container-v-buck-card-price">
                        <h2 className='price'>{props.price}BRL</h2>
                    </div>
                </div>
            </div>
        </>
    )
}