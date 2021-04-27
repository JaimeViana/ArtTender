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
                <div className="cross">
                    <Link to={'/'}>
                        <img src="/pics/x-18.svg" alt="" />
                    </Link>
                </div>
                <div className="flecha">
                    <Link to={'/print/' + nextId} >
                        <img id="btn_next" src="/pics/artTender-GRID-16.svg" alt="" />
                    </Link>
                </div>

            </div>

            <div className="detail__info">
                <div>
                    <h1>{print.title}</h1>
                    <p>{print.artist} — <Link className="cursive" to={'https://www.instagram.com/' + print.ig}>{print.ig}</Link>{ }</p>
                    <p className="cursive">£30'00</p>
                    <h3>PURCHASE</h3>
                    <a className="cursive" href="">arttender21@gmail.com</a>
                </div>


            </div>
        </div>
    )
}

export default Detail
