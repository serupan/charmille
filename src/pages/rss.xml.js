import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
  const posts = await getCollection('posts');
  return rss({
    title: 'Dragon Odile',
    description: 'Blog de Serupan',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
      }),

      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>fr-FR</language>`,
  });
}