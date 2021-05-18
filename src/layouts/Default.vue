<template>

  <div id="app">

    <header class="header">
      <div class="header__left">
        <Logo v-if="showLogo" />
      </div>

      <!-- <div class="header__right">
        <ToggleTheme />
      </div> -->
    </header>

    <main class="main">
      <slot/>
    </main>

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
</style>
