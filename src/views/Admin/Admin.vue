<template>
  <div>
    <Header title="Administração" type="admin" />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '../../components/Header.vue';

export default {
  name: 'Admin',
  components: { Header },
};
</script>

<style>
</style>
