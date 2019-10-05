import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Field } from '../src/components/enterprise/Field.jsx';
import { FormField } from '../src/components/enterprise/FormField.jsx';
import { TextField } from '../src/components/enterprise/TextField.jsx';
import { NumberField } from '../src/components/enterprise/NumberField.jsx';
import { EmailField } from '../src/components/enterprise/EmailField.jsx';
import { WebField } from '../src/components/enterprise/WebField.jsx';
import { PhoneField } from '../src/components/enterprise/PhoneField.jsx';
import { ZipField } from '../src/components/enterprise/ZipField.jsx';
import { PasswordField } from '../src/components/enterprise/PasswordField.jsx';
import { DateField } from '../src/components/enterprise/DateField.jsx';
import { Dropdown } from '../src/components/enterprise/Dropdown.jsx';
import { DisplayField } from '../src/components/enterprise/DisplayField.jsx';
import { NoteField } from '../src/components/enterprise/NoteField.jsx';
import { CheckBox } from '../src/components/enterprise/CheckBox.jsx';
import { CompositeField } from '../src/components/enterprise/CompositeField.jsx';
import { FormInput } from '../src/components/FormInput.jsx';
import { Container } from '../src/components/Container.jsx';
import { FormPanel } from '../src/components/FormPanel.jsx';
import { Fieldset } from '../src/components/enterprise/Fieldset.jsx';
import { FormColumn } from '../src/components/FormColumn.jsx';
import { Toolbar } from '../src/components/Toolbar.jsx';
import { Dialog } from '../src/components/Dialog.jsx';
import { FormSelect } from '../src/components/FormSelect.jsx';
import { Select } from '../src/components/Select.jsx';
import { CheckOptionList } from '../src/components/CheckOptionList.jsx';
import { CheckOption } from '../src/components/CheckOption.jsx';
import { FormTextArea } from '../src/components/FormTextArea.jsx';
import { FormatNumber } from '../src/components/FormatNumber.jsx';
import { Popover } from '../src/components/Popover.jsx';
import { DialogComponent } from '../src/components/DialogComponent.jsx';
import { Toogle } from '../src/components/Toogle.jsx';

export class FormDemo extends Component
{
    constructor(props)
    {
        super(props);

        this.saveChanges = this.saveChanges.bind(this);
        this.state = {
          optionOneChecked: false,
          optionTwoChecked: false,
          optionThreeChecked: false,
          optionFourChecked: false
      };

        this.onTextChange = this.onTextChange.bind(this);
        this.onDropdownChange = this.onDropdownChange.bind(this);
        this.onCheckBoxChange = this.onCheckBoxChange.bind(this);
    }
    saveChanges()
    {
        var record = {
            dropdown: this.refs.dropdown.getValue(),
            date: this.refs.dateField.getValue(),
            integer: this.refs.integerField.getValue(),
            float: this.refs.floatField.getValue(),
            phone: this.refs.phoneField.getValue()
        };

        if(this.refs.form.isValid(this.refs))
            alert('You can save!');
        else {
            alert("You can't save :(");
        }
    }
    onDropdownChange()
    {
        console.log(this.refs.dropdown.isValid());
        this.refs.name.setValue('Britton');
    }
    onCheckBoxChange(event)
    {
        console.log(event);
    }
    onTextChange(event)
    {

    }
    createTextField(label, required, align)
    {
        return <TextField id="n01" ref="name" label={label} value="" align={align} required={required} onChange={this.onTextChange}/>;
    }
    createIntegerField(label, required, align)
    {
        return <NumberField ref="integerField" required={required} label={label} value="" align={align} min={0} decimals="0"/>;
    }
    createFloatField(label, required, align)
    {
        return <NumberField ref="floatField" label={label} value="" align={align} min={0} required={required} decimalPrecision={2}/>;
    }
    createCurrencyField(label, required, align)
    {
        return <NumberField ref="currencyField" required={required} label={label} value={645} align={align} min={0}  decimals={2} currency="USD"/>;
    }
    createPhoneField(label, required, align)
    {
        return <PhoneField ref="phoneField" required={required} label={label} mask="(___) __-__" placeholder="(___) ___-____" onChange={this.onTextChange}/>;
    }
    createEmailField(label, required, align)
    {
        return <EmailField ref="email" label={label} value="" align={align} required={required} onChange={this.onTextChange}/>;
    }
    createCheckBox(label, required, align)
    {
        return <CheckBox label={label} checked={true} onChange={this.onCheckBoxChange} required={required}/>;
    }
    createDateField(label, required, align)
    { 
        return <DateField id="n02" ref="dateField" name="field-name" label="Date Field" required={required} value="2016-09-24"/>;
    }
    createDropdown(label, required, align)
    {
        var items = [{text : "Test 1", value : "test 1" }, {text : "Test 2", value : "test 2"}, {text : "Test 3", value : "test 3"}];

        return <Dropdown id="n00" ref="dropdown" name="mydropdown" label="Dropdown" value="test 2" items={items} onChange={this.onDropdownChange} emptyOption={true} required={required}/>;
    }
    createFormInput(label, required, align)
    {
        return <FormInput title="Test: " value="" inline={true} orientation="left" maxLength="10"/>;
    }
    createDisplayField(label, required, align)
    {
        return <DisplayField label="Address"><div>This is line 1</div><div>This is line 2</div></DisplayField>;
    }
    createNoteField(label, required, align)
    {
        return <NoteField label="Note" value="This is a content" required={required}/>;
    }
    createCheckOptions()
    {
        return (
          <div className="vbox">
            <CheckOption
              id="1"
              text="Option test 1"
              name="Option"
              value="1"
              onChange={this.onChangeCheckBox.bind(this)}
              checked = {this.state.optionOneChecked}
              orientationText = "left"
            />
            <CheckOption
                id="2"
                text="Option test 2"
                 name="Option"
                 value="2"
                 onChange={this.onChangeCheckBox.bind(this)}
                 checked = {this.state.optionTwoChecked}
                 orientationText = "right"
            />
            <CheckOption
                  id="3"
                  text="Option test 3"
                  name="Option"
                  value="3"
                  onChange={this.onChangeCheckBox.bind(this)}
                  checked = {this.state.optionThreeChecked}
                  orientationText = "up"
            />
            <CheckOption
                    id="4"
                    text="Option test 4"
                     name="Option"
                     value="4"
                     onChange={this.onChangeCheckBox.bind(this)}
                     checked = {this.state.optionFourChecked}
                     orientationText = "down"
            />
            </div>
          )
    }

