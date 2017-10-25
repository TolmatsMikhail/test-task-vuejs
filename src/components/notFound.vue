<template>
	<div class="greetng__item_right">
		<h1>
			Нет такой страницы
		</h1>
		<a class="link-out" @click="goBack" v-html="goBackWord"></a>
		<hr>
		<a class="link-out" @click="toCountriesPage" v-html="filterCountries"></a>

	</div>
</template>

<script>
	export default{
		data() {
			return {
				goBackWord: 'Вернуться назад? <br />',
				filterCountries: 'Или пофильтруем страны?'
			}
		},
		methods: {
			goBack() {
				this.$router.go(-1);
			},
			toCountriesPage() {
				this.$router.push({path: 'country'});
			},
		}
	}
</script>

<style scoped>
	.greetng__item_right{
		height: 300px;
	}
</style>