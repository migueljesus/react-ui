import React, { Component } from 'react';
import { Container } from './Container.jsx';

export class TabPanel extends Container
{
    constructor(props)
    {
        super(props);

        this.state = {
            selected: 0
        };
    }
    renderHeader()
    {
        var headers = [];

        function createTabStrip(item, index)
        {
            var active = this.state.selected == index;

            if(item.props && item.props.title && item.props.displayTitle)
                item.props.displayTitle = false;

            return (<li key={index} className={active ? "x-active": null}><a href="#" onClick={this.handleOnClick.bind(this, index)}>{item.props.title}</a></li>);
        }

        return (<ul className="x-tab-stripe">{this.props.children.map(createTabStrip.bind(this))}</ul>);
    }
    renderActiveTab()
    {
        return (<div className="x-tab">{this.props.children[this.state.selected]}</div>);
    }
    handleOnClick(index, event)
    {
        event.preventDefault();

        this.setState({selected: index});
    }
    render()
    {
        return (
            <div className="x-tab-panel">
                {this.renderHeader()}
                {this.renderActiveTab()}
            </div>
        );
    }
}
