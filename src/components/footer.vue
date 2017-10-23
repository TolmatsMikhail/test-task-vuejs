<template>
	<div class="foot-block">
		<span class="foot-block__text">
			{{azurPhoneText}}
		</span>
		<a href="tel:+375291234567" class="foot-block__phone">
			{{azurPhoneNumber}}
		</a>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				azurPhoneText: 'Единый номер Azur: ',
				azurPhoneNumber: '+375 (29) 123-45-67'
			}
		}
	}
</script>