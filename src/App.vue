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
		/* 本地json数据请求 */
		this.axios.get('/mock/user/login.json').then((res) => {
			console.log(res)
		})

		/* 在easy-mock上搭建一个后台服务接口 */
		this.axios.get('/mock/user/login').then((res) => {
			console.log(res)
		})

		/* 集成mockjs插件搭建API */
		// this.axios.get('/user/login').then((res) => {
		// 	console.log(res.username)
		// })
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
