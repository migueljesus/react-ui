import React, { Component } from 'react';
import { TextField } from './TextField.jsx';

export class NumberField extends TextField
{
    constructor(props)
    {
        super(props);


        this.allowNegative = this.props.minValue < 0 || !this.props.minValue;
        this.tabIndex = this.props.readOnly ? -1 : null;
        this.baseClass = 'form-field';
        this.getValue = this.getValue.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }


    processValue(value)
    {
        return this.formatValue(value);
    }
    
    checkDirty(value)
    {
        let initialValue = this.parseValue(this.state.initialValue);
        let currentValue = this.parseValue(value);

        return initialValue != currentValue;
    }

    getValue()
    {
        let value = this.parseValue(this.state.value);

        return value || value === 0 ? value : null;
    }

    getInt()
    {
        let value = this.getValue() || 0;

        return parseInt(value);
    }

    getFloat()
    {
        let value = this.getValue() || 0;
        return parseFloat(parseFloat(value).toFixed(this.props.decimals));
    }

    parseValue(value)
    {
        // TODO: Add international support
        let result = value != null && value.length > 0 ? value.toString().replace('$', '').replace(/\,/g, '') : '';

        return result;
    }

    setValue(value)
    {
        this.setDOMValue(this.formatValue(value));
    }

    formatValue(value)
    {
        value = value || value === 0 ? value : this.props.default;

        let isNumber = !isNaN(value = parseFloat(value));

        if(isNumber)
        {
            let config = {};

            if(this.props.currency)
            {
                config.style = 'currency';
                config.currency = this.props.currency;
            }

            config.minimumFractionDigits = this.props.decimals;
            config.maximumFractionDigits = this.props.decimals;

            return value.toLocaleString('en-US', config);
        }
        else
            return '';
    }

    onFocus(event)
    {
        this.setDOMValue(this.parseValue(this.state.value));
    }

    onBlur(event)
    {
        this.setDOMValue(this.formatValue(this.state.value));
    }

    onChange(event)
    {
        let value = event.target.value;

        if(value.indexOf('-') > 0)
            value = '-' + value.replace('-', '');

        this.setDOMValue(value);

        if(this.props.onChange != null)
            this.props.onChange(value);
    }
    onKeyPress(event)
    {
        let nativeEvent = event.nativeEvent;

        if(!(nativeEvent.keyCode >= 48 && nativeEvent.keyCode <= 57))
        {
            let value = event.target.value;

            if(!(event.key == '-' && this.allowNegative && value.indexOf('-') == -1))
            {
                if(!(event.key == '.' && this.props.decimals > 0 && value.length > 0 && value.indexOf('.') == -1))
                {
                    if(event.key != 'Enter')
                    {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                }
            }
        }
    }
    isValid(value)
    {
         value = this.parseValue(arguments.length > 0 ? value : this.state.value);

        return !this.props.required || (this.props.required === true && !isNaN(parseFloat(value)));
    }

    createInput(type, align)
    {
        let classes = [];

        return (
          <input type={this.props.type}
                 value={this.state.value}
                 name={this.props.name}
                 min={this.props.min}
                 maxLength={this.props.maxLength}
                 onChange={this.onChange}
                 onFocus={this.onFocus}
                 onBlur={this.onBlur}
                 onKeyPress={this.onKeyPress}
                 className={classes.join(' ')}
                 readOnly={this.props.readOnly}
                 disabled={this.props.disabled}
                 tabIndex={this.tabIndex}/>);
    }
}

NumberField.defaultProps = {
    type: 'text',
    align: 'right',
    minValue: null,
    allowNegative: true,
    decimals: 2,
    value: '',
    default: ''
};
