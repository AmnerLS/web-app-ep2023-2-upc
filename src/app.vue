<script>
  import LanguageSwitcher from "./public/components/language-switcher.component.vue";

  export default {
    name: 'app',
    components: {LanguageSwitcher},
    data() {
      return {
        visible: true,
        items:[
          {label: 'Home', to:'/home'},
          {label: 'Drinkware', to:'/store/collections/all-drinkware'},
          {label: 'Accessories', to:'/store/collections/accessories'}
        ]
      }
    }
  }
</script>
<template>
  <div class="app-container p-d-flex">
    <pv-sidebar v-model:visible="visible" header="Ember" :showCloseIcon="false"  :dismissable="false" color="primary">
      <div class="p-d-flex p-flex-column">
        <router-link v-for="item in items" :key="item.label" v-slot="{navigate, href}" :to="item.to" custom>
          <pv-button :href="href" class="p-button-text text-white" @click="navigate">{{item.label}}</pv-button>
        </router-link>
        <language-switcher/>
      </div>
    </pv-sidebar>
    <div class="content-container">
      <router-view/>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  width: 100%;
}

.content-container {
  flex-grow: 1;
}
</style>


