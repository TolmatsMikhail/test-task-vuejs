import LOGIN from "./components/login.vue";
import REGISRT from "./components/registr.vue";
import RESTOREPASS from "./components/restore.vue";
import CABINET from "./components/cabinet.vue"

export const routes = [
	{
		path: '', redirect: 'authorization'
	},
	{
		path: '/authorization',
		component: LOGIN
	},
	{
		path: '/registration',
		component: REGISRT
	},
	{
		path: '/restore-pass',
		component: RESTOREPASS
	},
	{
		path: '/cabinet',
		component: CABINET
	},
];