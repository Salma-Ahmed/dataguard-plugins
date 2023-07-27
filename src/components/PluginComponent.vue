<template>
  <div class="plugin mb-5" :class="!isPluginInTab ? 'd-none' : ''">
    <div class="d-flex justify-content-between">
      <h5 :disabled="pluginInactive">{{ plugin.title }}</h5>
      <div
        class="form-check form-switch d-flex flex-column align-items-center active"
        :class="pluginInactive ? `inactive ${pluginState}` : pluginState"
        :disabled="pluginInactive"
      >
        <input
          class="form-check-input ms-0"
          type="checkbox"
          :id="`flexSwitchCheckDefault${plugin.title}`"
          v-model="checked"
          :disabled="pluginInactive"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault">{{ pluginState }}</label>
      </div>
    </div>
    <p class="w-75 mt-2" :disabled="pluginInactive">
      {{ plugin.description }}
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pluginState: '',
      pluginInactive: false,
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
    pluginInTab() {
      if (this.tab.active.includes(this.plugin.title.replace(/ /g, '').toLowerCase())) {
        this.pluginState = 'allowed'
        this.pluginInactive = false
        this.checked = true
        this.isPluginInTab = true
        return true
      } else if (this.tab.disabled.includes(this.plugin.title.replace(/ /g, '').toLowerCase())) {
        this.pluginState = 'blocked'
        this.pluginInactive = false
        this.checked = false
        this.isPluginInTab = true
        return true
      } else if (this.tab.inactive.includes(this.plugin.title.replace(/ /g, '').toLowerCase())) {
        this.pluginState = 'allowed'
        this.pluginInactive = true
        this.checked = true
        this.isPluginInTab = true
        return true
      } else {
        this.isPluginInTab = false
        return false
      }
    }
  },
  mounted() {
    this.pluginInTab()
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
