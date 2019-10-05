import React, { Component } from 'react';

export class ListItem extends Component
{
    constructor(props) {
      super(props);
    }
    onClick() {

      if (typeof this.props.onClick === 'function') {
        this.props.onClick(this.props);
      }
    }
    createItem() {
      return (
              <div className="vbox" onClick={this.onClick.bind(this)}>
                  <div className="form-field-label">
                    <label>{this.props.text}</label>
                  </div>
                </div>
              );
    }
    render()
    {
      return (
        <div className="hbox">
          {
            this.createItem()
          }
        </div>
      );
    }
}
