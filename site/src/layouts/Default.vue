<template>
<div>
	<div class="accent-bar"></div>
	<div class="navbar">
		<Navbar />
	</div>
	<main class="layout">
		<slot />
	</main>
</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from "~/components/Navbar";

export default {
	components: {
		Navbar
	}
};
</script>

<style lang="sass">

.accent-bar
    width: 100vw
    height: 10px
    background-color: var(--color-a)

.navbar
    width: var(--layout-width)
    max-width: var(--layout-max-width)
    margin: auto

main.layout
    max-width: var(--layout-max-width)
    margin: var(--space-xl) auto

</style>
