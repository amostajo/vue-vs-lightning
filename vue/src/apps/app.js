import VTooltip from 'v-tooltip'
Vue.use( VTooltip );

import Demo from './../components/Demo.vue';

/**
 * Survey manager.
 * Vue
 *
 * @author Bellwether Coffee <https://www.bellwethercoffee.com/>
 * @package onboarding
 * @version 1.1.0
 */
window.vue.app = new Vue( {
    el: '#app',
    components:
    {
        Demo,
    },
    methods:
    {
        alert( message )
        {
            alert( message );
        },
    },
} );