import { uuidv7 } from "uuidv7";
import {
  binary,
  int,
  mysqlTable,
  serial,
  varchar,
} from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  age: int().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const posts = mysqlTable("posts", {
  id: serial().primaryKey(),
  uuid: varchar({ length: 36 })
    .notNull()
    .$defaultFn(() => uuidv7()),
  title: varchar({ length: 255 }).notNull(),
  post: varchar({ length: 255 }).notNull(),
});
