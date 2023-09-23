import BannerDescription from "../../components/banner-description/banner-description"
import Footer from "../../components/footer/footer"
import './styles.css'

export default function Banner() {
    return (
        <section id="banner">
            <div id="banner-container" className="flex align-center bg-blue-radial">
                <div className="banner-container-description">
                    <BannerDescription />
                </div>
                <div className="flex banner-container-img">
                    <img src="./image-banner.png" alt="Imagem Fortinite Banner" />
                </div>
            </div>
            <div id="footer">
                <Footer />
            </div>
        </section>
    )
}