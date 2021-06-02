<template>
	<Layout class="page-articles">
		<header>
			<h1>Articles</h1>
			<p>
				Thoughts I’ve thought were important enough to spend some extra
				time on.
			</p>
		</header>
		<div v-for="article in $page.articles.edges" :key="article.node.id">
			<article class="article-preview">
				<g-link :to="article.node.path">
					<meta-info
						:datetime="article.node.date"
						:tags="article.node.tags"
					/>
					<h3>{{ article.node.title }}</h3>
					<div
						v-html="truncateArticle(article.node.content)"
						class="article-content"
					/>
				</g-link>
			</article>
		</div>
	</Layout>
</template>

<page-query>
query {
    articles: allArticle (sortBy: "date", order: DESC ) {
        edges {
            node {
                id
                title
                path
                content
                date
                tags
                
            }
        }
    }
}
</page-query>

<script>
import truncate from "truncate-html";

import MetaInfo from "@/components/MetaInfo";
const cheerio = require("cheerio");

export default {
	components: {
		MetaInfo,
	},
	methods: {
		truncateArticle: (html) => {
			// load article html into jquery
			const $ = cheerio.load(html);

			// select desired text (only paragraph elements)
			let selection = $("*").not("meta").filter("p");

			//truncate article content
			selection = truncate(selection, 300, {
				keepWhitespaces: true,
			});

			return selection;
		},
	},
	mounted() {},
};
</script>

<style lang="sass" scoped>

.page-articles

    h3
        margin-bottom: var(--space-xs)

    .article-preview
        margin-bottom: var(--space-lg)

        ::v-deep p //v-deep allows you to select elements in child components
            max-width: unset
        
        > a // remove styles added when creating link to the article
            all: revert
            text-decoration: none

            &:hover
                text-decoration: underline

    .metainfo
        margin-bottom: var(--space-2xs)

    header
        margin-bottom: var(--space-lg)



</style>