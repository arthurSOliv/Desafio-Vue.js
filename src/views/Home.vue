<template>
  <div class="home">
    <v-container>
      <v-card
        class="d-flex flex-column align-center"
        elevation="6"
        shaped
        outlined
      >
        <h1 class="mt-10 logo">medApp</h1>
        <h1>Login</h1>
        <v-form class="pa-5 d-flex flex-column" ref="form" lazy-validation>
          <v-text-field v-model="email" label="E-mail" required></v-text-field>

          <v-text-field
            v-model="password"
            label="Senha"
            type="password"
            required
          ></v-text-field>

          <v-btn color="info" @click="submitForm"> Entrar </v-btn>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { authService } from '@/services';

export default {
  name: 'Home',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async submitForm() {
      const data = {
        email: this.email,
        password: this.password,
      };

      const response = await authService(data);

      localStorage.setItem('token', response.token);

      this.$router.push({ path: '/load' });
    },
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  color: #2196f3;
  padding: 10px;
  border: 3px solid #2196f3;
}

.v-form {
  width: 100%;
}
</style>
