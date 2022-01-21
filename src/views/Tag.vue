<template>
  <div class="tag">
      <div v-if="error">{{ error }}</div>
      <div v-if="posts.length" class="overlay">
          <PostList :posts="postTags" />
          <TagCloud :posts="posts"/>
      </div>
      <div v-else>
          <Spinner />
      </div>
      
  </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'
import getPosts from '../composables/getPosts'
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'
export default {
    components: { PostList, Spinner, TagCloud },
    setup(){
        const route = useRoute()
        const { posts, error, load } = getPosts()

        load()

        const postTags = computed(() => {
            return posts.value.filter(post => post.tags.includes(route.params.tag))
        })

        return { posts, error, postTags }
    }
}
</script>

<style>
    .tag {
        max-width: 1000px;
        margin: 0 auto;
        padding: 10px;
    }
</style>