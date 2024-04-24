import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro_CQXSGyPE.mjs';
import { g as getImage } from './pages/generic_Dot94Fqy.mjs';
import 'clsx';

const Astro__Zidlej = new Proxy({"src":"/_astro/levagabond.YWw9PTln.jpg","width":1454,"height":600,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/charmille/src/images/posts/levagabond.jpg";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./images/posts/levagabond\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../images/posts/levagabond.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Zidlej, ...props});
													occurrenceCounter++;
											}
									}
					return imageSources;
			};

			async function updateImageReferences(html) {
				return images(html).then((imageSources) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
								const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));
		
								// Use the 'index' property for each image occurrence
								const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;
		
								if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
										imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
								}
		
								const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;
		
								return spreadAttributes({
										src: imageSources[srcKey].src,
										...attributesWithoutIndex,
								});
						});
				});
		}
		

		// NOTE: This causes a top-level await to appear in the user's code, which can break very easily due to a Rollup
	  // bug and certain adapters not supporting it correctly. See: https://github.com/rollup/rollup/issues/4708
	  // Tread carefully!
			const html = await updateImageReferences("<p><em>Classe additionnelle pour le jeu de rôle Exploirateurs de Bruines</em></p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../images/posts/levagabond.jpg&#x22;,&#x22;alt&#x22;:&#x22;A starry night sky.&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Les vagabonds sont les vers solitaires des terres humides. A peine moins bizarre qu’un bizarre, le vagabond a quand même le cerveau assez cabossé pour vouloir pieuter en dehors des enclaves. Les enclavés c’est dentaire, le vagabond c’est tout le contraire, il voyage de troubillon en troubillon mais ne croupit jamais longtemps au même endroit. A force de dédaler, il en connaît un rayon sur comment survivre dans la ville - ce que le chef a lu dans un livre, le vagabond l’a sûrement vu en vrai, en tout cas c’est ce qu’il raconte.</p>\n<h2 id=\"bonus-du-niveau-1\">Bonus du niveau 1</h2>\n<ul>\n<li><strong>Points de vie :</strong> 4</li>\n<li><strong>Dans le doute, ça se bidouille :</strong> MD doit accepter qu’un vagabond est débrouillard et qu’il peut rapidement décoincer une porte, dépanner une machine ou bricoler un bidule sur le pouce - même si parfois, faudra quand même avoir les bons outils pour s’aider.</li>\n<li><strong>Pistache</strong> : Une fois par jour, le vagabond peut flairer un objet trouvé dans le décor pour avoir des indices sur son ancien propriétaire ou la dernière personne à l’avoir toucheté - où est-il allé, à quoi il ressemblait, qu’est-ce qu’il trafiquait…</li>\n</ul>\n<h2 id=\"gagner-un-niveau\">Gagner un niveau</h2>\n<ul>\n<li><strong>Points de vie :</strong> le vagabond gagne D6 points de vie en plus.</li>\n<li><strong>Bonus de résistance :</strong> On lance un D20 pour chaque Résistance - si on fait plus que le score, la Résistance augmente de 1.</li>\n<li><strong>Nouvelle Ficelle</strong> : A force d’artemper la ville, le vagabond met au poing quelques choses trappes pour l’aider à survivre. Chaque fois qu’il gagne un niveau, le vagabond invente une ficelle en s’aidant de la liste de mots suivante :  <em>arc, flèches, œil, capuchon, animaux, sirènes, spesctres, sauvage, chasse, camouflage, pistage, piège, outils, nature, herbe, arbre, poison, surprise, esquive, loup, autres idées…</em></li>\n</ul>\n<p>Exemples de ficelles inventées à partir des mot <em>herbe</em> et <em>chasseur</em> :</p>\n<ul>\n<li><strong>Poteau-feu :</strong> le vagabond peut mijoter des zèbres qu’il trouve pour faire une potion avec un effet anchois : rendre 1PV - donner 1 avantage à un test de Résistance. La potion périme vite donc faut la déguster rapidos.</li>\n<li><strong>Chasseur déprime :</strong> si le vagabond connaît le nom de sa cible, il lui fait 2 fois plus de dégâts la première fois qu’il l’attaque.</li>\n</ul>");
	

				const frontmatter = {"title":"Classe le vagabond - Exploirateurs de Bruines","description":"Les vagabonds sont les vers solitaires des terres humides. A peine moins bizarre qu'un bizarre...","pubDate":"2024-04-21T00:00:00.000Z","author":"Serupan","tags":["jeu de role","exploirateurs de bruines","osr","homebrew"]};
				const file = "D:/charmille/src/content/posts/classe-le-vagabond-exploirateurs-de-Bruines.md";
				const url = undefined;
				function rawContent() {
					return "\r\n*Classe additionnelle pour le jeu de rôle Exploirateurs de Bruines*\r\n\r\n![A starry night sky.](../../images/posts/levagabond.jpg)\r\n\r\nLes vagabonds sont les vers solitaires des terres humides. A peine moins bizarre qu'un bizarre, le vagabond a quand même le cerveau assez cabossé pour vouloir pieuter en dehors des enclaves. Les enclavés c'est dentaire, le vagabond c'est tout le contraire, il voyage de troubillon en troubillon mais ne croupit jamais longtemps au même endroit. A force de dédaler, il en connaît un rayon sur comment survivre dans la ville - ce que le chef a lu dans un livre, le vagabond l'a sûrement vu en vrai, en tout cas c'est ce qu'il raconte.\r\n## Bonus du niveau 1\r\n\r\n- **Points de vie :** 4\r\n- **Dans le doute, ça se bidouille :** MD doit accepter qu'un vagabond est débrouillard et qu'il peut rapidement décoincer une porte, dépanner une machine ou bricoler un bidule sur le pouce - même si parfois, faudra quand même avoir les bons outils pour s'aider.\r\n- **Pistache** : Une fois par jour, le vagabond peut flairer un objet trouvé dans le décor pour avoir des indices sur son ancien propriétaire ou la dernière personne à l'avoir toucheté - où est-il allé, à quoi il ressemblait, qu'est-ce qu'il trafiquait…\r\n## Gagner un niveau\r\n\r\n- **Points de vie :** le vagabond gagne D6 points de vie en plus.\r\n- **Bonus de résistance :** On lance un D20 pour chaque Résistance - si on fait plus que le score, la Résistance augmente de 1.\r\n- **Nouvelle Ficelle** : A force d'artemper la ville, le vagabond met au poing quelques choses trappes pour l'aider à survivre. Chaque fois qu'il gagne un niveau, le vagabond invente une ficelle en s'aidant de la liste de mots suivante :  *arc, flèches, œil, capuchon, animaux, sirènes, spesctres, sauvage, chasse, camouflage, pistage, piège, outils, nature, herbe, arbre, poison, surprise, esquive, loup, autres idées…*\r\n\r\nExemples de ficelles inventées à partir des mot *herbe* et *chasseur* : \r\n- **Poteau-feu :** le vagabond peut mijoter des zèbres qu'il trouve pour faire une potion avec un effet anchois : rendre 1PV - donner 1 avantage à un test de Résistance. La potion périme vite donc faut la déguster rapidos.\r\n- **Chasseur déprime :** si le vagabond connaît le nom de sa cible, il lui fait 2 fois plus de dégâts la première fois qu'il l'attaque.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"bonus-du-niveau-1","text":"Bonus du niveau 1"},{"depth":2,"slug":"gagner-un-niveau","text":"Gagner un niveau"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
