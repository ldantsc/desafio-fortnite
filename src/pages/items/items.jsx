import PageTitle from "../../components/page-title/page-title"
import ItemsCard from "../../components/items-card/items-card"
import './styles.css'

export default function Items() {

    const backgroundImg = ['./skin1.png', './skin2.png', './skin3.png' ,'./skin4.png']

    return (
        <section id="items">
            <div id="items-container" className="flex flex-column container ">
                <div id="items-container-description">
                    <PageTitle title="ADIQUIRA SKINS" backgroundText="ITENS" />
                </div>
                <div className="items-container-card">
                    <ItemsCard backgroundImg={backgroundImg[0]} title="DUENDE VERDE" subtitle="Capitulo 3, Temporada 1" />
                    <ItemsCard backgroundImg={backgroundImg[1]} title="KRATOS" subtitle="Capitulo 2, Temporada 5" />
                    <ItemsCard backgroundImg={backgroundImg[2]} title="DESBRAVADOR PRAIANO" subtitle="Capitulo 2, Temporada 3" />
                    <ItemsCard backgroundImg={backgroundImg[3]} title="HOMEM ARANHA" subtitle="Capitulo 2, Temporada 5" />
                </div>
            </div>
        </section>
    )
}