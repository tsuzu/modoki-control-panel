// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import Store from './Store'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Swagger from 'swagger-client'

Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})

// console.log(ModokiApi.ContainerApi.container_list())

var apiClient = null

Vue.mixin({
  methods: {
    asJSON: async function (res) {
      const fetchRes = await fetch(URL.createObjectURL(res))
      const data = await fetchRes.json()

      return data
    },
    getClient: async function () {
      if (apiClient != null) {
        return apiClient
      }

      // const origin = location.origin
      const origin = 'https://modoki.tsuzu.xyz'

      const swaggerPath = origin + '/api/v2/swagger/swagger.json'

      console.log(Swagger.SwaggerClient)
      Swagger.http.withCredentials = true

      var client = await Swagger(
        swaggerPath,
        {
          authorizations: {
            jwt: 'Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJtb2Rva2kiLCJleHAiOjE1MzQzMjk1ODAsImlhdCI6MTUzMTY1MTE4MCwiaXNzIjoibW9kb2tpIiwianRpIjoiZjc5M2RhMTItMmMyYS00ZWY5LWE5NjgtNjA3MzE3YTdjNGNjIiwibmJmIjoyLCJzY29wZXMiOiJhcGk6YWNjZXNzIiwic3ViIjoic3ViamVjdCIsInVpZCI6IjEifQ.oJGvANVPhzv9HBoxEzg08dUSglPuMMhhH1gdSNtRka-SKdLQVjQit_MKcE4Z5tzoD9GR3qsoYdAEQuo_UtaqB0eJla5QoViUbP_sHOxlksVczFYRVuySxHdD8A3v9a_ig-uc7BQjpIKNkJIL5hR_rFoKkImaOkQdZncMJFs9rpHWv_RWzmYEHC9FVp_TO82CHvoHIIYdssDP-VdqFqSM93R26Tkkoy0cZUWvJh5h-aPiShXJHCBNgfT5Jr3W7LP-KqKJAvoXBoIiTW7IpRAogbKRQQfltuwcaN5p4ZXt6qhC6ZV0o1M19RmZ8At_1aOCIWyB3wpPmhpBp8q0OnuXOnvPxISTMA12QMs_3H9sRl9heRfzt2vPN1649XOFimTkNkslSiX38RW7mhaKij_VQfyidk7eb4qD6j6kQJ0HAxqrmmGbevlt7JnCQfMNH6SgchPW2IOujuXhfD0oE5qnnf6nB_EV19d5TfT2PKjFOBiUskEjCYRRANfcB-zahX64NxegQVZN2FNJHrCi7pHDS61qNdIcrKpnFscXF1PEvwcMzVVT7RarwUo0c9BND4hzqnZFL34kBZkrfhF5G7CLpc42qDzjYWXYVUasfz3g9NvA-UEtSUgpu4nCZZJkvENaGSm6OmNHXW4jNYjWSvqEHkNnr1NCKsUXwhc6aJb1AIA'
          }
        }
      )

      // client.schemes = [location.protocol.split(':')[0]]
      client.schemes = ['https']
      //  client.spec.host = location.hostname
      client.spec.host = 'modoki.tsuzu.xyz'

      // client.spec.authorizations.jwt
      console.log('generated')

      apiClient = client

      return client
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: Store,
  components: { App },
  template: '<App/>'
})
