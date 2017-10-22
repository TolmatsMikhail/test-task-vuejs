<template>
	<div id="app">
		<login-cmp></login-cmp>
		<!-- <reg-cmp></reg-cmp> -->
	</div>
</template>

<script>

	import LOGIN from './components/loginForm.vue';
	import REGISRT from './components/registrForm.vue'

	export default {
		components: {
			'login-cmp': LOGIN,
			'reg-cmp': REGISRT
		}
	}
</script>
<style></style>
<style lang="scss">
  @import 'src/style.scss';
</style>
