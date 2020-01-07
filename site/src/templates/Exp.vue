<template>
	<Layout>
		<div v-if="$page.movie">
			<h1>{{$page.movie.title}}</h1>
			<div v-html="$page.movie.content"></div>
		</div>
		<div v-if="$page.book">
			<h1>{{$page.book.title}}</h1>
			<div v-html="$page.book.content"></div>
		</div>
	</Layout>
</template>

<script>
// move data from query into a v-data object called "expItem" or something. This is so we can avoid duplicated html

export default {};
</script>

<page-query>
query ($id: ID!) {
    movie(id: $id) {
        title
        content
        excerpt
        path
    }
    book(id: $id) {
        title
        content
        excerpt
        path
    }
}
</page-query>

<style lang="sass" scoped>

</style>