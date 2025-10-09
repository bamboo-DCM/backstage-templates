import 'dotenv/config';
import z from 'zod';
import { stringToBoolean } from './src/utils/stringToBoolean';

const envSchema = z.object({
  POSTGRES_USER: z.string().default('template'),
  POSTGRES_PASSWORD: z.string().default('template'),
  POSTGRES_DB: z.string().default('template'),
  POSTGRES_HOST: z.string().default('localhost'),
  POSTGRES_PORT: z.coerce.number().default(5432),
  PORT: z.coerce.number().default(3000),
  DD_SITE: z.string().optional().default('datadoghq.com'),
  DD_API_KEY: z.string(),
  DD_ENV: z.string().default('local'),
  DD_SERVICE: z.string(),
  DD_LOGS_INJECTION: z.string().transform(stringToBoolean).default(false),
  DD_LOGS_ENABLED: z.string().transform(stringToBoolean).default(false),
  DD_LOGS_INJECTION_ENABLED: z
    .string()
    .transform(stringToBoolean)
    .default(false),
  DD_TRACE_ENABLED: z.string().transform(stringToBoolean).default(false),
});

export const env = envSchema.parse(process.env);
