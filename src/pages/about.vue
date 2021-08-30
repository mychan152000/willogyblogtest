<template>
<div class="container">
    <Layout :show-logo="true">
        <div class="row title">
            <div class="mx-auto">About Us</div>
        </div>
        <div class="row">
            <g-image src="~/assets/handshake.png" style="width:100%"/>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="row head">
                <div>Willogy's history</div>
              </div>
              <div class="row">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui metus, malesuada a tincidunt non, facilisis sit amet sem. Aliquam pharetra vitae est a mollis. Integer congue auctor quam. Sed felis ligula, vulputate ac euismod a, ullamcorper luctus dolor. In hac habitasse platea dictumst. Aenean eleifend luctus mi. Phasellus condimentum lorem enim, at consequat libero commodo ut.</p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12"></div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12"></div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="row head">
                <div>Our Goals</div>
              </div>
              <div class="row">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui metus, malesuada a tincidunt non, facilisis sit amet sem. Aliquam pharetra vitae est a mollis. Integer congue auctor quam. Sed felis ligula, vulputate ac euismod a, ullamcorper luctus dolor. In hac habitasse platea dictumst. Aenean eleifend luctus mi. Phasellus condimentum lorem enim, at consequat libero commodo ut.
                  </p>
              </div>
            </div>
          </div>
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
      {rel: 'canonical', href: 'https://insights.willogy.io/about'}
      ],
      title: 'Willogy Insights | About',
      meta: [
        {
          property: "og:title",
          content: 'About Willogy'
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
.d-flex {
  flex-direction: column;
  flex-wrap: wrap;
}
.row {
  padding: 0.6em 0em;
}

</style>