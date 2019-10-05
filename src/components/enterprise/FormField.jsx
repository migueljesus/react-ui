import React, { Component } from 'react';
import { Field } from './Field.jsx';

/*
    @abstract
*/
export class FormField extends Field
{
    constructor(props)
    {
        super(props);

        this.baseClass = 'form-field';
    }

    getLabel()
    {
        return this.props.label || "";
    }

    render()
    {
        if(!this.props.plain)
        {
            let classes = [this.baseClass, "form-type-" + this.props.type, "hbox"];
            let { className, align, required} = this.props;

            if(className && className.length > 0)
                classes.push(className);

            if(align && align.length > 0)
                classes.push(this.baseClass + '-' + align);

            if(required === true)
                classes.push(this.baseClass + '-required');

            if(!this.isValid(this.state.value))
                classes.push(this.baseClass + '-' + 'invalid');

            return (<div className={classes.join(" ")}>
                    <div className="form-field-label hbox-l"><label>{this.props.label}:</label></div>
                    <div className="form-field-value hbox-r">{this.createInput(this.props.type)}</div>
                </div>);
        }
        else
            return super.render();
    }
}
