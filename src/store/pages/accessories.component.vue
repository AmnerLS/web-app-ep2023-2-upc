<script>
import ProductList from "../components/product-list.component.vue";
import {Product} from "../model/product.entity.js";
import {ProductsApiService} from "../services/products-api.service.js";

export default {
  name: "accessories",
  components: {ProductList},
  data(){
    return{
      products:[],
      errors:[],
      productsService: null
    }
  },
  methods:{
    buildProducts(products){
      return products.map(product => new Product(
          product.id,
          product.title,
          product.description,
          product.photoUrl,
          product.price,
          product.collectionId,
          product.rating
      ));
    },
    getProductsForCollection(){
      this.productsService.getByParam("collectionId", 2)
          .then((response) => {
            console.log(response.data);
            let products = response.data;
            this.products = this.buildProducts(products);

          }).catch(e => this.errors.push(e));
    }
  },
  created() {
    this.productsService = new ProductsApiService();
    this.getProductsForCollection();
  }

}

</script>

<template>
  <h2>{{$t('drinkware')}}</h2>
  <div>
    <product-list :products="products"/>
  </div>
</template>

<style scoped>

</style>