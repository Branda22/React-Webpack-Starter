import React from 'react';
import { connect } from 'react-redux';

class NameList extends React.Component {

	renderList() {
		return this.props.names.map((name) => {
			return <li key={name.name}>{name.name}</li>
		});
	}

	render() {
		return <ul>
			{this.renderList()}
		</ul>
	}
}

function mapStateToProps(state) {
	return {
		names: state.names
	};
}

export default connect(mapStateToProps)(NameList);

