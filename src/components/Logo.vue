<template>
	<g-link class="logo" to="/">
	  <span class="logo__text">
<<<<<<< HEAD
	   <g-image class="image" src="~/assets/logo.svg" title="Willogy logo" alt="Willogy logo" width="50" height="50"/>
=======
	   <g-image class="image" src="~/assets/logo.svg" width="50" height="50"/>
>>>>>>> 366f2752e3f2bd8d60ad24a5ded36ba972b87cf3
	  </span>
	</g-link>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.logo {
	text-decoration: none;
  color: var(--body-color)!important;
  font-size: .9em;

	&__image {
		vertical-align: middle;
		border-radius: 99px;
		height: 40px;
		width: 10px;
		margin-right: .5em;
	}
}
</style>
