<template>
	<div class="metainfo">
		<time :datetime="datetime" v-if="showDate || showTime">
			<div v-if="showDate">
				<p class="date">{{ date }}</p>
				<!-- <span>·</span> -->
			</div>
			<div v-if="showTime">
				<p class="time">{{ time }}</p>
				<!-- <span>·</span> -->
			</div>
		</time>

		<ul v-if="showTags">
			<li v-for="(tag, index) in tags" :key="index" class="tags">
				<p>{{ tag }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
const moment = require("moment");

export default {
	props: {
		datetime: {
			type: String,
			default: "YYYYDDMMTHH:mm",
		},
		tags: {
			type: Array,
			default: ["Tag 1", "Tag 2", "Tag 3"],
		},
		showDate: {
			type: Boolean,
			default: true,
		},
		showTime: {
			type: Boolean,
			default: false,
		},
		showTags: {
			type: Boolean,
			default: true,
		},
	},

	computed: {
		date() {
			return moment(this.datetime).format("MMMM D, YYYY");
		},
		time() {
			return moment(this.datetime).format("h:mm a");
		},
	},
};
</script>

<style lang="sass" scoped>
.metainfo 
    display: flex
    align-items: baseline
    margin-bottom: var(--space-2xs)

    *
        margin-right: var(--space-xs)
    
    *:last-child
        margin-right: 0

    time
        display: flex

    ul, p
        margin-bottom: 0 // reset default styles

    li 
        list-style-type: none
        display: inline-block

    *:not(li) + *:before
        content: " · "
        margin-right: var(--space-xs)

//presentational
*
    color: var(--color-t-c)

.tags
    text-transform: uppercase
    font-size: .83em

</style>