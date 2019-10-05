import React, { Component, PropTypes} from 'react';

const propTypes = {
	id: PropTypes.string,
	className: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string
}

const defaultProps = {
	id: '',
	className: 'form-control',
	type: 'text',
	placeholder: ''
}

export class Input extends Component {
	constructor(props){
		super(props);// or super()

		this.state = {
			value: props.value
		}
	}
	componentWillReceiveProps(props){
    this.setState({
      value: props.value
    });
  }
	onChange(event){
		if (typeof this.props.onChange === 'function') {
			this.props.onChange(event.target.value);
		}
		this.setState({
			value: event.target.value
		});
	}

  setValue(value)
	{
     this.setState({value: value});
	}

	getValue(){
		return this.state.value;
	}

	render(){
		return(<input 	id={this.props.id}
						value={this.state.value ? this.state.value : this.props.value}
						onChange={this.onChange.bind(this)}
						type={this.props.type}
						maxLength={this.props.maxLength}
						className={this.props.className}
						placeholder={this.props.placeholder}
						autoFocus={this.props.autoFocus} />);
	}
}


Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
