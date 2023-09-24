import React, { useState } from 'react';
import Header from "../../components/header/header"
import HeroDescription from "../../components/hero-description/hero-description"
import HeroPlatforms from "../../components/hero-platforms/hero-platforms"
import HeroPreview from "../../components/hero-preview/hero-preview"
import HeroVideo from "../../components/hero-video/hero-video"
import HeroVideoYoutube from "../../components/hero-video-youtube/hero-video-youtube"
import HeroProgress from "../../components/hero-progress/hero-progress"
import './styles.css'


function ComponentA() {
    return <HeroVideo />;
}

function ComponentB() {
    return <HeroVideoYoutube />;
}

export default function Hero() {



    const [showComponentA, setShowComponentA] = useState(true);

    const toggleComponents = () => {
        setShowComponentA(!showComponentA);
    }

    return (
        <section id="hero">
            <div className="hero-container">
                <div className="hero-container-header">
                    <Header />
                </div>
                <div className="hero-container-content flex align-center">
                    <div id="hero-container-description" className="hero-container-description">
                        <HeroPlatforms />
                        <HeroDescription />
                    </div>
                    <div id="hero-container-aside" className="hero-container-aside">
                        <div id='hero-container-preview' className="hero-container-preview">
                            <HeroPreview />
                        </div>
                        <div id='hero-container-video' onClick={toggleComponents}>
                            {showComponentA ? <ComponentA /> : <ComponentB />}
                        </div>
                    </div>
                </div>
                <div className='hero-progress-bar'>
                    <HeroProgress />
                </div>
            </div>
        </section>
    )
}