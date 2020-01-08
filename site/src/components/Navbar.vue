<template>
	<div
		class="navbar"
		:class="[{default: !colored}, {colored : colored}]"
	>
		<div class="accent-bar"></div>
		<header>
			<nav class="menu">
				<div class="logo">
					<g-link to="/">
						<!-- <img
                            src="../favicon.png"
                            alt="Metal Law Group Logo"
                            height="100"
                            width="100"
						/>-->
						<p class="logo">earlman.me</p>
					</g-link>
				</div>
				<ul>
					<li
						v-for="item in menu"
						:key="item.name"
					>
						<g-link :to="item.url">{{item.name}}</g-link>
						<ul v-if="item.submenu">
							<li
								v-for="subitem in item.submenu"
								:key="subitem.name"
							>
								<g-link :to="subitem.url">{{subitem.name}}</g-link>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</header>
	</div>
</template>

<script>
export default {
	name: "navbar",
	props: {
		colored: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			menu: [
				{
					name: "action",
					url: "/act",
					submenu: [
						{
							name: "articles",
							url: "/act/articles"
						},
						{
							name: "notes",
							url: "/act/notes"
						}
					]
				},
				{
					name: "experience",
					url: "/exp",
					submenu: [
						{
							name: "books",
							url: "/exp/books"
						},
						{
							name: "shows",
							url: "/exp/shows"
						},
						{
							name: "movies",
							url: "/exp/movies"
						}
					]
				}
			]
		};
	}
};
</script>

<style lang="sass" scoped>

header
    margin: auto
    width: var(--layout-width)
    max-width: var(--layout-max-width)
    justify-self: center
    width: 100%
    display: flex
    flex-direction: column
    align-items: stretch
    

    .menu
        width: 100%
        display: flex
        justify-content: space-around            
        align-items: flex-end
        flex-wrap: wrap
        margin-top: var(--space-md)
        line-height: 0

        @include landscape
            justify-content: space-between

        .logo
            width: 300px
            text-align: center
            @include md
                flex-grow: 1
                text-align: left

        ul
            display: flex
            flex-wrap: wrap
            justify-content: center
            padding: 0
            margin-bottom: 0
            line-height: 1

            li:hover > ul,
            li:focus-within > ul,
            li ul:hover
                visibility: visible
                opacity: 1    
                display: block           

            li
                display: block
                transition-duration: .5s
                background: var(--color-b)
                position: relative
                float: left

                a
                    padding: var(--space-xs)
                    display: block

                &:hover,
                &:focus-within
                    // cursor: pointer
                    background: var(--color-a)

                    > a
                        color: var(--color-t-alt)

                &:focus-within a
                    outline: none

                .empty 
                    cursor: default
                ul
                    position: absolute
                    z-index: 10
                    transition: all 0.5s ease
                    visibility: hidden
                    opacity: 0
                    display: none
                    left: 0
                    width: min-content

                    li //submenu
                        width: 100%
                        
                            
//presentational
.accent-bar
    width: 100%
    height: 10px
    background-color: var(--color-t)

li
    list-style: none

.navbar
    @include transition
    *
        @include transition

.navbar.default 
    opacity: .2
    *
        color: var(--color-t)      
    &:hover 
        opacity: 1
        --color-t: var(--color-a)

.colored
    --color-t: var(--color-a)
    a:hover
        color: var(--color-t)
        text-decoration: none
    a:visited
        color: var(--color-t)


</style>