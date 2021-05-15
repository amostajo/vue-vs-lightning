<template>
    <ul v-if="bindings" class="bindings-component">
        <li v-for="(binding, index) in bindings"
            :id="'binding-' + index"
        >
            <span class="binding-index">{{index}}:</span>
            <span class="binding">{{binding}}</span>
            <a href="#" class="remove" @click.prevent="remove(index)">Remove</a>   
        </li>
    </ul>
</template>

<script>
    /**
     * Component
     */
    export default {
        name: 'bindings',
        props:
        {
            value: {
                default: undefined,
            }
        },
        data()
        {
            return {
                bindings: this.value,
            };
        },
        watch:
        {
            value()
            {
                this.bindings = this.value;
            },
        },
        methods:
        {
            remove(index)
            {
                this.bindings.splice(index, 1);
                this.$emit('input', this.bindings);
                this.$emit('change')
            },
        },
    };
</script>