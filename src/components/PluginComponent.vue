<script setup>
defineProps({
  plugin: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="plugin mb-5">
    <div class="d-flex justify-content-between">
      <p>Plugin 1</p>
      <div class="form-check form-switch d-flex flex-column align-items-center">
        <input class="form-check-input ms-0" type="checkbox" id="flexSwitchCheckDefault" />
        <label class="form-check-label" for="flexSwitchCheckDefault">Active</label>
      </div>
    </div>
    <p class="w-75">
      Proident sunt consequat exercitation incididunt cupidatat quis ut ut eu ullamco nisi excepteur
      aliqua.
    </p>
  </div>
</template>
<style scoped lang="scss">
.plugin {
  flex: 0 0 30%;
  border: 1px solid lightgray;
  border-radius: 15px;
  padding: 15px;
  &.active {
  }
  &.blocked {
  }
  &.inactive {
    opacity: 0.5;
  }
}
</style>
