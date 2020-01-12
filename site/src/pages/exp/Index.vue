<template>
	<Layout>
		<header>
			<h1>Experience</h1>
			<div v-html="$page.overview.content"></div>
		</header>
		<h2>Latest</h2>
		<h3>Books</h3>
		<exp-container :items="$page.books.edges" />

		<h3>Movies</h3>
		<exp-container :items="$page.movies.edges" />

		<h3>Shows</h3>
		<exp-container :items="$page.shows.edges" />
	</Layout>
</template>

<page-query>
query {
    overview: pageContent(id: "experience"){
        content
    }
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
    books: allBook {
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
    shows: allShow {
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