<template>
	<div class="greeting">
		<transition name="succes-registr">
			<div class="success-registr-block" v-if="regSuccess">
				<span class="success-registr-block__text">
					{{ successfullyRegistered }}
				</span>
			</div>			
		</transition>
		<div class="greetng__item greetng__item_left">
			<a class="small_logo_signin">
				<img src="../images/small-logo.png" height="50" width="50" alt="">
			</a>
			<form class="greetng__item__form">
				<div class="greetng__item__form__item">
					<input type="text" class="greetng__item__form__input" name="form-login"
					v-model="my_login">	
					<label class="greetng__item__form__hint" for="form-login">
						{{ inputLogin }}
					</label>				
				</div>
				<div class="greetng__item__form__item">
					<input type="password" class="greetng__item__form__input" name="form-password"
					v-model="my_password">	
					<label class="greetng__item__form__hint" for="form-password">
						{{ comeUpPassword }}
					</label>				
				</div>
				<div class="greetng__item__form__item">
					<input type="password" class="greetng__item__form__input" name="form-password-repeat"
					v-model="my_passwordRepeat">	
					<div class="greetng__item__form__hint" for="form-password-repeat">
						{{ repeatPassword }}
					</div>				
				</div>
				<div class="greetng__item__form__item">
					<input 
						v-mask="'+375 (##) ###-XX-XX'"
						placeholder="+375 (XX) XXX-XX-XX" 
						v-model="my_phone"
						type="tel" class="greetng__item__form__input"
						name="form-phone">	
					<label class="greetng__item__form__hint" for="form-phone">
						{{ inputPhoneNumber }}
					</label>				
				</div>
				<div class="greetng__item__form__item">
					<input type="email" class="greetng__item__form__input" name="form-email" v-model="my_email">	
					<label class="greetng__item__form__hint" for="form-email">
						{{ inputEmail }}
					</label>				
				</div>
				<button class="greetng__item__form__button" @click="submit($event)">
					{{ registrButton }}
				</button>
				<!-- <router-link to="login" class="link-out">
					{{ alreadyHaveAcc }}					
				</router-link> -->
				<a class="link-out" @click="navigateToLogin">
					{{ alreadyHaveAcc }}					
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
	import footerElement from "./footer.vue";

	export default {
		data: function() {
			return {
				my_phone: '',
				my_password: '',
				my_passwordRepeat: '',
				my_email: '',
				my_login: '',
				inputLogin: 'Введите логин',
				comeUpPassword: 'Придумайте пароль',
				repeatPassword: 'Повторите пароль',
				inputPhoneNumber: 'Введите телефон',
				inputEmail: 'Введите Ваш e-mail',
				registrButton: 'регистрация',
				alreadyHaveAcc: 'У меня есть аккаунт',
				// get Access to route params
				routParams: this.$route.params,
				urlForRegistr: 'http://test-task-api.insirion.ru/user/registration',
				successfullyRegistered: 'Вы успешно зарегистрированы! Для входа воспользуйтесь Вашими данными',
				regSuccess: false
			}
		},
		computed: {
		},
		// Here can use es6
		methods: {
			submit(event) {
				event.preventDefault();
				let data = {
					'email': this.my_email,
					'password': this.my_password,
					'phone': this.my_phone
				};

				fetch(this.urlForRegistr, {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				}).then((response => {
					if(response.status == 200) {
						this.regSuccess = !this.regSuccess;
						setTimeout( () => {
							this.regSuccess = !this.regSuccess;
							this.clearData();
						}, 3000);
					}
				}));
			},
			clearData() {
				this.my_phone = '';
				this.my_password = '';
				this.my_passwordRepeat = '';
				this.my_email = '';
				this.my_login = '';
			},
			navigateToLogin(event) {
				event.preventDefault();
				this.$router.push({path: 'authorization'})
			}
		},
		components: {
			'right-cmp': rightSideFormElement,
			'foot-cmp': footerElement
		}
	}
</script>

<style scoped lang="scss">
	
</style>