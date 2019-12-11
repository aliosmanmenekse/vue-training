<template>
    <div class="product">
        Product List
        <Product
                :name="product.name"
                :price="product.price"
                :image="product.image">
        </Product>
    </div>
</template>
<script>
    import Product from '../components/Product.vue';
    import { mapState } from 'vuex';

    export default {
        components: {
            Product
        },

        data () {
            return {
                product: []
            };
        },

        beforeMount() {
            const productId = this.$route.params.id;

            this.product = this.products[productId]
        },

        computed: {
            ...mapState ([
                'products'
            ])
        }
    }

</script>

<style lang="scss" scoped>
    .product {
        width: 50%;
        margin-left: 25%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
</style>
