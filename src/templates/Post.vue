<template>
  <Layout>
    <div class="post-title">
      <h1 class="post-title__text">
        {{ $page.post.title }}
      </h1>

      <PostMeta :post="$page.post" />

    </div>

    <div class="post content-box">
      <div class="post__header">
        <g-image alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
      </div>

      <div class="post__content" v-html="$page.post.content" />

      <div class="post__footer">
        <PostTags :post="$page.post" />
      </div>
    </div>

    <div class="post-comments">
        <div class="vue-utterances" ref="vueUtterances">
          <!-- utterances comment here -->
        </div>
    </div>
    <Author class="post-author" />
  </Layout>
  
</template>
<script >
</script>
<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import Author from '~/components/Author.vue'

export default {
  components: {
    Author,
    PostMeta,
    PostTags,
  },
  mounted() {
    let utterances = document.createElement("script");
    utterances.async = true;
    utterances.setAttribute("src", "https://utteranc.es/client.js");
    utterances.setAttribute("repo","mychan152000/willogyblogtest");
    utterances.setAttribute("issue-term", "pathname");
    utterances.setAttribute("theme", "github-light");
    utterances.setAttribute("async", true);
    utterances.setAttribute("crossorigin", "anonymous");
    this.$refs.vueUtterances.appendChild(utterances);
  },
  //OLD META INFO 
  // metaInfo () {
  //   return {
  //     title: this.$page.post.title,
  //     meta: [
  //       {
  //         name: 'description',
  //         content: this.$page.post.description
  //       }
  //     ]
  //   }
  // }
  
  metaInfo() {
    return {
      title: this.$page.post.title,
      link: [
      {rel: 'canonical', href: 'https://insights.willogy.io/' + this.$page.post.title}
      ],
      meta: [
        {
          property: "og:title",
          content: this.$page.post.title
        },
        {
          name: "twitter:card",
          content: this.$page.post.image ? "summary_large_image" : "summary",
        },
        {
          property: "og:description",
          content: this.$page.post.excerpt
        },
        {
          property: "og:type",
          content: 'article, blog, content, research'
        },
        
        {
          property: "og:image",
          content: this.$page.post.cover_image || ""
        },
      ]
    };
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
  margin: 1.8em 1em;

  &__text {
    font-size: 2em;
  }
}

.post {

  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.post-comments {
  padding: calc(var(--space) / 2);

  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}
</style>
