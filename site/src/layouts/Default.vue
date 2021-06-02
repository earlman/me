<template>
	<div>
		<div class="navbar">
			<Navbar :colored="coloredNav" />
		</div>
		<main class="layout">
			<slot />
		</main>
		<div class="edit-link">
			<h6 class="github-edit-link">
				<a href="https://github.com/earlman/me-content" target="_blank">
					Edit on GitHub
				</a>
			</h6>
		</div>
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
		Footer,
	},
	props: {
		coloredNav: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style lang="sass">



main.layout
    width: var(--layout-width)
    max-width: var(--layout-max-width)
    margin: var(--space-lg) auto

div.edit-link
    width: var(--layout-width)
    max-width: var(--layout-max-width)
    margin: 0 auto

.github-edit-link 
    text-align: right
    
    a
        color: var(--color-a)
        font-size: var(--d-sm)
</style>
