import { LightningElement, track } from 'lwc';

export default class Demo extends LightningElement {
    @track binding = '';
    @track bindings = [];
    image = {
        src: 'https://q-xx.bstatic.com/xdata/images/hotel/840x460/78809294.jpg?k=cf850d507a9671cf7ff85d598435ea329a28cd4f1b1abc25c1892c91156d36ad&o=',
    };
    image2 = {
        src: 'https://static.diffen.com/uploadz/9/99/Sea.jpg',
        title: 'With title',
    };
    image3 = {
        src: 'https://ec.europa.eu/programmes/horizon2020//sites/default/files/newsroom/29_05_17_small_22078.jpg',
        title: 'With title',
        description: 'With description. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.',
    };
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