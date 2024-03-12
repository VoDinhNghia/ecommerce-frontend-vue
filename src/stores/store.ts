import { createStore } from 'vuex'
import { getUserList } from '../services/user.service'

const store = createStore({
  state: {
    userLists: [],
    totalUser: 0
  },
  getters: {
    getUsers: (state) => {
      return state.userLists
    }
  },
  mutations: {
    setUsers: (state, users) => {
      state.userLists = users?.results
      state.totalUser = users?.total
    }
  },
  actions: {
    async getUserList({ commit }, payload) {
      const res = await getUserList(payload)
      commit('setUsers', res?.data?.data)
    }
  }
})

export default store
