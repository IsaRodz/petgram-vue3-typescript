import axios from 'axios';
import { onMounted, ref } from 'vue';

export default function useFetchPosts() {
  const posts = ref([]);

  onMounted(async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    posts.value = data;
  });

  return {
    posts
  };
}
