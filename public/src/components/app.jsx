import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Link, useRouterHistory, IndexRoute } from 'react-router';
import { createHashHistory } from 'history'
import reducers from '../reducers';
import Home from './home.jsx';
import About from './about.jsx';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const createStoreWithMiddleware = applyMiddleware()(createStore);


class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <div>
			<div className="navbar">
				<a className="navbar-logo">ES6 DEMO</a>
				<span className="navbar-link"><Link to={'/'}>Home</Link></span>
				<span className="navbar-link"><Link to={'/about'}>About</Link></span>
			</div>
			{this.props.children}
		</div>
	}
}

const Routes = (
	<Router history={appHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="about" component={About}/>
		</Route>
	</Router>
)

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>{Routes}</Provider>, document.getElementById('app'));
