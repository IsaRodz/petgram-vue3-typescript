<template>
  <div class="my-8">
    <PostList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostList from './components/PostList.vue';

export default defineComponent({
  name: 'App',
  components: {
    PostList
  }
});
</script>
