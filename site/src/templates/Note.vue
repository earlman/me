<template>
	<div>
		<h1>{{$page.note.title}}</h1>
		<div v-html="$page.note.content"></div>
	</div>
</template>

<script>
export default {};
</script>

<page-query>
query ($id: ID!) {
    note(id: $id) {
        content
        path
    }
}
</page-query>

<style lang="sass" scoped>

</style>