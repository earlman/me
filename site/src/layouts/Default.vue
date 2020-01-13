<template>
	<div>
		<div class="navbar">
			<Navbar :colored="coloredNav" />
		</div>
		<main class="layout">
			<slot />
		</main>
		<Footer />
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
import Footer from "~/components/Footer";

export default {
	components: {
		Navbar,
		Footer
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
    width: var(--layout-width)
    max-width: var(--layout-max-width)
    margin: var(--space-lg) auto

</style>
