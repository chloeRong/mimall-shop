<template>
	<div>
		<nav-header></nav-header>
		<router-view></router-view>
		<nav-footer></nav-footer>
	</div>
</template>

<script>
import NavHeader from '../components/NavHeader'
import NavFooter from '../components/NavFooter'

export default {
	name: 'home',
	data() {
		return {}
	},
	computed: {},
	components: {
		NavHeader,
		NavFooter
	},
	created() {},
	mounted() {},
	methods: {}
}
</script>
<style lang="scss" scoped></style>
