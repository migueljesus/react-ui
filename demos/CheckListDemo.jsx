import React, { Component } from 'react';
import { CheckOptionList } from '../src/components/CheckOptionList.jsx';

export class CheckListDemo extends Component
{

  onChange(record) {
    console.log(record)
  }
  onRemoveRecord(records) {
    console.log(records)
  }
  render()
    {
      let objects = [];
      for(let index = 0 ; index < 5 ; index++) {
        objects.push({
          id: `${'id-'+index}`,
          key: index,
          name: `${'name-'+index}`,
          value: `${'value-'+index}`,
          checked: false,
          text: `${'Item-'+index}`,
          orientationText: 'right'
        });
      }

      return (
          <div>
            <CheckOptionList
              remove={false}
              key="CheckOptionList"
              records={objects}
              onChange={this.onChange.bind(this)}
            />
            <CheckOptionList
              remove={true}
              key="CheckOptionList-remove"
              records={objects}
              onChange={this.onChange.bind(this)}
              onRemoveRecord={this.onRemoveRecord.bind(this)}
            />
          </div>
      );
    }
}
