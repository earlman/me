<template>
	<div>
		<h1>{{$page.article.title}}</h1>
		<div v-html="$page.article.content"></div>
	</div>
</template>

<script>
export default {};
</script>

<page-query>
query ($id: ID!) {
    article(id: $id) {
        title
        content
        excerpt
        path
    }
}
</page-query>

<style lang="sass" scoped>

</style>