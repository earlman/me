<template>
	<Layout>
		<h1>Notes</h1>
		<p
			v-for="note in $page.notes.edges"
			:key="note.node.id"
		>
			<g-link :to="note.node.path">
				<div v-html="note.node.content"></div>
			</g-link>
		</p>
	</Layout>
</template>

<page-query>
query {
    notes: allNote {
        edges {
            node {
                id
                path
                content
            }
        }
    }
}
</page-query>

<script>
export default {};
</script>

<style lang="sass" scoped>

</style>