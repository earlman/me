<template>
	<Layout>
		<article>
			<div class="title-block">
				<h1 class="title">{{$page.article.title}}</h1>
				<h4
					class="subtitle"
					v-if="$page.article.subtitle"
				>{{$page.article.subtitle}}</h4>
			</div>
			<div
				v-html="$page.article.content"
				class="article-content"
			></div>
		</article>
	</Layout>
</template>

<script>
export default {};
</script>

<page-query>
query ($id: ID!) {
    article(id: $id) {
        title
        subtitle
        content
        excerpt
        path
    }
}
</page-query>

<style lang="sass" scoped>

    .article-content

        ::v-deep

            h2
                font-size: var(--d-xl)
                margin-bottom: var(--space-xs)
                margin-top: var(--space-md)


    .title-block
        margin-bottom: var(--space-md)

        .title
            margin-bottom: var(--space-xs)
        .subtitle
            font-family: var(--font-primary)
            font-weight: 400
            
            


</style>