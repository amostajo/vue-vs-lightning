import { LightningElement, track } from 'lwc';

export default class Demo extends LightningElement {
    @track binding = '';
    @track bindings = [];
    handleAddBinding(event) {
        if (event.detail && this.bindings.find((binding) => {return binding === event.detail;}) === undefined) {
            this.bindings.push(event.detail);
            this.template.querySelector('my-binding-input').clear();
        }
    }
    handleRemoveBinding(event) {
        if (event.detail) {
            this.bindings.splice(event.detail, 1);
        }
    }
}