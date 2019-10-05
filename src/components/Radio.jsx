import React, { Component, PropTypes } from 'react';
import {RadioItem} from './RadioItem.jsx';


const propTypes = {
	className: PropTypes.string,
	radioItems: PropTypes.array,
	checked: PropTypes.string
};

const defaultProps = {
	className: 'radio-inline',
	radioItems: [],
	checked: ''
};

export class Radio extends Component
{
	constructor(props) {
		super(props);// or super()

		this.radioSelectItemValue = "";

		this.state = {
			radioItems: props.radioItems,
			checked: props.checked,
			value: ""
		}
	}
	getSelectValue()
	{
		return (this.state.value == "" ? this.radioSelectItemValue : this.state.value);
	}
	onClickItem(radioItem)
	{
		this.setState({value: radioItem.value}, function(){
			if(this.props.onClickItem)
				this.props.onClickItem(radioItem);
		});

	}
	objectRadioItem(){
		let objectRadioItem = [];
		let radioItems = this.state.radioItems;

		for (let i=0; i < radioItems.length ; i ++){
			if (this.state.checked === radioItems[i].value) {

				this.radioSelectItemValue = radioItems[i].value;

				 objectRadioItem.push(
					 <RadioItem
						 checked={this.state.checked}
						 onClickItem={this.onClickItem.bind(this)}
						 key={radioItems[i].value}
						 record={radioItems[i]}
						/>
				);
			} else {
				objectRadioItem.push(<RadioItem
															onClickItem={this.onClickItem.bind(this)}
															key={radioItems[i].value}
															record={radioItems[i]}
															/>
													);
			}
		}

		return objectRadioItem;
	}
	render() {
		let self = this;
		let objectRadioItem = this.objectRadioItem();
		return (
				<div>
				{
					objectRadioItem.map(function(radioItem, index){
						return (radioItem)
					})
				}
				</div>
			);
	}
}

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;
