Monorepo setup notes

1. Remove root node_modules and package-lock.json (already done).
2. Each service manages its own dependencies. Install in the service folder:
   cd services/auth-service && npm install
3. Start client locally:
   cd client && npm install && npm run dev

Service quick start (example):

cd services/auth-service
npm install
npm run dev

Shared utilities are in `shared/` (use relative imports from services, e.g., `../../shared/utils/jwt.js`).
