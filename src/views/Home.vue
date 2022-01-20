<template>
  <div class="home">
   <h1>Home</h1>
  <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import { ref } from 'vue'
export default {
  name: 'Home',
  components: { PostList },
  setup() {
    const posts = ref([
      {title: 'hello', body:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita deleniti deserunt soluta, est ducimus sed voluptatibus porro ab qui architecto, maxime aspernatur ex nemo obcaecati voluptatem. Id praesentium, hic veritatis esse harum aspernatur dolorem eius ut aliquid. Quas dolorem voluptatibus iusto odio maiores. Obcaecati  ut? Explicabo nisi quibusdam corrupti, nobis consequuntur, tempore sed voluptates exercitationem expedita nam aut excepturi autem placeat vero, esse iure asperiores aspernatur facilis odit blanditiis fuga. Optio omnis consectetur quo nam dolor.', id: 1},
      {title: 'second hello', body:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita deleniti deserunt soluta, est ducimus sed voluptatibus porro ab qui architecto, maxime aspernatur ex nemo obcaecati voluptatem. Id praesentium, hic veritatis esse harum aspernatur dolorem eius ut aliquid. Quas dolorem voluptatibus iusto odio maiores. Obcaecati  ut? Explicabo nisi quibusdam corrupti, nobis consequuntur, tempore sed voluptates exercitationem expedita nam aut excepturi autem placeat vero, esse iure asperiores aspernatur facilis odit blanditiis fuga. Optio omnis consectetur quo nam dolor', id: 2},
    ])

    return { posts }
  }
}
</script>
