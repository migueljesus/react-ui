import React, { Component, PropTypes } from 'react';

const propTypes = {
	id: PropTypes.string,
	className: PropTypes.string,
	text: PropTypes.string,
	record: PropTypes.object
};

const defaultProps = {
	id: '',
	className: 'btn btn-default',
	text: 'Default Button',
	record: {}
};

export class Button extends Component
{
	constructor(props) {
		super(props);

		this.state = {}
	}
	onClick(event) {
		if (typeof this.props.onClick === 'function'){
			this.props.onClick(this.props.record);
		}
	}
	render()
	{
		return (<button className={this.props.className}  id={this.props.id} onClick={this.onClick.bind(this)}>{this.props.text}</button>);
	}
}


Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
