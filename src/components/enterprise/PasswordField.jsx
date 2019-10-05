import React, { Component } from 'react';
import { TextField } from './TextField.jsx';

export class PasswordField extends TextField
{
    constructor(props)
    {
        super(props);
    }
}

PasswordField.defaultProps = {
    type: 'password'
};
