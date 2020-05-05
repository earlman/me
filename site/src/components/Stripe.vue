<template>
	<div class="stripe-container">
		<div class="card-container">
			<div id="card-element"></div>
		</div>
		<button
			v-if="!loading"
			v-on:click="purchase"
		>Purchase</button>
		<p
			class="message"
			v-if="message"
		>{{message}}</p>
	</div>
</template>

<script>
const axios = require("axios");

export default {
	data() {
		return {
			stripeAPIToken: "pk_live_4exWmCyY9rxVZsyS2nqbnvdQ00o6gQ4KzO",
			stripe: "",
			elements: "",
			card: "",
			loading: false,
			options: {
				style: {
					base: {
						color: "#201421",
						fontFamily: "Open Sans, Segoe UI, sans-serif",
						fontSize: "20px",
						fontSmoothing: "antialiased",
						letterSpacing: "0.02em",
						textTransform: "uppercase",
						"::placeholder": {
							color: "#CCB6B5"
						}
					},
					complete: {
						iconColor: "#485074",
						color: "#485074"
					},
					empty: {
						iconColor: "#CCB6B5",
						color: "#CCB6B5"
					}
				}
			},
			message: null
		};
	},
	props: {
		amount: {
			type: Number,
			default: null,
			required: true
		}
	},
	methods: {
		/*
            Includes Stripe.js dynamically
        */
		includeStripe(URL, callback) {
			let a = this;
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
			this.card = this.elements.create("card", this.options);

			this.card.mount("#card-element");
		},
		purchase() {
			this.message = "loading...";
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
			const paymentData = {
				token: token.id
			};

			const response = await axios({
				method: "post",
				url: `${window.location.origin}/.netlify/functions/stripe`,
				// headers: {
				// 	"Content-Type": "application/json"
				// },
				data: JSON.stringify(paymentData)
			});
			this.processResponse(response.data);
		},
		processResponse(data) {
			console.log(data);
			if (data.status == "succeeded") {
				this.message = "Thanks! 😁";
			} else this.message = data.raw.message;
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
.stripe-container
    display: grid
    place-items: center
    padding: var(--space-sm)


.card-container
    min-width: 450px
    margin-bottom: var(--space-sm)


#card-element
    margin: auto
    width: 100%

.message
    margin-top: var(--space-xs)

</style>
