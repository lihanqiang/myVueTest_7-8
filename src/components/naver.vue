<template lang="pug">
	div.nav-wrap
		p.nav-name 导航栏
		el-tree(:data="treeData" :props="defaultProps" @node-click="handleNodeClick")
</template>

<script>
export default {
	name: 'nav',
	data () {
		return{
			treeData: [
				{
		          	label: '一级 1',
		          	children: [
			          	{
			            	label: '二级 1-1',
			            	children: [
			            		{
			              			label: '三级 1-1-1'
		            			}
		            		]
			          	}
		          	]
		        }
	        ],
	        defaultProps: {
	          children: 'children',
	          label: 'label'
	        }
	    }
	},
    methods: {
      	handleNodeClick(data) {
	        console.log(data);
	    }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
	}
}
</style>
