// src/api/contact/route.ts

import { NextResponse } from "next/server";

/*
 * Showcase endpoint: only validates the form and returns success.
 */
export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Record<
    string,
    unknown
  > | null;
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";

  if (!name || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter your name and a valid email address." },
      { status: 400 },
    );
  }
  return NextResponse.json({ ok: true });
}

/*
 * To persist messages, setup proper backend with e.g. PostgreSQL database.
 *
 * Add:
 *  1. api-client that connects to db-query
 *  2. db query with an associated db connection
 *  3. db.ts file with proper database connection
 *  4. api-route that calls the db-query
 *
 */

/* Client example */
// export async function createContactMessage(
//   contactMessage: ContactMessage,
// ) {
//   const res = await fetch("/api/contact", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(contactMessage),
//   });
//   const data = await res.json();
//   if (!res.ok) throw new Error(data.error ?? "Could not save.");
//   return data;
// }

/* db.ts example */
// import postgres from "postgres";
//
// declare global {
//   var sql: postgres.Sql | undefined;
// }
//
// const sql =
//   globalThis.sql ??
//   postgres({
//     host: process.env.DB_HOST,
//     port: Number(process.env.DB_PORT),
//     database: process.env.DB_NAME,
//     username: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     max: 8,
//     idle_timeout: 30,
//     connect_timeout: 10,
//   });
//
// if (process.env.NODE_ENV !== "production") globalThis.sql = sql;
