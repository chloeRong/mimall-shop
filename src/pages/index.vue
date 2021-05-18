<template>
	<div class="index">
		<div class="container">
			<div class="swiper-box">
				<div class="nav-menu">
					<ul class="menu-wrap">
						<li class="menu-item">
							<a href="javascirpt:void(0);">手机 电话卡</a>
							<div class="chlidren">
								<ul v-for="(item, i) in menuList" :key="i">
									<li v-for="(sub, j) in item" :key="j">
										<a v-if="sub" :href="'/#/product/' + sub.id">
											<img :src="sub.img" />{{ sub.name }}
										</a>
										<a v-else href="/#/product/30">
											<img src="/imgs/item-box-1.png" />小米C9
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li class="menu-item">
							<a href="javascirpt:void(0);">电视 盒子</a>
							<div class="children"></div>
						</li>
						<li class="menu-item">
							<a href="javascirpt:void(0);">笔记本 平板</a>
							<div class="children"></div>
						</li>
						<li class="menu-item">
							<a href="javascirpt:void(0);">家电 插线板</a>
							<div class="children"></div>
						</li>
						<li class="menu-item">
							<a href="javascirpt:void(0);">出行 穿戴</a>
							<div class="children"></div>
						</li>
						<li class="menu-item">
							<a href="javascirpt:void(0);">智能 路由器</a>
							<div class="children"></div>
						</li>
						<li class="menu-item">
							<a href="javascirpt:void(0);">电源 配件</a>
							<div class="children"></div>
						</li>
						<li class="menu-item">
							<a href="javascirpt:void(0);">生活 箱包</a>
							<div class="children"></div>
						</li>
					</ul>
				</div>
				<div class="swiper">
					<swiper :options="swiperOptions">
						<swiper-slide v-for="(item, index) in swiperList" :key="index">
							<a :href="'/#/product/' + item.id">
								<img :src="item.imgSrc" />
							</a>
						</swiper-slide>
						<!-- 如果需要分页器 -->
						<div class="swiper-pagination" slot="pagination"></div>
						<!-- 如果需要导航按钮 -->
						<div class="swiper-button-prev" slot="button-prev"></div>
						<div class="swiper-button-next" slot="button-next"></div>
					</swiper>
				</div>
			</div>
			<div class="adv-box">
				<a
					:href="'/#/product/' + item.id"
					v-for="(item, index) in advList"
					:key="index"
				>
					<img v-lazy="item.img" />
				</a>
			</div>
			<div class="banner-box">
				<a href="/#/product/30"
					><img alt="/imgs/banner-1.png" v-lazy="'/imgs/banner-1.png'" />
				</a>
			</div>
		</div>
		<div class="product-box">
			<div class="container">
				<h2>手机</h2>
				<div class="wrapper">
					<div class="banner-left">
						<a href="javascript:;"
							><img v-lazy="'/imgs/mix-alpha.jpg'" alt=""
						/></a>
					</div>
					<div class="list-box">
						<div class="list" v-for="(sub, i) in productList" :key="i">
							<div class="item" v-for="(item, j) in sub" :key="j">
								<span
									:class="{ 'new-pro': j % 2 == 0, 'kill-pro': j % 2 !== 0 }"
									>{{ j % 2 == 0 ? '新品' : '秒杀' }}</span
								>
								<div class="item-img">
									<img v-lazy="item.mainImage" />
								</div>
								<div class="item-info">
									<h3>{{ item.name }}</h3>
									<p>{{ item.subtitle }}</p>
									<p class="price" @click="goToCart(item.id)">
										{{ item.price }}元
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<service-bar> </service-bar>
		<modal
			title="提示"
			sureText="查看购物车"
			btnType="1"
			modalType="middle"
			:showModal="showModal"
			@submit="submit"
			@close="close"
		>
			<template v-slot:body>
				<p>商品添加成功！</p>
			</template>
		</modal>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import style (>= Swiper 6.x)
// import 'swiper/swiper-bundle.css'

// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'
import serviceBar from '../components/ServiceBar'
import modal from '../components/Modal'

