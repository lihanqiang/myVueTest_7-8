<template lang="pug">
	div.home-wrap
		naver
</template>

<script>
import naver from '@/components/naver'

export default {
	name: 'home',
	data () {
		return {
		}
	},
	components: {
		naver
	},
	methods: {
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-wrap{
	height: 100%;
	padding: 10px;
	overflow: hidden;
	text-align: center;
	font-size: 30px;
	color: #eee;
	padding-left: 240px;
	position: relative;
}
</style>
