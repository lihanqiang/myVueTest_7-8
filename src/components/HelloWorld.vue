<template lang="pug">
	//- div.element-ui-test
	//- 	el-button.el-icon-refresh(@click="visible=!visible") haha
	//- 	el-dialog(v-bind:visible.sync="visible" title="hello world")
	//- 		p try try
	//- 	el-row.custom.my-custom-layout(:gutter="20")
	//- 		el-col.bg-red(:span="12")
	//- 		el-col.bg-blue(:span="12")
	//- 	el-row.custom.my-custom-layout-2(:gutter="20")
	//- 		el-col(:span="5")
	//- 		el-col(:span="15" :offset="4")
	//- 	el-row
	//- 		el-button(type="primary" round icon="el-icon-success" @click="isButtonDisabled") 是否可用
	//- 		el-button(type="danger" plain v-bind:disabled="isDisabled") 按钮
	//- 	el-row
	//- 		el-button-group
	//- 			el-button(type="primary" icon="el-icon-share" size="small")
	//- 			el-button(type="primary" icon="el-icon-delete" size="large")
	//- 			el-button(type="primary" :loading="true") 加载中
	//- 	el-row
	//- 		el-select(v-model="selectedItem" multiple placeholder="请选择")
	//- 			el-option(v-for="item in selectItems"  :key="item.value" :value="item.value" :label="item.label"
	//- 			)
	//- 	el-row
	//- 		el-switch(v-model="valueTrue" active-color="green" inactive-color="red"
	//- 		)
	//- 		span {{valueTrue ? '开' : '关'}}
	//- 	el-row
	//- 		el-table(:data="tableData" stripe)
	//- 			el-table-column(prop="name" label="姓名")
	//- 			el-table-column(prop="age" label="年龄")
	//- 			el-table-column(prop="gender" label="性别")
	el-form(ref="form1" :model="form" :rules="rules" label-width="100px")
		el-form-item(label="账号:" prop="username")
			el-input(v-model="form.username" type="text")
		el-form-item(label="密码:" prop="password")
			el-input(v-model="form.password" type="password")
		el-form-item(label="记住密码")
			el-checkbox(v-model="form.isRememberMe")
		el-form-item
			el-button(type="primary" native-type="submit" @click="submit();" icon="el-icon-loading" :disabled="!form.username || !form.password || isLoading" v-show="isLoading") 登 录
			el-button(type="primary" @click="submit();" :disabled="!form.username || !form.password || isLoading" native-type="submit" v-show="!isLoading") 登 录

</template>

<script>
export default {
	name: 'HelloWorld',
	data () {
		return {
			msg: 'Welcome to Your Vue.js App',
			visible: false,
			isDisabled: false,
			valueTrue: false,
			selectedItem: ['2'],
			isLoading: false,
			form: {
				username: '',
				password: ''
			},
			rules: {
				username: [
					{
						required: true,
						message: '不能为空!',
						trigger: ['blur', 'change']
					}
				],
				password: [
					{
						required: true,
						message: '不能为空!',
						trigger: ['blur', 'change']
					}
				]
			},
			selectItems: [
				{
					label: '选项一',
					value: '1'
				},
				{
					label: '选项二',
					value: '2'
				},
				{
					label: '选项三',
					value: '3'
				}
			],
			tableData: [
				{
					name: 'jack',
					age: 66,
					gender: 'male'
				},
				{
					name: 'lee',
					age: 13,
					gender: 'female'
				},
				{
					name: 'alex',
					age: 22,
					gender: 'male'
				}
			]
		}
	},
	methods: {
		isButtonDisabled() {
			this.isDisabled = !this.isDisabled;
			//注意本地json文件需要放在static文件夹下
			this.$http.get('/static/mock/user_mock.json').then(res => {
				console.log(res.data);
			}).catch(err => {
				console.log(err.data);
			})
		},
		submit() {
			let postData = this.form;
			this.$http.get('/static/mock/user_mock.json').then(res => {
				let resData = res.data;
				let isExistFlag = false;
				let current_user = "";
				this.isLoading = true;
				resData.map(item => {
					let {username, password} = item;
					if(username == postData.username && password == postData.password){
						isExistFlag = true;
						current_user = item;
						return false;
					}
				})
				setTimeout(() => {
					if(isExistFlag){
						this.$message({
							message: '登录成功! 欢迎您: ' + current_user.username,
							type: 'success'
						});
					}
					else{
						this.$message({
							message: '账号或者密码错误!',
							type: 'error'
						});
					}
					this.isLoading = false;
				}, 2000)
			}).catch(err => {

			})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.element-ui-test{
	font-size: 18px;
	line-height: 20px;
	.el-row{
		margin: 10px 0;
		height: 40px;
		.el-col{
			border: 1px solid #000;
			border-radius: 5px;
			height: 40px;
			background: red;
		}
	}
}

</style>
