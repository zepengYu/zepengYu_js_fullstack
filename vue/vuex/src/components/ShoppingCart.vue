<template>
    <div class="cart">
        <h2>Your Cart</h2>
        <p v-show="!products.length"><i>Plass buy somthing</i></p>
        <ul>
            <li v-for="product in products" :key="product.id">{{ product.title }} - {{product.price | currency}} x {{product.quantity}}</li>
        </ul>
        <p>Total:{{total | currency}}</p>
    </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
    computed: {
        ...mapState({
        items: state => state.cart.items,
        checkoutStates: state => state.cart.checkoutStates
        }),
        ...mapGetters({
            products:'cartProducts',
            total:'cartTotalPrice'
        })
    }
};
</script>
<style>
</style>
