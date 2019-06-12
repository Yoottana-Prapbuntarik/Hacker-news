import React, { Component } from 'react'
import TextDetail from './TextDetail';
import Comment from './Comment';
import DateTime from './DateTime';
import ButtonClick from './ButtonClick';

class ArticleDetail extends Component {
    render() {
        return (
            <div className="container text-center my-5">
                <div className="row">
                    <div className="col-12">
                        <TextDetail />
                    </div>
                    <div className="col-12">
                        <Comment />
                    </div>
                    <div className="col-12">
                        <DateTime />
                    </div>
                    <div className="col-12" style={{ marginTop: '49%' }}>
                        <ButtonClick className="w-100" hrefLink="/" linkName="Back to Article" />
                    </div>
                </div>

            </div>
        )
    }
}

export default ArticleDetail
