<template>
  <v-data-table
    :headers="headers"
    :items="medicins"
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
              New Item
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
                    <v-text-field
                      v-model="editedItem.name"
                      label="Nome do medicamento"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.price"
                      label="Preço"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
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
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <p>Não há medicamentos cadastrados</p>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'ListFull',
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'Nome',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Preço', value: 'price' },
      { text: '', value: 'actions', sortable: false },
    ],
    medicins: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      price: '',
    },
    defaultItem: {
      name: '',
      price: '',
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.medicins = JSON.parse(localStorage.getItem('medicamentos'));
      if (this.medicins === null) {
        this.medicins = [];
      }
    },

    editItem(item) {
      this.editedIndex = this.medicins.indexOf(item);
      this.editedItem = { ...item };
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.medicins.indexOf(item);
      this.editedItem = { ...item };
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.medicins.splice(this.editedIndex, 1);
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
      if (this.editedIndex > -1) {
        Object.assign(this.medicins[this.editedIndex], this.editedItem);
        localStorage.setItem('medicamentos', JSON.stringify(this.medicins));
      } else {
        this.medicins.push(this.editedItem);
        localStorage.setItem('medicamentos', JSON.stringify(this.medicins));
      }
      this.close();
    },
  },
};
</script>

<style>
</style>
