<template>
	<Layout>
		<h1>Notes</h1>
		<p
			v-for="note in $page.notes.edges"
			:key="note.node.id"
		>
			<meta-info :datetime="note.node.date_created" />
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
                date_created
            }
        }
    }
}
</page-query>

<script>
import MetaInfo from "@/components/MetaInfo";
export default {
	components: {
		MetaInfo
	}
};
</script>

<style lang="sass" scoped>

</style>