    createCompositeField()
    {
        return (<CompositeField label="Composite">
            <Container className="hbox">
                <Field type="text" style={{flex: 2}} onChange={this.onChangeField.bind(this)} />
                <Field type="text" style={{flex: 1}}/>
                <Field type="text" style={{flex: 1}} />
            </Container>
        </CompositeField>);
    }
    createSelect()
    {
      let Items = [
                            {id: "item 1", text: "item 1", value: "item 1"},
                            {id: "item 2", text: "item 2", value: "item 2"},
                            {id: "item 3", text: "item 3", value: "item 3"},
                            {id: "item 4", text: "item 4", value: "item 4"}
                          ];
      return (<FormSelect value={"item 2"} defaultSelected={false} title="Test Form Select" selectItems={Items}  onChange={this.onChange.bind(this)}/>);
      //return (<Select value={"JONATHAN HARRINGTON"} defaultSelected={true}  title="Test Form Select" selectItems={customerItems}  onChange={this.onChange.bind(this)}/>);
    }
    onChangeField(Fieldvalue) {
      console.log(Fieldvalue);
    }
    onChange(value) {
      alert("Select Value = "+value);
    }
    onChangeCheckBox(record) {
      alert("CheckBox Value = "+record.value+" Checked = "+record.checked);
      /*if (record.value == 1) {
        this.state = {
          optionOneChecked: record.checked
        }
      }
      if (record.value == 2) {
        this.state = {
          optionTwoChecked: record.checked
        }
      }*/
    }

    getToolbar()
    {
        var items = [
        {
            text: 'Save',
            cls: 'button-new',
            visible: false,
            handler: this.saveChanges
        }];

        return <Toolbar className="north" items={items} />;
    }
    onChangeTextArea(value){
      console.log(value);
    }
    createFormTextArea() {
      return <FormTextArea id="textarea" title="Text Area" inline={true} onChange={this.onChangeTextArea.bind(this)}/>
    }
    createFormatNumber() {
      return <FormatNumber
                  value={11222333}
                  separator={true}
                  prefix={'$'}
                  />;
    }
    createDialog() {
    let dialogBillingHistory = new Dialog({
          title: `Dialog test`,
          className: "vbox",
          body: (
                  <div>
                    <label>Im body dialog</label>
                  </div>
                )
      });

      dialogBillingHistory.open();
    }
    getToogle()
    {
        return(<Toogle />);
    }
    getForm()
    {
        return (<FormPanel ref="form" debug={false}>
                    <Fieldset className="hbox">
                        <FormColumn className="hbox-l" title="Components 1">
                            { this.createTextField("Default", true) }
                            { this.createIntegerField("Integer", true)}
                            { this.createFloatField("Float", true)}
                            { this.createCurrencyField("Currency", true)}
                            { this.createEmailField("Email", true)}
                            { this.createPhoneField("Phone", false)}
                            { this.createCheckBox("Aligned", true, 'right') }
                            { this.createDropdown("", true) }

                            { this.createDateField("", true) }
                            { this.createDisplayField() }
                            <Popover text="Click here">
                                <div>
                                    <div><input type="text" placeholder="Nombre"/></div>
                                    <div><input type="text" placeholder="Apellido"/></div>
                                </div>
                            </Popover>
                        </FormColumn>
                        <FormColumn className="hbox-r" title="Components 2">
                            { this.createNoteField("", true) }
                            { this.createFormInput() }
                            { this.createCheckOptions() }
                            { this.createCompositeField() }
                            { this.createSelect()}
                            { this.createFormTextArea() }
                        </FormColumn>
                    </Fieldset>
                    <Fieldset>
                        { this.createFormatNumber() }
                        <button onClick={this.createDialog.bind(this)}>dialog</button>
                        <DialogComponent ref="dialog" bbar={[{key: 'close', text: 'Close'}]} onClose={this.onCloseDialog.bind(this)}>
                            <p>Body</p>
                        </DialogComponent>
                        <button onClick={this.onDialogOpen.bind(this)}>Dialog</button>
                    </Fieldset>
                    <Fieldset>
                        {this.getToogle()}
                    </Fieldset>
                </FormPanel>);
    }
    onDialogOpen()
    {
        this.refs.dialog.open();

    }
    onCloseDialog()
    {
        console.log('onDialogClose');
    }
    render()
    {
        var toolbar = this.getToolbar();
        var content = this.getForm();

        return (<Container className="vbox center">
                {toolbar}
                {content}
            </Container>);
    }
}
