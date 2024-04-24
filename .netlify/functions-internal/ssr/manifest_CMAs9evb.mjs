import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_CQXSGyPE.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"tags/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/[id].json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/([^/]+?)\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false},{"content":".json","dynamic":false,"spread":false}]],"params":["id"],"component":"src/pages/api/[id].json.ts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["D:/charmille/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["D:/charmille/src/pages/posts/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/posts/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/charmille/src/pages/tags/[tag].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/[tag]@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/charmille/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-manifest":"manifest_CMAs9evb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_ND5Wdwwo.mjs","\u0000@astro-page:src/pages/api/[id].json@_@ts":"chunks/_id__BkLNpubT.mjs","\u0000@astro-page:src/pages/posts/[...slug]@_@astro":"chunks/_.._B8ckodAF.mjs","\u0000@astro-page:src/pages/tags/[tag]@_@astro":"chunks/_tag__BcREJxV5.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"chunks/index_D8qDudZe.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_BthvWqZz.mjs","D:/charmille/src/content/posts/classe-le-vagabond-exploirateurs-de-Bruines.md?astroContentCollectionEntry=true":"chunks/classe-le-vagabond-exploirateurs-de-Bruines_BDw6USQ9.mjs","D:/charmille/src/content/posts/hello.md?astroContentCollectionEntry=true":"chunks/hello_Cb3Fo7_e.mjs","D:/charmille/src/content/posts/le-probleme-du-bac-a-sable.md?astroContentCollectionEntry=true":"chunks/le-probleme-du-bac-a-sable_DQcmQfKG.mjs","D:/charmille/src/content/posts/classe-le-vagabond-exploirateurs-de-Bruines.md?astroPropagatedAssets":"chunks/classe-le-vagabond-exploirateurs-de-Bruines_CI7Uf7k6.mjs","D:/charmille/src/content/posts/hello.md?astroPropagatedAssets":"chunks/hello__naZQ_5N.mjs","D:/charmille/src/content/posts/le-probleme-du-bac-a-sable.md?astroPropagatedAssets":"chunks/le-probleme-du-bac-a-sable_DmyURyEJ.mjs","D:/charmille/src/content/posts/classe-le-vagabond-exploirateurs-de-Bruines.md":"chunks/classe-le-vagabond-exploirateurs-de-Bruines_DyfWyy7p.mjs","D:/charmille/src/content/posts/hello.md":"chunks/hello_BKpEflU9.mjs","D:/charmille/src/content/posts/le-probleme-du-bac-a-sable.md":"chunks/le-probleme-du-bac-a-sable_netIPOqe.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.l0sNRNKZ.js","/astro/hoisted.js?q=1":"_astro/hoisted.CmTX6i1L.js","/astro/hoisted.js?q=2":"_astro/hoisted.DP2rzg_V.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/levagabond.YWw9PTln.jpg","/_astro/map8.BJyDbjx9.jpg","/_astro/map9.B3QTHo46.jpg","/favicon.svg","/tropical-fish.png","/tags/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false});

export { manifest };
