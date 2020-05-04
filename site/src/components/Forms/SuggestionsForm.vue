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
				>
					<label class="check-container">
						{{topic.name}}
						<input
							type="checkbox"
							:value="topic.id"
							:id="topic.id"
							v-model="topicsOfInterest"
						/>
						<span class="checkmark"></span>
					</label>
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
			screen_1: true,
			screen_2: false,
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

    .check-container 
        display: block
        position: relative
        padding-left: var(--space-md)
        margin-bottom: var(--space-3xs)
        cursor: pointer

        // hide browser checkbox
        input
            position: absolute
            opacity: 0
            cursor: pointer
            height: 0
            width: 0
        
        // create custom checkbox
        .checkmark
            position: absolute
            top: 8px
            left: 0
            border: 3px solid var(--color-t)
            border-radius: 3px
            box-shadow: -3px 3px 0px var(--color-a)
            height: 20px
            width: 20px
            box-sizing: border-box
        
        .checkmark::after
            content: ""
            position: absolute
            top: 3px
            left: 3px
            display: none
            height: 8px
            width: 8px
            background-color: var(--color-t)
            border-radius: 2px
            box-sizing: border-box

        input:checked ~ .checkmark::after
            display: block



</style>
