import React, { createContext, useState } from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [prints, setPrints] = useState([
        {
            id: 1,
            url: 'pics/photo3.jpg',
            title: 'Título1',
            artist: 'artista1'
        },
        {
            id: 2,
            url: 'pics/photo3.jpg',
            title: 'Título2',
            artist: 'artista2'
        },
        {
            id: 3,
            url: 'pics/photo3.jpg',
            title: 'Título3',
            artist: 'artista3'
        },
        {
            id: 4,
            url: 'pics/photo3.jpg',
            title: 'Título4',
            artist: 'artista4'
        },
        {
            id: 5,
            url: 'pics/photo3.jpg',
            title: 'Título5',
            artist: 'artista5'
        },
        {
            id: 6,
            url: 'pics/photo3.jpg',
            title: 'Título6',
            artist: 'artista6'
        },
        {
            id: 7,
            url: 'pics/photo3.jpg',
            title: 'Título7',
            artist: 'artista7'
        },
        {
            id: 8,
            url: 'pics/photo3.jpg',
            title: 'Título8',
            artist: 'artista8'
        },
        {
            id: 9,
            url: 'pics/photo3.jpg',
            title: 'Título9',
            artist: 'artista9'
        },
        {
            id: 10,
            url: 'pics/photo3.jpg',
            title: 'Título10',
            artist: 'artista10'
        },
        {
            id: 11,
            url: 'pics/photo3.jpg',
            title: 'Título11',
            artist: 'artista11'
        },
        {
            id: 12,
            url: 'pics/photo3.jpg',
            title: 'Título12',
            artist: 'artista12'
        }
    ]);



    return (
        <DataContext.Provider value={[prints, setPrints]}>
            {props.children}
        </DataContext.Provider>
    )
}

