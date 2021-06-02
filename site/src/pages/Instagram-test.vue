<template>
	<Layout>
		<div v-for="edge in $page.allInstagramPhoto.edges" :key="edge.node.id">
			<g-image :src="edge.node.display_url"> </g-image>
			{{ edge.node.edge_media_to_caption }}
		</div>
	</Layout>
</template>

<page-query>
query {
   allInstagramPhoto {
      edges {
         node {
            id
            display_url
            edge_media_to_caption {
               edges {
                  node {
                  text
                  }
               }
            }
         }
      }
   }
}
</page-query>

<script>
export default {};
</script>

<style lang="sass" scoped>
</style>