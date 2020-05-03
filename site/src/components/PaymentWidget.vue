<template>
	<div class="payment-widget">
		<h3>Manage Your Subscription</h3>

		<label>Card</label>
		<div id="card-element"></div>
		<button v-on:click="purchase">Purchase</button>
	</div>
</template>

<script>
const axios = require("axios");

export default {
	data() {
		return {
			stripeAPIToken: "pk_test_7OlQe1qbJU3gbQItjamciKNg00RqDI12Sk",
			stripe: "",
			elements: "",
			card: ""
		};
	},
	methods: {
		/*
            Includes Stripe.js dynamically
        */
		includeStripe(URL, callback) {
			let documentTag = document,
				tag = "script",
				object = documentTag.createElement(tag),
				scriptTag = documentTag.getElementsByTagName(tag)[0];
			object.src = "//" + URL;
			if (callback) {
				object.addEventListener(
					"load",
					function(e) {
						callback(null, e);
					},
					false
				);
			}
			scriptTag.parentNode.insertBefore(object, scriptTag);
		},
		/*
                Configures Stripe by setting up the elements and 
                creating the card element.
            */
		configureStripe() {
			this.stripe = Stripe(this.stripeAPIToken);

			this.elements = this.stripe.elements();
			this.card = this.elements.create("card");

			this.card.mount("#card-element");
		},
		purchase() {
			this.stripe.createToken(this.card).then(result => {
				if (result.error) {
					self.hasCardErrors = true;
					self.$forceUpdate(); // Forcing the DOM to update so the Stripe Element can update.
					return;
				} else {
					// Send the token to your server.
					this.stripeTokenHandler(result.token);
				}
			});
		},
		async stripeTokenHandler(token) {
			const paymentData = { token: token.id };

			const response = await axios({
				method: "post",
				url: "http://localhost:9000/.netlify/functions/stripe",
				// headers: {
				// 	"Content-Type": "application/json"
				// },
				data: JSON.stringify(paymentData)
			});

			console.log(response);
			return response;
		}
	},
	mounted() {
		this.includeStripe(
			"js.stripe.com/v3/",
			function() {
				this.configureStripe();
			}.bind(this)
		);
	}
};
</script>

<style lang="sass" scoped>
.payment-widget
    margin: var(--space-lg) 0
</style>
