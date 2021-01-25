<template>
  <v-data-table
    :headers="type === 'admin' ? sell : med"
    :items="data"
    class="elevation-1"
  >

    <template v-if="type === 'admin'" v-slot:item.medicins="{ item }">
      <div v-for="prod in item.medicins" :key="prod.name">
        <p>Nome: {{prod.name}}</p>
        <p>Quantidade: {{prod.quantity}}</p>
      </div>
    </template>

    <template v-slot:header.name="{ header }">
      {{ header.text.toUpperCase() }}
    </template>

    <template v-slot:no-data>
      <p>Não há registros cadastrados</p>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    med: [
      {
        text: 'Medicamento',
        align: 'start',
        value: 'name',
      },
      { text: 'Preço (R$)', value: 'price' },
    ],
    sell: [
      {
        text: 'Produtos',
        align: 'start',
        value: 'medicins',
      },
      { text: 'Preço (R$)', value: 'price' },
    ],
    desserts: [],
  }),
  props: {
    data: Array,
    type: String,
  },
};
</script>

<style>
</style>
