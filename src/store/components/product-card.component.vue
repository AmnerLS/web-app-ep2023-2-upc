<script>
import {Product} from "../model/product.entity.js";



export default {
  name: "product-card",
  props:{product: Product}
}
</script>
<template>
  <pv-card style="width: 25rem; overflow: hidden">
    <template #header>
      <img alt="product image" :src="product.photoUrl" />
    </template>
    <template #title>{{product.title}}</template>
    <template #subtitle><pv-rating v-model="product.rating" :cancel="false"/></template>
    <template #content>
      <p class="m-0">
        {{product.description}}
      </p>
    </template>
    <template #footer>
      {{product.price}}
    </template>
  </pv-card>
</template>

<style scoped>

</style>