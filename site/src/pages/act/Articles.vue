<template>
	<Layout>
		<h1>Article Template</h1>
		<p
			v-for="article in $page.articles.edges"
			:key="article.node.id"
		>
			<g-link :href="article.node.path">{{article.node.title}}</g-link>
		</p>
	</Layout>
</template>

<page-query>
query {
    articles: allArticle {
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