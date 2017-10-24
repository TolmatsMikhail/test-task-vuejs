<template>
	<div class="greeting" style="margin-bottom: 40px">
		<div class="greetng__item greetng__item_left">
			<a class="small_logo_signin">
					<img src="../images/small-logo.png" height="50" width="50" alt="">
			</a>
			<form class="greetng__item__form">
				<div class="greetng__item__form__item">
					<input 
					type="text"
					class="greetng__item__form__input"
					name="form-login"
					v-model="my_email"
					@input="checkingEmailInput"
					@keyup="ifInvalidEmailOrPass = false"
					@keypress="ifInvalidEmailOrPass = false"
					@change="ifInvalidEmailOrPass = false"
					>
					<label class="greetng__item__form__hint" for="form-login">
						{{ inputLoginOrEmail }}
					</label>		
					<div v-if="emailIsValid" class="message">
						{{ invalidEmailMessage }}
					</div>
				</div>
				<div class="greetng__item__form__item">
					<input type="password" class="greetng__item__form__input" name="form-password"
					v-model="my_password"
					@keyup="ifInvalidEmailOrPass = false"
					@keypress="ifInvalidEmailOrPass = false"
					@change="ifInvalidEmailOrPass = false"
					@input="resetField"
					>	
					<label class="greetng__item__form__hint" for="form-password">
						{{ yourPass }}
					</label>					
					<a class="restore-pass greetng__item__form__hint" @click="restorePassword">
						{{ forgetPassword }}
					</a>
					<div v-if="ifPassExist" class="message">
						{{ invalidPasswordMessage }}
					</div>	
					<div class="message_from_rest message" v-if="ifInvalidEmailOrPass">
						{{ invalidEmailOrPass }}
					</div>
				</div>
				<button 
					class="greetng__item__form__button"
					@click="doAuthorize($event)">
					{{ loginButton }}
				</button>
				<!-- <router-link to="registration" class="link-out"> 
					{{ doRegistr }}
				</router-link> -->
				<a class="link-out" @click="nabigateToRegistr">
					{{ doRegistr }}
				</a>
			</form>
			<foot-cmp></foot-cmp>
		</div>
		<right-cmp></right-cmp>
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
				forgetPassword: 'Забыли?',
				urlForLogin: 'http://test-task-api.insirion.ru/user/authorization',
				my_email: '',
				my_password: '',
				emailIsValid: false,
				ifPassExist: false,
				invalidEmailMessage: 'Invalid email !',
				invalidPasswordMessage: 'Empty field !',
				invalidEmailOrPass:'Incorrect E-mail or Password',
				ifInvalidEmailOrPass: false,
			}
		},
		// Here can use es6
		methods: {
			checkingEmailInput(event) {
				let checkedParam;
				if(event.target) {
					checkedParam = event.target.value;
				} else {
					checkedParam = event;
				}
				this.emailIsValid = true;
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				if(!re.test(checkedParam)) {
					this.emailIsValid = true;
					if(this.my_password.length < 1) {
						this.ifPassExist = true;
					}
					return false;
				}
				else {
					this.emailIsValid = false;
					if(this.my_password.length < 1) {
						this.ifPassExist = true;
						return false;
					}
					return true;
				}
				return false;
			},
			resetField(){
				this.ifPassExist = false;
			},
			nabigateToRegistr(event) {
				event.preventDefault();
				this.$router.push({ path: 'registration'});
			},
			restorePassword(event) {
				event.preventDefault();
				this.$router.push({path: 'restore-pass'})
			},
			doAuthorize(event) {
				event.preventDefault();

				if(!this.checkingEmailInput(this.my_email)) return;

				let data = {
					'email': this.my_email,
					'password': this.my_password
				}
				fetch(this.urlForLogin, {
					method: 'POST',
					body: JSON.stringify(data),
					headers: {
						'Content-Type': 'application/json'
					}
				}).then( (response, reject) => {
					if(response.status === 200) {
						console.log('Успешная авторизация');
						return response.json();
					} else {
						this.ifInvalidEmailOrPass = true;
					}
				}).then( (res) => {
					if(!res) {
						return;
					}
					let myStorage = localStorage;
					myStorage.setItem('token-sirion', res.token);
					this.$router.push({ path: 'cabinet'});
				})
			}
		},
		components: {
			'right-cmp': rightSideFormElement,
			'foot-cmp': footerElement
		}
	}
</script>