import { Like, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Like).values([
		{ id: 1, title: "le-probleme-du-bac-a-sable" },
		{ id: 2, title: "classe-le-vagabond-exploirateurs-de-bruines" },
	]);
}
