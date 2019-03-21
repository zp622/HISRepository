
const user = {
  state: {
    username: '',
    password: ''
  },
  mutations: {
    SET_USERNAME: (state, username) => {
      state.username = username
    },
    SET_PASSWORD: (state, password) => {
      state.password = password
    }
  },
  actions: {
    userLogin ({commit}, userInfo) {
      var username = userInfo.username.trim()
      var password = userInfo.password
      commit('SET_USERNAME', username)
      commit('SET_PASSWORD', password)
    },
    loginOut ({ commit, state }) {
      commit('SET_USERNAME', '')
      commit('SET_PASSWORD', '')
    }
  }
}

export default user
