<template>
  <div class="modal-container" v-if="modelValue">
    <div class="modal-overlay" @click="close"></div>
    <button @click="close" class="text-white absolute right-10 top-10">
      <i class="pi pi-times"></i>
    </button>
    <div class="modal-body">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit("update:modelValue", false);
    },
  },
});
</script>

<style lang="postcss" scoped>
.modal-container {
  @apply fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 p-5;
}
.modal-overlay {
  @apply absolute bg-gray-900 top-0 left-0 right-0 bottom-0 bg-opacity-80;
}

.modal-body {
  @apply max-w-lg w-full rounded-xl bg-white shadow-2xl p-5 z-10;
}
</style>
