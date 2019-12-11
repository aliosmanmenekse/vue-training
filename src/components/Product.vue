<template>
    <div>
        <img :src="image" width="100" height="100" @click="$emit('click')"/>
        <br/>
        <span>{{ name }} --- {{ price }}</span>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true
            },
            price: {
                type: String | Number,
                required: true
            },
            image: {
                type: String,
                default: ''
            },

        }
    }
</script>
