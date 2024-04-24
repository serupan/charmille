import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CMAs9evb.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_ND5Wdwwo.mjs');
const _page1 = () => import('./chunks/_id__BkLNpubT.mjs');
const _page2 = () => import('./chunks/_.._B8ckodAF.mjs');
const _page3 = () => import('./chunks/_tag__BcREJxV5.mjs');
const _page4 = () => import('./chunks/index_D8qDudZe.mjs');
const _page5 = () => import('./chunks/index_BthvWqZz.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/[id].json.ts", _page1],
    ["src/pages/posts/[...slug].astro", _page2],
    ["src/pages/tags/[tag].astro", _page3],
    ["src/pages/tags/index.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "3a3039c3-e7a8-4fc7-bff8-190d391a6b1d"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
