<template>
  <v-data-table
    :headers="headers"
    :items="sells"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Medicamentos</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              Nova venda
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      :items="medicins"
                      v-model="selectedMedicins"
                      @change="setProducts"
                      label="Nome do medicamento"
                      multiple
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.seller"
                      label="Vendedor"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <div
                  v-for="item in editedItem.medicins"
                  :key="item.name"
                  class="d-flex"
                >
                  <p class="d-flex align-center">
                    <span class="mr-4">{{ item.name }}</span>
                    <v-text-field
                      v-model="item.quantity"
                      label="Quantidade"
                    ></v-text-field>
                  </p>
                </div>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">
                Cancelar
              </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline"
              >Tem certeza que deseja cancelar essa venda?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancelar</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.medicins="{ item }">
      <div v-for="prod in item.medicins" :key="prod.name">
        <p>Nome: {{prod.name}}</p>
        <p>Quantidade: {{prod.quantity}}</p>
      </div>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <p>Não há vendas realizadas</p>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'ListFullSells',
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'Produtos',
        align: 'start',
        sortable: false,
        value: 'medicins',
      },
      { text: 'Vendedor', value: 'seller' },
      { text: 'Preço (R$)', value: 'price' },
      { text: '', value: 'actions', sortable: false },
    ],
    medicins: [],
    selectedMedicins: [],
    sells: [],
    editedIndex: -1,
    editedItem: {
      medicins: '',
      seller: '',
    },
    defaultItem: {
      name: '',
      price: '',
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Nova venda' : 'Edit Item';
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.sells = JSON.parse(localStorage.getItem('vendas'));
      const medicins = JSON.parse(localStorage.getItem('medicamentos'));

      if (medicins != null) {
        const newArray = [];
        medicins.map((med) => {
          newArray.push(med.name);
          return newArray;
        });

        this.medicins = newArray;
      }

      if (this.sells === null) {
        this.sells = [];
      }
      if (this.medicins === null) {
        this.medicins = [];
      }
    },

    setProducts() {
      const items = [];
      this.selectedMedicins.map((item) => {
        const n = Object.values(this.editedItem.medicins).findIndex(
          (i) => i.name === item,
        );

        const medicins = JSON.parse(localStorage.getItem('medicamentos'));

        const index = Object.values(medicins).findIndex((i) => i.name === item);

        const newItem = {
          name: item,
          quantity: n > -1 ? this.editedItem.medicins[n].quantity : 0,
          price: medicins[index].price,
        };

        items.push(newItem);

        return true;
      });

      this.editedItem.medicins = items;
    },

    editItem(item) {
      this.editedIndex = this.sells.indexOf(item);
      this.editedItem = { ...item };
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.sells.indexOf(item);
      this.editedItem = { ...item };
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.sells.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = { ...this.defaultItem };
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = { ...this.defaultItem };
        this.editedIndex = -1;
      });
    },

    save() {
      let price = 0;
      this.editedItem.medicins.map((item) => {
        price += Number(item.quantity) * Number(item.price);
        return true;
      });
      this.editedItem.price = price;
      this.sells.push(this.editedItem);
      localStorage.setItem('vendas', JSON.stringify(this.sells));
      this.close();
    },
  },
};
</script>

<style>
</style>
