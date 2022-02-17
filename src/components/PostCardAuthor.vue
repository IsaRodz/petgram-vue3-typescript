<template>
  <div class="flex items-center mb-2">
    <div class="mr-3">
      <img :src="author.picture" class="w-8 rounded-full" />
    </div>
    <p class="font-semibold">
      <span class="mr-1">{{ author.firstName }}</span>
      <span>{{ author.lastName }}</span>
    </p>
  </div>
</template>

<script lang="ts">
import { User } from "@/interfaces";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    author: {
      required: true,
      type: Object as PropType<User>,
    },
  },
});
</script>
