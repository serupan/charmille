import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro_CQXSGyPE.mjs';
import { g as getImage } from './pages/generic_Dot94Fqy.mjs';
import 'clsx';

const Astro__ZTrced = new Proxy({"src":"/_astro/map9.B3QTHo46.jpg","width":5036,"height":3307,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/charmille/src/images/posts/map9.jpg";
							}
							
							return target[name];
						}
					});

const Astro__ZTvgpT = new Proxy({"src":"/_astro/map8.BJyDbjx9.jpg","width":2475,"height":1373,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/charmille/src/images/posts/map8.jpg";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./images/posts/map9\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../images/posts/map9.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__ZTrced, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./images/posts/map8\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../images/posts/map8.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__ZTvgpT, ...props});
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
			const html = await updateImageReferences("<p>Ces derniers mois, je m’essaye à la campagne jeu de rôle bac à sable. L’année dernière j’ai préparé une campagne Exploirateurs de Bruines proche d’une West Marches - un format de campagne dans lequel le groupe de joueur n’est pas fixe et peut varier d’une partie à l’autre. Chaque partie était l’occasion pour les personnages d’explorer un donjon (une bruine en l’occurrence), affronter des ennemis, découvrir des trésors, avant de rentrer à la base.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../images/posts/map9.jpg&#x22;,&#x22;alt&#x22;:&#x22;&#x22;,&#x22;index&#x22;:0}\">\r\n<em>Carte du monde pour Exploirateurs de Bruines</em></p>\n<h2 id=\"des-parties-autosuffisantes\">Des parties autosuffisantes</h2>\n<p>Un avantage de ce format de campagne, c’est qu’il me contraint à une préparation très concentrée, pour une partie autosuffisante, ou “self-contained”, en anglais. Les joueurs choisissent à l’avance un lieu à explorer, avec un objectif clair en tête. Je n’ai plus qu’à préparer ce lieu, et le jour J, on joue ! C’est simple, efficace, et on est sûrs de jouer à une partie rythmée, riche en rebondissements et en choix cornéliens.</p>\n<p>De plus, je suis certain que ma préparation va me servir. Lorsque je prépare des éléments pour une partie de jeu de rôle, je ressens un enthousiasme ou une “hype” de les voir en jeu avec les autres joueurs, que ce soit une ambiance, un grand méchant, une énigme, une musique… J’éprouve un vrai plaisir à préparer un donjon la veille pour le lendemain - ça me laisse juste le temps qu’il faut pour nourrir des attentes avant de découvrir le soir de la partie ce que ma préparation va permettre avec le reste de la table.</p>\n<p>Tout n’est pas rose non plus. Le plus gros point faible du format est l’impératif pour les personnages-joueurs de rentrer au village à la fin de la partie. Et lorsque l’objectif de la mission est à portée de main, on est très tentés d’aller jusqu’au bout, quitte à tirer sur la corde, dans la fiction, ou pire, dans la vraie vie, et à prolonger la partie bien au-delà des horaires raisonnables… Ce qui, en tant que meneur, m’impose d’être très vigilant au rythme et aux minutes qui passent, parfois au détriment de mon propre plaisir de jeu.</p>\n<h2 id=\"le-problème-du-vrai-bac-à-sable\">Le problème du “vrai” bac à sable</h2>\n<p>J’ai récemment lancé la saison 2 de ma campagne d’Exploirateurs de Bruines, avec cette fois-ci un groupe fixe composé de joueurs qui avaient envie de prolonger l’aventure.</p>\n<p>Jouer avec un groupe fixe permet des choses différentes. On se passe notamment de l’impératif pour les personnages de rentrer au village à chaque fin de partie, car on sait que les mêmes joueurs seront présents la prochaine fois. Cela me libère aussi de la gestion du rythme, arrêter une partie en plein milieu d’un donjon n’est plus un problème. Et il y a bien d’autres avantages, que je ne vais pas énumérer ici.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../images/posts/map8.jpg&#x22;,&#x22;alt&#x22;:&#x22;&#x22;,&#x22;index&#x22;:0}\">\r\n<em>Carte du monde pour ma saison 2 d’Exploirateurs de Bruines</em></p>\n<p>Un inconvénient que je découvre avec la pratique concerne justement ma préparation. Partie après partie, je me rends compte que bien souvent, celle-ci est en décalage avec la progression des personnages-joueurs. Parce que je tiens à laisser les joueurs très (trop ?) libres, ils ont tendance à s’éparpiller, avancer, faire demi-tour, réfléchir à un plan, discuter longuement avec un PNJ pour se renseigner… Beaucoup de moments amusants, mais qui retardent l’arrivée en jeu des éléments que j’ai préparés.</p>\n<p>Ainsi, je me retrouve souvent dans la situation d’avoir beaucoup d’éléments préparés en avance, que les joueurs ne rencontreront que d’ici plusieurs parties. Ce n’est probablement pas un problème en soi, mais pour moi c’en est un. Comme nous ne jouons qu’une fois toutes les deux semaines, cela me laisse bien assez de temps pour que mon enthousiasme redescende. Quand les personnages-joueurs rencontrent finalement le gros donjon ou le grand méchant que j’avais préparé, je ne suis plus aussi motivé pour le jouer, car j’ai eu depuis plein de nouvelles idées, bien plus excitantes…</p>\n<h2 id=\"i-want-my-fun-now-tonight\">I want my fun NOW… TONIGHT!</h2>\n<p>Traduction : <em>“Je veux m’amuser MAINTENANT… CE SOIR !“</em>. Ce slogan est issu des conseils pour MJ du jeu de rôle ICRPG de Runehammer. Dans ICRPG, l’auteur avertit justement de ce problème des grandes et foisonnantes campagnes bac à sable. Je cite : <em>“[elles] reportent l’émerveillement et l’excitation à plus tard”.</em></p>\n<p>La solution ? Ne préparer qu’une partie à la fois. Garder l’agentivité des joueurs, mais penser les parties davantage comme des one shots - en introduisant des éléments de jeu auxquels les joueurs devront réagir <strong>ce soir</strong>, plutôt que d’espérer et d’attendre qu’ils les atteignent…</p>\n<p>Le but n’est pas de prévoir un déroulement de scènes, car j’aime le bac à sable aussi parce qu’on joue pour découvrir ce qui va se passer. L’idée est de déplacer le curseur de la préparation. Au lieu de préparer un monde pour des personnages, je prépare une partie, pour des joueurs - le fun de la partie avant la cohérence de l’univers.</p>\n<p>Je pense que cela correspond mieux à ma manière d’aborder une partie de jeu de rôle. Mais j’écris ces lignes avant d’avoir pu tester cette nouvelle manière de faire, donc, à suivre :)</p>");
	

				const frontmatter = {"title":"Le problème du bac à sable","description":"Ces derniers mois, je m'essaye à la campagne jeu de rôle bac à sable. L'année dernière j'ai préparé une campagne...","pubDate":"2024-04-22T00:00:00.000Z","author":"Serupan","tags":["jeu de role","exploirateurs de bruines","osr"]};
				const file = "D:/charmille/src/content/posts/le-probleme-du-bac-a-sable.md";
				const url = undefined;
				function rawContent() {
					return "\r\nCes derniers mois, je m'essaye à la campagne jeu de rôle bac à sable. L'année dernière j'ai préparé une campagne Exploirateurs de Bruines proche d'une West Marches - un format de campagne dans lequel le groupe de joueur n'est pas fixe et peut varier d'une partie à l'autre. Chaque partie était l'occasion pour les personnages d'explorer un donjon (une bruine en l'occurrence), affronter des ennemis, découvrir des trésors, avant de rentrer à la base.\r\n\r\n![](../../images/posts/map9.jpg)\r\n*Carte du monde pour Exploirateurs de Bruines*\r\n## Des parties autosuffisantes\r\n\r\nUn avantage de ce format de campagne, c'est qu'il me contraint à une préparation très concentrée, pour une partie autosuffisante, ou \"self-contained\", en anglais. Les joueurs choisissent à l'avance un lieu à explorer, avec un objectif clair en tête. Je n'ai plus qu'à préparer ce lieu, et le jour J, on joue ! C'est simple, efficace, et on est sûrs de jouer à une partie rythmée, riche en rebondissements et en choix cornéliens.\r\n\r\nDe plus, je suis certain que ma préparation va me servir. Lorsque je prépare des éléments pour une partie de jeu de rôle, je ressens un enthousiasme ou une \"hype\" de les voir en jeu avec les autres joueurs, que ce soit une ambiance, un grand méchant, une énigme, une musique… J'éprouve un vrai plaisir à préparer un donjon la veille pour le lendemain - ça me laisse juste le temps qu'il faut pour nourrir des attentes avant de découvrir le soir de la partie ce que ma préparation va permettre avec le reste de la table.\r\n\r\nTout n'est pas rose non plus. Le plus gros point faible du format est l'impératif pour les personnages-joueurs de rentrer au village à la fin de la partie. Et lorsque l'objectif de la mission est à portée de main, on est très tentés d'aller jusqu'au bout, quitte à tirer sur la corde, dans la fiction, ou pire, dans la vraie vie, et à prolonger la partie bien au-delà des horaires raisonnables… Ce qui, en tant que meneur, m'impose d'être très vigilant au rythme et aux minutes qui passent, parfois au détriment de mon propre plaisir de jeu.\r\n\r\n## Le problème du \"vrai\" bac à sable\r\n\r\nJ'ai récemment lancé la saison 2 de ma campagne d'Exploirateurs de Bruines, avec cette fois-ci un groupe fixe composé de joueurs qui avaient envie de prolonger l'aventure. \r\n\r\nJouer avec un groupe fixe permet des choses différentes. On se passe notamment de l'impératif pour les personnages de rentrer au village à chaque fin de partie, car on sait que les mêmes joueurs seront présents la prochaine fois. Cela me libère aussi de la gestion du rythme, arrêter une partie en plein milieu d'un donjon n'est plus un problème. Et il y a bien d'autres avantages, que je ne vais pas énumérer ici.\r\n\r\n![](../../images/posts/map8.jpg)\r\n*Carte du monde pour ma saison 2 d'Exploirateurs de Bruines*\r\n\r\nUn inconvénient que je découvre avec la pratique concerne justement ma préparation. Partie après partie, je me rends compte que bien souvent, celle-ci est en décalage avec la progression des personnages-joueurs. Parce que je tiens à laisser les joueurs très (trop ?) libres, ils ont tendance à s'éparpiller, avancer, faire demi-tour, réfléchir à un plan, discuter longuement avec un PNJ pour se renseigner… Beaucoup de moments amusants, mais qui retardent l'arrivée en jeu des éléments que j'ai préparés.\r\n\r\nAinsi, je me retrouve souvent dans la situation d'avoir beaucoup d'éléments préparés en avance, que les joueurs ne rencontreront que d'ici plusieurs parties. Ce n'est probablement pas un problème en soi, mais pour moi c'en est un. Comme nous ne jouons qu'une fois toutes les deux semaines, cela me laisse bien assez de temps pour que mon enthousiasme redescende. Quand les personnages-joueurs rencontrent finalement le gros donjon ou le grand méchant que j'avais préparé, je ne suis plus aussi motivé pour le jouer, car j'ai eu depuis plein de nouvelles idées, bien plus excitantes… \r\n\r\n## I want my fun NOW... TONIGHT!\r\n\r\nTraduction : *\"Je veux m'amuser MAINTENANT… CE SOIR !\"*. Ce slogan est issu des conseils pour MJ du jeu de rôle ICRPG de Runehammer. Dans ICRPG, l'auteur avertit justement de ce problème des grandes et foisonnantes campagnes bac à sable. Je cite : *\"[elles] reportent l'émerveillement et l'excitation à plus tard\".*\r\n\r\nLa solution ? Ne préparer qu'une partie à la fois. Garder l'agentivité des joueurs, mais penser les parties davantage comme des one shots - en introduisant des éléments de jeu auxquels les joueurs devront réagir **ce soir**, plutôt que d'espérer et d'attendre qu'ils les atteignent… \r\n\r\nLe but n'est pas de prévoir un déroulement de scènes, car j'aime le bac à sable aussi parce qu'on joue pour découvrir ce qui va se passer. L'idée est de déplacer le curseur de la préparation. Au lieu de préparer un monde pour des personnages, je prépare une partie, pour des joueurs - le fun de la partie avant la cohérence de l'univers.\r\n\r\nJe pense que cela correspond mieux à ma manière d'aborder une partie de jeu de rôle. Mais j'écris ces lignes avant d'avoir pu tester cette nouvelle manière de faire, donc, à suivre :)";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"des-parties-autosuffisantes","text":"Des parties autosuffisantes"},{"depth":2,"slug":"le-problème-du-vrai-bac-à-sable","text":"Le problème du “vrai” bac à sable"},{"depth":2,"slug":"i-want-my-fun-now-tonight","text":"I want my fun NOW… TONIGHT!"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
