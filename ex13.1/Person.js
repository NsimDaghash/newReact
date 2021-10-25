
import React from 'react'
import Name from './name';
import data  from './data'

class Person extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            names: [...data]            
          };
          console.log(data);
        }

        birth(names1990) {
          let i = 0;
          const result = data.map((n) => n.birthday);
          let newarr = [], born = [];
          result.forEach(function (num) {
            newarr = num.split('-');
            if (newarr[2] < 1990) {
              born.push(names1990[i]);
            }
            i++;
          });
    
        return(born);
       }

        render(){

            let names1990 =  this.state.names;
            let filteredNames = this.birth(names1990);
            console.log(filteredNames)
            return (  
              <div>  
                    <h2>The names :</h2>  
                         <ul>
                          {this.state.names.map((n) => { 
                            return <li>{n.name}</li>                            
                          })}
                          </ul>                          
                    <h2> born before 1990 :</h2>
                    <ul> 
                      {filteredNames.map((res) =>{
                      return  <li> {res.name} </li>
                      }) }
                      <ul></ul>
                    </ul>                    
              </div>  
            );  
        }
}

export default Person