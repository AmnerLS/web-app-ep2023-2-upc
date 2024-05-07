<script>
import ProductCard from "./product-card.component.vue";

export default {
  name: "product-list",
  components: {ProductCard},
  props:{products: Array}

}
</script>

<template>
  <div v-for="product in products">
    <product-card :product="product"/>
  </div>
</template>

<style scoped>

</style>