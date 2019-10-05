import React, { Component } from 'react';
import { FormField } from './FormField.jsx';

export class CompositeField extends FormField
{
    constructor(props)
    {
        super(props);
    }
    createInput(type)
    {
        return this.props.children;
    }
}

CompositeField.defaultProps = {
    type: 'composite'
};
