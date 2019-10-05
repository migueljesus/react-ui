import React, { Component , PropTypes} from 'react';

const propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  orientationText: PropTypes.string,
  visibleText: PropTypes.bool
}

const defaultProps = {
  id: "",
  text: "",
  name: "",
  value: "",
  checked: false,
  orientationText: 'left',//up,down,left,right
  visibleText: true
}

export class CheckOption extends Component
{
    constructor(props) {
      super(props);
      this.state = {
        id: props.id ? props.id : '',
        text: props.text ? props.text : '',
        name: props.name ? props.name : '',
        value: props.value ? props.value : '',
        checked: props.checked,
        orientationText: props.orientationText ? props.orientationText : 'left',//up,down,left,right
        visibleText: props.visibleText
      }
    }
    componentWillReceiveProps(props){
      this.setState ({
        id: props.id ? props.id : '',
        text: props.text ? props.text : '',
        name: props.name ? props.name : '',
        value: props.value ? props.value : '',
        checked: props.checked,
        orientationText: props.orientationText ? props.orientationText : 'left',//up,down,left,right
        visibleText: props.visibleText
      });
    }
    onChange() {

      if (typeof this.props.onChange === 'function') {
        let stateUpdate = {
          id: this.state.id,
          text: this.state.text,
          name: this.state.name ,
          value: this.state.value ,
          checked: !this.state.checked,
          orientationText: this.state.orientationText,//up,down,left,right
          visibleText: this.state.visibleText
        }
        this.props.onChange(stateUpdate);
      }
      this.setState({checked: !this.state.checked});
    }
    showOrientationTextLeft() {
      return(
        <div className="hbox">
          <div className="form-field-label hbox-l">
            <label>{this.state.text}</label>
          </div>
          <div className="form-field-value hbox-r">
            <input
              id={this.state.id}
              onChange={this.onChange.bind(this)}
              type="checkbox"
              name={this.state.name}
              value={this.state.value}
              checked={this.state.checked}
            />
          </div>
        </div>
      );
    }
    showOrientationTextRight() {
      return (
              <div className="hbox">
                  <div className="form-field-value hbox-l">
                    <input
                      id={this.state.id}
                      onChange={this.onChange.bind(this)}
                      type="checkbox"
                      name={this.state.name}
                      value={this.state.value}
                      checked={this.state.checked}
                      />
                  </div>
                  <div className="form-field-label hbox-r">
                    <label>{this.state.text}</label>
                  </div>
                </div>
              );
    }
    showOrientationTextUp() {
      return (
              <div className="vbox">
                  <div className="form-field-value">
                    <input
                      id={this.state.id}
                      onChange={this.onChange.bind(this)}
                      type="checkbox"
                      name={this.state.name}
                      value={this.state.value}
                      checked={this.state.checked}
                      />
                  </div>
                  <div className="form-field-label">
                    <label>{this.state.text}</label>
                  </div>
                </div>
              );
    }
    showOrientationTextDown() {
      return (
              <div className="vbox">
                  <div className="form-field-label">
                    <label>{this.state.text}</label>
                  </div>
                  <div className="form-field-value">
                    <input
                      id={this.state.id}
                      onChange={this.onChange.bind(this)}
                      type="checkbox"
                      name={this.state.name}
                      value={this.state.value}
                      checked={this.state.checked}
                      />
                  </div>
                </div>
              );
    }
    showText() {
      let orientation = this.state.orientationText;
      //up,down,left,right
      if (orientation === "up") {
        return this.showOrientationTextUp();
      }
      if (orientation === "down") {
        return this.showOrientationTextDown();
      }
      if (orientation === "left") {
        return this.showOrientationTextLeft();
      }

      if (orientation === "right") {
        return this.showOrientationTextRight();
      }
    }
    hiddenText() {
      return(
        <div className="hbox">
          <div className="form-field-value hbox-l">
            <input
              id={this.state.id}
              onChange={this.onChange.bind(this)}
              type="checkbox"
              name={this.state.name}
              value={this.state.value}
              checked={this.state.checked}
            />
          </div>
        </div>
      );
    }
    createCheckBox() {
      let visibleText = this.state.visibleText;

      if (visibleText) {
        return this.showText();
      } else {
        return this.hiddenText();
      }

    }
    render()
    {
      return (
        <div className="hbox">
          {
            this.createCheckBox()
          }
        </div>
      );
    }
}

CheckOption.propTypes = propTypes;
CheckOption.defaultProps = defaultProps;
