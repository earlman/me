<template>
	<Layout>
		<meta-info
			:datetime="$page.note.date_created"
			showTime
			:showTags="false"
		/>
		<h1>{{$page.note.title}}</h1>
		<div v-html="$page.note.content"></div>
		<meta-info
			:datetime="$page.note.date_created"
			:showDate="false"
		/>
	</Layout>
</template>


<script>
import MetaInfo from "@/components/MetaInfo";
export default {
	components: {
		MetaInfo
	}
};
</script>

<page-query>
query ($id: ID!) {
    note(id: $id) {
        content
        path
        date_created
    }
}
</page-query>

<style lang="sass" scoped>

</style>