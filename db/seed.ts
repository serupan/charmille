import { Like, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Like).values([
		{ id: 2, title: "le-probleme-du-bac-a-sable" },
		{ id: 3, title: "classe-le-vagabond-exploirateurs-de-bruines" },
	]);
}
