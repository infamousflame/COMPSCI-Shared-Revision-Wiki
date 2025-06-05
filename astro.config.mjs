// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'UOA COMPSCI WIKI',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/infamousflame/COMPSCI-Shared-Revision-Wiki' }],
			sidebar: [
				{
					label: 'Home',
					slug: 'land_page'
				},
				{
					label: 'COMPSCI210',
					autogenerate: { directory: 'compsci210' },
				},
				{
					label: 'COMPSCI215',
					autogenerate: { directory: 'compsci215' },
				},
			],
		}),
	],
});
