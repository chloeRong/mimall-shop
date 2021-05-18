<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'App',
	components: {},
	mounted() {
		if (this.$cookie.get('userId')) {
			this.getUser()
			this.getCartCount()
		}
	},
	methods: {
		getUser() {
			this.axios.get('/user').then((res = {}) => {
				// this.$store.dispatch('saveUsername', res.username)
				if (res.username) {
					this.saveUsername(res.username)
				}
			})
		},
		getCartCount() {
			this.axios.get('/carts/products/sum').then((res) => {
				// this.$store.dispatch('saveCartCount', res)
				this.saveCartCount(res)
			})
		},
		...mapActions(['saveUsername', 'saveCartCount'])
	}
}
</script>

<style lang="scss">
// @import './assets/scss/reset.scss';
// @import './assets/scss/base.scss';
</style>
