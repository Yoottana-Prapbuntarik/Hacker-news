import React, { Component } from 'react';
import DetailTitle from './DetailTitle';
import DateTime from './DateTime';
import Score from './Score'
import axios from 'axios';
import Credit from './Credit';
import { Link } from 'react-router-dom';
class Article extends Component {

    constructor(props) {
        super(props);
        this.state = { dataAcrticle: [] }
    }
    componentDidMount() {
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${this.props.ArticleID}.json?print=pretty`)
            .then(response => {
                    this.setState({ dataAcrticle: response.data })
            })
    }

    render() {
        let { dataAcrticle } = this.state;
        return (
            <div>
                {console.log(dataAcrticle)}
                <div className="container" style={{ width: '100%', marginTop: '100px', background: '#f5f6f8', borderRadius: '10px' }}>
                    <div className="row">
                        <div className="col-12 py-3">
                            <div className="text-right">
                                <Score score={dataAcrticle.score} />
                            </div>
                            <div className="text-center">
                                <Credit credit={dataAcrticle.by} />
                            </div>
                            <br />
                            <div className="text-center my-3">
                                <DetailTitle detail={dataAcrticle.title} />
                                <hr />
                            </div>
                            <div className="text-right">
                                <DateTime date={dataAcrticle.time} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12  mb-5 text-center">
                            <Link className="btn btn-primary text-center w-50 " to={`CommentArticle/${dataAcrticle.id}`} >ความคิดเห็น</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Article;
