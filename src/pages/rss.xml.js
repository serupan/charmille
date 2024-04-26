import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Blog de Buzz',
    description: 'Le guide des étoiles',
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./posts/*.{md,mdx}'),
    ),
  });
}