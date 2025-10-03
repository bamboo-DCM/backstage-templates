import * as schema from '../../@core/infra/database/drizzle/schemas';

import { ConfigService } from '@nestjs/config';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

export const DrizzleAsyncProvider = 'DrizzleAsyncProvider';

export const drizzleProvider = [
  {
    provide: DrizzleAsyncProvider,
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const pool = new Pool({
        host: configService.get<string>('POSTGRES_HOST'),
        user: configService.get<string>('POSTGRES_USER'),
        password: configService.get<string>('POSTGRES_PASSWORD'),
        database: configService.get<string>('POSTGRES_DB'),
        port: configService.get<number>('POSTGRES_PORT'),
      });
      try {
        await pool.connect();
      } catch (error) {
        console.error('Failed to connect to the database:', error);
        throw error;
      }
      return drizzle(pool, { schema }) as NodePgDatabase<typeof schema>;
    },
  },
];
