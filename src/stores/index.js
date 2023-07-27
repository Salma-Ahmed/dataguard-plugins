import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    activeTab: 'Marketing',
    pluginsList: [],
    tabsData: []
  },
  mutations: {
    setActiveTab(state, payload) {
      state.activeTab = payload
    },
    setTabsData(state, payload) {
      state.tabsData = payload
    },
    setPluginsList(state, payload) {
      state.pluginsList = payload
    }
  },
  actions: {
    async getTabsData(state) {
      let response
      try {
        response = await axios.get('http://localhost:3000/tabdata')
        state.commit('setTabsData', response.data)
      } catch (err) {
        console.log(err)
      }
    },
    async getPluginsList(state) {
      let response
      try {
        response = await axios.get('http://localhost:3000/plugins')
        state.commit('setPluginsList', response.data)
      } catch (err) {
        console.log(err)
      }
    },
    async togglePluginState(state, payload) {
      let response
      try {
        response = await axios.patch(`http://localhost:3000/tabData/${payload.id}`, payload)
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
    async togglePluginsState(state, payload) {
      let response
      try {
        response = await axios.patch(`http://localhost:3000/tabData/${payload.id}`, payload)
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  },
  getters: {
    getActiveTab(state) {
      return state.activeTab
    },
    getTabsData(state) {
      return state.tabsData
    },
    getPluginsList(state) {
      return state.pluginsList
    }
  }
})
