import React, { Component } from 'react';
import Header from './Components/Header';
import Article from './Components/Article';
import './css/styles.css';
import root from './Root';
import ArticleDetail from './Components/ArticleDetail';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
class App extends Component {
	render() {

		return (
			<div>
				<BrowserRouter>
					<div>
						<Switch>
							<Route exact path="/" component={root} />
							<Route path="/ArticleDetail" component={ArticleDetail} />

							<Route component={Error} />
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		);

	}

}


export default App;
