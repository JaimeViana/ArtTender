import React, { createContext, useState } from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [prints, setPrints] = useState([
        {
            id: 1,
            url: 'pics/photo1-min.jpg',
            title: '—',
            artist: 'Jerusha West',
            ig: 'jerushawest'
        },
        {
            id: 2,
            url: 'pics/photo2-min.jpg',
            title: '—',
            artist: 'Sara Pinilla',
            ig: 'pinilla'
        },
        {
            id: 3,
            url: 'pics/photo3-min.jpg',
            title: '—',
            artist: 'Ieva Lasmane',
            ig: 'lasmaneieva'
        },
        {
            id: 4,
            url: 'pics/photo4-min.jpg',
            title: '—',
            artist: 'La Cíngara',
            ig: 'lacingara'
        },
        {
            id: 5,
            url: 'pics/photo5-min.jpg',
            title: 'Performance Live Archive',
            artist: 'Jemima Yong',
            ig: 'jemimayong'
        },
        {
            id: 6,
            url: 'pics/photo6-min.jpg',
            title: '—',
            artist: 'Laura Aguilera',
            ig: 'laura.aglr'
        },
        {
            id: 7,
            url: 'pics/photo7-min.jpg',
            title: 'Belén holding all the sand she',
            artist: 'Maite de Orbe',
            ig: 'maitedeorbe'
        },
        {
            id: 8,
            url: 'pics/photo8-min.jpg',
            title: 'Untitled',
            artist: 'David Matecsa',
            ig: 'davidmatecsa'
        },
        {
            id: 9,
            url: 'pics/photo9-min.jpg',
            title: '—',
            artist: 'Louise Tse',
            ig: 'louisetse'
        },
        {
            id: 10,
            url: 'pics/photo10-min.jpg',
            title: '—',
            artist: 'Marta Champán',
            ig: 'mart.champan'
        },
        {
            id: 11,
            url: 'pics/photo11-min.jpg',
            title: '—',
            artist: 'Sarah Montet',
            ig: 'sarah_montet'
        },
        {
            id: 12,
            url: 'pics/photo12-min.jpg',
            title: 'Death Valley',
            artist: 'Eloïse Rocco Pourreau',
            ig: 'eloiseroccopourreau'
        },
        {
            id: 13,
            url: 'pics/photo13-min.jpg',
            title: 'Strange Fish',
            artist: 'Jade Deshayes',
            ig: 'jadeshayes'
        },
        {
            id: 14,
            url: 'pics/photo14-min.jpg',
            title: '—',
            artist: 'Leia Goiria & Nuria Estremera',
            ig: 'beia.a & @nuriaestre'
        }
    ]);



    return (
        <DataContext.Provider value={[prints, setPrints]}>
            {props.children}
        </DataContext.Provider>
    )
}

