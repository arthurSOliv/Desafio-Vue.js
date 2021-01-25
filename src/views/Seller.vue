<template>
  <div>
    <Header title="Vendedor" type="seller" />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
  name: 'Admin',
  components: { Header },
};
</script>

<style>
</style>
