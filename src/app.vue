<script>
export default {
  name: "app",
  title: "Ember Technologies, inc.",

  data() {
    return {
      visible: false,
      items: [
        {label: 'Home', to: '/home'},
        {label: 'Drinkware', to: '/store/collections/all-drinkware'},
        {label: 'Accessories', to: '/store/collections/accessories'},
      ]
    }
  }
}

</script>

<template>
  <header>
    <div class="card flex justify-content-center">
      <pv-sidebar v-model:visible="visible">
        <template #header>
          <div class="flex align-items-center gap-2">
            <pv-avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle"/>
            <span class="font-bold">Side Bar</span>
          </div>
        </template>
        <div class="button-container">
          <router-link v-for="item in items" :key="item.label" v-slot="{ navigate, href}" :to="item.to" custom>
            <pv-button :href="href" class="p-button-text text-black" @click="navigate">
              {{ item.label }}
            </pv-button>
          </router-link>
        </div>
      </pv-sidebar>
      <pv-button icon="pi pi-bars" @click="visible = true"/>

    </div>
  </header>
  <router-view></router-view>
</template>

<style scoped>
.button-container {
  display: flex;
  flex-direction: column;
}
</style>
