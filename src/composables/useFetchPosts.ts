import { onMounted, Ref, ref, watch } from 'vue';
import api from '@/providers/api';
import { Post } from '@/interfaces';

//
export function useFetchPosts() {
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
    loading,
    page
  };
}
