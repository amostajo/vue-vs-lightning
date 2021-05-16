import { LightningElement, api } from 'lwc';

export default class ImageView extends LightningElement {
    @api image = undefined;
    hasTitleOrDescription() {
        return this.image && (this.image.title || this.image.description);
    }
}