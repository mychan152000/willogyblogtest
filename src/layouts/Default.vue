<template>

  <div id="app">

    <header class="header">
      <div class="header__left">
        <Logo v-if="showLogo" />
      </div>

      <div class="header__right">
        <g-link to="/about" style="padding-right: 2em; color: black">About us</g-link>
        <g-link to="/work" style="color: black">Work with us</g-link>
      </div>
    </header>

    <main class="main">
      <slot/>
    </main>

    <section class="newsletter">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="content">
              <h2 style="font-weight: 800">Join Our Newsletter</h2>
              <form action="https://gmail.us5.list-manage.com/subscribe/post?u=eebdfd426b21787d3fd02fe52&amp;id=1b45ca86d0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div class="input-group">
                      <input style="outline: 0; border-width: 0 0 2px; background-color: #F4F4F4" type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
                      <span>
                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button btn">
                      </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <footer class="footer flex">
      <span class="footer__copyright">Copyright © Willogy {{ new Date().getFullYear() }}. </span>
      <ul class="footer__list">
        <li>Follow on <a href="https://willogy.io" style="color:#6B17E6" target="_blank">Willogy.io</a></li>
        <li><a href="https://willogy.io/#" target="_blank">Products</a></li>
        <li><a href="https://willogy.io/#about" target="_blank">About</a></li>
      </ul>
    </footer>

  </div>
</template>

<script>

import Logo from '~/components/Logo.vue'
// import ToggleTheme from '~/components/ToggleTheme.vue'

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
  }

}
</script>

<style lang="scss">
.footer li{
  display: inline;
  margin: 0px 12px;   
}

.newsletter {
  margin-top: 2em;
  padding: 0 5em;
  border-radius: 10px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top:0;
  z-index: 10;
  background-color: #ffffff;
  border-bottom: 1px solid #ececec;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}

.footer {
  display: flex;
  justify-content: space-between;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: .8em;

  > span {
    margin: 0 .35em;
    
  }

  a {
    color: currentColor;
  }
  &__list {
    list-style-type: none;
  }
}

a {
  color: black;
  text-decoration: none !important;
}

.newsletter {
padding: 30px 0px;
background: #F4F4F4;
}

.newsletter .content {
max-width: 500px;
margin: 0 auto;
text-align: center;
position: relative;
z-index: 2; }

.newsletter .content h2 {
color: #000000;
margin-bottom: 40px; 
}

.newsletter .content .form-control {
height: 50px;
border-color: gray;
border-radius:0;
}

.newsletter .content.form-control:focus {
box-shadow: none;
border: 2px solid #000000;
}

.newsletter .content .btn {
min-height: 50px; 
border-radius:10px;
background: #000000;
color: #fff;
font-weight:600;
margin-top:1em;

}

.newsletter .input-group {
  flex-direction: column;
}
</style>
