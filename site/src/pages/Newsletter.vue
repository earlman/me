<template>
	<Layout>
		<div class="content">
			<email-form />
			<suggestions-form />
			<payment-widget />

			<div v-html="$page.pageContent.content"></div>
		</div>
	</Layout>
</template>

<page-query>
query {
    pageContent(id: "newsletter"){
        content
    }
}
</page-query>

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