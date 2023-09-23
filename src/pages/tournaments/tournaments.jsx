import PageTitle from "../../components/page-title/page-title"
import TournamentCard from "../../components/tournament-card/tournament-card"
import './styles.css'


export default function Tournaments() {

    const cardImg = ['./Blob1.png', './Blob2.png', './Blob3.png']

    return (
        <section id="tournaments">
            <div id="tournaments-container" className="flex flex-column container">
                <div className="tournaments-container-title">
                    <PageTitle title="MELHORES TORNEIOS" backgroundText="TORNEIOS" />
                </div>
                <div className="tournaments-container-cards flex justify-center">
                    <TournamentCard backgroundImg={cardImg[2]} description="CAMPEONATO DA VITÓRIA" descriptionDate="DOMINGOS"/>
                    <TournamentCard backgroundImg={cardImg[0]} description="CONSTRUÇÃO ZERO" descriptionDate="SEGUNDAS-FEIRAS"/>
                    <TournamentCard backgroundImg={cardImg[1]} description="CAMPEONATO POR GRANA" descriptionDate="VÁRIAS DATAS"/>
                </div>
            </div>
        </section>
    )
}