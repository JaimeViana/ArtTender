import React from 'react'

function Hero() {
    return (
        <div className="hero" id="home">
            <div className="hero__container">
                <img src="/pics/logo.svg" alt="Art Tender logo" />
                <p className="hero__description">Fundraising for equality</p>
                <div className="hero__grid">
                    <p className="hero__description">Art Tender is a print sale of work by France, Spain and UK-based
                    photographers
                    and artists. <br /> All proceeds will go to <a href="https://tender.org.uk/" target="_blank" rel="noreferrer noopener">Tender</a>, an arts charity working with young people
                    to
                    prevent domestic abuse and sexual violence through creative projects.</p>
                    <p className="hero__description">
                        The sale <br /> is open during <span>May 2021</span>.
                </p>
                </div>
            </div>
        </div>
    )
}

export default Hero
