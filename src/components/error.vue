<template lang="pug">
	div.error-wrap
		span.flex
		img(src="../assets/error/404.gif")
		el-button(type="primary")
			router-link(to="/home") 回到主页
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
	.el-button{
		width: 120px;
		margin: 30px auto;
		a{
			color: #fff;
			text-decoration: none;
		}
	}

}
</style>
