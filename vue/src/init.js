/**
 * Ability to share mixins during execution.
 */
window.vue = {mixins:{},app:undefined};
// Mixins
window.vue.mixins.alert = require( './mixins/alert.js' );