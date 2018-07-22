<template>
    <v-container fluid>
    <v-layout
      justify-start
      row
      wrap
    >

      <h1>Containers</h1>
      <v-btn
        icon
        @click.stop="fetchContainers()"
        >
        <v-icon>cached</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn slot="activator" color="primary" dark class="mb-2" to="/containers/new">New Container</v-btn>

    </v-layout>
    <v-layout
      d-inline-box
    >
      <v-flex md12>
        <v-data-table
          :headers="headers"
          :items="containers"
          :loading="loading"
          hide-actions
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.id }}</td>
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.image }}</td>
            <td>{{ props.item.command }}</td>
            <td>{{ props.item.status }}</td>
            <td class="px-0">
              <container-config :cid="props.item.cid"></container-config>
              <v-icon
                small
                class="mr-2"
                @click="deleteItem(props.item)"
              >
                tv
              </v-icon>
              <container-remove :cid="props.item.cid" :name="props.item.name"></container-remove>
            </td>
          </template>
          <template slot="no-data"></template>
        </v-data-table>
      </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
import ContainerConfig from '@/components/Containers/Config'
import ContainerRemove from '@/components/Containers/Remove'

export default {
  name: 'Containers',
  components: {
    'container-config': ContainerConfig,
    'container-remove': ContainerRemove
  },
  methods: {
    fetchContainers: async function () {
      // console.log(this.client)
      this.loading = true

      var client = await this.getClient()
      const res = this.asJSON(await client.apis.container.container_list())

      console.dir(res)

      this.$store.commit('setContainers', res)
      this.loading = false
    }
  },
  data () {
    this.fetchContainers()

    return {
      loading: false,
      pagination: {},
      headers: [
        { text: 'ID', sortable: false, align: 'center' },
        { text: 'Name', sortable: false, align: 'center' },
        { text: 'Image', sortable: false, align: 'center' },
        { text: 'Command', sortable: false, align: 'center' },
        { text: 'Status', sortable: false, align: 'center' },
        { text: '#', sortable: false }
      ]
    }
  },
  computed: {
    containers: function () {
      return this.$store.state.containers
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
