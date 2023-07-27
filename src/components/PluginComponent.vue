<template>
  <div class="plugin mb-5" :class="!isPluginInTab ? 'd-none' : ''">
    <div class="d-flex justify-content-between">
      <h5 :disabled="pluginDisabled">{{ plugin.title }}</h5>
      <div
        class="form-check form-switch d-flex flex-column align-items-center active"
        :class="pluginDisabled ? `inactive ${pluginState}` : pluginState"
        :disabled="pluginDisabled"
      >
        <input
          class="form-check-input ms-0"
          type="checkbox"
          :id="`flexSwitchCheckDefault${plugin.title}`"
          v-model="checked"
          :disabled="pluginDisabled"
          @change="onChange"
        />
        <label class="form-check-label text-capitalize" for="flexSwitchCheckDefault">{{
          pluginState
        }}</label>
      </div>
    </div>
    <p class="w-75 mt-2" :disabled="pluginDisabled">
      {{ plugin.description }}
    </p>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      pluginState: '',
      pluginDisabled: false,
      checked: false,
      isPluginInTab: true
    }
  },
  props: {
    tab: {
      required: true,
      default: () => {}
    },
    plugin: {
      required: true,
      default: () => {}
    }
  },
  methods: {
    ...mapActions({ togglePluginState: 'togglePluginState', getTabsData: 'getTabsData' }),
    enablePlugin() {
      const pluginTitle = this.plugin.title.replace(/ /g, '').toLowerCase()
      const tabData = { ...this.tab }
      const activePlugins = [...this.tab.active, pluginTitle]
      let index = tabData.inactive.indexOf(pluginTitle)
      if (index !== -1) {
        tabData.inactive.splice(index, 1)
      }
      const inactivePlugins = [...tabData.inactive]
      const payload = {
        id: this.tab.id,
        active: activePlugins,
        inactive: inactivePlugins
      }
      this.togglePluginState(payload).then(() => {
        this.getTabsData()
      })
    },
    disablePlugin() {
      const pluginTitle = this.plugin.title.replace(/ /g, '').toLowerCase()
      const tabData = { ...this.tab }
      const inactivePlugins = [...this.tab.inactive, pluginTitle]
      let index = tabData.active.indexOf(pluginTitle)
      if (index !== -1) {
        tabData.active.splice(index, 1)
      }
      const activePlugins = [...tabData.active]
      const payload = {
        id: this.tab.id,
        inactive: inactivePlugins,
        active: activePlugins
      }
      this.togglePluginState(payload).then(() => {
        this.getTabsData()
      })
    },
    onChange() {
      if (this.checked) {
        this.enablePlugin()
      } else {
        this.disablePlugin()
      }
    },
    loadPlugins() {
      if (
        this.tab.active.length &&
        this.tab.active.includes(this.plugin.title.replace(/ /g, '').toLowerCase())
      ) {
        this.pluginState = 'allowed'
        this.checked = true
        this.isPluginInTab = true
      } else if (
        this.tab.inactive.length &&
        this.tab.inactive.includes(this.plugin.title.replace(/ /g, '').toLowerCase())
      ) {
        this.pluginState = 'blocked'
        this.checked = false
        this.isPluginInTab = true
      } else {
        this.isPluginInTab = false
        return false
      }
      if (
        this.tab.disabled.length &&
        this.tab.disabled.includes(this.plugin.title.replace(/ /g, '').toLowerCase())
      ) {
        this.pluginDisabled = true
        this.isPluginInTab = true
      }
    }
  },

  mounted() {
    this.loadPlugins()
  },
  watch: {
    checked(val) {
      if (val) {
        this.pluginState = 'allowed'
      } else {
        this.pluginState = 'blocked'
      }
    }
  }
}
</script>
<style scoped lang="scss">
.plugin {
  flex: 0 0 30%;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 15px;
  color: gray;
  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    flex: 0 0 48%;
  }
  .form-check {
    &.allowed {
      color: green;
    }
    &.blocked {
      color: darkred;
    }
    &.inactive {
      opacity: 0.4;
      cursor: not-allowed;
    }
    .form-check-label {
      font-weight: bold;
      font-size: 0.8rem;
    }
  }
  .form-switch .form-check-input {
    width: 2.5em;
    height: 1.3em;
    cursor: pointer;
    box-shadow: none;
    background-color: darkred;
    border-color: darkred;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
    &:checked {
      background-color: green;
      border-color: green;
    }
  }
}
</style>
