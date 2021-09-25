<template>
<div class="container">
    <Layout :show-logo="true">
        <div class="row title">
            <div class="mx-auto">Work With Us</div>
        </div>
        <div class="row">
            <g-image src="~/assets/handshake.png" style="width:100%"/>
        </div>
        <form
        name="contact"
        method="post"
        v-on:submit.prevent="handleSubmit"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
            <label>
            Don’t fill this out: <input name="bot-field" />
            </label>
        </p>
          <div class="form-group">
            <label for="name" class="label">Your Name</label>
            <input type="text" name="name" v-model="formData.name" class="form-control" placeholder="Name">
          </div>
          <div class="form-group">
            <label for="email" class="label">Email</label>
            <input type="email" name="email" v-model="formData.email" class="form-control" placeholder="Email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="message" class="label">Message</label>
            <textarea name="message" v-model="formData.message" class="form-control" placeholder="Type your message here"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>




        <!-- <div class="container">
          <form
              name="contact"
              method="post"
              v-on:submit.prevent="handleSubmit"
              action="/success/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                  <label>
                  Don’t fill this out: <input name="bot-field" />
                  </label>
              </p>
              <div class="sender-info">
                  <div>
                  <label for="name" class="label" >Your name</label>
                  <input type="text" name="name" v-model="formData.name" />
                  </div>
                  <div>
                  <label for="email">Your email</label>
                  <input type="email" name="email" v-model="formData.email" />
                  </div>
              </div>

              <div class="message-wrapper">
                  <label for="message">Message</label>
                  <textarea name="message" v-model="formData.message"></textarea>
              </div>

              <button type="submit">Submit form</button>
          </form>
        </div> -->
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
    data() {
        return {
            formData: {},
        }
    },
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
    },
    methods: {
        encode(data) {
            return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&')
        },
        handleSubmit(e) {
            fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: this.encode({
                'form-name': e.target.getAttribute('name'),
                ...this.formData,
            }),
            })
            .then(() => window.location.reload())
            .then(() => alert("Form sent successfully"))
            .catch(error => alert(error))
        }
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