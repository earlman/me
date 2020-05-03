<template>
	<div class="suggestions-form">
		<form action>
			<div
				class="options"
				v-if="screen_1"
			>
				<div
					v-for="topic in topics"
					:key="topic.id"
					class="checkbox"
				>
					<input
						type="checkbox"
						:value="topic.id"
						:id="topic.id"
						v-model="topicsOfInterest"
					/>
					<label for="topic.id">{{topic.name}}</label>
				</div>
			</div>
			<div
				class="suggestion"
				v-if="screen_2"
			>
				<textarea rows="8" />
			</div>
			<div class="buttons">
				<button
					@click.prevent="suggestion"
					v-if="screen_1"
				>
					<p>
						Write a
						<br />Suggestion
					</p>
				</button>
				<button
					@click.prevent="cancel"
					v-if="screen_2"
				>Cancel</button>
				<button type="submit">Submit</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			screen_1: false,
			screen_2: true,
			topics: [
				{
					id: "art_literature",
					name: "Art & Literature"
				},
				{
					id: "music",
					name: "Music"
				},
				{
					id: "philosophy",
					name: "Philosophy"
				},
				{
					id: "politics",
					name: "Politics"
				},
				{
					id: "science_technology",
					name: "Science & Technology"
				},
				{
					id: "productivity_growth",
					name: "Productivity & Growth"
				},
				{
					id: "hobbies_diy",
					name: "Hobbies & DIY"
				}
			],
			topicsOfInterest: []
		};
	},
	methods: {
		suggestion() {
			this.screen_1 = false;
			this.screen_2 = true;
		},
		cancel() {
			this.screen_1 = true;
			this.screen_2 = false;
		}
	}
};
</script>

<style lang="sass" scoped>
.suggestions-form
    margin: var(--space-lg) 0
    padding: var(--space-md)
    background-color: var(--color-b-alt)

    p
        margin: 0
        font-weight: 600
        color: var(--color-p)

    form
        display: grid
        grid-template-columns: 1fr 1fr
        align-items: end
        justify-content: space-between
        height: min-content

        .options
            grid-column: 1
            grid-row: 1 / -1

        .buttons
            width: min-content
            margin-left: auto

        button
            display: block
            grid-column: 2
            width: 200px
            height: min-content
            @include space-stack(var(--space-sm))

        

</style>
