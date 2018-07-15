<template>
  <v-container fluid>
    <v-layout>
      <v-btn icon class="ml-0" @click="cancel">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <h1>New Container</h1>
    </v-layout>

    <v-form v-model="valid">
    <v-text-field
      v-model="name"
      :counter="64"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="image"
      label="Image"
      required
    ></v-text-field>
    <v-text-field
      v-model="command"
      label="Command(optional, split with ',')"
    ></v-text-field>
    <v-text-field
      v-model="entrypoint"
      label="Entrypoint(optional, split with ',')"
    ></v-text-field>
    <v-text-field
      v-model="workDir"
      label="Working Directory(optional)"
    ></v-text-field>
    <v-text-field
      v-model="env"
      label="Environment Variables(optional, split with ',')"
    ></v-text-field>
    <v-text-field
      v-model="vol"
      label="Volumes(optional, split with ',')"
    ></v-text-field>
    <v-checkbox
      v-model="sslRedirect"
      label="Always SSL"
      required
    ></v-checkbox>
  </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'NewContainer',
  data () {
    return {
      name: '',
      image: '',
      command: '',
      entrypoint: '',
      workDir: '',
      env: '',
      vol: '',
      sslRedirect: true
    }
  },
  methods: {
    cancel: function () {
      this.$router.push('.')
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
