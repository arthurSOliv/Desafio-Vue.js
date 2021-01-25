<template>
  <div class="user-dropdown">
    <div class="user-button">
      <span class="d-none d-sm-block"><i class="fa fa-bars mr-3"></i></span>
    </div>
    <div class="user-dropdown-content" v-if="type === 'admin'">
      <router-link to="/medicamento"
        ><i class="fa fa-home"></i> Medicamentos</router-link
      >
      <router-link to="/vendas"><i class="fa fa-cogs"></i> Vendas</router-link>
      <a href @click.prevent="logout"><i class="fa fa-sign-out"></i> Sair</a>
    </div>
    <div class="user-dropdown-content" v-else>
      <router-link to="/medicamentoS"
        ><i class="fa fa-home"></i> Medicamentos</router-link
      >
      <router-link to="/vendasS"><i class="fa fa-cogs"></i> Vendas</router-link>
      <a href @click.prevent="logout"><i class="fa fa-sign-out"></i> Sair</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropdownMenu',
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push({ path: '/' });
    },
  },
  props: {
    type: String,
  },
};
</script>

<style scoped>
.user-dropdown {
  cursor: pointer;
  position: relative;
  height: 100%;
}
.user-button {
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 100;
  height: 100%;
  padding: 0px 20px;
}
.user-dropdown:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
.user-dropdown-content {
  position: absolute;
  right: 0px;
  background-color: #f9f9f9;
  min-width: 170px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
}
.user-dropdown:hover .user-dropdown-content {
  visibility: visible;
  opacity: 1;
}
.user-dropdown-content a {
  text-decoration: none;
  color: #000;
  padding: 10px;
}
.user-dropdown-content a:hover {
  text-decoration: none;
  color: #000;
  background-color: #ededed;
}
</style>
