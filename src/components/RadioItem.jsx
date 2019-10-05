import React, {Component, PropTypes} from 'react';

const propTypes = {
	record: PropTypes.object
}

const defaultProps = {
	record: {}
}

export class RadioItem extends Component{

	constructor(props) {
		super(props);// or super()
		this.state = {
			id: props.record.id ? props.record.id : -1,
			text: props.record.text ? props.record.text : '',
			checked: props.checked ? props.checked : '',
			value: props.record.value ? props.record.value : '',
			name: props.record.name ? props.record.name : ''
		}
	}

	//Before rendering (no DOM yet)
	componentWillMount() {

	}

	//After rendering
	componentDidMount() {

	}
	onClickItem(event){
		if (typeof this.props.onClickItem === 'function') {
			this.props.onClickItem(this.props.record);
		}
	}
	render() {
		return (
				<label className={this.state.className}>
					<input
							type="radio"
							name={this.state.name}
							value={this.state.value}
							onChange={this.onClickItem.bind(this)}
							defaultChecked={this.state.checked != '' ? 'checked' : ''}/>
						{this.state.text}
				</label>
		);
	}
}

RadioItem.propTypes = propTypes;
RadioItem.defaultProps = defaultProps;
