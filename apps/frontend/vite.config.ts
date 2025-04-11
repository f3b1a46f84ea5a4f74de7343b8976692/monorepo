/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';

export default defineConfig({
    root: __dirname,
    cacheDir: '../../node_modules/.vite/apps/frontend',
    server: {
        port: 4200,
        host: 'localhost',
    },
    preview: {
        port: 4300,
        host: 'localhost',
    },
    plugins: [react(), nxViteTsPaths(), nxCopyAssetsPlugin(['*.md'])],
    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },
    build: {
        outDir: '../../dist/apps/frontend',
        emptyOutDir: true,
        reportCompressedSize: true,
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
    resolve: {
        alias: {
            '@local/app': '/src/app',
            '@local/app/*': '/src/app/*',
            '@local/pages': '/src/pages',
            '@local/pages/*': '/src/pages/*',
            '@local/widgets': '/src/widgets',
            '@local/widgets/*': '/src/widgets/*',
            '@local/features': '/src/features',
            '@local/features/*': '/src/features/*',
            '@local/entities': '/src/entities',
            '@local/entities/*': '/src/entities/*',
            '@local/shared': '/src/shared',
            '@local/shared/*': '/src/shared/*',
            '@local/assets': '/src/shared/assets',
            '@local/assets/*': '/src/shared/assets/*',
        },
    },
});
