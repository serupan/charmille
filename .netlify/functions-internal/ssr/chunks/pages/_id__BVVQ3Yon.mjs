import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import { sql, eq } from '@astrojs/db/dist/runtime/virtual.js';

const db = await createRemoteDatabaseClient(process.env.ASTRO_STUDIO_APP_TOKEN ?? "beeb53fc702acacb837b6676fe9a39452ef3b6f4:qhxqbrt6hmb0k6jpmq5x3zm08rmq", {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://example.com", "ASSETS_PREFIX": undefined}.ASTRO_STUDIO_REMOTE_DB_URL ?? "https://db.services.astro.build");
const Like = asDrizzleTable("Like", { "columns": { "id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Like", "primaryKey": false, "optional": false } }, "likes": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "likes", "collection": "Like", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);

const prerender = false;
const POST = async ({ params, request }) => {
  const id = params.id;
  if (!id) {
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  }
  const req = await db.update(Like).set({ likes: sql`${Like.likes} + 1` }).where(eq(Like.id, id));
  if (!req.rowsAffected) {
    await db.insert(Like).values({
      id,
      likes: 1
    });
  }
  return new Response(
    JSON.stringify({
      success: true
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};

const _id__json = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

export { Like as L, _id__json as _, db as d };
