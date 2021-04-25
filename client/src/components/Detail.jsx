import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { DataContext } from './DataProvider';

function Detail() {

    const [prints, setPrints] = useContext(DataContext);

    const { id } = useParams();
    let nextId = parseInt(id) + 1;
    const print = prints.find(print => print.id == id);

    return (
        <div className="detail__grid">
            <img src={"/pics/photo" + id + ".jpg"} alt="" />
            <div className="detail__btns">
                <Link to={'/'}>
                    <img src="/pics/x-18.svg" alt="" />
                </Link>
                <Link to={'/print/' + nextId} >
                    <img id="btn_next" src="/pics/artTender-GRID-16.svg" alt="" />
                </Link>
            </div>

            <div className="detail__info">
                <h1>{print.title}</h1>
                <p>{print.artist}</p>
                <p>From £30</p>
            </div>
        </div>
    )
}

export default Detail
