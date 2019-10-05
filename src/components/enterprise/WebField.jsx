import React, { Component } from 'react';
import { TextField } from './TextField.jsx';

export class WebField extends TextField
{
    constructor(props){
        super(props);
    }
    checkValue(value)
    {
        let filter = /[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/;

        return filter.test(value);
    }
}
