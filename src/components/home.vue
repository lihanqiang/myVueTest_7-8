<template lang="pug">
	div.home-wrap
		naver
		p 这是主页啊,兄弟
		el-input(v-model="count")
		el-button(@click="add();") +
</template>

<script>
import naver from '@/components/naver'

export default {
	name: 'home',
	data () {
		return {
			count: 0
		}
	},
	components: {
		naver
	},
	methods: {
		add() {
			this.$store.commit("increment");
			console.log(this.count);
		}
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
