import { timestamp } from 'drizzle-orm/pg-core';
import { serial } from 'drizzle-orm/pg-core';
import { pgTable } from 'drizzle-orm/pg-core';

export const config = pgTable('config', {
  id: serial('id').primaryKey(),
  createdAt: timestamp('created_at').defaultNow(),
});
