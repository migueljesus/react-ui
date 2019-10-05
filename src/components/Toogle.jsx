import React, { Component } from 'react';

export class Toogle extends Component
{
    constructor(props)
    {
        super(props);
        this.state = this.empty();
        this.onClick = this.onClick.bind(this);
    }

    componentWillReceiveProps(props)
    {
        this.setState({checked: props.checked});
    }


    empty()
    {
        let state = {checked: this.props.checked || false};

        return state;
    }

    onClick()
    {
        let checkedValue = !this.state.checked;

        if(this.props.onClick)
            this.props.onClick(checkedValue);

        this.setState({checked: checkedValue});
    }

    getValue()
    {
        return this.state.checked;
    }

    setValue(value)
    {
      return this.setState({checked: value});
    }

    check()
    {
        this.setState({checked: true});
    }

    unCheck()
    {
        this.setState({checked: false});
    }

    render()
    {
        let id = "item"+(new Date()).getMilliseconds()+Math.floor(Math.random()*1000);

       return(
               <div style={{width: this.props.width || 60, height: this.props.height || 30}} onClick={this.onClick}>
                <input key={id} className="toggle toggle-round" type="checkbox" defaultChecked={this.state.checked ? 'checked' : ''} />
                <label></label>
              </div>
       );
    }
}
