<template>
	<div>
		<div class="navbar">
			<Navbar :colored="coloredNav" />
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
	},
	props: {
		coloredNav: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style lang="sass">



main.layout
    max-width: var(--layout-max-width)
    margin: var(--space-xl) auto

</style>
