<script>
export default {
  name: "home"
}
</script>

<template>
  <div>
    <img src="https://ember.com/cdn/shop/files/230914_launch_WebBanner-Desktop_2048x.jpg" alt="hero image" class="p-mx-auto" style="width: 100%;">
  </div>
  <div class="p-d-flex p-flex-column p-ai-center p-jc-center">
    <h2 class="p-text-center">{{$t('home-text.title')}}</h2>
    <p class="p-text-center">{{$t('home-text.content')}}</p>
  </div>
</template>

<style scoped>

</style>