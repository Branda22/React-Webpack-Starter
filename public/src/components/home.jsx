import React from 'react';
import NameList from '../container/nameslist.jsx';

class Home extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <div>
			<div className="row">
				<div className="col-6">
					<div className="alert">This is an alert.</div>
				</div>
				<div className="col-6">
					<div className="alert">This is an alert.</div>
				</div>
			</div>
		</div>
	}
}

export default Home;