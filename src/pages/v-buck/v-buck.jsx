import PageTitle from "../../components/page-title/page-title"
import VBuckCard from "../../components/v-buck-card/v-buck-card"
import './styles.css'

export default function VBuck() {

    const backgroundImg = ['./vbucks1.png', './vbucks2.png', './vbucks3.png', './vbucks4.png']

    return (
        <section id="v-buck">
            <div id="v-buck-container" className="flex flex-column container">
                <div className="v-bucks-title">
                    <PageTitle title="V-BUCKS" backgroundText="CRÉDITOS" />
                </div>
                <div className="v-buck-container-card flex justify-center">
                    <VBuckCard img={backgroundImg[0]} title="1.000" price="24,90"/>
                    <VBuckCard img={backgroundImg[1]} title="2.800" price="62,50"/>
                    <VBuckCard img={backgroundImg[2]} title="5.000" price="97,50"/>
                    <VBuckCard img={backgroundImg[3]} title="13.500" price="246,00"/>
                </div>
            </div>
        </section>
    )
}