<template>
	<div class="paymentwidget">
		<section class="price-container">
			<div class="price">
				<ul class="options">
					<li
						v-for="option in options"
						:key="option"
						@click="setPrice(option)"
					>
						<span class="item">{{option}}</span>
					</li>
					<li @click="setCustom">custom</li>
				</ul>
				<div
					class="dollar"
					:class="{disabled: custom.disabled}"
				>
					<h6 class="sign">$</h6>
					<input
						type="text"
						inputmode="numeric"
						pattern="[0-9]*"
						class="pay"
						name="pay"
						ref="pay"
						v-model.number="price"
						:disabled="custom.disabled"
					/>
					<h6 class="month">/&nbsp;month</h6>
				</div>
			</div>
		</section>
		<section
			class="card"
			v-show="price > 0"
		>
			<stripe :amount="price" />
		</section>
	</div>
</template>

<script>
import Stripe from "./Stripe";

export default {
	data() {
		return {
			options: [1, 2, 5, 20, 50],
			custom: {
				disabled: true
			},
			price: 0
		};
	},
	methods: {
		setPrice(input) {
			this.custom.disabled = true;
			this.price = input;
		},
		setCustom() {
			this.custom.disabled = false;
			this.price = null;
			this.$nextTick(() => this.$refs.pay.focus());
		}
	},
	components: {
		Stripe
	}
};
</script>

<style lang="sass" scoped>



.price
    margin: auto
    display: grid
    grid-template-columns: auto auto
    max-width: 500px
    place-content: center space-between 

    *
        font-family: var(--font-secondary)
        color: var(--color-p)
        margin: 0
        line-height: 100%

    input[type="text"]
        background-color: transparent
        border: none
        font-size: var(--d-2xl)
        width: 50px
        padding-bottom: 3px

.dollar
    display: flex
    align-items: flex-end
    background-color: var(--color-b-alt)
    border-radius: 3px
    background-size: 100px 100px
    padding: var(--space-2xs)

    > *
        line-height: 30px

    h6
        font-size: var(--d-sm)
        font-weight: 400
        display: inline
    
    .sign
        margin-right: var(--space-3xs)

    .month
        margin-left: var(--space-3xs)
        text-align: bottom

    &.disabled
        background-color: transparent


.paymentwidget
    background-color: var(--color-b-alt)
    border-radius: 3px

.price-container
    width: 100%
    padding: var(--space-xs)
    border-bottom: 3px solid #485074

.options
    list-style: none
    display: flex
    align-items: flex-end
    padding-bottom: var(--space-2xs)

    > *
        cursor: pointer
        line-height: 30px
        font-size: var(--d-md)
        @include space-inline(var(--space-xs))

        .item:hover
            color: var(--color-t)

</style>