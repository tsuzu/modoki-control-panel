<template>
  <v-dialog v-model="dialog" max-width="500px">
      <v-icon
        small
        slot="activator"
        class="mr-2"
        @click="dialog = true"
      >
        delete
      </v-icon>

    <v-card>
      <v-card-title>
        <span class="headline">Are you sure you want to remove this?</span>
      </v-card-title>
      <v-card-text>
        <p class="text-xs-left">You cannot cancel this operation.</p>
        <p class="text-xs-left">Name: {{name}}</p>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-checkbox v-model="checked" label="Remove the container even though it's running"></v-checkbox>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey darken-1" flat @click.native="dialog = false">Cancel</v-btn>
        <v-btn color="red darken-1" flat @click.native="remove()">Remove</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['cid', 'name'],
  data: () => ({
    checked: false,
    dialog: false
  }),
  methods: {
    remove: async function () {
      this.dialog = false

      var client = await this.getClient()

      await client.container.container_remove({id: this.cid})
    }
  }
}
</script>
