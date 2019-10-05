import React, { Component } from 'react';
import { Container } from '../Container.jsx';

export class Fieldset extends Container
{
    constructor(props)
    {
        super(props);
    }
}

Fieldset.defaultProps = {
    type: 'fieldset'
};
