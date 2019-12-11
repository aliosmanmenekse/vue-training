<template>
    <div>
        <input placeholder="Search" v-model="search"/>
        <div class="product">
            <Product
                    v-for="(product, index) in productList"
                    :key="index"
                    :name="product.name"
                    :price="product.price"
                    :image="product.image"
                    @click="goToProductInfo(index)">
                <button @click="deleteProduct(index)">
                    Delete Product
                </button>
            </Product>
        </div>
    </div>
</template>
<script>
    import Product from './Product.vue';
    import { mapState, mapMutations } from 'vuex';

    export default {
        components: {
            Product
        },

        data () {
          return {
              search: ''
          }
        },

        computed: {
            ...mapState ([
                'products'
            ]),

            productList () {
                if (this.search === '') {
                    return this.products;
                }

                return this.products.filter( product => product.name.toLowerCase().includes(this.search) )
            }
        },

        methods: {
            ...mapMutations([
                'deleteProduct'
            ]),

            goToProductInfo (id) {
                this.$router.push({ name: 'product-info', params : {id}})
            }
        }
    }

</script>

<style lang="scss" scoped>
    input {
        border: 1px solid red;
        margin-bottom: 50px;
    }
    button {
        display: block;
        background-color: red;
        color:white;
    }
    .product {
        width: 50%;
        margin-left: 25%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
</style>
