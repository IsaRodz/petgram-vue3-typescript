<template>
  <h1 class="text-semibold text-xl mb-3">Comments</h1>

  <p v-if="!comments.length && !loading" class="text-gray-400 text-center my-8">
    No comments yet
  </p>
  <ul v-else class="my-6">
    <li v-for="comment of comments" :key="comment.id" class="mb-5">
      <div class="flex">
        <figure class="flex-shrink-0 mr-2">
          <img :src="comment.owner.picture" class="w-8 rounded-full" />
        </figure>
        <div class="">
          <p class="font-semibold text-sm">
            {{ comment.owner.firstName }} {{ comment.owner.lastName }}
          </p>
          <p>{{ comment.message }}</p>
        </div>
      </div>
    </li>
  </ul>
  <Loader v-if="loading" />
  <PostCommentsForm v-else @submit="addComment" />
</template>

<script lang="ts">
import { Comment } from "@/interfaces";
import api from "@/providers/api";
import { defineComponent, onMounted, ref } from "vue";
import Loader from "./Loader.vue";
import PostCommentsForm from "./PostCommentsForm.vue";

export default defineComponent({
  props: {
    postId: {
      required: true,
      type: String,
    },
  },
  components: { Loader, PostCommentsForm },
  setup(props) {
    const loading = ref(false);
    const comments = ref<Comment[]>([]);

    const getComments = async () => {
      loading.value = true;
      try {
        const { data } = await api.getCommentsByPost(props.postId);
        comments.value = data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    };

    const addComment = (comment: Comment) => {
      comments.value.push(comment);
    };

    onMounted(getComments);

    return {
      loading,
      comments,
      addComment,
    };
  },
});
</script>
