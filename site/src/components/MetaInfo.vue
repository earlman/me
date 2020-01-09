<template>
	<div class="metainfo">
		<time
			:datetime="datetime"
			v-if="showDate || showTime"
		>
			<div v-if="showDate">
				<span>{{date}}</span>
				<!-- <span>·</span> -->
			</div>
			<div v-if="showTime">
				<span>{{time}}</span>
				<!-- <span>·</span> -->
			</div>
		</time>

		<ul v-if="showTags">
			<li
				v-for="(tag, index) in tags"
				:key="index"
				class="tags"
			>
				<span>{{tag}}</span>
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
			default: "YYYYDDMMTHH:mm"
		},
		tags: {
			type: Array,
			default: ["Tag 1", "Tag 2", "Tag 3"]
		},
		showDate: {
			type: Boolean,
			default: true
		},
		showTime: {
			type: Boolean,
			default: false
		},
		showTags: {
			type: Boolean,
			default: true
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

<style lang="sass" scoped>
.metainfo 
    display: flex
    margin-bottom: var(--space-xs)

    *
        margin-right: var(--space-xs)
    
    *:last-child
        margin-right: 0

    time
        display: flex

    ul
        margin-bottom: 0 // reset default styles

    li 
        list-style-type: none
        display: inline-block

    *:not(li) + *:before
        content: " · "
        margin-right: var(--space-xs)

//presentational
*
    color: var(--color-a)

.tags
    text-transform: uppercase
    font-size: .83em

</style>