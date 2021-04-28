<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
	</div>
</template>

<script>
// import axios from 'axios'
import jsonp from 'jsonp'

export default {
	name: 'App',
	components: {},
	mounted() {
		const url = '/api/common/adver-getadver'
		// axios.get(url).then((res) => {
		// 	console.log(res)
		// })
		jsonp(url, (err, res) => {
			console.log(res)
		})
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
