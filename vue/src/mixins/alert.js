/**
 * Mixin.
 */
module.exports = {
    methods:
    {
        /**
         * Access to root alert
         */
        alert( message )
        {
            this.$root.alert( message );
        },
    },
};