import React, { Component } from 'react';
import { FormField } from './FormField.jsx';

export class NoteField extends FormField
{
    constructor(props)
    {
        super(props);
    }
    getInput(node)
    {
        return node.querySelector('textarea');
    }
    createInput()
    {
        return (<textarea rows={this.props.rows} cols={this.props.cols} id={this.props.id} name={this.props.name} value={this.state.value} onChange={this.onChange} readOnly={this.props.readOnly} disabled={this.props.disabled}/>);
    }
}

NoteField.defaultProps = {
    type: 'note'
};
