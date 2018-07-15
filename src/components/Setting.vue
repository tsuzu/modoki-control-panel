<template>
  <v-container fluid>
    <v-layout
      justify-start
      row
      wrap
    >
      <h1>User Information</h1>
    </v-layout>
    <v-layout
      row
      wrap
    >
      <v-flex>
        <v-data-table
          :headers="userInfo.headers"
          :items="userInfo.data"
          :loading="userInfo.loading"
          hide-actions
          hide-headers
        >
          <template slot="items" slot-scope="props">
            <td class="text-xs-center">{{ props.item.key }}</td>
            <td class="text-xs-center">{{ props.item.value }}</td>
          </template>
          <template slot="no-data"></template>
        </v-data-table>
      </v-flex>
    </v-layout>

    <v-layout
      justify-start
      row
      wrap
      class="pt-4"
    >
      <h1>General Setting</h1>
      <v-btn
        icon
        >
        <v-icon>cached</v-icon>
      </v-btn>
    </v-layout>
    <v-layout
      wrap
      row
      justify-start
      >
      <v-flex xs12 md12>
        <v-text-field v-model="defaultShell" label="Default Shell"></v-text-field>
      </v-flex>
      <v-flex align-start="">
        <v-btn color="blue" >Save</v-btn>
      </v-flex>
    </v-layout>
    <v-layout
      justify-start
      row
      wrap
      class="pt-4"
    >

      <h1>Authorized Keys</h1>
      <v-btn
        icon
        >
        <v-icon>cached</v-icon>
      </v-btn>
    </v-layout>
    <v-layout
      row
      wrap
    >
      <v-flex md12>
        <v-data-table
          :headers="containers.headers"
          :items="containers.data"
          :loading="containers.loading"
          hide-actions
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td class="text-xs-left">{{ props.item.label }}</td>
            <td class="text-xs-left">{{ props.item.hash }}</td>
            <td class="text-xs-right px-0">
              <v-icon
                small
                class="mr-2"
                @click="deleteItem(props.item)"
              >
                arrow_downward
              </v-icon>
              <v-icon
                small
                class="mr-2"
                @click="deleteItem(props.item)"
              >
                delete
              </v-icon>
            </td>
          </template>
          <template slot="no-data"></template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Setting',
  data () {
    return {
      containers: {
        data: [
          {
            label: 'hello',
            hash: 'ecqwertyuiopasdfghjklzxcvbn',
            status: 'running'
          }
        ],
        loading: true,
        pagination: {},
        headers: [
          { text: 'Label', sortable: false, align: 'left' },
          { text: 'Hash', sortable: false, align: 'left' },
          { text: '', sortable: false, align: 'right' }
        ]
      },
      userInfo: {
        headers: [
          {text: 'Key', sortable: false},
          {text: 'Value', sortable: false}
        ],
        loading: false,
        pagination: {},
        data: [
          {key: 'Name', value: 'Tsuzu'},
          {key: 'Email', value: 'tsuzu.0623@gmail.com'},
          {key: 'Phone', value: '080-4188-0623'},
          {key: 'Twitter', value: '@Wp120_3238'},
          {key: 'Grade', value: '53rd'}
        ]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
