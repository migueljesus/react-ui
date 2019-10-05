import React, { Component } from 'react';
import { Panel } from './Panel.jsx';
import { Field } from './enterprise/Field.jsx';
import { FormField } from './enterprise/FormField.jsx';

export class FormPanel extends Panel
{
    constructor(props)
    {
        super(props);

        this.bodyCls = 'x-form-body vbox';

        this.isValid = this.isValid.bind(this);
        this.isDirty = this.isDirty.bind(this);
    }

    isValid(refs)
    {
        let fields = this.getFields();

        for (let i = 0; i < fields.length; i++) {
            if(fields[i].ref != null)
            {
                let component = refs[fields[i].ref];

                if(this.props.debug)
                    console.log(fields[i].ref + ': ' + component.isValid());

                if(!component.isValid())
                    return false;
            }
        }

        return true;
    }

    isDirty(refs)
    {
        let fields = this.getFields();

        for (let i = 0; i < fields.length; i++) {
            if(fields[i].ref != null)
            {
                let component = refs[fields[i].ref];

                if(this.props.debug)
                    console.log(fields[i].ref + ': ' + component.isDirty());

                if(component.isDirty())
                    return true;
            }
        }

        return false;
    }

    getFields()
    {
        var types = ['text', 'checkbox', 'note', 'dropdown', 'display'];

        return this.getComponents(this);
    }

    getComponents(component)
    {
        let components = [];

        if(component.type != null && component.type.prototype instanceof Field)
            return component;
        else
            if(component.props != null && component.props.children)
            {
                let children = component.props.children;

                if(component.props.children.map)
                {
                    let self = this;

                    children.map(function(item){
                        if(item != null)
                            components = components.concat(self.getComponents(item));
                    });

                    return components;
               }
               else
                   return this.getComponents(children);
            }
            else
                return components;
    }
}

FormPanel.defaultProps = {
    type: 'form-panel',
    debug: false
};
