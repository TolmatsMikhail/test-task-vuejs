<template>
	<div class="greeting" style="margin-bottom: 40px">
		<div class="greetng__item greetng__item_left">
			<a class="small_logo_signin">
					<img src="../images/small-logo.png" height="50" width="50" alt="">
			</a>
			<form class="greetng__item__form">
				<div class="greetng__item__form__item">
					<input type="text" class="greetng__item__form__input" name="form-login">	
					<label class="greetng__item__form__hint" for="form-login">
						{{ inputLoginOrEmail }}
					</label>				
				</div>
				<div class="greetng__item__form__item">
					<input type="text" class="greetng__item__form__input" name="form-password">	
					<label class="greetng__item__form__hint" for="form-password">
						{{ yourPass }}
					</label>
					
					<a class="restore-pass greetng__item__form__hint" @click="restorePassword">
						{{ forgetPassword }}
					</a>

				</div>
				<button class="greetng__item__form__button" @click="submit($event)">
					{{ loginButton }}
				</button>

				<!-- <router-link to="registration" class="link-out"> 
					{{ doRegistr }}
				</router-link> -->

				<a class="link-out" @click="nabigateToRegistr">
					{{ doRegistr }}
				</a>

			</form>

			<!-- footer in form -->
			<foot-cmp></foot-cmp>
			<!-- end footer in form -->

		</div>

		<!-- right side -->
		<right-cmp></right-cmp>
		<!-- end right side -->

	</div>
</template>

<script>
	import rightSideFormElement from "./rightSide.vue";
	import footerElement from "./footer.vue"

	export default {
		data: function() {
			return {
				loginTitle: 'Форма регистрации',
				welcomeTitle: 'Доброе пожаловать в Azur.',
				authToGetAccess: 'Для доступа в Ваш аккаунт, авторизуйтесь.',
				inputLoginOrEmail: 'Логин или e-mail',
				yourPass:'Пароль',
				loginButton: 'войти',
				doRegistr: 'Зарегистрироваться',
				azurPhoneText: 'Единый номер Azur: ',
				azurPhoneNumber: '+375 (29) 123-45-67',
				forgetPassword: 'Забыли?'
			}
		},
		// Here can use es6
		methods: {
			changeTitle() {
				this.loginTitle = 'Другой заголовок '; 
			},
			nabigateToRegistr(event) {
				event.preventDefault();
				this.$router.push({ path: 'registration'});
			},
			restorePassword(event) {
				event.preventDefault();
				this.$router.push({path: 'restore-pass'})
			}
		},
		components: {
			'right-cmp': rightSideFormElement,
			'foot-cmp': footerElement
		}
	}
</script>