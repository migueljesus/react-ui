import React, { Component } from 'react';
import { List } from '../src/components/List.jsx';

export class ListDemo extends Component
{

  onClick(record) {
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
            <List
              remove={false}
              key="List"
              records={objects}
              onClick={this.onClick.bind(this)}
            />
            <List
              remove={true}
              key="List-remove"
              records={objects}
              onClick={this.onClick.bind(this)}
              onRemoveRecord={this.onRemoveRecord.bind(this)}
            />
          </div>
      );
    }
}
