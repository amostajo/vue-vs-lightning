import { LightningElement, api } from 'lwc';

export default class Bindings extends LightningElement {
    @api bindings = undefined;
    handleRemove( event ) {
        event.preventDefault();
        let index = event.target.getAttribute('data-index');
        if (index) {
            this.dispatchEvent(new CustomEvent('remove', {detail: index}));
        }
    }
}
