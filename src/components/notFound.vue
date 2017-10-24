<template>
	<div class="greetng__item_right">
		<h1>
			Нет такой страницы
		</h1>
		<a class="link-out" @click="goBack" v-html="goBackWord">
			
		</a>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				goBackWord: 'Вернуться назад? <br /> p.s. У Вас нет выбора'
			}
		},
		methods: {
			goBack() {
				this.$router.go(-1);
			},
		}
	}
</script>

<style scoped>
	.greetng__item_right{
		height: 300px;
	}
</style>