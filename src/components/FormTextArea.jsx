import React, {Component, PropTypes} from 'react';
import {TextArea} from './TextArea.jsx';

const propTypes = {
	id: PropTypes.string,
	className: PropTypes.string,
  title: PropTypes.string,
  inline: PropTypes.bool

}

const defaultProps = {
	id: "",
	className: "form-control",
  title: '',
  inline: false
}

export class FormTextArea extends Component {
	constructor(props){
		super(props);// or super()

		this.state = {
      value: props.value
    };
	}
	onChange(value){
		if (typeof this.props.onChange === 'function') {
			this.props.onChange(value);
		}
		this.setState({
			value: value
		});
	}
	render(){
    if (this.props.inline) {
      return (
              <div className="form-inline">
                <label>{this.props.title}</label>
                <TextArea
									id={this.props.id}
									value={this.state.value ? this.state.value : this.props.value}
									onChange={this.onChange.bind(this)}
									className={this.props.className}/>
							</div>
            );
    } else {
      return (
              <div>
								<div>
                	<label>{this.props.title}</label>
								</div>
								<div>
									<TextArea
										id={this.props.id}
										value={this.state.value ? this.state.value : this.props.value}
										onChange={this.onChange.bind(this)}
										className={this.props.className} />
								</div>
              </div>
            );
    }

	}
}

TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;
