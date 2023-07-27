<template>
  <div class="switcher d-flex justify-content-center">
    <div class="form-check form-switch d-flex justify-content-between align-items-center">
      <label class="form-check-label" for="flexSwitchCheckDefault"
        >All plugins {{ checked ? 'enabled' : 'disabled' }}</label
      >
      <input
        class="form-check-input ms-0"
        type="checkbox"
        id="flexSwitchCheckDefault"
        v-model="checked"
      />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      checked: false,
      updatedTabData: {}
    }
  },
  computed: {
    ...mapGetters({ tabsData: 'getTabsData', activeTab: 'getActiveTab' }),
    activeTabData() {
      const data = this.tabsData.filter((tab) => tab.title === this.activeTab)
      return data[0]
    }
  },
  methods: {
    ...mapActions({ togglePluginsState: 'togglePluginsState', getTabsData: 'getTabsData' }),
    enablePlugins() {
      const disabledPlugins = []
      const payload = {
        id: this.activeTabData.id,
        disabled: disabledPlugins
      }
      this.togglePluginsState(payload).then(() => {
        this.getTabsData()
      })
    },
    disablePlugins() {
      const disabledPlugins = [...this.activeTabData.active, ...this.activeTabData.inactive]
      const payload = {
        id: this.activeTabData.id,
        disabled: disabledPlugins
      }
      this.togglePluginsState(payload).then(() => {
        this.getTabsData()
      })
    }
  },
  watch: {
    checked(val) {
      if (val) {
        this.enablePlugins()
      } else {
        this.disablePlugins()
      }
    },
    activeTabData(val) {
      if (val.disabled.length == 0) {
        this.checked = true
      } else {
        this.checked = false
      }
    }
  }
}
</script>
<style scoped lang="scss">
.switcher {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: linear-gradient(0deg, rgba(139, 0, 0, 0.331) 1%, var(--vt-c-text-dark-2) 98%);
  &.checked {
    background: linear-gradient(0deg, rgba(0, 128, 0, 0.97) 1%, var(--vt-c-text-dark-2) 98%);
  }
  .form-check {
    padding-bottom: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    width: 230px;
  }
  .form-check-input {
    width: 3em;
    height: 1.7em;
    box-shadow: none;
    cursor: pointer;
    border-color: darkred;
    background-color: darkred;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
    &:checked {
      border-color: green;
      background-color: green;
    }
  }
  .form-check-label {
    color: #375a6b;
  }
}
</style>
