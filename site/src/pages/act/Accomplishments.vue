<template>
	<Layout class="page-articles">
		<header>
			<h1>Accomplishments</h1>
			<p>
				Noteworthy event of which I am a primary cause (but not
				necessarily <em>the</em> primary cause).
			</p>
		</header>
		<div>
			<ul>
				<li>
					Graduated from the University of Illinois Urbana-Champaing
					with a B.S. in Chemical Engineering and a Business Minor
				</li>
				<li>Ran a half-marathon</li>
				<li>Started a web development Business</li>
				<li>
					Built a web app to help insurance salesmen sell insurance
					and currently has 80 active users
				</li>
				<li>
					Took a semester off regular coursework to study history in
					Amsterdam
				</li>
				<li>Bought a condo</li>
				<li>Made $30,000 as an entrepreneur</li>
				<li>
					Completed 3 successful web-development projects for other
					businesses
				</li>
			</ul>
		</div>
	</Layout>
</template>

<script>
import MetaInfo from "@/components/MetaInfo";
const cheerio = require("cheerio");

export default {
	components: {
		MetaInfo,
	},
	methods: {},
};
</script>

<style lang="sass" scoped>



</style>