<template>
	<div class="greeting">
		<div class="greetng__item greetng__item_left">
			<a class="small_logo_signin">
				<img src="../images/small-logo.png" height="50" width="50" alt="">
			</a>
			<form class="greetng__item__form">
				<div class="greetng__item__form__item">
					<input type="text" class="greetng__item__form__input" name="form-login">	
					<label class="greetng__item__form__hint" for="form-login">
						{{ inputEmail }}
					</label>				
				</div>
				<button class="greetng__item__form__button" @click="submit($event)">
					{{ restorePass }}
				</button>

				<a class="link-out" @click="goBack">
					{{ goBackWord }}
				</a>

			</form>
			<foot-cmp></foot-cmp>
		</div>
		<right-cmp></right-cmp>
	</div>
</template>

<script>
	import rightSideFormElement from "./rightSide.vue";
	import footerElement from "./footer.vue";

	export default{
		data() {
			return {
				welcomeTitle: 'Доброе пожаловать в Azur.',
				authToGetAccess: 'Для доступа в Ваш аккаунт, авторизуйтесь.',
				inputEmail: 'Введите e-mail',
				restorePass: 'Восстановить',
				goBackWord: 'Вернуться назад',
				azurPhoneText: 'Единый номер Azur: ',
				azurPhoneNumber: '+375 (29) 123-45-67',
			}
		},
		components: {
			'right-cmp': rightSideFormElement,
			'foot-cmp': footerElement
		},
		methods: {
			goBack() {
				this.$router.go(-1);
			}
		}
	}
</script>