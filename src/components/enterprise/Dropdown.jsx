import React, { Component } from 'react';
import { FormField } from './FormField.jsx';

export class Dropdown extends FormField
{
    constructor(props)
    {
        super(props);

        this.state = {
            value: props.value || '',
            items: props.items || [],
            initialValue: props.value,
            isDirty: false
        };

        this.getItems = this.getItems.bind(this);
    }

    setProperties(value, items)
    {
        this.setState({
            value: value,
            items: items
        });
    }

    getProperties()
    {
        let properties = {
            value: this.state.value,
            items: this.state.items
        };

        return properties;
    }

    setValue(value)
    {
        this.setDOMValue(value);
    }

    getValue()
    {
        let value = this.state.value;

        return value;
    }

    setItems(items)
    {
        this.setState({items: items});
    }

    getItems()
    {
        let options = this.state.items;

        return options;
    }

    componentWillReceiveProps(nextProps)
    {
        this.setState({
            value: nextProps.value || '',
            items: nextProps.items || [],
            initialValue: nextProps.value,
            isDirty: false
        });
    }

    createOption(item, index)
    {
        return (<option key={index} value={item.value}>{item.text}</option>);
    }

    getInput(node)
    {
        return node.querySelector('select');
    }

    createInput()
    {
        let options = this.state.items.map(this.createOption.bind(this));

        if(this.props.emptyOption)
            options.unshift(this.createOption({value: '', text: ''}, options.length));

        return (<select
                    id={this.props.id}
                    name={this.props.name}
                    value={this.state.value}
                    onChange={this.onChange}
                    readOnly={this.props.readOnly}
                    disabled={this.props.disabled}>
                    {options}
                </select>);
    }
}

Dropdown.defaultProps = {
    type: 'dropdown'
};
