import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container } from './Container.jsx';
import { Panel } from './Panel.jsx';
import { DialogPanel } from './DialogPanel.jsx';
import { Button } from './Button.jsx';

export class Dialog
{
    constructor(properties)
    {
        Object.assign(this, properties);

        // Methods binding
        // this.close = this.close.bind(this);
    }
    open()
    {
        function createButton(item)
        {
            if(item.key == 'close')
                return (<Button id={"dialog-" + item.key} key={item.key} text={item.text} onClick={this.onClose.bind(this)} />);
            else
                return (<Button id={"dialog-" + item.key} key={item.key} text={item.text} onClick={item.handler} />);
        }


        var buttons = [];

        if(this.bbar){
            buttons = this.bbar.map(createButton.bind(this));
            this.footer = <Container className="dialog-footer align-right">{buttons}</Container>;
        }

        this.renderDialog(<DialogPanel width={this.width ? this.width : 660 } id={this.id} title={this.title} footer={this.footer} className={this.className}>{this.body}</DialogPanel>);
    }
    renderDialog(dialog)
    {
        // Create container
        this.container = document.createElement("div");
        this.container.className = "overlay";

        // Append childs
        document.body.appendChild(this.container);
        this.internalDialog = ReactDOM.render(dialog, this.container);
        //renderSubtreeIntoContainer(this, dialog, this.container);

        this.dialogNode = ReactDOM.findDOMNode(this.internalDialog);

        // Add listeners
        this.container.onclick = this.onHide.bind(this);
    }
    onHide(e)
    {
        // Need to check by the target because of the native events execution
        if(e.target === this.container){
            // this.close(e);
        }
    }
    onClose(e)
    {
        console.log(e.target);
        // this.close(e);
    }
    close()
    {
        // console.log(e.target)
        ReactDOM.unmountComponentAtNode(this.container);
        document.body.removeChild(this.container);
    }
}
