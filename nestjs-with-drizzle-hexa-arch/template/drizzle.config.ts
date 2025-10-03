import { defineConfig } from 'drizzle-kit';
import { env } from 'env';

export default defineConfig({
  dialect: 'postgresql',
  schema: './@core/infra/database/drizzle/schemas/index.ts',
  out: './@core/infra/database/drizzle/migrations',
  dbCredentials: {
    host: env.POSTGRES_HOST,
    database: env.POSTGRES_DB,
    user: env.POSTGRES_USER,
    password: env.POSTGRES_PASSWORD,
    port: env.POSTGRES_PORT,
    ssl: false,
  },
});
