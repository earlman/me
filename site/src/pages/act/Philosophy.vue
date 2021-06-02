<template>
	<Layout>
		<h1>The Fundamentals of "Now"</h1>

		<div class="model-container">
			<img
				class="model"
				src="./mae.png"
				alt
			/>
		</div>
		<div class="text">
			<div v-html="$page.pageContent.content"></div>
		</div>
	</Layout>
</template>



<page-query>
query {
    pageContent(id: "fundamentals"){
        content
    }
}
</page-query>

<style lang="sass">

.model-container
    background-color: #3c3644
    padding: var(--space-lg) 0
    display: grid
    place-items: center
    margin-bottom: var(--space-sm)
    border-radius: 2px

    .model
        width: 350px

table

    
</style>