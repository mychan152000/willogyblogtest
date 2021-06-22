<template>
  <div class="container">
    <Layout :show-logo="true">
      <!-- Author intro -->
      <Author :show-title="true" />

      <!-- List posts -->
      <div class="posts container-fluid">
        <div class="row" >
          <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
        </div>
      </div>

    </Layout>
  </div>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        ...on Post {
        id
        title
        path
        }
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    Author,
    PostCard
  },
  metaInfo: {
    title: 'Willogy Insights'
  }
}
</script>
<style  scoped>
table th, table td, table pre { 
  word-break: break-all !important;
}


</style>