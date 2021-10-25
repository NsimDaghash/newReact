import React from "react";

class Single extends React.Component{
    render() {
        return (
            <div className="single">
                <h2 className="name">{this.props.name}</h2>
                <img src={this.props.img} alt="" />
            </div>
        )
    }
}

export default Single;

// complete
