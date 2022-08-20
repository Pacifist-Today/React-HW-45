import React from "react";

class Card extends React.Component {
    render() {
        return(
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{this.props.title || null}</h4>
                    <p className="card-text">{this.props.text || null}</p>
                </div>
            </div>
        )
    }
}

export default Card