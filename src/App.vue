<template>
	<div id="app">
		<transition name="slide" mode="out-in">
			<router-view></router-view>
		</transition>
<!-- 		<restore-cmp></restore-cmp>
		<login-cmp></login-cmp>
		<registr-cmp></registr-cmp> -->
	</div>
</template>

<script>

	import LOGIN from './components/login.vue';
	import REGISRT from './components/registr.vue'
	import RESTOREPASS from './components/restore.vue'
	import CABINET from './components/cabinet.vue'
	import NOTFOUND from './components/notFound.vue'

	export default {
		components: {
			'login-cmp': LOGIN,
			'registr-cmp': REGISRT,
			'restore-cmp': RESTOREPASS,
			'cabinet-cmp': CABINET,
			'404-cmp': NOTFOUND
		}
	}
</script>
<style></style>
<style lang="scss">
  @import 'src/style.scss';

	.slide-enter-active {
	  transition: all .3s ease;
	}
	.slide-leave-active {
	  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-enter, .slide-leave-to
	/* .slide-leave-active до версии 2.1.8 */ {
	  transform: rotate(360deg) scale(0.01);
	  opacity: 0;
	}
</style>
