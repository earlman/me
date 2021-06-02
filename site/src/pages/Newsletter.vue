<template>
	<Layout>
		<div class="content">
			<h1>Hello friends!</h1>
			<p>Thank you all for lending your ears. I know I’m quite vocal on social media&mdash;It’s always a struggle to find a balance between the words that I say and the words I leave in my head.</p>
			<p>I’ve often found it best to err on the side of caution, but the world is changing quite quickly and I’ve got lots of words that I think could help others find dry land amongst these turbulent seas.</p>
			<p>I’ll make sure your attention doesn’t go to waste. I’m honored to have it 🙏🏼</p>

			<email-form />

			<h2>So whatcha into?</h2>
			<p>I’m comfortable writing about anything, but I’m doing this to make an impact. Let me know what you wanna spend time on.</p>

			<suggestions-form />

			<p>I'm planning on sending out a newsletter biweekly. In my head it's an amalgamation of thoughts I've had thoughout the week on a bunch of different topics. The email itself will include links to relevant articles and websites that I've found interesting, along with a bit of my commentary. A lot of the links will be to my own articles, because sometimes I find my own thoughts interesting too 😂. It's all subject to change, though, so let's see where this goes.</p>

			<hr />
			<!-- <h3>Spending on yourself</h3>
			<p>
				I think your money is
				<em>always</em> best spent on whatever provides you the most growth as an individual. So&mdash;after you save up for that iPad + Apple Pencil you’ve been wanting&mdash;consider throwing me a couple dollars for being the one to finally convince you to follow your dreams (hehe a bit dramatic, eh? 😅)
			</p>
			<p>
				But in all seriousness, if you have the means, consider supporting more independent creators&mdash;especially those you’ve been following for a while. These are these people we can count on most to show us
				<em>their</em> truth, regardless of how much they’re paid or what’s happening in the outside world.
			</p>
			<p>And I assure you: as an artist myself, there is nothing more uplifiting than having my truth valued.</p>
			<payment-widget />-->

			<h3>A note</h3>
			<p>I’m not starting this newsletter to market my brand. It’s not me trying to find an easy way to make money. This platform was built so I can broadcast my own truth for anyone interested in listening.</p>
			<p>Why do I think my truth’s so important?</p>
			<p>
				Because I work harder than anyone I know trying to turn this planet into something the universe would be proud of. One where
				<em>you</em>, specifically, would gladly spend the rest of your life.
			</p>
			<p>It’s not just a dream. It’s a puzzle. The pieces are right here in front of us.</p>
		</div>
	</Layout>
</template>


<script>
import EmailForm from "@/components/Forms/EmailForm";
import SuggestionsForm from "@/components/Forms/SuggestionsForm";
import PaymentWidget from "@/components/PaymentWidget";

export default {
	components: {
		EmailForm,
		SuggestionsForm,
		PaymentWidget
	}
};
</script>

<style lang="sass" scoped>


</style>