<template>
	<Layout>
		<div class="title-container">
			<div class="spacer"></div>
			<h1>Notes</h1>
		</div>
		<main>
			<div
				v-for="note in $page.notes.edges"
				:key="note.node.id"
				class="note-container"
			>
				<p class="time-container">
					<time>{{ formatTime(note.node.date_created) }}</time>
				</p>
				<meta-info
					:datetime="note.node.date_created"
					v-show="hideMeta"
				/>
				<g-link :to="note.node.path">
					<div class="note" v-html="note.node.content"></div>
				</g-link>
			</div>
		</main>
	</Layout>
</template>

<page-query>
query {
    notes: allNote (sortBy: "date", order: DESC ) {
        edges {
            node {
                id
                path
                content
                date
                date_created
            }
        }
    }
}
</page-query>

<script>
import MetaInfo from "@/components/MetaInfo";
const moment = require("moment");

export default {
	components: {
		MetaInfo,
	},
	data() {
		return {
			hideMeta: true,
		};
	},
	methods: {
		formatTime(dateTime) {
			const time = moment(dateTime);
			const threshold = moment().subtract(14, "days"); // 2 weeks ago
			const threshold2 = moment().subtract(1, "year"); // 1 year ago
			// if time is before 2 weeks ago, display date, else display time ago
			if (time.isBefore(threshold)) {
				return time.format("MMM D YYYY");
			} else if (time.isBefore(threshold2)) {
				return time.format("MMM D YYYY");
			} else {
				return time.fromNow();
			}
		},
	},
	created() {
		moment.updateLocale("en", {
			relativeTime: {
				future: "in %s",
				past: "%s", //was "%s ago"
				s: "a few seconds",
				ss: "%d seconds",
				m: "a minute",
				mm: "%d min",
				h: "an hour",
				hh: "%d h",
				d: "a day",
				dd: "%d d",
				M: "a month",
				MM: "%d mon",
				y: "a year",
				yy: "%d years",
			},
		});
	},
};
</script>

<style lang="sass" scoped>
h1
    margin-bottom: var(--space-md)

.note-container
    display: contents

    &:hover .time-container
        opacity: 1

    ::v-deep p
        margin: 0

    .time-container
        // font-size: var(--d-sm)
        max-width: 6ch
        // margin-bottom: var(--space-2xs)
        opacity: .6

    .metainfo
        position: absolute
        display: none

    .note
        // margin-bottom: var(--space-sm)

        @include md
            // margin-bottom: var(--space-md)

main, .title-container

    @include md
        display: grid
        grid-template-columns: 1fr 7fr
        grid-gap: var(--space-md) 0
        // align-items: center

//presentational
</style>