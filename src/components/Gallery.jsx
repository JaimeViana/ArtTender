import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from './DataProvider';

function Gallery() {

    const [prints, setPrints] = useContext(DataContext)

    const listPrints = prints.map(print =>

        <Link to={"/print/" + print.id} key={print.id} className="gallery__item">
            <figure>
                <img src={print.url} alt="print for sale" />
                <figcaption>{print.artist}</figcaption>
            </figure>
        </Link>

    );

    return (
        <div className="gallery" id="gallery">
            <div className="gallery__container">
                <div className="gallery__list">
                    {listPrints}
                </div>
            </div>
            <div className="gallery__arrow">
                <a href="#" >
                    <img src="/pics/backtop.svg" alt="back to top" className="hoverable" />
                </a>
            </div>
        </div>
    )
}

export default Gallery
