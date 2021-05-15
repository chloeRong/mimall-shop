<template>
	<div>
		<input
			type="text"
			:value="text"
			@input="$emit('change', $event.target.value)"
		/>
	</div>
</template>

<script>
export default {
	name: '',
	model: {
		prop: 'text',
		event: 'change'
	},

	props: {
		text: String
	},
	components: {},
	methods: {}
}
</script>
<style lang="scss" scoped></style>
