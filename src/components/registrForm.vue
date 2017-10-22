<template>
	<div>
		<h2>
			{{ loginTitle }}
		</h2>
		<button @click="changeTitle">
			Изменить заголовок
		</button>
	</div>
</template>

<script>
	export default {

		data: function() {
			return {
				loginTitle: 'Форма регистрации'
			}
		},
		// Here can use es6
		methods: {
			changeTitle() {
				this.loginTitle = 'Другой заголовок '; 
			}
		}
	}
</script>