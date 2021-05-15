<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {},
	mounted() {
		this.getUser()
		this.getCartNum()
	},
	methods: {
		getUser() {
			this.axios.get('/user').then(() => {})
		},
		getCartNum() {
			this.axios.get('/carts/products/sum').then(() => {})
		}
	}
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/base.scss';
</style>
