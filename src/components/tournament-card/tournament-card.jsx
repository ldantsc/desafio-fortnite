import './tournament-card.css'

export default function TournamentCard(props) {
    return (
        <>
            <div id="tournament-card" className='margin-card'>
                <div className='container-tournament-card relative flex align-center justify-center container-margin-top'>
                    <div className='shadow-tournament-card'></div>
                    <div className="container-img-tournament-card absolute">
                        <img src={props.backgroundImg} className="tournament-card-img" alt=''/>
                    </div>
                    <div className="container-tournament-card-description absolute">
                        <h2 className='tournament-card-h2'>{props.description}</h2>
                        <h3 className='tournament-card-h3'>{props.descriptionDate}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}