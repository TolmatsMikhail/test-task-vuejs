<template>
	 <div class="country">
	 	<div>
	 		Input Name or Name part here ↓↓↓
	 	</div>
	 	<br />
	 	<input type="text" class="greetng__item__form__input"
	 	@keyup="filterFunc">
		<div class="country__list">
			<div class="country__list__item" v-for="item in filtered">
				{{ item.name}}
			</div>
		</div>

		<div v-if="filtered.length < 1">
			Sorry, it seems, there's no country with such name.
		</div>
	 </div>
</template>

<script>
	import countriesList from '../countries/countriesList.js';

	export default{
		data() {
			return {
				filtered : countriesList,
				constCountries: countriesList,
			}
		},
		methods: {
			filterFunc(event) {
				this.filtered = this.constCountries.filter(function(item) {
				  return item.name.indexOf(event.target.value.toUpperCase()) > -1;
				});
			}
		}
	}
</script>

<style scoped>
	.greetng__item__form__input{
		margin-bottom: 20px;
	}
</style>