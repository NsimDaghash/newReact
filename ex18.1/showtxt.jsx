
import React from 'react';

const ShowTxt=()=>{
    const [obj,setObj] = React.useState({
        text :'ueev hwehfwi  hg hh  hoih wh ihoiwh we ohhgnggn i hwoihghg  nasim hestabech with the question need some help here , how can help ',
        number :10

    })

const showAllText=()=>{
    let newobj = {...obj}
    newobj.number = obj.text.length
    setObj (newobj)
};

 //const maxText = () =>{
    return (
        <div>
            {obj.text.substring(0, obj.number)}
            <input type="button" value="click" onClick={showAllText} />
        </div>
    )
}    
export default ShowTxt