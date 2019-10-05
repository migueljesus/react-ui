import React, {Component, PropTypes } from 'react';
import {SelectItem} from './SelectItem.jsx';

const propTypes = {
	className: PropTypes.string,
	selectItems: PropTypes.array,
	value: PropTypes.string,
	defaultSelected: PropTypes.bool
};

const defaultProps = {
	className: "form-control",
	selectItems: [],
	value: "",
	defaultSelected: false
};


export class Select extends Component{
	constructor(props){
		super(props);// or super

		this.state = {
			value: props.value,
			defaultSelected: props.defaultSelected,
			selectItems: props.selectItems,
			className: props.className
		}
	}
	componentWillReceiveProps(props){
		this.setState({
			value: props.value,
			defaultSelected: props.defaultSelected,
			selectItems: props.selectItems,
			className: props.className
		});
	}
	onChange(event){
		if (typeof this.props.onChange === 'function') {
			this.props.onChange(event.target.value);
		}

		this.setState({
			value: event.target.value
		});
	}
	getValue()
	{
		return this.state.value;
	}
	createSelectItem() {
		let objectSelectItem = [];
		let propsSelectItems = this.state.selectItems;
		if (this.state.defaultSelected === false) {
			objectSelectItem.push(
														<SelectItem
																key={""}
																id={""}
																text={""}
																value={""}
														/>
												);
		}

		for (let i=0; i < propsSelectItems.length ; i ++){

				objectSelectItem.push(
															<SelectItem
																key={propsSelectItems[i].id}
																id={propsSelectItems[i].id}
																text={propsSelectItems[i].text}
																value={propsSelectItems[i].value}
																/>
														);
		}
		return objectSelectItem;
	}
	render(){
		let objectSelectItem = this.createSelectItem();

		return (
				<select value={this.state.value} onChange={this.onChange.bind(this)} className={this.state.className}>
					{
						objectSelectItem.map(function(selectItem, index){
							return (selectItem)
						})
					}
				</select>
			);
	}
}


Select.propTypes = propTypes;
Select.defaultProps = defaultProps;
