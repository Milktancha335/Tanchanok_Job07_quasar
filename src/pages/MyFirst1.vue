<template>
  <div class="q-pa-md">
    <h2>Table Account</h2>
    <div class="q-pa-md q-gutter-sm" >
</div>
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">id</th>
          <th class="text-right">name</th>
          <th class="text-right">email</th>
          <th class="text-right">Phone</th>
          <th class="text-right">password</th>
          <th class="text-right">delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in rows" :key="user.id">
          <td class="text-left">{{ user.id }}</td>
          <td class="text-right">{{ user.name }}</td>
          <td class="text-right">{{ user.email }}</td>
          <td class="text-right">{{ user.phone }}</td>
          <td class="text-right">{{ user.password }}</td>
          <td class="text-right">
            <q-btn @click="deleteRow(user.id)" color="red" label="Delete" />
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
  <MainLayoutVue />
</template>

<script>
import axios from "axios";
import MainLayoutVue from "src/layouts/MainLayout.vue";
import EssentialLink from "src/components/EssentialLink.vue";
export default {
  components: { MainLayoutVue,EssentialLink },
  data() {
    return {
      users: "",
      url_api_account: "http://localhost/api.php",
      rows: [],
      i: 0,
    };
  },
  methods: {
    showData() {
      axios
        .post(this.url_api_account, {
          action: "select",
        })
        .then((res) => {
          this.rows = res.data;
          console.log(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    deleteRow(id) {
      axios
        .post(this.url_api_account, {
          action: "delete",
          id: id,
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
  mounted() {
    this.showData();
  },
  sendPage(){
  }
};
</script>
