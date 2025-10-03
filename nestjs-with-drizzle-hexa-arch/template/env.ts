import z from 'zod';
import 'dotenv/config';

const envSchema = z.object({
  POSTGRES_USER: z.string().default('template'),
  POSTGRES_PASSWORD: z.string().default('template'),
  POSTGRES_DB: z.string().default('template'),
  POSTGRES_HOST: z.string().default('localhost'),
  POSTGRES_PORT: z.coerce.number().default(5432),
  PORT: z.coerce.number().default(3000),
});

export const env = envSchema.parse(process.env);
