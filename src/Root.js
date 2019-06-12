import React, { Component } from 'react'
import Article from './Components/Article';
import Header from './Components/Header';
import Footer from './Components/Footer';

export default class Root extends Component {
    render() {
        return (
            <div>
            <Header />
            <Article />
            <Article />
            <Article />
            <Article />
            <Footer />
            </div>
        )
    }
}
