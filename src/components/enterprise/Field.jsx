import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Field extends Component
{
    constructor(props)
    {
        super(props);

        this.baseClass = "field";

        let value = this.processValue(props.value != null ? props.value : '');


        this.state = {
            value: value,
            initialValue: value,
            isDirty: false
        };

        this.getValue = this.getValue.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.isDirty = this.isDirty.bind(this);
    }

    componentWillReceiveProps(props)
    {
        let value = this.processValue(props.value ? props.value : '');

        this.setState({
            value: value,
            initialValue: value,
            isDirty: false
        });
    }

    processValue(value)
    {
        return value;
    }

    onFocus(event)
    {

    }

    onBlur(event)
    {

    }

    addClass(className)
    {
        let node = ReactDOM.findDOMNode(this);

        if(!node.classList.contains(className))
            node.classList.add(className);
    }

    removeClass(className)
    {
        let node = ReactDOM.findDOMNode(this);
        node.classList.remove(className);
    }

    getInput(node)
    {
        return node.querySelector("input");
    }

    getDOMValue(input)
    {
        return input.value;
    }

    setDOMValue(value)
    {
        this.setState({
            value: value,
            isDirty: this.checkDirty(value)
        });
    }

    checkDirty(value)
    {
        let initialValue = this.state.initialValue;
        let newValue = value;

        return (initialValue != newValue);
    }

    getValue()
    {
        return this.getDOMValue(this.getInput(ReactDOM.findDOMNode(this)));
    }

    setValue(value)
    {
        this.setDOMValue(value);
    }

    getDirty()
    {
        return this.state.isDirty;
    }

    isDirty()
    {
        return this.state.isDirty;
    }

    onChange(event) {
        let value = this.getDOMValue(event.target);

        this.setDOMValue(value);

        if(this.props.onChange)
            this.props.onChange(value);
    }
    onKeyPress(event)
    {
        if(this.props.onKeyPress)
            this.props.onKeyPress(event);
    }

    onMouseDown(event)
    {    
        if(this.props.onMouseDown)
            this.props.onMouseDown(event);
    }

    /**
      * @description: This method should implemented on each subclass
      * @return: boolean
      */
    isNonEmpty(value)
    {
        return value != null && value.toString().trim() != '';
    }
    isValid(value)
    {
        value = arguments.length > 0 ? value : this.state.value;
        let isValid = true;

        // TODO: Refactor this code to make it more flexible for validating non required fields
        if(this.props.required === true)
            isValid = this.isNonEmpty(value) && this.checkValue(value);
        else
            if(this.isNonEmpty(value))
                isValid = this.checkValue(value);

        return isValid;
    }
    checkValue()
    {
        // Override in subclasses if it's necessary
        return true;
    }
    createInput(type, align)
    {
        let classes = [];
        
        return (
          <input
            className={classes.join(' ')}
            onChange={this.onChange.bind(this)}
            id={this.props.id}
            type={this.props.type}
            name={this.props.name}
            value={this.state.value}
            onBlur={this.onBlur}
            onKeyPress={this.onKeyPress}
            onFocus={this.onFocus}
            onMouseDown={this.onMouseDown}
            placeholder={this.props.placeholder}
            data-mask={this.props.mask}
            maxLength={this.props.maxLength}
            readOnly={this.props.readOnly}
            disabled={this.props.disabled}
            max={this.props.maxDate}
            min={this.props.minDate}
            autoFocus= {this.props.autoFocus} />);
    }

    render()
    {
        let classes = [this.baseClass];
        let { align, required } = this.props;

        if(align && align.length > 0)
            classes.push(this.baseClass + '-' + align);

        if(required === true)
            classes.push(this.baseClass + '-required');

        if(!this.isValid())
            classes.push(this.baseClass + '-invalid');

        return <div className={classes.join(' ')} style={this.props.style}>{this.createInput(this.props.type)}</div>;
    }
}
