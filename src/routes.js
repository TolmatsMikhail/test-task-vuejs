import LOGIN from "./components/login.vue";
import REGISRT from "./components/registr.vue";
import RESTOREPASS from "./components/restore.vue";
import CABINET from "./components/cabinet.vue";
import COUNTRY from "./components/countries.vue";
import NOTFOUND from "./components/notFound.vue";

export const routes = [
	// redirect from empty way 
	{
		path: '', 
		redirect: 'authorization'
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
	{
		path: '/country',
		component: COUNTRY
	},
	{
		path: '/404',
		component: NOTFOUND
	},
	// redirect from any other name to authorization page
	{
		path: '*',
		redirect: '/404'
	},
];