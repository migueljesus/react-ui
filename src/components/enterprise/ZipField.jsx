import React, {Component} from 'react';
import { TextField } from './TextField.jsx';

export class ZipField extends TextField {
    constructor(props){
        super(props);
    }
    getDOMValue(input)
    {
        let x = input.value.replace(/\D/g, '').match(/(\d{0,5})(\d{0,4})/);

        let value = (!x[2] ? x[1] : x[1] + '-' + x[2] + (x[3] ? '-' + x[3] : ''));

        return value;
    }
    checkValue(value)
    {
        return value != null && (value.length == 5 || value.length == 10);
    }
}
