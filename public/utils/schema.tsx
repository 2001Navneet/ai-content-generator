// import { create } from "domain";
// import { text } from "drizzle-orm/gel-core";
// import { serial } from "drizzle-orm/mysql-core";
// import { pgTable } from "drizzle-orm/pg-core";
// import { varchar } from "drizzle-orm/pg-core";

// export const AIOutput = pgTable("aiOutput", {
//   id: serial("id").primaryKey(),
//   formData: varchar("formData").notNull(),
//   aiResponse: text("aiResponse"),
//   templateSlug: varchar("templateSlug").notNull(),
//   createdBy: varchar("createdBy").notNull(),
//   createdAt: varchar("createdAt"),
// });
import {
  integer,
  pgTable,
  serial,
  varchar,
  boolean as pgBoolean,
} from "drizzle-orm/pg-core";

export const AIOutput = pgTable("aiOutput", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  formData: varchar({ length: 255 }).notNull(),
  aiResponse: varchar({ length: 255 }).notNull(),
  templateSlug: varchar({ length: 255 }).notNull(),
  createdBy: varchar({ length: 255 }).notNull(),
  createdAt: varchar({ length: 255 }).notNull(),
});
export const UserSubscription = pgTable("userSubscription", {
  id: serial("id").primaryKey(),
  email: varchar("email").notNull(),
  userName: varchar("userName").notNull(),
  active: pgBoolean("active").notNull(),
  paymentId: varchar("paymentId").notNull(),
  joinDate: varchar("joinDate").notNull(),
});
