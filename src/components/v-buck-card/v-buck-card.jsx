import './v-buck-card.css'

export default function VBuckCard(props) {
    return (
        <>
            <div id="v-buck-card" className='flex'>
                <div className='container-v-buck-card relative flex flex-column align-center justify-between'>
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