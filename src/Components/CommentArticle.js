import React, { Component } from 'react'
import CommentBy from './CommentBy';
import TextDetail from './TextDetail';
import { Link } from 'react-router-dom';
import axios from 'axios';
class CommentArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataArr: [],
            showData: []
        }
    }
    async componentDidMount() {
        let id = this.props.match.params.id;
        await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
            .then(res => {
                this.setState({
                    dataArr: res.data.kids
                })
            })
        await this.state.dataArr.map((obj) => {
            axios.get(`https://hacker-news.firebaseio.com/v0/item/${obj}.json?print=pretty`)
                .then(res => {
                    this.setState({
                        showData: this.state.showData.concat(res)
                    })
                })

        })

    }

    render() {


        let { showData } = this.state;
        return (
            <div>
                <div className="container text-center mt-5">
                    <h1>Comment</h1>
                    {
                        showData.map((obj, key) => {
                            console.log(obj)
                            return (
                                <div className="row " key={key}>
                                    <div className="col-12 my-5" style={{ background: '#f5f6f8', borderRadius: '10px' }}>
                                        <CommentBy By={obj.data.by} />
                                        <hr />
                                        <TextDetail Text={obj.data.text} />
                                    </div>
                                </div>
                            )
                        })
                    }
                    < Link className="btn btn-primary text-center  my-5" to="/" > Back to Article</Link>
                </div>


            </div>
        )
    }
}
export default CommentArticle;
