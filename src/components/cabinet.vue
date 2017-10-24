<template>
	<div class="cabinet">
		<div class="cabinet__items">
			<a 
				v-for="item in insuraneItems" 
				class="cabinet__item">
				<div class="cabinet__item__image">
					<img :src="item.img" alt="">
				</div>
				<div class="divider"></div>
				<p class="cabinet__item__title">
					{{ item.title}}
				</p>
				<p class="cabinet__item__description">
					{{ item.description}}
				</p>
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				greetTitle: 'Привет! Это твой кабинет',
				urlWithData: 'http://test-task-api.insirion.ru/user/insurance',
				insuraneItems: '',
			}
		},
		methods: {
			getUserInfo() {
				let myToken = localStorage.getItem('token-sirion');
				fetch(this.urlWithData, {
					method: 'GET',
					headers: {
						"Content-Type": "application/json",
						"token-sirion": myToken
					}
				}).then( (response) => {
					if(response.status === 200) {
						return response.json();
					} else {
						throw new Error(response.error);
					}
				}).then( (res) => {
					this.insuraneItems = res;
					console.log(res)
				})
			}
		},
		beforeMount() {
			this.getUserInfo();
		}
	}
</script>