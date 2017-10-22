<template>
	<div class="greeting">
		<div class="greetng__item greetng__item_left">
			<a class="small_logo_signin">
				<img src="../images/small-logo.png" height="50" width="50" alt="">
			</a>
			<form class="greetng__item__form">
				<div class="greetng__item__form__item">
					<input type="text" class="greetng__item__form__input">	
					<div class="greetng__item__form__hint">
						Введите логин
					</div>				
				</div>
				<div class="greetng__item__form__item">
					<input type="password" class="greetng__item__form__input">	
					<div class="greetng__item__form__hint">
						Придумайте пароль
					</div>				
				</div>
				<div class="greetng__item__form__item">
					<input type="password" class="greetng__item__form__input">	
					<div class="greetng__item__form__hint">
						Повторите пароль
					</div>				
				</div>
				<div class="greetng__item__form__item">
					<input type="tel" class="greetng__item__form__input">	
					<div class="greetng__item__form__hint">
						Введите телефон
					</div>				
				</div>
				<div class="greetng__item__form__item">
					<input type="email" class="greetng__item__form__input">	
					<div class="greetng__item__form__hint">
						Введите Ваш e-mail
					</div>				
				</div>
				<button class="greetng__item__form__button">
					регистрация
				</button>

			</form>

			<div>
				Какой-то текст
			</div>
		</div>
		<div class="greetng__item greetng__item_right">
			<h1>
				Доброе пожаловать в Azur.
			</h1>
			<p>
				Для доступа в Ваш аккаунт, авторизуйтесь.
			</p>
			<div class="greetng__item__logo">
				<img class="big_logo_singin" src="../images/big-logo-singin.svg" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	export default {

		data: function() {
			return {
				loginTitle: ''
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

<style scoped lang="scss">
	
</style>