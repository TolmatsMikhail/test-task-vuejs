<template>
	<div class="greeting">
		<div class="greetng__item greetng__item_left">
			<a class="small_logo_signin">
				<img src="../images/small-logo.png" height="50" width="50" alt="">
			</a>
			<form class="greetng__item__form">
				<div class="greetng__item__form__item">
					<input type="text" class="greetng__item__form__input" name="form-login"
					@input="checkingEmailInput"
					v-model="my_email">	
					<label class="greetng__item__form__hint" for="form-login">
						{{ inputEmail }}
					</label>	
					<div v-if="emailIsValid" class="message">
						{{ invalidEmailMessage }}
					</div>			
				</div>
				<!-- Really, there's no way to use this button -->
				<button class="greetng__item__form__button" @click="sumFuncToRestorePass($event)">
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
				emailIsValid: false,
				invalidEmailMessage: 'Invalid email !',
				my_email: '',
			}
		},
		components: {
			'right-cmp': rightSideFormElement,
			'foot-cmp': footerElement
		},
		methods: {
			goBack() {
				this.$router.go(-1);
			},
			checkingEmailInput(event) {
				this.emailIsValid = true;
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				if(re.test(event.target.value)) this.emailIsValid = false;
			},
			sumFuncToRestorePass(event) {
				event.preventDefault();
				if(this.my_email.length < 1) {
					this.emailIsValid = true;
					return;
				}
				alert('do Something to send letter.No task');
				return;
			}
		}
	}
</script>