import React, { useState } from "react";

const Checkit = () => {

   const [numbersArr,setNumbers]= useState(["one", "two", "three", "four", "five"]);

    const deletItems=((ns) =>{
        console.log(ns);
        const newobj = [...numbersArr];
        setNumbers(newobj)
        console.log(newobj);
          }) 
    
    
    const resetBoard=()=>{
        setNumbers=numbersArr
    }

    return (
        <div> 18.4<br></br>
            <div>
            <input  id="d" type="button" value="Delete" onClick={(e)=>deletItems(e.target.id)}></input>
            <input  id="r" type="button" value="Reset" onClick={resetBoard}></input>
                <ul>
                    {numbersArr.map((i) => {
                        return <li key={i}> <input type="checkbox" />  
                         </li>
                          
                    })}
                </ul>
                    <ul className="numbers">
                          {numbersArr.map((i) => (
                            <li className="num">{numbersArr[i]}</li>
                          ))}
                    </ul>
            </div>
        </div>
    )
}

export default Checkit