import React from 'react'

import Name from './Name'

export default class Card extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Name name={this.props.object.name}/>
        )
    }
}

export default Card;

