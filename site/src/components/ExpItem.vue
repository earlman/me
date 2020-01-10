<template>
	<div>
		{{formatTime(item.node.date)}}
		<g-link :to="item.node.path">{{item.node.title}}</g-link>
		{{item.node.rating.score}}
	</div>
</template>

<script>
// Intended to be used with Exp-Container!
const moment = require("moment");

export default {
	props: {
		item: {
			type: Object
		}
	},
	methods: {
		formatTime(dateTime) {
			const time = moment(dateTime);
			const threshold = moment().subtract(14, "days"); // 2 weeks ago
			const threshold2 = moment().subtract(1, "year"); // 1 year ago
			// if time is before 2 weeks ago, display date, else display time ago
			if (time.isBefore(threshold)) {
				return time.format("MMM D");
			} else if (time.isBefore(threshold2)) {
				return time.format("MMM D, YYYY");
			} else {
				return time.fromNow();
			}
		}
	}
};
</script>

<style lang="sass" scoped>

</style>