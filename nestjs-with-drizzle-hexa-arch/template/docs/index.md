# Documents for ${{values.app_name}}

This application has two endpoints
- `/api/docs`
- `/api/healthz`

# How to access the app?

## Production
You can access the app by accessing this URL: `${{values.app_name}}.bamboodcm.com/api/docs`

## Development
You can access the app by accessing this URL: `dev-${{values.app_name}}.bamboodcm.com/api/docs`

# Database
## How to setup database
```bash
docker compose up -d #To up local postgres

npm run migrate:run
```

## How to create a migration
Add or edit an file in `@core/infra/database/drizzle/schemas/index.ts` and run command:
```bash
npm run migrate:generate
```

## How to access local database data
Run command:
```bash
npm run studio
```

Access link:
`https://local.drizzle.studio`
