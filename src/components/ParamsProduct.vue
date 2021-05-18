<template>
	<div class="params-bar" :class="{ is_fixed: isFixed }">
		<div class="container">
			<div class="pro-title">
				{{ title }}
			</div>
			<div class="pro-param">
				<a>概述<span>|</span></a>
				<a>参数<span>|</span></a>
				<a class="user-comment">用户评价</a>
				<slot name="buy"></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: '',
	props: {
		title: String
	},
	data() {
		return {
			isFixed: false
		}
	},
	components: {},
	mounted() {
		window.addEventListener('scroll', this.initHeight)
	},
	methods: {
		initHeight() {
			let scrollTop =
				window.pageYOffset ||
				document.documentElement.scrollTop ||
				document.body.scrollTop
			this.isFixed = scrollTop > 152 ? true : false
		}
	},
	destroyed() {
		window.removeEventListener('scroll', this.initHeight, false)
	}
}
</script>
<style lang="scss" scoped>
.params-bar {
	background: #fff;
	&.is_fixed {
		position: fixed;
		top: 0;
		width: 100%;
		box-shadow: 0 5px 5px $colorE;
		z-index: 10;
	}
	.container {
		@include flex();
		height: 70px;
		line-height: 70px;
		.pro-title {
			font-size: 18px;
			color: #333;
			font-weight: 700;
		}
		.pro-param {
			font-size: 14px;
			a {
				color: #666;
				&.user-comment {
					margin-right: 10px;
				}
			}
			span {
				margin: 0 10px;
			}
		}
	}
}
</style>
