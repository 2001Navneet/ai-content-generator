// import { neon } from "@neondatabase/serverless";
// import { drizzle } from "drizzle-orm/neon-http";
// import * as schema from "./schema";
// const sql = neon(process.env.NEXT_PUBIC_DRIZZLE_DB_URL!);
// export const db = drizzle(sql);
// import { drizzle } from "drizzle-orm/neon-http";
// import * as schema from "./schema";
// import { neon } from "@neondatabase/serverless";
// // import { config } from "dotenv";

// // config({ path: ".env" }); // or .env.local

// const sql = neon(process.env.NEXT_PUBIC_DRIZZLE_DB_URL!);
// export const db = drizzle(sql, { schema });

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL!);
export const db = drizzle(sql, { schema });
