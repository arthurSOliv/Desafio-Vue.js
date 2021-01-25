<template>
  <v-container>
    <h1 class="mb-4">Vendas</h1>
    <List v-if="data != null" :data="data" type="admin"/>
  </v-container>
</template>

<script>
import List from '../../components/List.vue';

export default {
  components: {
    List,
  },
  data: () => ({
    data: null,
  }),
  mounted() {
    this.initialize();
  },
  methods: {
    async initialize() {
      this.data = await JSON.parse(localStorage.getItem('vendas'));
      if (this.data === null) {
        this.data = [];
      }
    },
  },
};
</script>

<style>
</style>
