<template>
	<div>
		<order-header></order-header>
		<router-view></router-view>
		<nav-footer></nav-footer>
	</div>
</template>

<script>
import NavFooter from '../components/NavFooter.vue'
import OrderHeader from '../components/OrderHeader'

export default {
	name: '',
	data() {
		return {}
	},
	components: { NavFooter, OrderHeader },
	methods: {}
}
</script>
<style lang="scss" scoped></style>
