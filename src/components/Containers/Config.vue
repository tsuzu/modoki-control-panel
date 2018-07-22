<template>
  <v-dialog v-model="dialog" max-width="500px">

      <v-icon
        small
        slot="activator"
        class="mr-2"
        @click="dialog = true"
      >
        edit
      </v-icon>

    <v-card>
      <v-card-title>
        <span class="headline">Container Config</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field label="Default Shell" v-model="defaultShell"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['cid'],
  created: async function () {
    var client = await this.getClient()

    const res = this.asJSON(await client.container.container_getConfig({id: this.cid}))

    this.defaultShell = res.defaultShell
  },
  data: () => ({
    dialog: false,
    dafaultShell: ''
  })

}
</script>
