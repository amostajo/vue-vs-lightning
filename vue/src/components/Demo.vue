<template>
    <div class="demo-component">
        <h1>Vue DEMO</h1>
        <p>Vue components and features demo.</p>
        <hr>
        <h2>Slots</h2>
        <p>Slots compatibility check, the first and defaylt slot will load HTML that will trigger jQuery code, the second slot is secondary.</p>
        <div class="row">
            <div class="col-sm-6 col-12">
                <h3>1) jQuery (default slot)</h3>
                <!-- Support for other components and frameworks, like JQUERY -->
                <slot></slot>
            </div>
            <div class="col-sm-6 col-12">
                <h3>2) multiple slots</h3>
                <slot name="message"></slot>
            </div>
        </div>
        <hr>
        <h2>Multi CSS framework support</h2>
        <p>The following box was stylized using SCSS as style language inside the component itself.</p>
        <p class="scss-styled">
            This code was styled and compiled withing the component with SASS/SCSS.
        </p>
        <hr>
        <h2>Components, bindings, events and references</h2>
        <p>The following will show how parent values can be bind with children components, how to interact with the events thrown by components and how references work to trigger component methods.</p>
        <binding-input ref="binding" v-model="binding" @change="addBinding"/>
        <bindings v-model="bindings"/>
        <hr>
        <h2>Object binding</h2>
        <div class="row">
            <div class="col-sm-4">
                <image-view :image="image"/>
            </div>
            <div class="col-sm-4">
                <image-view :image="image2"/>
            </div>
            <div class="col-sm-4">
                <image-view :image="image3"/>
            </div>
        </div>
        <hr>
        <h2>Mixins and parent communication</h2>
        <p>The following button will use the alert functionality provided by the root app, accessible through a mixin.</p>
        <button class="btn btn-secondary" @click.prevent="alert('You have been alerted through a mixin+root combination.')">Alert me</button>
        <hr>
        <h2>3rd party support (components) and community</h2>
        <p>The following is an example of how <mark v-tooltip="'This tooltip was provided by a 3rd party developer.'">this text can tooltip</mark>.</p>
        <p>The following list are community websites that provides components, these were easily found during a simple google search:</p>
        <ul>
            <li><a href="https://vuecomponents.com/">https://vuecomponents.com/</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue">https://github.com/vuejs/awesome-vue</a></li>
        </ul>
    </div>
</template>

<style lang="scss">
    .demo-component {
        .scss-styled {
            background-color: #e7e7e7;
            color: #343434;
            padding: 10px;
        }
    }
    .tooltip {
        display: block !important;
        z-index: 10000;
    }

    .tooltip .tooltip-inner {
        background: black;
        color: white;
        border-radius: 16px;
        padding: 5px 10px 4px;
    }

    .tooltip .tooltip-arrow {
        width: 0;
        height: 0;
        border-style: solid;
        position: absolute;
        margin: 5px;
        border-color: black;
        z-index: 1;
    }

    .tooltip[x-placement^="top"] {
        margin-bottom: 5px;
    }

    .tooltip[x-placement^="top"] .tooltip-arrow {
        border-width: 5px 5px 0 5px;
        border-left-color: transparent !important;
        border-right-color: transparent !important;
        border-bottom-color: transparent !important;
        bottom: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
    }

    .tooltip[x-placement^="bottom"] {
        margin-top: 5px;
    }

    .tooltip[x-placement^="bottom"] .tooltip-arrow {
        border-width: 0 5px 5px 5px;
        border-left-color: transparent !important;
        border-right-color: transparent !important;
        border-top-color: transparent !important;
        top: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
    }

    .tooltip[x-placement^="right"] {
        margin-left: 5px;
    }

    .tooltip[x-placement^="right"] .tooltip-arrow {
        border-width: 5px 5px 5px 0;
        border-left-color: transparent !important;
        border-top-color: transparent !important;
        border-bottom-color: transparent !important;
        left: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
    }

    .tooltip[x-placement^="left"] {
        margin-right: 5px;
    }

    .tooltip[x-placement^="left"] .tooltip-arrow {
        border-width: 5px 0 5px 5px;
        border-top-color: transparent !important;
        border-right-color: transparent !important;
        border-bottom-color: transparent !important;
        right: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
    }

    .tooltip.popover .popover-inner {
        background: #f9f9f9;
        color: black;
        padding: 24px;
        border-radius: 5px;
        box-shadow: 0 5px 30px rgba(black, .1);
    }

    .tooltip.popover .popover-arrow {
        border-color: #f9f9f9;
    }

    .tooltip[aria-hidden='true'] {
        visibility: hidden;
        opacity: 0;
        transition: opacity .15s, visibility .15s;
    }

    .tooltip[aria-hidden='false'] {
        visibility: visible;
        opacity: 1;
        transition: opacity .15s;
    }
</style>

<script>
    import BindingInput from './BindingInput.vue';
    import Bindings from './Bindings.vue';
    import ImageView from './ImageView.vue';
    /**
     * Component
     */
    export default {
        name: 'demo',
        components:
        {
            BindingInput,
            Bindings,
            ImageView,
        },
        mixins:
        [
            window.vue.mixins.alert,
        ],
        data()
        {
            return {
                image: {
                    src: 'https://q-xx.bstatic.com/xdata/images/hotel/840x460/78809294.jpg?k=cf850d507a9671cf7ff85d598435ea329a28cd4f1b1abc25c1892c91156d36ad&o=',
                },
                image2: {
                    src: 'https://static.diffen.com/uploadz/9/99/Sea.jpg',
                    title: 'With title',
                },
                image3: {
                    src: 'https://ec.europa.eu/programmes/horizon2020//sites/default/files/newsroom/29_05_17_small_22078.jpg',
                    title: 'With title',
                    description: 'With description. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.',
                },
                binding: undefined,
                bindings: [],
            };
        },
        methods:
        {
            addBinding()
            {
                if (this.binding) {
                    this.bindings.push(this.binding);
                    this.$refs.binding.clear();   
                }
            },
        },
    };
</script>