// take in an array of posts
// create a new tag set(no duplicate)
// add the tags of each post to the tag set
// return a single array of tags based on the set


import { ref } from 'vue'
import {  } from 'vue-router'

const useTags = (posts) => {
    const tagSet = new Set()
    const tags = ref([])
    
    posts.forEach(post => {
        post.tags.forEach(tag => {
            tagSet.add(tag)
        })
    })
    tags.value = [...tagSet]

    return { tags }

}
export default useTags