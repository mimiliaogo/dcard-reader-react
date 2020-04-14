import React from 'react'

import Board from 'components/Board.jsx'


import './Main.css'
export default class Main extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     titleArr: [],
        //     excerptArr: [],
        //     idArr: []
        // }

        // this.handleLoad = this.handleLoad.bind(this);
    }

    render() {
        return (
            <div className={`main`} >
                <Board />
            </div>
        );
    }

    

    
}