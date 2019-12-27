<template>
	<div class="layout">
		<Navbar />
		<slot />
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

<style>
</style>
