import React, {Component , PropTypes} from 'react';
import {Select} from './Select.jsx';

const propTypes = {
	className: PropTypes.string,
	selectItems: PropTypes.array,
  title: PropTypes.string,
  inline: PropTypes.bool,
	value: PropTypes.string,
	defaultSelected: PropTypes.bool
}

const defaultProps = {
	className: 'form-control',
	selectItems: [],
  title: '',
  inline: false,
	value: "",
	defaultSelected: false
}

export class FormSelect extends Component {
  constructor(props){
    super(props);
		this.state = {
			className: props.className,
			selectItems: props.selectItems,
		  title: props.title,
		  inline: props.inline,
			value: props.value,
			defaultSelected: props.defaultSelected
		}
  }
	componentWillReceiveProps(props){
		this.setState({
			className: props.className,
			selectItems: props.selectItems,
		  title: props.title,
		  inline: props.inline,
			value: props.value,
			defaultSelected: props.defaultSelected
		});
	}
	onChange(value) {
		let self = this;

		this.setState({
			className: this.state.className,
			selectItems: this.state.selectItems,
		  	title: this.state.title,
		  	inline: this.state.inline,
			value: value,
			defaultSelected: this.state.defaultSelected
		},
		function()
		{
			if (typeof self.props.onChange === 'function') {
				self.props.onChange(value);
			}
		});



	}

	getValue()
	{
		return this.state.value;
	}

  render() {
    if (this.state.inline) {
      return (
              <div className="form-inline">
                <label>{this.state.title}</label>
                <Select value={this.state.value} defaultSelected={this.state.defaultSelected} onChange={this.onChange.bind(this)} className={this.state.className} selectItems={this.state.selectItems}/>
              </div>
            );
    } else {
      return (
						<div className="form-field hbox">
								<div className="form-field-label hbox-l">
                	<label>{this.state.title}</label>
								</div>
								<div className="form-field-value hbox-r">
                <Select value={this.state.value} defaultSelected={this.state.defaultSelected} onChange={this.onChange.bind(this)} className={this.state.className} selectItems={this.state.selectItems}/>
              </div>
						</div>
            );
    }
  }
}

FormSelect.propTypes = propTypes;
FormSelect.defaultProps = defaultProps;
