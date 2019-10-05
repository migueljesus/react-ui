import React, { Component } from 'react';
import { FormField } from './FormField.jsx';

export class CheckBox extends FormField
{
    constructor(props)
    {
        super(props);
    }
    getDOMValue(input)
    {
        return input.checked;
    }
    createInput(type, align)
    {
        let classes = [];

        return (
          <input
            className={classes.join(' ')}
            onChange={this.onChange}
            id={this.props.id}
            type={this.props.type}
            maxLength={this.props.maxLength}
            name={this.props.name}
            checked={this.state.value}
            onBlur={this.onBlur}
            readOnly={this.props.readOnly}
            disabled={this.props.disabled}/>);
    }
}

CheckBox.defaultProps = {
    type: 'checkbox'
};
