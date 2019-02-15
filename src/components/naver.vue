<template lang="pug">
	div.nav-wrap
		p.nav-name 导航栏
		el-menu(default-active="2"
		class="el-menu-vertical-demo"
		@open="handleOpen"
		@close="handleClose")
			el-submenu(index="1")
				template(slot="title")
					i.el-icon-location
					span 导航一
				el-menu-item-group
					el-menu-item(index="1-1")
						router-link(to="/page1") 页面1
					el-menu-item(index="1-2")
						router-link(to="/page2") 页面2
			el-menu-item(index="2")
				i.el-icon-menu
				<span slot="title">导航二</span>
		</el-menu>
</template>

<script>
export default {
	name: 'naver',
	data () {
		return{
			
	    }
	},
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.nav-wrap{
	font-size: 14px;
	border-radius: 5px;
	position: absolute;
	left: 10px;
	top: 10px;
	height: calc(100% - 40px);
	width: 200px;
	padding: 10px;
	background: rgba(125, 125, 125, 0.3);
	box-shadow: 0 0 10px 2px rgba(125, 125, 125, 0.3);
	overflow: hidden;
	.nav-name{
		font-size: 18px;
	}
	.el-tree{
		color: #fff;
		background: transparent;
		.el-tree-node__content, .el-tree-node__children, .el-tree-node{
			&:hover, &:focus, &:active{
				background: transparent;
			}
		}
	}
}
</style>
