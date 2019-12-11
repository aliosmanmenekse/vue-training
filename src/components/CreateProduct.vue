<template>
  <div class="container">
    <div>
      <span>Product Name : </span>
      <input v-model="productName">
    </div>
    <div>
      <span>Product Price : </span>
      <input v-model="productPrice">
    </div>
    <div>
      <span>Product Image : </span>
      <input v-model="productImage">
    </div>
    <button @click="save">Save</button>
  </div>
</template>
<script>
  import { mapActions } from 'vuex';

  export default {
    data () {
      return {
        productName: '',
        productPrice: '',
        productImage: ''
      };
    },

    methods: {
      ...mapActions([
              'createProduct'
      ]),

      save () {
          const payload = {
            name: this.productName,
            price: this.productPrice,
            image: this.productImage
          };

          this.createProduct(payload)
      }
    }
  }

</script>
<style lang="scss" scoped>
    button {
      border: 1px solid blue;
      color: black;
      border-radius: 10px;
      width: 75px;
      margin-top: 20px;
    }
    div {
      margin-top: 20px;
    }
    span {
      color: red;
      width: 100px;
    }
    input {
      border: 1px solid red;
      width: 100px;
    }
</style>
