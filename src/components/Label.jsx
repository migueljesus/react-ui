import React, { Component, PropTypes } from 'react';

const propTypes = {
	className: PropTypes.string,
	text: PropTypes.string
};

const defaultProps = {
	className: 'label label-default',
	text: 'Defaul Label'
};

export class Label extends Component {
	constructor(props) {
		super(props);

		this.state = {}
	}

	render() {
		return (
			<span className={this.props.className}> {this.props.text} </span>
		);
	}
}

Label.propTypes =  propTypes;
Label.defaultProps = defaultProps;