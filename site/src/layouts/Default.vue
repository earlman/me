<template>
	<div>
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



main.layout
    max-width: var(--layout-max-width)
    margin: var(--space-xl) auto

</style>
