import React, { Component } from 'react';
import DetailTitle from './DetailTitle';
import DateTime from './DateTime';
import ButtonClick from './ButtonClick';
import Score from './Score'
import axios from 'axios';
import Credit from './Credit';
class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataAcrticle: []
        }
    }
    componentDidMount() {
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${this.props.ArticleID}.json?print=pretty`)
            .then(response => {
                this.setState({
                    dataAcrticle: response.data
                })
            })
    }
    render() {
        let { dataAcrticle } = this.state;
        return (
            <div>
                <div className="container" style={{ width: '100%', marginTop: '100px', background: '#f5f6f8', borderRadius: '10px' }}>
                    <div className="col-12 py-3">
                        <div className="text-center">
                            <Credit credit={dataAcrticle.by}/>
                        </div>
                        <div className="text-right">
                            <Score score={dataAcrticle.score} />
                        </div>
                        <DetailTitle detail={dataAcrticle.title} />
                        <hr />
                        <div className="text-right">
                            <DateTime date={dataAcrticle.time} />
                        </div>
                        <ButtonClick hrefLink="ArticleDetail" linkName="Read more" />

                    </div>
                </div>
            </div>
        )
    }
}

export default Article
