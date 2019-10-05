import React, { Component } from 'react';
import { FormPanel } from '../src/components/FormPanel.jsx';
import { TextField } from '../src/components/enterprise/TextField.jsx';
import { ZipField } from '../src/components/enterprise/ZipField.jsx';
import { WebField } from '../src/components/enterprise/WebField.jsx';
import { PhoneField } from '../src/components/enterprise/PhoneField.jsx';
import { PasswordField } from '../src/components/enterprise/PasswordField.jsx';
import { NumberField } from '../src/components/enterprise/NumberField.jsx';
import { NoteField } from '../src/components/enterprise/NoteField.jsx';
import { EmailField } from '../src/components/enterprise/EmailField.jsx';
import { Dropdown } from '../src/components/enterprise/Dropdown.jsx';
import { CheckBox } from '../src/components/enterprise/CheckBox.jsx';

import ReactDOM from 'react-dom';

export class FormDirtyTestDemo extends Component
{
    constructor(props)
    {
        super(props);
        this.state = this.empty();
        this.saveChanges = this.saveChanges.bind(this);
    }

    saveChanges()
    {
        let form = this.refs.form;
        let fields = this.refs;

        if(form.isValid(fields))
        {
            if(form.isDirty(fields))
            {
                console.log("Are there modified elements, do you want to save changes?");
            }
            else
            {
                console.log("No exist change");
            }
        }
        else
        {
            console.log("Elements Form invalid");
        }

    }

    empty()
    {
        let field = {
            textField: 'Text Field',
            zipField: '00000-1111',
            webField: 'www.webfield.com',
            phoneField: '(213) 123-1231',
            passwordField: '12345',
            numberField: 1000,
            noteField: 'Note Field',
            emailField: 'test@test.com'
        };

        return field;
    }

    render()
    {

        let submisitionItems = [{value: "Dealer Track", text: "Dealer Track"}, {value: "Route One", text: "Route One"}, {value: "Other", text: "Other"}];

        return(
            <div>
                <FormPanel ref="form">
                    <TextField ref="textField" label="Text Field" value={this.state.textField} required={true} maxLength="50" />
                    <ZipField ref="zipField" label="Zip Field" value={this.state.zipField} required={true} />
                    <WebField ref="webField" label="Web Field" value={this.state.webField} required={true} />
                    <PhoneField ref="phoneField" label="Phone Field" value={this.state.phoneField} required={true} mask="(___) ___-____"/>
                    <PasswordField ref="passwordField" label="Password Field" value={this.state.passwordField} required={true} maxLength="50" />
                    <NumberField ref="numberField" label="Number Field" value={this.state.numberField} required={true} />
                    <NoteField ref="noteField" label="Note Field" value={this.state.noteField} required={true} />
                    <EmailField ref="noteField" label="Email Field" value={this.state.emailField} required={true} />
                    <Dropdown ref="dropdown" items={submisitionItems} label="Dropdown" value={'Dealer Track'} emptyOption={true}/>
                    <CheckBox ref="checkBox" label="CheckBox" value={false}/>
                </FormPanel>
                <button onClick={this.saveChanges}>Save</button>
            </div>
        );
    }
}
