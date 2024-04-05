import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
            $components: Path.resolve('./src/components'),
		},
	}
});
