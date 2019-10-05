import React, { Component } from 'react';
import { Panel } from './Panel.jsx';

export class FormColumn extends Panel
{
    constructor(props)
    {
        super(props);
    }
}

FormColumn.defaultProps = {
    type: 'form-col'
};
