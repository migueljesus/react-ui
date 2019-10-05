import React, { Component } from 'react';
import { FormField } from './FormField.jsx';

export class DateField extends FormField
{
    constructor(props)
    {
        super(props);
    }
    /**
     * @description DateField should return a date object
     */
    getValue()
    {
        let value = super.getValue();

        // Date string must be in the format of YYYY/MM/dd
        return value != null ? new Date(value.replace(/\-/g, '/')) : null;
    }
}

DateField.defaultProps = {
    type: 'date'
};
