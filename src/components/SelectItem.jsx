import React, {Component, PropTypes} from 'react';

const propTypes = {
	id: PropTypes.string,
	text: PropTypes.string
}

const defaultProps = {
	id: "",
	text: ""
}

export class SelectItem extends Component {
	constructor(props){
		super(props);// or super
		this.state = {
			id: props.id,
			value: props.value,
			text: props.text
		}
	}
	componentWillReceiveProps(props){
		this.setState({
			id: props.id,
			value: props.value,
			text: props.text
		})
	}

	render(){

			return(<option key={this.state.id} id={this.state.id} value={this.state.value}>{this.state.text}</option>);
	}
}

SelectItem.propTypes = propTypes;
SelectItem.defaultProps = defaultProps;
