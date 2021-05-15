<template>
	<div class="header">
		<div class="nav-topbar">
			<div class="container">
				<div class="topbar-menu">
					<a href="javascirpt:;">小米商城</a>
					<a href="javascirpt:;">MUI</a>
					<a href="javascirpt:;">云服务</a>
					<a href="javascirpt:;">用户协议</a>
				</div>
				<div class="topbar-user">
					<a href="javascirpt:;" v-if="!username" @click="login">登录</a>
					<a href="javascirpt:;" v-if="username">{{ username }}</a>
					<a href="javascirpt:;" v-if="username">我的订单</a>
					<a href="javascirpt:;" class="my-cart" @click="goToCart"
						><span></span>购物车</a
					>
				</div>
			</div>
		</div>
		<div class="nav-header">
			<div class="container">
				<div class="header-logo">
					<a href="/#/index"></a>
				</div>
				<div class="header-menu">
					<div class="menu-items">
						<span>小米手机</span>
						<div class="children">
							<ul>
								<li
									class="product"
									v-for="(item, index) in phoneList"
									:key="index"
								>
									<a :href="'/#/product/' + item.id" target="_blank">
										<div class="pro-img">
											<img :src="item.mainImage" :alt="item.subtitle" />
										</div>
										<div class="pro-name">{{ item.name }}</div>
										<div class="pro-price">{{ item.price | currency }}</div>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="menu-items">
						<span>RedMi红米</span>
						<div class="children">todo</div>
					</div>
					<div class="menu-items">
						<span>电视</span>
						<div class="children">
							<ul>
								<li class="product">
									<a>
										<div class="pro-img">
											<img src="/imgs/nav-img/nav-3-1.jpg" alt="电视" />
										</div>
										<div class="pro-name">小米壁画电视 65英寸</div>
										<div class="pro-price">6999元</div>
									</a>
								</li>
								<li class="product">
									<a>
										<div class="pro-img">
											<img src="/imgs/nav-img/nav-3-2.jpg" alt="电视" />
										</div>
										<div class="pro-name">小米全面屏电视E55A</div>
										<div class="pro-price">1999元</div>
									</a>
								</li>
								<li class="product">
									<a>
										<div class="pro-img">
											<img src="/imgs/nav-img/nav-3-3.png" alt="电视" />
										</div>
										<div class="pro-name">小米电视4A 32英寸</div>
										<div class="pro-price">699元</div>
									</a>
								</li>
								<li class="product">
									<a>
										<div class="pro-img">
											<img src="/imgs/nav-img/nav-3-4.jpg" alt="电视" />
										</div>
										<div class="pro-name">小米电视4A 55英寸</div>
										<div class="pro-price">1799元</div>
									</a>
								</li>
								<li class="product">
									<a>
										<div class="pro-img">
											<img src="/imgs/nav-img/nav-3-5.jpg" alt="电视" />
										</div>
										<div class="pro-name">小米电视4A 65英寸</div>
										<div class="pro-price">2699元</div>
									</a>
								</li>
								<li class="product">
									<a>
										<div class="pro-img">
											<img src="/imgs/nav-img/nav-3-6.png" alt="电视" />
										</div>
										<div class="pro-name">查看全部</div>
										<div class="pro-price">查看全部</div>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="header-search">
					<div class="wrapper">
						<input />
						<a href="javasript:;"></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'nav-header',
	data() {
		return {
			username: 'Zoe',
			phoneList: []
		}
	},
	filters: {
		currency(val) {
			if (!val) return '0.00'
			return '¥' + val.toFixed(2) + '元'
		}
	},
	computed: {},
	components: {},
	created() {},
	mounted() {
		this.getProducts()
		this.func()
	},
	methods: {
		login() {
			this.$router.push('/login')
		},
		getProducts() {
			this.axios
				.get('/products', {
					params: {
						categoryId: '100012',
						pageSize: 6
					}
				})
				.then((res) => {
					this.phoneList = res.list
				})
		},
		goToCart() {
			this.$router.push('/cart')
		}
	}
}
</script>
<style lang="scss" scoped>
.header {
	.nav-topbar {
		height: 39px;
		line-height: 39px;
		background: $colorB;
		color: #b0b0b0;
		.container {
			@include flex();
			a {
				display: inline-block;
				color: #b0b0b0;
				margin-right: 17px;
			}
			.my-cart {
				width: 110px;
				background-color: #f60;
				text-align: center;
				color: #fff;
				margin-right: 0;
				span {
					@include bgImg(16px, 12px, '/imgs/icon-cart-checked.png');
					margin-right: 4px;
					color: #fff;
				}
			}
		}
	}
	.nav-header {
		.container {
			@include flex();
			height: 112px;
			position: relative;
			.header-logo {
				background: #f60;
				width: 55px;
				height: 55px;
				a {
					display: inline-block;
					width: 110px;
					height: 55px;
					&:before {
						content: '';
						@include bgImg(55px, 55px, '/imgs/mi-logo.png');
						transition: margin 0.2s;
					}
					&:after {
						content: '';
						@include bgImg(55px, 55px, '/imgs/mi-home.png');
					}
					&:hover::before {
						margin-left: -55px;
						transition: margin 0.2s;
					}
				}
			}
			.header-menu {
				width: 643px;
				padding-left: 209px;
				.menu-items {
					display: inline-block;
					color: #333;
					font-weight: bold;
					font-size: 16px;
					margin-right: 20px;
					line-height: 100px;
					span {
						cursor: pointer;
					}
					&:hover {
						color: $colorA;
						.children {
							height: 220px;
							opacity: 1;
							transition: all 0.3s;
						}
					}
					.children {
						width: 1226px;
						position: absolute;
						top: 112px;
						left: 0;
						z-index: 12;
						height: 0;
						opacity: 0;
						overflow: hidden;
						box-shadow: 0 7px 6px 0 rgba(0, 0, 0, 0.11);
						background: #fff;
						transition: all 0.3s;
						.product {
							position: relative;
							float: left;
							width: 16.66%;
							font-size: 12px;
							text-align: center;
							line-height: 12px;
							a {
								display: inline-block;
								.pro-img {
									img {
										height: 111px;
										margin-top: 26px;
										width: auto;
									}
								}
								.pro-name {
									font-weight: 700;
									margin-top: 19px;
									margin-bottom: 8px;
									color: $colorB;
								}
								.pro-price {
									color: $colorA;
								}
							}
							&:before {
								content: '';
								position: absolute;
								top: 28px;
								right: 0;
								border-right: 1px solid $colorF;
								height: 100px;
							}
							&:last-child::before {
								border: none;
							}
						}
					}
				}
			}
			.header-search {
				.wrapper {
					width: 319px;
					height: 50px;
					border: 1px solid #e0e0e0;
					display: flex;
					align-items: center;
					input {
						width: 264px;
						height: 50px;
						box-sizing: border-box;
						border: none;
						border-right: 1px solid #e0e0e0;
						padding-left: 14px;
					}
					a {
						@include bgImg(18px, 18px, '/imgs/icon-search.png');
						margin-left: 17px;
					}
				}
			}
		}
	}
}
</style>
