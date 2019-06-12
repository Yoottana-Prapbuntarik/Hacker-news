import React, { Component } from 'react';
import DetailTitle from './DetailTitle';
import DateTime from './DateTime';
import ButtonClick from './ButtonClick';
import Score from './Score'
class Article extends Component {
    render() {
        return (
            <div>
                <div className="container" style={{ width: '100%',marginTop:'100px', background: '#f5f6f8', borderRadius: '10px' }}>
                    <div className="col-12 py-3">
                        <div className="text-right">
                        <Score/>
                        </div>
                        <DetailTitle/>
                        <hr />
                        <div className="text-right">
                        <DateTime/>
                        </div>
                        <ButtonClick hrefLink="ArticleDetail" linkName="Read more"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Article
