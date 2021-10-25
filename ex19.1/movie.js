import React from 'react';
import {useEffect , useState} from 'react';

const URL = "https://swapi.dev/api/films/1/"

const MovieTitle = () => {

    const [movietitle,setMovietitle] = useState('');
    const [director,setDirector] = useState('');


    useEffect(() => {
        const myData = async () => {
            const movie = await ((await fetch(URL)).json());
            setMovietitle(movie.title)
            setDirector(movie.director)
            console.log(movietitle);
            console.log(director);
        }
        
        
        myData()
    })
    return (
        <div className="info" > Movie info : <br/>
            <div className="info">title :{movietitle}</div>
            <div className="info">director :{director}</div>
        </div>

    )

}
export default MovieTitle