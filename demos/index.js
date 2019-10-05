import React, { Component} from 'react';
import ReactDOM from 'react-dom';

import { CheckGridPanelDemo } from './CheckGridPanelDemo.jsx';
import { GridPanelDemo } from './GridPanelDemo.jsx';
import { FormDemo } from './FormDemo.jsx';
import { CheckListDemo } from './CheckListDemo.jsx';
import { ToolbarDemo } from './ToolbarDemo.jsx';
import { ListDemo } from './ListDemo.jsx';
import { FormDirtyTestDemo } from './FormDirtyTestDemo.jsx';
import '../styles/import.less';

var path = require("path");

console.log(path.resolve(__dirname, "styles"));

export class DemoPanel extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            option: 0
        };

        this.onClick = this.onClick.bind(this);
    }
    onClick(event)
    {
        this.setState({option: parseInt(event.target.dataset.id)});
    }
    getComponent(index)
    {
        let components = [<GridPanelDemo />, <FormDemo />, <CheckListDemo />, <ToolbarDemo />, <ListDemo />, <FormDirtyTestDemo />, <CheckGridPanelDemo />];

        return components[index];
    }
    getNavList()
    {
        let items = ['Grid Panel', 'Form', 'Check Option List', 'Toolbar', 'List', 'Form Dirty Test', 'Check Grid Test'];
        let self = this;

        let childs = items.map(function(item, index){
            return <li key={index} data-id={index} onClick={self.onClick}>{item}</li>
        });

        return <ul className="aside">{childs}</ul>;
    }
    render()
    {
        return (<div className="container hbox">
                    <nav className="aside">
                        {this.getNavList()}
                    </nav>
                    <div className="content center vbox">
                        {this.getComponent(this.state.option)}
                    </div>
                </div>);
    }
}

ReactDOM.render(<DemoPanel />, document.getElementById('container'));
