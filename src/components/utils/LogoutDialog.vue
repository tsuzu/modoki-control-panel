<template>
    <v-dialog
      v-model="seen"
      max-width="290"
    >
    <v-card>
        <v-card-title class="headline">Are you sure you want to log out? </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click.stop="seen=false"
          >
            Cancel
          </v-btn>

          <v-btn
            color="red darken-1"
            flat="flat"
            @click.stop="closeEvent('logout')"
          >
            Log out
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: 'logoutDialog',
  props: ['logoutDialog'],
  data () {
    return {
      seen: false
    }
  },
  watch: {
    logoutDialog: function (val) {
      this.seen = val
    },
    seen: function (val) {
      if (!val) {
        this.$emit('close', 'cancel')
      }
    }
  },
  methods: {
    closeEvent: function (event) {
      this.$emit('close', event)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
