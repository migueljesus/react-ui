import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Popover extends Component
{
	static get defaultProps() {
		return {
			align: 'center'
		}
	}
	constructor(props)
	{
		super(props);

		this.state = {
			open: false
		};

		this.onMouseLeave = this.onMouseLeave.bind(this);
		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.onTriggerClick = this.onTriggerClick.bind(this);
	}
	onHide()
	{
		this.setState({open: false});
	}
	onMouseEnter()
	{
		this.setState({open: true});
	}
	onMouseLeave(event)
	{
		if(this.state.open)
		{
			// If the target is the trigger then check if the mouse is not hover the popup
			let dropdown = ReactDOM.findDOMNode(this);
			let popover = dropdown.querySelector(".popover");
			let triggerPosition = dropdown.getBoundingClientRect();
			let popoverPosition = popover.getBoundingClientRect();

			if(event.clientX < popoverPosition.left || event.clientX > popoverPosition.right || event.clientY < triggerPosition.top || event.clientY > popoverPosition.bottom)
				this.onHide();
		}
	}
	onTriggerClick()
	{
		this.setState({open: !this.state.open});
	}
	componentDidMount()
	{
		this.dimension = ReactDOM.findDOMNode(this).getBoundingClientRect();
	}
	renderPopover()
	{
		let self = this;
		let classes = ['popover', this.props.align].join(' ');

		let {top, left, width, height} = this.dimension;

		if(this.props.align == 'left')
			left = left;
		else
			if(this.props.align == 'center')
				left = left + (width / 2);
			else
				if(this.props.align == 'right')
					left = left + width;

		return (<div className={classes} style={{top: top + height, left: left}} onMouseOut={this.onMouseOut} onMouseLeave={this.onMouseLeave}>{this.props.children}</div>);
	}
	render()
	{
		var classes = ['dropdown', this.props.className].join(' ');

		return (<div id={this.props.id} className={classes} onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter} >
					<a href="javascript:void(0);" className="dropdown-trigger" onClick={this.onTriggerClick}>
						{this.props.text}
					</a>
					{ this.state.open ? this.renderPopover() :  null}
				</div>);
	}
}
