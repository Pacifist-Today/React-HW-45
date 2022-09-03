import React from 'react';

class Card extends React.Component {
    render() {
        return(
            <div className="card">
                <div className="card-body">
                    {this.props.title ? <h4 className="card-title">{this.props.title || null}</h4> : null}
                    {this.props.text ? <p className="card-text">{this.props.text || null}</p> : null}
                </div>
            </div>
        )
    }
}

export default Card;