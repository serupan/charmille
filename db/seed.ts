import { Like, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed
() {
	await db.insert(Like).values([
		{ id: "le-probleme-du-bac-a-sable", likes: 12 },
		{ id: "classe-le-vagabond-exploirateurs-de-bruines", likes: 2 },
	]);
}
