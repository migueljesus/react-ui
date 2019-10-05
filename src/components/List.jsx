import React, { Component } from 'react';
import { FormPanel } from './FormPanel.jsx';
import { Fieldset } from './enterprise/Fieldset.jsx';
import { FormColumn } from './FormColumn.jsx';
import { ListItem} from './ListItem.jsx';

export class List extends Component
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
    onClickRemoveItem(record){
      this.setState({
        records: this.onRemoveRecord(record)
      });
    }
    onClickListItem(record) {
      if(typeof this.props.onClick === 'function') {

        this.props.onClick(record);
      }
    }
    onRemoveRecord(record) {
      let records = [];

      for(let recordElement of this.state.records) {
        if(recordElement.id != record.id ) {
          records.push(recordElement);
        }
      }
      if(typeof this.props.onRemoveRecord === 'function') {
        this.props.onRemoveRecord(records);
      }
      return records;
    }
    getListItems(){
      let self = this;
      let listItemComponents = [];
      for(let record of this.state.records) {
        listItemComponents.push(
          <FormPanel key={'FormPanel-'+record.id} className="center" style={{"overflow": "auto"}}>
            <Fieldset className="hbox" style={{padding: '5px'}}>
              <FormColumn className="hbox-r" style={{flex: 1}}>
                <ListItem
                  id={record.id}
                  key={record.key ? record.key : record.id}
                  name={record.name ? record.name: ''}
                  value={record.value ? record.value : record.id}
                  remove={record.remove}
                  text= {record.text}
                  onClick={self.onClickListItem.bind(this)}
                />
              </FormColumn>
            </Fieldset>
          </FormPanel>
          )
      }
      return listItemComponents;
    }
    getListItemsAndRemove(){
      let self = this;
      let listItemComponents = [];
      for(let record of this.state.records) {
        listItemComponents.push(
          <FormPanel key={'FormPanel-'+record.id} className="center" style={{"overflow": "auto"}}>
            <Fieldset className="hbox" style={{padding: '5px'}}>
              <FormColumn className="hbox-r" style={{flex: 1}}>
                <ListItem
                  id={record.id}
                  key={record.key ? record.key : record.id}
                  name={record.name ? record.name: ''}
                  value={record.value ? record.value : record.id}
                  remove={record.remove}
                  text= {record.text}
                  onClick={self.onClickListItem.bind(this)}
                />
              </FormColumn>
              <FormColumn className={record.remove ? "hbox-l" : "hbox-l hidden" }>
                <button onClick={self.onClickRemoveItem.bind(this,record)}>Delete</button>
              </FormColumn>
            </Fieldset>
          </FormPanel>
          )
      }
      return listItemComponents;
    }
    render(){
      let records = this.props.remove ? this.getListItemsAndRemove() : this.getListItems();
      return(
        <div key="div-list-item" className="option-conditions">
          {
            records.map(function(record,index){
              return(record)
            })
          }
        </div>
      );
    }
}