export default {
	name: 'index',
	data() {
		return {
			swiperOptions: {
				autoplay: true,
				loop: 600,
				effect: 'cube',
				cubeEffect: {
					slideShadows: true,
					shadow: true,
					shadowOffset: 100,
					shadowScale: 0.6
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}
			},
			swiperList: [
				{
					id: '42',
					imgSrc: '/imgs/slider/slide-1.jpg'
				},
				{
					id: '45',
					imgSrc: '/imgs/slider/slide-2.jpg'
				},
				{
					id: '46',
					imgSrc: '/imgs/slider/slide-3.jpg'
				},
				{
					id: '',
					imgSrc: '/imgs/slider/slide-4.jpg'
				},
				{
					id: '',
					imgSrc: '/imgs/slider/slide-5.jpg'
				}
			],
			menuList: [
				[
					{
						id: '30',
						img: '/imgs/item-box-1.png',
						name: '小米CC9'
					},
					{
						id: '31',
						img: '/imgs/item-box-2.png',
						name: ' 小米8青春版'
					},
					{
						id: '32',
						img: '/imgs/item-box-3.jpg',
						name: ' Redmi K20 Pro'
					},
					{
						id: '33',
						img: '/imgs/item-box-4.jpg',
						name: ' 移动4G专区'
					}
				],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0]
			],
			advList: [
				{
					id: '33',
					img: '/imgs/ads/ads-1.png'
				},
				{
					id: '48',
					img: '/imgs/ads/ads-2.jpg'
				},
				{
					id: '45',
					img: '/imgs/ads/ads-3.png'
				},
				{
					id: '47',
					img: '/imgs/ads/ads-4.jpg'
				}
			],
			productList: [],
			showModal: false
		}
	},
	components: {
		serviceBar,
		Swiper,
		SwiperSlide,
		modal
	},
	mounted() {
		this.getProducts()
	},
	methods: {
		getProducts() {
			this.axios('/products', {
				params: {
					categoryId: '100012',
					pageSize: 14
				}
			}).then((res) => {
				this.productList = [res.list.slice(6, 10), res.list.slice(10, 14)]
			})
		},
		goToCart() {
			this.showModal = !this.showModal
			// this.axios
			// 	.post('/carts', { productId: id, selected: true })
			// 	.then((res) => {
			// 		console.log(res)
			// 	})
			// 	.catch(() => {})
		},
		submit() {
			this.$router.push('/detail/32')
		},
		close() {
			this.showModal = !this.showModal
		}
	}
}
</script>
<style lang="scss" scoped>
.index {
	.swiper-box {
		.swiper-container {
			height: 452px;
			overflow: hidden;
			img {
				width: 100%;
				height: 100%;
			}
			.swiper-button-prev {
				left: 274px;
			}
		}
		.nav-menu {
			position: absolute;
			z-index: 10;
			width: 264px;
			height: 452px;
			padding: 26px 0;
			background-color: #55585a7a;
			box-sizing: border-box;
			.menu-wrap {
				.menu-item {
					height: 50px;
					line-height: 50px;
					&:hover {
						background-color: #f60;
						.chlidren {
							display: block;
						}
					}
					a {
						position: relative;
						display: block;
						font-size: 16px;
						color: #fff;
						padding-left: 30px;
						&:after {
							content: '';
							position: absolute;
							top: 17.5px;
							right: 30px;
							@include bgImg(10px, 15px, '/imgs/icon-arrow.png');
						}
					}
					.chlidren {
						display: none;
						position: absolute;
						left: 264px;
						top: 0;
						width: 962px;
						height: 450px;
						background-color: #fff;
						border: 1px solid #e5e5e5;
						ul {
							display: flex;
							justify-content: space-between;

							li {
								flex: 1;
								height: 75px;
								line-height: 75px;
								a {
									color: #333;
									font-size: 14px;
									img {
										width: 42px;
										height: 35px;
										vertical-align: middle;
										margin-right: 10px;
									}
								}
							}
						}
					}
				}
			}
		}
		.swiper {
			a {
				display: block;
			}
		}
	}
	.adv-box {
		@include flex();
		margin-top: 14px;
		margin-bottom: 30px;
		a {
			display: inline-block;
			width: 296px;
			height: 167px;
		}
	}
	.banner-box {
		margin-bottom: 50px;
	}
	.product-box {
		padding: 30px 0 50px;
		background-color: $colorJ;
		h2 {
			font-size: $fontF;
			line-height: 21px;
			margin-bottom: 20px;
			color: $colorB;
		}
		.wrapper {
			display: flex;
			align-items: stretch;
			.banner-left {
				margin-right: 16px;
				img {
					width: 224px;
					height: 100%;
				}
			}
			.list-box {
				flex-grow: 1;
				.list {
					@include flex();
					// align-items: stretch;
					margin-bottom: 14px;
					&:last-child {
						margin-bottom: 0;
					}
					.item {
						width: 24%;
						text-align: center;
						margin-right: 14px;
						background-color: $colorG;
						&:last-child {
							margin-right: 0;
						}
						span {
							display: inline-block;
							width: 67px;
							height: 24px;
							font-size: 14px;
							line-height: 24px;
							color: #fff;
							&.new-pro {
								background-color: #7ecf68;
							}
							&.kill-pro {
								background-color: #f20a0a;
							}
						}
						.item-img {
							// padding: 30px 10px;
							img {
								width: 100%;
								height: 194px;
							}
						}
						.item-info {
							h3 {
								font-size: 14px;
								color: #333;
								line-height: 14px;
								font-weight: 700;
							}
							p {
								color: #999;
								line-height: 13px;
								margin: 6px auto 13px;
							}
							.price {
								color: #f20a0a;
								font-size: 14px;
								font-weight: 700;
								cursor: pointer;
								&:after {
									content: '';
									@include bgImg(22px, 22px, '/imgs/icon-cart-hover.png');
									margin-left: 6px;
									vertical-align: middle;
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>
