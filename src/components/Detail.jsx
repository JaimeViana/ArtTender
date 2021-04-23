import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

function Detail() {
    const { id } = useParams();


    return (
        <div className="detail__grid">
            <img src={"/pics/photo" + id + ".jpg"} alt="" />
            <Link to={'/print/' + (id)} id="btn_next">
                <img src="/pics/artTender-GRID-16.svg" alt="" />
            </Link>
            <div className="detail__info">
                <h1>TITLE</h1>
                <p>Author</p>
                <p>Price €</p>
            </div>
        </div>
    )
}

export default Detail
