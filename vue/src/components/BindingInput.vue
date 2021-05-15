<template>
    <div class="biding-input-component">
        <div class="mb-3">
            <label for="binding" class="form-label visually-hidden">Biding value</label>
            <input type="tex" class="form-control" id="binding" aria-describedby="emailHelp" v-model="binding">
        </div>
        <button type="button" @click.prevent="add" class="btn btn-success">Add value</button>
    </div>
</template>

<style lang="scss">
    .biding-input-component {
        display: flex;
        .mb-3 {
            margin: 0 !important;
        }
    }
</style>

<script>
    /**
     * Component
     */
    export default {
        name: 'binding-input',
        props:
        {
            value: {
                default: undefined,
            }
        },
        data()
        {
            return {
                binding: this.value,
            };
        },
        watch:
        {
            value()
            {
                this.binding = this.value;
            },
        },
        methods:
        {
            add()
            {
                this.$emit('input', this.binding);
                this.$emit('change');
            },
            clear()
            {
                this.binding = undefined;
                this.$emit('input', this.binding);
                this.$emit('change');
                this.$emit( 'clear' );
            },
        },
    };
</script>