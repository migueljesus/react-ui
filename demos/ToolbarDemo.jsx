import React, { Component } from 'react';
import { Toolbar } from '../src/components/Toolbar.jsx';

export class ToolbarDemo extends Component
{
    getSimpleToolbar()
    {
        let items = [{
            text: 'Button 1'
        },
        {
            text: 'Button 2'
        }];

        return <Toolbar items={items} />;
    }
    getGroupsToolbar()
    {
        let items = [{
            type: 'group',
            className: 'hbox-l',
            items: [{
                text: 'Button L'
            }]
        },
        {
            type: 'group',
            className: 'hbox-r',
            items: [{
                text: 'Button R'
            }]
        }];

        return <Toolbar className="hbox" items={items} />;
    }
    render()
    {
        return (
            <div >
                {this.getSimpleToolbar()}
                {this.getGroupsToolbar()}
            </div>
        );
    }
}
