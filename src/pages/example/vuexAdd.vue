<template>
	<div>{{ num }}</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
	name: 'vuex',
	data() {
		return {}
	},
	computed: {
		// ...mapState(['count', 'todos'])
		...mapState({
			num: 'count',
			list: 'todos'
		}),
		...mapGetters(['doneTodos'])
	},
	components: {},
	methods: {}
}
</script>
<style lang="scss" scoped></style>
