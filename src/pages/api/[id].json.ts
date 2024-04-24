export const prerender = false;

import type { APIRoute } from "astro";
import { db, eq, sql, Like } from "astro:db";

export const POST: APIRoute = async ({ params, request }) => {
    const id = params.id;

    if(!id){
        return new Response(null, {
            status: 404,
            statusText: 'Not found'
          });
    }

    const req = await db.update(Like)
        .set({ likes: sql`${Like.likes} + 1` })
        .where(eq(Like.id, id));

    if(!req.rowsAffected) {
        await db.insert(Like).values({
            id,
            likes: 1,
        })
    }

    return new Response(
        JSON.stringify({
            success: true
        }), {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

    console.log("uwu api", id);
    return new Response(null, {
        status: 200,
    });
};