import React, { Component } from 'react'
import Article from './Components/Article';
import Header from './Components/Header';
import Footer from './Components/Footer';
import axios from 'axios';
class Root extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [] }
    }
    componentDidMount() {
        axios.get(`https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty`)
            .then(res => {
                    this.setState({ data: res.data })
            });
    }
    componentWillUnmount(){
        this._isTrue = false;
    }

    render() {
        let { data } = this.state;

        return (
            <div>
                <Header />
                {data.map((object, i) => {
                    return <Article key={i} ArticleID={object}/>
                })}

                <Footer />
            </div>
        )
    }
}
export default Root;
