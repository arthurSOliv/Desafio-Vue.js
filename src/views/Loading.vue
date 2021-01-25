<template>
  <v-container style="height: 100vh" class="d-flex justify-center align-center">
    <v-progress-circular
      :rotate="360"
      :size="300"
      :width="30"
      :value="value"
      color="primary"
    >
      {{ value }}
    </v-progress-circular>
  </v-container>
</template>

<script>
export default {
  name: 'Loading',
  data() {
    return {
      value: 0,
      interval: {},
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 95) {
        clearInterval(this.interval);
        const permission = localStorage.getItem('token');

        if (permission === 'admin') {
          this.$router.push({ path: '/admin' });
        } else if (permission === 'seller') {
          this.$router.push({ path: '/seller' });
        } else {
          this.$router.push({ path: '/' });
        }
      }
      this.value += 5;
    }, 500);
  },
};
</script>

<style>
</style>
