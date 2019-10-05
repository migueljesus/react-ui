import React, { Component } from 'react';
import { TextField } from './TextField.jsx';

export class EmailField extends TextField
{
    constructor(props){
        super(props);
    }
    checkValue(value)
    {
        let filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return filter.test(value);
    }
}
