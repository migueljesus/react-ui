import React, { Component } from 'react';
import { DialogPanel } from './DialogPanel.jsx';
import { Button } from './Button.jsx';

export class DialogComponent extends Component
{
    static get defaultProps(){
        return {
            modal: false
        };
    }
    constructor(props)
    {
        super(props);

        this.state = {
            opened: props.opened || false
        };

        this.onHide = this.onHide.bind(this);
        this.onClose = this.onClose.bind(this);
    }
    onHide(event)
    {
        // Close the modal only if the click was directly on the overlay
        if(!this.props.modal && event.target.classList.contains('overlay'))
            this.close();

        if(this.props.onHide)
            this.props.onHide(event);
    }
    onClose(event)
    {
        this.setState({opened: false});

        if(this.props.onClose)
            this.props.onClose(event);
    }
    open()
    {
        this.setState({opened: true});
    }
    close(event)
    {
        this.onClose(event);
    }
    getFooter()
    {
        let footer = null;

        function createButton(item)
        {
            if(item.key == 'close')
                return (<Button id={"dialog-" + item.key} key={item.key} text={item.text} onClick={this.close.bind(this)} />);
            else
                return (<Button id={"dialog-" + item.key} key={item.key} text={item.text} onClick={item.handler} />);
        }

        let buttons = [];

        if(this.props.bbar){
            buttons = this.props.bbar.map(createButton.bind(this));
            footer = <div className="dialog-footer align-right">{buttons}</div>;
        }

        return footer;
    }
    render()
    {
        let display = this.state.opened ? '' : 'none';

        return (
            <div className="overlay" onClick={this.onHide} style={{display: display}}>
                {
                    this.state.opened ?
                        <DialogPanel id={this.props.id} title={this.props.title} footer={this.getFooter()} className={this.props.className} style={{display: display}}>
                            {this.props.children}
                        </DialogPanel>
                        : null
                }
            </div>
        );
    }
}
