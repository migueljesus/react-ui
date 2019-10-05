import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { GridPanel } from '../src/components/GridPanel.jsx';
import { Container } from '../src/components/Container.jsx';
import { Toolbar } from '../src/components/Toolbar.jsx';
import { DialogComponent } from '../src/components/DialogComponent.jsx';

export class GridPanelDemo extends Component
{
    constructor(props)
    {
        super(props);

        this.openDialog = this.openDialog.bind(this);
    }
    onSelectionChange(current, previous)
    {
        console.log(current);
        console.log(previous)
    }
    getGridPanel(fit)
    {
        let minWidth = (fit == 'normal' ? 150 : null);

        var columns = [{
            header: 'Stock #',
            dataIndex: 'StockNumber',
            minWidth: minWidth
        },
        {
            header: 'VIN',
            renderer: function(record)
            {
                return record.VIN;
            },
            minWidth: minWidth
        },
        {
            header: 'Year',
            dataIndex: 'Year',
            minWidth: minWidth
        },
        {
            header: 'Make',
            dataIndex: 'Make',
            minWidth: minWidth
        },
        {
            header: 'Model',
            dataIndex: 'Model',
            minWidth: minWidth
        },
        {
            header: 'Trim',
            dataIndex: 'Trim',
            minWidth: minWidth
        },
        {
            header: 'Style',
            dataIndex: 'Style',
            minWidth: minWidth
        },
        {
            header: 'Active',
            dataIndex: 'Active',
            minWidth: minWidth
        },
        {
            header: 'Miles',
            dataIndex: 'Miles',
            minWidth: minWidth
        },
        {
            header: 'Sticker Price',
            dataIndex: 'StickerPrice',
            align: 'right',
            format: 'money',
            minWidth: minWidth
        },
        {
            header: 'Lot',
            dataIndex: 'Lot',
            minWidth: minWidth
        },
        {
            header: 'Phone',
            dataIndex: 'Phone',
            minWidth: minWidth
        }];

        var records = [];

        for(var i = 0; i < 10; i++)
              records.push({
                  key: i.toString(),
                  StockNumber: 1600 + i,
                  VIN: 'WDDGF4HB7DR262079',
                  Year: 2009,
                  Make: 'Toyota',
                  Model: 'Camry',
                  Trim: 'XL',
                  Style: 'Sedan',
                  Color: 'Red',
                  Active: ((Math.random() ^ i) % 2) == 0,
                  Miles: 2592,
                  StickerPrice: 14999,
                  Lot: 'Miami',
                  Phone: '555-2332'
          });

          var items = [{
              text: 'New',
              cls: 'button-new',
              handler: this.openDialog
          }];

          let toolbar =<Toolbar items={items}></Toolbar>;

          return <GridPanel
              toolbar={toolbar}
              title="Inventory"
              columns={columns}
              records={records}
              onRowClick={this.onRowClick}
              onRowDoubleClick={this.onRowDoubleClick}
              onSelectionChange={this.onSelectionChange}/>;
    }
    getDialogPanel()
    {
        return (<DialogComponent ref="dialog" modal={true}>
                    {this.getGridPanel('fit')}
                </DialogComponent>);
    }
    openDialog()
    {
        this.refs.dialog.open();
    }
    onRowClick(record)
    {

    }
    render()
    {
        return <div className="center vbox">
                    {this.getGridPanel('auto')}
                    {this.getGridPanel('normal')}
                    {this.getGridPanel('fit')}
                    {this.getDialogPanel()}
                </div>;
    }
}
