<template lang="pug">
	div.login-wrap
		p.title VUE测试系统
		el-form.my-form(ref="form1" :model="form" @submit.native.prevent="" :rules="rules" label-width="80px")
			p.form-title 欢迎登陆
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
	name: 'login',
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
							type: 'success',
							center: true,
							duration: 5000
						});
						localStorage.current_user = JSON.stringify(current_user);
						this.$router.push('home');
					}
					else{
						this.$message({
							message: '账号或者密码错误!',
							type: 'error',
							center: true,
							duration: 5000
						});
					}
					this.isLoading = false;
				}, 1000)
			}).catch(err => {

			})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login-wrap{
	height: 100%;
	overflow: hidden;
	.title{
		margin: 100px auto 50px;
		font-size: 38px;
		text-align: center;
		letter-spacing: 2px;
		color: #eee;
	}
	.my-form{
		.form-title{
			margin: 0 auto 20px;
			color: #eee;
			text-align: center;
			letter-spacing: 2px;
			font-size: 25px;
		}
		width: 450px;
		margin: 0 auto;
		padding: 30px 40px;
		border-radius: 5px;
		border: 1px solid rgba(143, 139, 148, 0.8);
		background: rgba(226, 226, 234, 0.06);
		box-shadow: 0 0 30px 4px rgba(143, 139, 148, 0.4);
		.el-button{
			margin: 0;
			width: 100%;
		}
	}
}
</style>
