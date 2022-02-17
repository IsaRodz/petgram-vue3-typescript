<template>
  <div class="max-w-xl mx-auto grid gap-8 sm:px-5">
    <PostCard v-for="post of posts" :key="post.id" :post="post" />
    <loader v-if="loading"></loader>
    <div class="text-center">
      <button v-if="posts.length && !loading" class="button" @click="page++">
        Load more
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import { Post } from "@/interfaces";
import Loader from "./Loader.vue";
import PostCard from "./PostCard.vue";

import api from "@/providers/api";

export default defineComponent({
  components: {
    Loader,
    PostCard,
  },
  setup() {
    const posts = ref<Post[]>([]);
    const loading = ref(false);
    const page = ref(0);

    const getPosts = async () => {
      loading.value = true;
      const { data } = await api.getPosts(page.value);
      posts.value.push(...data); // = data;
      loading.value = false;
    };

    onMounted(getPosts);

    watch(page, getPosts);

    return {
      posts,
      page,
      loading,
    };
  },
});
</script>
