import React from 'react';
import BoardCard from 'components/BoardCard.jsx'
import {getDcardPostList} from 'api/dcard-post.js'


  
import './Board.css'
export default class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            titleArr: [],
            excerptArr: [],
            idArr: [],
            isLoadMore: false,
            lastPostId: 0
        }

        this.handleLoad = this.handleLoad.bind(this);
    }

    render() {

        const BoardCardArr = [];
        for (let i=0; i<this.state.titleArr.length; i++) {
            const el =  <BoardCard key={this.state.idArr[i]} title={this.state.titleArr[i]} excerpt={this.state.excerptArr[i]}/> ;
            BoardCardArr.push(el);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        }
        return (
            
            <div className={`board`} onScroll={this.handleLoad} >                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                
                {BoardCardArr}
            </div>   
          
        );
    }

    componentDidMount() {
        this.getDcardPostList();
    }
    
    handleLoad(e) {

        if (this.state.isLoadMore) return;
        
        let element = e.target;
        // console.log(element.scrollHeight - element.scrollTop);
        // console.log(element.clientHeight - 1);
        // console.log(element.scrollTop);
        if (element.scrollHeight - element.scrollTop - element.clientHeight <= 1) {
            console.log("Loading more");
            this.setState ({
                isLoadMore: true
            });
            this.getDcardPostList();
            
        }
        
    }
    
    getDcardPostList() {
        // data from api is res.data 
        // data is an array
        getDcardPostList(this.state.lastPostId).then(data => {
            let title_tmp = data.map(v => {
                return v.title;
            })
            let excerpt_tmp = data.map(v => {
                return v.excerpt;
            })
            let id_tmp = data.map(v => {
                return v.id;
            })
            
            this.setState(prevState => ({
                titleArr: prevState.titleArr.concat(title_tmp),
                excerptArr: prevState.excerptArr.concat(excerpt_tmp),
                idArr: prevState.idArr.concat(id_tmp),
                isLoadMore: false,
                lastPostId: id_tmp[29]
            }));

            // console.log(this.state.titleArr.length);
            // console.log(this.state.lastPostId);
        });

        
    }
}