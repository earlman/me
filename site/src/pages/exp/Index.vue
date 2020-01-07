<template>
	<Layout>
		<h1>Experience</h1>
		<h2>Books</h2>
		<p
			v-for="item in $page.books.edges"
			:key="item.node.id"
		>
			<g-link :to="item.node.path">{{item.node.title}}</g-link>
		</p>
		<h2>Movies</h2>
		<p
			v-for="item in $page.movies.edges"
			:key="item.node.id"
		>
			<g-link :to="item.node.path">{{item.node.title}}</g-link>
		</p>
		<h2>Shows</h2>
	</Layout>
</template>

<page-query>
query {
    movies: allMovie {
        edges {
            node {
                id
                title
                path
            }
        }
    }
    books: allBook {
        edges {
            node {
                id
                title
                path
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