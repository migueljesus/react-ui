import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { TextField } from './TextField.jsx';

export class PhoneField extends TextField
{
    constructor(props)
    {
        super(props);

        this.theLastPos = 1;
    }

    getDOMValue(input)
    {
        if(input.dataset.mask != null)
        {
            // Perhaps we should move this to the processValue function
            this.processMaskedValue(input);
        }

        // Always call the super method this way we keep the original flow as much as we can
        return super.getDOMValue(input);
    }
    processMaskedValue(input)
    {
        let mask = input.dataset.mask;

        let fieldNumbers = [];
        let myOutPut = "";
        let theLastPos = 0;
        let maskLength = mask.length;

        for (let i = 0; i < input.value.length; i++) {
            if (!isNaN(input.value.charAt(i)) && input.value.charAt(i) != " ") {
                fieldNumbers.push(input.value.charAt(i));
            }
        }

        for (let j = 0; j < maskLength; j++) {
            if (mask.charAt(j) == "_")
            {
                if (fieldNumbers.length == 0)
                myOutPut = myOutPut + mask.charAt(j);
                else {
                    myOutPut = myOutPut + fieldNumbers.shift();
                    theLastPos = j + 1;
                }
            } else {
                myOutPut = myOutPut + mask.charAt(j);
            }
        }

        input.value = myOutPut;
        input.setSelectionRange(theLastPos, theLastPos);
    }
    checkValue(value)
    {
        let mask = this.props.mask;

        if(mask != null && mask.length > 0 && value != null)
            return value.indexOf("_") == -1 || (mask == value && !this.props.required);
        else
            return super.checkValue(value);
    }
}
