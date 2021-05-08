<template>
	<div class="footer">
		<div class="footer-logo">
			<img src="/imgs/logo-footer.png" />
			<p>小米商城</p>
		</div>
		<div class="footer-link">
			<a>河畔一角主页</a>
			<span>|</span>
			<a>Vue全栈课程</a>
			<span>|</span>
			<a>React全家桶课程</a>
			<span>|</span>
			<a>微信支付专项课程</a>
			<span>|</span>
			<a>配套课程：Java通用型支付+电商平台双系统实战</a>
			<span>|</span>
		</div>
		<div class="footer-copyright">
			Copyright ©2020 <span class="domain">mi.futurefe.com</span> All Rights
			Reserved.
		</div>
	</div>
</template>

<script>
export default {
	name: 'nav-footer',
	data() {
		return {}
	},
	computed: {},
	components: {},
	created() {},
	mounted() {},
	methods: {}
}
</script>
<style lang="scss" scoped>
.footer {
	background: #333;
	border-top: 4px solid #f60;
	color: #999;
	font-size: 16px;
	text-align: center;
	padding-bottom: 26px;
	.footer-logo {
		margin: 46px 0 31px;
		img {
			width: 53px;
			height: 36px;
			margin-bottom: 13px;
		}
	}
	.footer-link {
		margin-bottom: 13px;
		span {
			margin: 0 10px;
		}
	}
	.footer-copyright {
		.domain {
			color: #f60;
		}
	}
}
</style>
