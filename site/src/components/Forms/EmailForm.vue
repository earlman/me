<template>
	<div>
		<form
			name="email"
			method="post"
			v-on:submit.prevent="handleSubmit"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
		>
			<input
				type="hidden"
				name="form-name"
				value="contact"
			/>
			<p hidden>
				<label>
					Don’t fill this out:
					<input name="bot-field" />
				</label>
			</p>
			<input
				type="email"
				name="email"
				class="emailinput"
				id="email"
				placeholder="myemail@address.com"
				v-model="formData.email"
			/>
			<button type="submit">Subscribe</button>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			formData: {}
		};
	},
	methods: {
		encode(data) {
			return Object.keys(data)
				.map(
					key =>
						encodeURIComponent(key) +
						"=" +
						encodeURIComponent(data[key])
				)
				.join("&");
		},
		handleSubmit(e) {
			fetch("/", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: this.encode({
					"form-name": e.target.getAttribute("name"),
					...this.formData
				})
			})
				.then(() => {
					formData = {};
				})
				.catch(error => alert(error));
		}
	}
};
</script>

<style lang="sass" scoped>

.emailinput
    margin-right: var(--space-md)

    
</style>
