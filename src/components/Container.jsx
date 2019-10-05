import React, { Component } from 'react';

export class Container extends Component
{
    constructor(props)
    {
        super(props);

        this.classes = [];

        this.initComponent();
    }
    initComponent()
    {
        // By default add a class to all components based on their type
        this.classes.unshift('x-' + this.props.type);
        this.classes.push(this.props.className);
        this.className = (this.classes || []).join(' ');
    }
    render()
    {
        return (<div className={this.className} style={this.props.style}>{this.props.children}</div>);
    }
}

Container.defaultProps = {
    type: 'container'
};
