import React from 'react'

function Info() {
    return (
        <div className="info__grid">
            <div className="one">
                <p> <span>Art Tender</span> is an initiative that connects a conscious global network of artists united against a singular cause, the fight for gender equality.</p>

                <p>
                    All profit from print sales will be donated to <a href="https://tender.org.uk/" target="_blank" rel="noreferrer noopener" id="red">Tender</a>, an arts charity working with young people to prevent domestic abuse and sexual violence through creative projects.</p>

                <p className="cursive">The sale is open <br /> during May 2021.</p>

                <p>We want to thank all of the wonderful artists for generously donating a piece of their work towards this initiative. <br />
                Our vision for this project is to unite the creative community to build an equal future.</p>

                <p className="cursive"><span>All prints for sale are £30</span></p>

                <p>100% of sale proceeds will be donated to our nominated charity, Tender. <br />
                Buyers may also donate more at point of purchase.</p>

                <p>All artworks will be unsigned and available in a time-frame edition limited by the duration of the fund raising period.</p>
            </div>

            <div className="two">
                <p>To make a donation by buying one of the prints, please send us an email to:
                    </p>
                <p className="cursive">
                    <a href="mailto:arttender21@gmail.com" id="red">arttender21@gmail.com</a>
                </p>
                <p>
                    with the photograph(s) you’re interested in and the amount you would like to donate.</p>

                <p>Please note that all print sales are final and non-refundable as all profits are being donated to Tender. </p>

                <p>Prints will be produced and shipped after May 31st.
                Please note that the printing and shipping services are operating according to the current restrictions and are therefore experiencing some delays.</p>

                <h3 className="hoverable">GRACIAS</h3>
            </div>
            <div className="three center">
                <img src="/pics/printInfo1.svg" alt="info sizes" />
                <img src="/pics/printInfo2.svg" alt="info sizes" />
            </div>
        </div>
    )
}

export default Info
