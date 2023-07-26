<script setup>
import PluginComponent from './PluginComponent.vue'
defineProps({
  title: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    required: true
  }
})
</script>
<template>
  <div
    class="tab-pane fade"
    :class="isActive ? 'active show' : ''"
    :id="`v-pills-${title}`"
    role="tabpanel"
    :aria-labelledby="`v-pills-${title}-tab`"
  >
    <p class="mb-5">{{ title }} plugins</p>
    <div class="d-flex flex-wrap justify-content-between">
      <PluginComponent />
      <PluginComponent />
      <PluginComponent />
      <PluginComponent />
      <PluginComponent />
      <PluginComponent />
    </div>
  </div>
</template>
