import React, { Component } from 'react';
import './css/styles.css';
import root from './Root';
import Error from './Error';
import CommentArticle from './Components/CommentArticle';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {

	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Switch>
							<Route exact path="/" component={root} />
							<Route path="/CommentArticle/:id" component={CommentArticle} />
							<Route component={Error} />
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		);
	}

}


export default App;
