<template>
<div class="container">
    <Layout :show-logo="true">
        <div class="row title">
            <div class="mx-auto">Work With Us</div>
        </div>
        <div class="row">
            <g-image src="~/assets/handshake.png" style="width:100%"/>
        </div>
        <div class="row head">
            <div class="mx-auto">Willogy's history</div>
        </div>
        <div class="row">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui metus, malesuada a tincidunt non, facilisis sit amet sem. Aliquam pharetra vitae est a mollis. Integer congue auctor quam. Sed felis ligula, vulputate ac euismod a, ullamcorper luctus dolor. In hac habitasse platea dictumst. Aenean eleifend luctus mi. Phasellus condimentum lorem enim, at consequat libero commodo ut.</p>
        </div>
        <div class="row head">
            <div class="mx-auto">Our Goals</div>
        </div>
        <div class="row">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui metus, malesuada a tincidunt non, facilisis sit amet sem. Aliquam pharetra vitae est a mollis. Integer congue auctor quam. Sed felis ligula, vulputate ac euismod a, ullamcorper luctus dolor. In hac habitasse platea dictumst. Aenean eleifend luctus mi. Phasellus condimentum lorem enim, at consequat libero commodo ut.
            </p>
        </div>
        <div class="row head">
            <div class="mx-auto">Take a look at the Office</div>
        </div>
        <div class="row">
            <g-image src="~/assets/handshake.png" style="width:100%"/>
        </div>
    </Layout>
</div>
  
</template>


<script>
export default {
  metaInfo() {
    return {
      link: [
      {rel: 'canonical', href: 'https://insights.willogy.io/work'}
      ],
      title: 'Willogy Insights | Work',
      meta: [
        {
          property: "og:title",
          content: 'Willogy Insights'
        },
        {
          name: "twitter:card",
          content: './src/assets/logo.svg' ? "summary_large_image" : "summary",
        },
        
        {
          property: "og:description",
          content: 'Knowledge is common. Our insights and experience on-top of them is unique'
        },
        {
          property: "og:type",
          content: 'article, blog, content, research, insights'
        },
        
        {
          property: "og:image",
          content: './src/assets/logo.svg' || ""
        },
      ]
    };
  }
}
</script>
<style scoped>
* {
  font-family: Helvetica, sans-serif;
}
.title {
  font-size: calc(15px + 2.5vw);
  font-weight: 700;
}
.head {
  font-weight: 700;
  font-size: calc(15px + 1vw);
}
.row {
  padding: 0.6em 0em;
}

</style>