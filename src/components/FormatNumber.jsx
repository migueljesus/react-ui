import React , { Component, PropTypes } from 'react';

const propTypes = {
  value: PropTypes.number,
  prefix: PropTypes.string,
  separator: PropTypes.bool,
  suffix: PropTypes.string
}

const defaultProps = {
  value: 0,
  prefix: "",
  separator: true,
  suffix: ""
}

export class FormatNumber extends Component{
  constructor(props) {
    super(props);

    this.state = {
      value : props.value,
      prefix: props.prefix,
      separator: props.separator,
      suffix: props.suffix
    };
    this.setValue = this.setValue.bind(this);
  }
  componentWillReceiveProps(props){

    this.setState({
        value: this.getNumberFormat(props.value)
    });

  }
  componentWillMount() {
    this.setState({
      value : this.getNumberFormat(this.state.value)
    });
  }
  getNumberFormat(number) {
    let value = number+"";
    value = value.split('.');
    let formattedValue = "";

    if(value.length >= 2){
      let integerPart = value[0];
      let decimalPart = value[1];

      integerPart = this.formatInput(integerPart).formattedValue;
      formattedValue = integerPart +'.'+decimalPart;
      //add suffix
      formattedValue = formattedValue+" "+this.state.suffix;
    }

    if(value.length === 1){
      let integerPart = value[0];

      integerPart = this.formatInput(integerPart).formattedValue;
      formattedValue = integerPart;
      //add suffix
      formattedValue = formattedValue+" "+this.state.suffix;
    }

    return formattedValue;
  }
  setValue(value) {
    this.setState({
      value: this.getNumberFormat(value)
    });
  }
  getValue() {
    return this.state.value;
  }
  formatInput(val) {

    let num = (val+"").match(/\d/g).join("");
    let formattedValue = num;

    if(this.state.separator) formattedValue = formattedValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

    //add prefix
    formattedValue = this.state.prefix+""+formattedValue;


    return {
        value : formattedValue.match(/\d/g).join(""),
        formattedValue : formattedValue
    }
  }

  render() {
      return (<span>{this.state.value}</span>);
  }
}

FormatNumber.propTypes = propTypes;
FormatNumber.defaultProps = defaultProps;
