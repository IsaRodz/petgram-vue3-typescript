<template>
  <div class="bg-white shadow-xl rounded-2xl">
    <img :src="post.image" class="rounded-2xl" />
    <div class="p-4">
      <PostCardAuthor :author="post.owner" />
      <div class="flex flex-wrap gap-1">
        <span
          v-for="(tag, index) of post.tags"
          :key="index"
          class="text-blue-400 cursor-pointer hover:text-blue-500"
        >
          #{{ tag }}
        </span>
      </div>
      <p>{{ post.text }}</p>
      <PostCardActions :postId="post.id" :likes="post.likes" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Post } from "@/interfaces";
import PostCardActions from "./PostCardActions.vue";
import PostCardAuthor from "./PostCardAuthor.vue";

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
  components: { PostCardActions, PostCardAuthor },
});
</script>
