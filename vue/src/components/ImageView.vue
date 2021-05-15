<template>
    <div v-if="image.src" class="image-view-component card">
        <img :src="image.src" :alt="image.alt" class="card-img-top">
        <div v-if="image.description || image.title" class="card-body">
            <h5 v-if="image.title" class="card-title" v-html="image.title"></h5>
            <p v-if="image.description" class="card-text" v-html="image.description"></p>
        </div>
    </div>
</template>

<script>
    /**
     * Component
     */
    export default {
        name: 'image-view',
        props:
        {
            image: {
                type: Object,
                default() {
                    return {};
                },
            }
        },
    };
</script>