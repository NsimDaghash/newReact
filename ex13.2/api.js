import React from 'react';
// import Input from './Input';
// import Single from './single';
// import Mapping from './mapping';

const URL = 'https://randomuser.me/api/?results=10'

class Api extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            person :[]
        };
        }

  async componentDidMount() {
   const people = await ((await fetch(URL)).json());
   console.log (people)
    this.setState({person :people.results});
  }

    render()
    {
        return(
            <div>
                <div className="singleperson">
                    <h2 className="name">{this.state.person.name}</h2>
                    {console.log(this.state.person.name)}
                    <img src={this.state.person.img} alt="" />
                </div>

            </div>
        
        )
    }
}

export default Api