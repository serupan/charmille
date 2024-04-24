import { db, Post } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Post).values([
		{ id: 1, likes: 12 }
	  ])
	await db.insert(Post).values([
		{ id: 2, likes: 3 }
	])
	await db.insert(Post).values([
		{ id: 3, likes: 34 }
	])
}
