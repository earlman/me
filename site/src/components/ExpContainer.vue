<template>
	<div class="exp-container">
		<table class="exp-table">
			<div
				class="displaycontents"
				v-for="item in items"
				:key="item.node.key"
			>
				<exp-item :item="item" />
			</div>
		</table>
	</div>
</template>

<script>
import ExpItem from "@/components/ExpItem";

export default {
	props: {
		items: {
			type: Array,
			default: ["item 1", "item 2", "item 3"],
		},
	},
	components: {
		ExpItem,
	},
};
</script>

<style lang="sass" scoped>
.displaycontents
    display: contents

.exp-table
    margin: 0
    width: 100%

</style>