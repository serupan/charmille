import { Like, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed
() {
	await db.insert(Like).values([
		{ id: "", likes: 0 },
	]);
}
