<template>
  <p class="text-gray-400 text-sm">{{ likes }} liked this</p>
  <div class="flex justify-between mt-2">
    <div class="flex gap-3">
      <button @click="liked = !liked">
        <i class="pi" :class="likedClass"></i>
      </button>
      <button @click="isModalOpen = true">
        <i class="pi pi-comment"></i>
      </button>
    </div>
    <button @click="saved = !saved">
      <i class="pi" :class="saved ? 'pi-bookmark-fill' : 'pi-bookmark'"></i>
    </button>
  </div>
  <Modal v-model="isModalOpen">
    <PostComments :postId="postId" />
  </Modal>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import Modal from "./Modal.vue";
import PostComments from "./PostComments.vue";

export default defineComponent({
  components: { Modal, PostComments },
  props: {
    likes: {
      type: Number,
      required: true,
    },
    postId: {
      // TODO: Refactor with provide/inject
      // this component doesnt need this `postId`  prop
      type: String,
      required: true,
    },
  },
  setup() {
    const liked = ref(false);
    const saved = ref(false);
    const isModalOpen = ref(false);

    const likedClass = computed(() => {
      return liked.value ? "pi-heart-fill text-red-500" : "pi-heart";
    });

    return {
      liked,
      saved,
      likedClass,
      isModalOpen,
    };
  },
});
</script>
