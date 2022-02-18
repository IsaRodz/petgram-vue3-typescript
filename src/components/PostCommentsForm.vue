<template>
  <div class="flex bg-gray-100 rounded-xl px-3 py-2">
    <input
      class="bg-transparent outline-none flex-grow"
      placeholder="Add a new comment"
      v-model.trim="commentText"
      @keyup.enter="handleSubmit"
    />
    <button
      v-if="commentText"
      class="flex items-center text-blue-400"
      @click="handleSubmit"
    >
      <i class="pi pi-send"></i>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup(props, { emit }) {
    const commentText = ref("");

    const handleSubmit = () => {
      if (commentText.value) {
        emit("submit", {
          owner: {
            firstName: "Unknown",
            lastName: "user",
            picture: "http://picsum.photos/32",
          },
          message: commentText.value,
        });
        commentText.value = "";
      }
    };

    return {
      commentText,
      handleSubmit,
    };
  },
});
</script>
