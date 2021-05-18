<template>
	<div class="login">
		<div class="login-logo container">
			<a href="javascript:;"><img src="/imgs/login-logo.png"/></a>
		</div>
		<div class="wrapper">
			<div class="container">
				<div class="login-form">
					<h3>
						<span class="checked">帐号登录</span>
						<span class="sep-line">|</span>
						<span>扫码登录</span>
					</h3>
					<div class="input">
						<input type="text" v-model="username" placeholder="请输入账号" />
					</div>
					<div class="input">
						<input
							type="password"
							v-model="password"
							placeholder="请输入密码"
						/>
					</div>
					<div class="btn-box">
						<a href="javascript:;" @click="login">登录</a>
					</div>
					<div class="tips">
						<a href="javascript:;" @click="register">手机短信登录/注册</a>
					</div>
				</div>
			</div>
		</div>
		<div class="footer">
			<div class="footer-link">
				<a href="javascript:;">河畔一角主页</a>
				<span>|</span>
				<a href="javascript:;">Vue全栈课程</a>
				<span>|</span>
				<a href="javascript:;">React全家桶课程</a>
				<span>|</span>
				<a href="javascript:;">微信支付专项课程</a>
				<span>|</span>
				<a href="javascript:;">配套课程：Java通用型支付+电商平台双系统实战</a>
			</div>
			<div class="footer-copyright">
				Copyright ©2020 <span class="domain">mi.futurefe.com</span> All Rights
				Reserved.
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'login',
	data() {
		return {
			username: '',
			password: ''
		}
	},
	components: {},
	methods: {
		login() {
			let { username, password } = this
			this.axios
				.post('/user/login', { username, password })
				.then((res) => {
					this.$cookie.set('userId', res.id, { expires: '1M' })
					this.$store.dispatch('saveUsername', res.username)
					this.$router.push('/index')
				})
				.catch((res) => {
					alert(res.msg)
				})
		},
		register() {
			this.axios
				.post('user/register', {
					username: 'zoe',
					password: 'zoe',
					email: 'chloe@163.com'
				})
				.then((res) => {
					this.$cookie.set('userId', res.id, { expires: '1M' })
					this.$router.push('/index')
				})
		}
	}
}
</script>
<style lang="scss" scoped>
.login {
	.login-logo {
		img {
			width: auto;
			height: 112px;
		}
	}
	.wrapper {
		width: 100%;
		height: 576px;
		background: url('/imgs/login-bg.jpg') no-repeat 50%;
		.container {
			.login-form {
				height: 510px;
				position: absolute;
				top: 33px;
				right: 0;
				background-color: #fff;
				padding: 0 30px;
				h3 {
					font-size: 24px;
					color: #000;
					text-align: center;
					margin: 30px 0 38px;
					.checked {
						color: $colorA;
					}
					.sep-line {
						margin: 0 32px;
					}
				}
				.input {
					width: 348px;
					height: 50px;
					border: 1px solid #e5e5e5;
					margin-bottom: 20px;
					input {
						border: none;
						width: 100%;
						line-height: 50px;
						padding: 0 18px;
						box-sizing: border-box;
					}
				}
				.btn-box {
					width: 100%;
					line-height: 50px;
					background-color: $colorA;
					font-size: 16px;
					text-align: center;
					a {
						color: $colorG;
						display: block;
					}
				}
				.tips {
					margin-top: 14px;
					color: $colorA;
				}
			}
		}
	}
	.footer {
		padding: 60px 0 40px;
		text-align: center;
		font-size: 16px;
		color: $colorD;
		span {
			margin: 0 10px;
		}
		.footer-copyright {
			margin-top: 14px;
		}
	}
}
</style>
