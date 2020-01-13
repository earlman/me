<template>
	<div class="page-container">
		<div class="hero-container">
			<section class="hero">
				<div class="profilepic">
					<g-image
						src="~/profilepicture.jpg"
						alt="Profile Picture"
						height="600"
						width="400"
					/>
				</div>
				<div v-html="$page.pageContent.content"></div>
			</section>
		</div>
		<Navbar colored />
	</div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
	metaInfo: {
		title: "Hello, world!"
	},
	components: {
		Navbar
	}
};
</script>

<page-query>
query {
    pageContent(id: "landing"){
        content
    }
}
</page-query>

<style lang="sass" scoped>


.hero
    &-container
        display: flex
        flex-direction: column
        align-items: center

    width: var(--layout-width)
    max-width: var(--layout-max-width)
    display: flex
    align-items: center
    justify-content: center    
    min-height: 50vh



    .profilepic
        @include portrait
            display: none
        @include landscape
            margin-right: var(--space-lg)
            margin-top: var(--space-lg)
            margin-bottom: var(--space-lg)

.page-container
    min-height: 100vh


.profilepic img
    border-radius: 2px
    filter: grayscale(50%) contrast(150%)

.layout
    width: 100%
    
</style>
