import React from "react";

const Todolist = () => {

    const [obj, setObj] = React.useState([
        { name: "CSS", completed: true },
        { name: "JavaScript", completed: true },
        { name: "Learn React", completed: false },
        { name: "Learn mongoDB", completed: false },
        { name: "Learn Node JS", completed: false },
    ])

    const setstatus=((ns) =>{
        console.log(ns);
        const newobj = [...obj];
        newobj[ns].completed = !newobj[ns].completed;
        setObj (newobj)
          })           

    return (
        <div> 18.2<br></br>
            <div>
                <ul>
                    {obj.map((n,i) => {
                        return <li key={i}><span style={{ textDecoration: n.completed ? "line-through" : "" }}>{n.name}</span>  
                         <input  id={i} type="button" value={n.completed ? "✓" : "X" } onClick={(e)=>setstatus(e.target.id)}></input></li>
                          
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Todolist