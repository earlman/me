<template>
	<div class="page-container">
		<div class="hero-container">
			<section class="hero">
				<div class="profilepic">
					<!-- <g-image
						src="~/profilepicture.jpg"
						alt="Profile Picture"
						height="600"
						width="400"
					/>-->
					<svg height="150" width="150">
						<circle
							cx="75"
							cy="75"
							r="75"
							fill="url(#paint0_linear)"
						/>
						<defs>
							<linearGradient
								id="paint0_linear"
								x1="60"
								y1="-20"
								x2="60"
								y2="150"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0.135417" stop-color="#FEC488" />
								<stop offset="1" stop-color="#FEC488" />
							</linearGradient>
						</defs>
					</svg>
				</div>

				<div class="text">
					<div v-html="$page.pageContent.content"></div>
				</div>
			</section>
		</div>
		<Navbar colored />
	</div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
	metaInfo: {
		title: "Hi!",
	},
	components: {
		Navbar,
	},
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
    width: var(--layout-width)
    max-width: var(--layout-max-width)
    display: flex
    align-items: center
    justify-content: center
    min-height: 70vh
    
    &-container
        display: flex
        flex-direction: column
        align-items: center

    .text
        max-width: 550px
        
        ::v-deep p
            color: var(--color-t-h)

            strong
                color: var(--color-t-h)


    .profilepic
        @include portrait
            display: none
        @include landscape
            margin-right: var(--space-lg)
            margin-top: var(--space-lg)
            margin-bottom: var(--space-lg)

.page-container
    min-height: 150vh


.profilepic img
    border-radius: 2px
    filter: grayscale(50%) contrast(150%)

.layout
    width: 100%
    
</style>
