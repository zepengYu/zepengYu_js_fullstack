<template>
  <div id="app">
    <h1>Shopping Cart Example</h1>
  <hr>
  <h2>Products</h2>
  <product-list></product-list>
  <hr>
  <shopping-cart></shopping-cart>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList";
import ShoppingCart from "@/components/ShoppingCart";

export default {
  name: "App",
  components: {
    ShoppingCart,
    ProductList
  },
  data() {
    return {
      
    };
  },
  created() {
    console.log('g');
    
  }
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
