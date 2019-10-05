import React, {Component, PropTypes} from 'react';
import {Input} from './Input.jsx';

const propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  inline: PropTypes.bool,
  orientation: PropTypes.string,
  hidden: PropTypes.bool
};

const defaultProps = {
  id: '',
  className: 'form-control',
  type: 'text',
  inline: false,
  placeholder: '',
  orientation: 'left',
  hidden: false
}

export class FormInput extends Component{
  constructor(props) {
    super(props);// or super()

    this.state = {
      id: props.id,
      value: props.value

    };
  }
  componentWillReceiveProps(props){
    this.setState({
        id: props.id,
      value: props.value
    });
  }
  onChange(value){
    if (typeof this.props.onChange === 'function') {
			this.props.onChange(value);
		}
    this.setState({
      value: value
    });
  }
  onKeyPress(event)
  {
      let value = event.target.value;
      let self = this;

      this.setState({value: value}, function()
      {
          if(self.props.onKeyPress)
            self.props.onKeyPress(event);
      });
  }
  getInput()
  {
      return <Input id={this.state.id ? this.state.id : this.props.id}
                    value={this.state.value ? this.state.value : this.props.value}
                    type={this.props.type}
                    maxLength={this.props.maxLength}
                    onChange={this.onChange.bind(this)}
                    className={this.props.className}
                    placeholder={this.props.placeholder}
                    autoFocus={this.props.autoFocus}
                    onKeyPress={this.onKeyPress.bind(this)} />;
  }

  setValue(value)
  {
    this.setState({value: value});
  }

  getValue()
  {
    return this.state.value;
  }

  setId(id)
  {
      this.setState({id: id});
  }

  getId()
  {
    return this.state.id;
  }


  render()
  {
      if(this.props.hidden === false)
      {
          if (this.props.inline)
          {
              let label = <label>{this.props.title}</label>;
              let input = this.getInput();

              let left = (this.props.orientation == 'left' ? label: input);
              let right = (this.props.orientation == 'right' ? label : input);

              return <div className="form-inline">
                        {left}{right}
                     </div>;
          }
          else
          {
              return (
                    <div className="form-field hbox">
                      <div className="form-field-label hbox-l">
                        <label>{this.props.title}</label>
                      </div>
                      <div className="form-field-value hbox-r">
                        {this.getInput()}
                      </div>
                    </div>
                  );
         }
    }
    else {
      return (<div></div>);
    }
  }
}

FormInput.propTypes = propTypes;
FormInput.defaultProps = defaultProps;
