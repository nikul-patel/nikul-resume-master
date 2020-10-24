import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { currentJWT: '' },

  getters: {
    jwt       : (state) => state.currentJWT,
    jwtData   : (state, getters) => state.currentJWT ? JSON.parse(atob(getters.jwt.split('.')[1])) : null,
    jwtSubject: (state, getters) => getters.jwtData ? getters.jwtData.sub : null,
    jwtIssuer : (state, getters) => getters.jwtData ? getters.jwtData.iss : null,
  },

  mutations: {
    setJWT (state, jwt) {
      // When this updates, the getters and anything bound to them updates as well.
      state.currentJWT = jwt
    },
  },

  actions: {
    async fetchJWT ({ commit }, { username, password }) {
      // Perform the HTTP request.
      const res = await fetch(`http://localhost/vuejs-jwt-example/auth?u=${username}&p=${password}`)
      // Calls the mutation defined to update the state's JWT.
      commit('setJWT', await res.text())
    },
  },
})
