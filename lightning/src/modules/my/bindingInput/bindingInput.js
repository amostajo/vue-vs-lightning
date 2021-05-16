import { LightningElement, api } from 'lwc';

export default class BindingInput extends LightningElement {
    @api value = undefined;
    handleInput(event) {
        this.value = event.target.value;
    }
    handleAdd() {
        if (this.value)
            this.dispatchEvent(new CustomEvent('add', {detail: this.value}));
    }
    @api clear() {
        this.value = '';
    }
}
