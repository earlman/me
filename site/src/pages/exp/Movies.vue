<template>
	<Layout>
		<h1>Movies</h1>
		<exp-container :items="$page.movies.edges" />
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
                date_published
                date: date_completed
                rating {
                    score
                    date
                }
            }
        }
    }

}
</page-query>
<script>
import ExpContainer from "@/components/ExpContainer";

export default {
	components: {
		ExpContainer
	}
};
</script>

<style lang="sass" scoped>

</style>