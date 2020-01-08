<template>
	<div>
		<p>{{date}}</p>
		<p>{{time}}</p>
		<ul>
			<li
				v-for="(tag, index) in tags"
				:key="index"
			>{{tag}} |</li>
		</ul>
	</div>
</template>

<script>
const moment = require("moment");

export default {
	props: {
		datetime: {
			type: String,
			default: "YYYYDDMMTHH:mm"
		},
		tags: {
			type: Array,
			default: ["Tag 1", "Tag 2", "Tag 3"]
		},
		showTime: {
			type: Boolean,
			default: false
		}
	},

	computed: {
		date() {
			return moment(this.datetime).format("MMMM D, YYYY");
		},
		time() {
			return moment(this.datetime).format("h:mm a");
		}
	}
};
</script>

<style lang="css" scoped>
li {
	list-style-type: none;
	display: inline-block;
}
</style>