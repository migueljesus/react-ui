import React, { Component } from 'react';
import { List } from './List.jsx';
import { Button } from './Button.jsx';
import { Input } from './Input.jsx';

export class Wizard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			totalTag: this.props.children.length,
			activeTag: 0
		}
	}
	previousStep(e){
		if (typeof this.props.previousStep === 'function') {
			if ((this.state.activeTag - 1) < 0){
				this.setStep(this.state.activeTag - 1);
				this.props.previousStep(e.target.value);
			}else{
				this.setStep(this.state.activeTag - 1);
			}
		}
	}
	nextStep(e)
	{
		if (typeof this.props.nextStep === 'function') {
			if ((this.state.activeTag + 1) === this.state.totalTag) {
				this.setStep(this.state.activeTag + 1);
				this.props.nextStep(e.target.value);
			} else {
				this.setStep(this.state.activeTag + 1);
			}

		}
	}
	setStep(index)
	{
		if(index >= 0 && index < this.state.totalTag)
		{
			this.setState({
				activeTag: index
			});
		}
	}
	renderStep()
	{
		return this.props.children[this.state.activeTag];
	}
	render() {
		return (
				<div className="panel panel-default">
					<div className="panel-body">
						{this.renderStep()}
						<ul className="nav nav-pills">
							<li className="pull-left" onClick={this.previousStep.bind(this)}>
								<Button text={this.state.activeTag == 0 ? "Cancel" : "Back"} />
							</li>
							<li className="pull-right" onClick={this.nextStep.bind(this)}>
								<Button text={(this.state.activeTag + 1) < this.state.totalTag ? "Next" : "Finish"}/>
							</li>
						</ul>
					</div>
				</div>
		);
	}
}
