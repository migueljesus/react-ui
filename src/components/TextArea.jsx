import React, {Component, PropTypes} from 'react';

const propTypes = {
	className: PropTypes.string,
	value: PropTypes.string,
	id: PropTypes.string
}

const defaultProps = {
	className: "form-control",
	value: "",
	id: ""
}

export class TextArea extends Component {
	constructor(props){
		super(props);// or super()

		this.state = {
			value: props.value
		}
	}
	onChange(event){
		if (typeof this.props.onChange === 'function') {
			this.props.onChange(event.target.value);
		}
		this.setState({
			value: event.target.value
		});
	}
	render(){
		return(
					<textarea
						id={this.props.id}
						value={this.state.value ? this.state.value : this.props.value}
						onChange={this.onChange.bind(this)}
						className={this.props.className}>
					</textarea>);
	}
}

TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;
