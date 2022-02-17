<template>
  <template v-if="modelValue">
    <div class="modal-overlay" @click="close"></div>
    <button @click="close" class="text-white fixed right-10 top-10">
      <i class="pi pi-times"></i>
    </button>
    <div class="modal-body">
      <slot></slot>
    </div>
  </template>
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
