<template>
	<div class="greetng__item greetng__item_right">
		<h1>
			{{ welcomeTitle }}
		</h1>
		<p>
			{{ authToGetAccess }}
		</p>
		<div class="greetng__item__logo">
			<img class="big_logo_singin" src="../images/big-logo-singin.svg" alt="">
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				welcomeTitle: 'Доброе пожаловать в Azur.',
				authToGetAccess: 'Для доступа в Ваш аккаунт, авторизуйтесь.'
			}
		}
	}
</script>