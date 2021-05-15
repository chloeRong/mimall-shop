<template>
	<div>
		<p>{{ title }}</p>
		<add-title v-model="title"></add-title>
	</div>
</template>

<script>
import addTitle from './addTitle'
export default {
	name: 'example',
	data() {
		return {
			title: '自定义v-model'
		}
	},
	components: {
		addTitle
	},
	methods: {}
}
</script>
<style lang="scss" scoped></style>
