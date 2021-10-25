import React from 'react';
import {useEffect , useState} from 'react';

const URL="https://restcountries.com/v2/all";

const WorldCounter =() =>{

    const [country,setCountry] = useState([]);
    const [filtered,setFiltered] = useState([]);
    
    useEffect(() => {
        const myData = async () => {
            const result = await ((await fetch(URL)).json());
            console.log('on mount we get=',result)
            setCountry(result)
        }
        myData()
    },[]) //ComponentDidMount

    // useEffect(() => {

    // }) //ComponentDidUpdate

    useEffect(() => {
      console.log('because country updated, filtered is now=',country);
      setFiltered(country)
    },[country]) //if state of country changed

  const handleChange = (e) => {
    console.log(e.target.value)
    if(e.target.value !== ""){
      let searchBar = [...country].filter((cntr) => {
        console.log(cntr)
        return cntr.name.toLowerCase().includes(e.target.value.toLowerCase())
      })
      console.log(searchBar);
      setFiltered([...searchBar])
    }
    else{
      setFiltered(country)
    }

  }

    return (
      <div> the countries :<br />
        <span>find :</span>
        <input type='text' name="searchbar" onChange={(e) => handleChange(e)}/>
          <ul>
            {filtered.map((cntr) => (
              <li >
                {cntr.name}
              </li>
            ))}
          </ul>
      </div>
    )
}

export default WorldCounter;