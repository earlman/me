<template>
	<tr>
		<td class="date">
			{{ formatTime(item.node.date) }}
		</td>
		<td class="title">
			<g-link :to="item.node.path">{{ item.node.title }}</g-link>
		</td>
		<td class="rating">
			{{ item.node.rating.score }}
		</td>
	</tr>
</template>

<script>
// Intended to be used with Exp-Container!
const moment = require("moment");

export default {
	props: {
		item: {
			type: Object,
		},
	},
	methods: {
		formatTime(dateTime) {
			if (!dateTime) {
				return "N/A";
			}

			const time = moment(dateTime);
			const threshold = moment().subtract(14, "days"); // 2 weeks ago
			const threshold2 = moment().subtract(1, "year"); // 1 year ago
			// if time is before 2 weeks ago, display date, else display time ago
			if (time.isBefore(threshold)) {
				return time.format("MMM. D");
			} else if (time.isBefore(threshold2)) {
				return time.format("MMM D, YYYY");
			} else {
				return time.fromNow();
			}
		},
	},
};
</script>

<style lang="sass" scoped>
.date, .title, .rating
    border-top: 1px solid rgba(72, 80, 116, .1)
    border-bottom: 1px solid rgba(72, 80, 116, .1)
    border-left: none
    border-right: none

.date
    font-family: var(--font-secondary)
    color: var(--color-a)
    font-size: var(--d-sm)
    width: 10ch
    padding-left: 0

.title
    font-familiy: var(--font-primary)
    width: 80%

    a
        color: var(--color-t)
        font-size: var(--d-sm)
        font-weight: 400

    a:hover
        color: var(--color-a)

.rating
    font-family: var(--font-secondary)
    color: var(--color-t-c)
    font-size: var(--d-sm)
</style>