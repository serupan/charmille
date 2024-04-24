import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_CQXSGyPE.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Blog de Serupan. J’aime jouer au jeu de rôle, et j’aime parler de jeu de rôle. Ce blog est fait pour ça :)</p>";

				const frontmatter = {"title":"Hello !","description":"Blog de Serupan. J'aime jouer au jeu de rôle, et j'aime parler de jeu de rôle....","pubDate":"2024-04-20T00:00:00.000Z","author":"Serupan","tags":["blog","jeu de role"]};
				const file = "D:/charmille/src/content/posts/hello.md";
				const url = undefined;
				function rawContent() {
					return "\r\nBlog de Serupan. J'aime jouer au jeu de rôle, et j'aime parler de jeu de rôle. Ce blog est fait pour ça :)\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
