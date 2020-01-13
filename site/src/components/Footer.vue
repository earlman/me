<template>
	<div>
		<div class="accent-bar sm" />

		<footer>
			<div class="footer--inner">
				<p
					class="footer--colophon"
				>There’s plenty of work to be done, but if you’re interested in how this site is built, it’s all open-sourced on Github. If you have any ideas or there’s something you’d like to see, shoot me an email.</p>
				<div class="footer--contact">
					<p class="caption">Like this site? Let me know!</p>
					<a
						class="button large"
						href="mailto:hiya@earlman.me"
					>hiya@earlman.me</a>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

footer
    width: var(--layout-width)
    max-width: var(--layout-max-width)
    margin: var(--space-sm) auto

    .footer--inner
        display: flex
        flex-direction: column
        align-items: center

        @include md
            flex-direction: row
            align-items: flex-start

        @include lg
            margin-top: var(--space-lg)
            margin-bottom: var(--space-lg)

    .footer--colophon
        margin-bottom: var(--space-sm)

    .footer--contact
        display: flex
        flex-direction: column
        text-align: center
        
        @include md
            margin-left: var(--space-sm)

        .caption
            margin-bottom: var(--space-xs)


</style>