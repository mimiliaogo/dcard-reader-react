import React from 'react';
import './BoardCard.css'
export default class BoardCard extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
          
            <div className={`card`}>
            <h3>{this.props.title}</h3>
            <p>{this.props.excerpt}</p>
            </div>
        );
    }
}