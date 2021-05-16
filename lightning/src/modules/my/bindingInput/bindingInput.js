import { LightningElement, api } from 'lwc';

export default class BindingInput extends LightningElement {
    _value = undefined;
    handleInput(event)
    {
        this._value = event.target.value;
    }
    handleAdd()
    {

    }
    @api
    get value()
    {
        return this._value;
    }
    set value(value)
    {
        this._value = value;
        this.setAttribute( 'value', this._value );
    }
}
