<template lang="pug">
	div.error-wrap
		span.flex
		img(src="../assets/error/404.gif")
		span.flex
</template>

<script>
export default {
	name: 'error',
	data () {
		return{

		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.error-wrap{
	height: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	.flex{
		flex: 1;
	}
	img{
		width: 40%;
		margin: 0 auto;
	}

}
</style>
