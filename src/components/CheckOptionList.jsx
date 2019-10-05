import React, { Component } from 'react';
import { CheckOption } from './CheckOption.jsx';
import { FormPanel } from './FormPanel.jsx';
import { Fieldset } from './enterprise/Fieldset.jsx';
import { FormColumn } from './FormColumn.jsx';

export class CheckOptionList extends Component
{
    constructor(props){
      super(props);
      this.state = {
        records: props.records
      }
    }
    componentWillReceiveProps(props){
      this.setState ({
        records: props.records
      });
    }
    onChange(record){
      if(typeof this.props.onChange === 'function') {

        this.props.onChange(record);
      }
    }
    onClick(record){
      this.setState({
        records: this.onRemoveRecord(record)
      });
    }
    onRemoveRecord(record) {
      let records = [];

      for(let recordOption of this.state.records) {
        if(recordOption.id != record.id ) {
          records.push(recordOption);
        }
      }
      if(typeof this.props.onRemoveRecord === 'function') {
        this.props.onRemoveRecord(records);
      }
      return records;
    }
    getCheckOption(){
      self = this;
      let checkOptionComponents = [];
      for(let record of this.state.records) {
        checkOptionComponents.push(
          <FormPanel key={'FormPanel-'+record.id} className="center" style={{"overflow": "auto"}}>
            <Fieldset className="hbox" style={{padding: '5px'}}>
              <FormColumn className="hbox-r" style={{flex: 1}}>
                <CheckOption
                  id={record.id}
                  key={record.key ? record.key : record.id}
                  name={record.name ? record.name : record.id}
                  value={record.value ? record.value : record.id}
                  checked={record.checked}
                  text= {record.text ? record.text : record.id}
                  orientationText = {record.orientationText ? record.orientationText : 'right'}
                  onChange={this.onChange.bind(this)}
                />
              </FormColumn>
            </Fieldset>
          </FormPanel>
          )
      }
      return checkOptionComponents;
    }
    getCheckOptionAndRemove(){
      self = this;
      let checkOptionComponents = [];
      for(let record of this.state.records) {
        checkOptionComponents.push(
          <FormPanel key={'FormPanel-'+record.id} className="center" style={{"overflow": "auto"}}>
            <Fieldset className="hbox" style={{padding: '5px'}}>
              <FormColumn className="hbox-r" style={{flex: 1}}>
                <CheckOption
                  id={record.id}
                  key={record.key ? record.key : record.id}
                  name={record.name ? record.name : record.id}
                  value={record.value ? record.value : record.id}
                  checked={record.checked}
                  remove={record.remove}
                  text= {record.text ? record.text : record.id}
                  orientationText = {record.orientationText ? record.orientationText : 'right'}
                  onChange={this.onChange.bind(this)}
                />
              </FormColumn>
              <FormColumn className={record.remove ? "hbox-l" : "hbox-l hidden" }>
                <button onClick={this.onClick.bind(this,record)}>Delete</button>
              </FormColumn>
            </Fieldset>
          </FormPanel>
          )
      }
      return checkOptionComponents;
    }
    render(){
      let records = this.props.remove ? this.getCheckOptionAndRemove() :this.getCheckOption();
      return(
        <div key="div-checkOptionList" className="option-conditions">
          {
            records.map(function(record,index){
              return(record)
            })
          }
        </div>
      );
    }
}
