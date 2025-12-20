# Gram Panchayat Website — Bharadenagar

Brief, accessible website for the Bharadenagar Gram Panchayat built with Vite + React + TypeScript and Node.js + Express backend.

## Project Structure

This repository uses a simple two-folder structure:

- `client/` — Frontend application (Vite + React + TypeScript)
- `server/` — Backend API server (Node.js + Express + MongoDB)

## Tech Stack

### Frontend
- React + TypeScript (Vite)
- Tailwind CSS for styling
- Radix UI components + various utility libraries (framer-motion, lucide-react, recharts, etc.)
- `@tanstack/react-query` for client data fetching
- `react-hook-form` + `zod` for form validation

### Backend
- Node.js + Express
- MongoDB Atlas
- JWT Authentication
- Swagger API documentation

## Key Features

- Public pages: Home, About, Health, Education, Development, Guidance, Staff, Medical Help, Disabled Registration and a 404 page.
- Hero, Gallery and informational sections for village data and announcements.
- Interactive Map section for locations and contacts.
- Stats and simple charts for metrics and community figures.
- Admin panel for content management.
- RESTful API with authentication and authorization.

## Setup (Local Development)

### Prerequisites
- Node.js 18+

### Frontend Setup

```bash
cd client
npm install
npm run dev      # start Vite dev server (default http://localhost:5173)
npm run build    # produce production dist/
npm run preview  # locally preview the production build
npm run check    # run TypeScript type check
```

### Backend Setup

```bash
cd server
npm install
# Create .env file with required environment variables (see server/README.md)
npm run dev      # start server in development mode (default http://localhost:5000)
npm start        # start server in production mode
```

### Environment Variables

Create a `.env` file in the `server/` folder with:

```
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret-key
CLIENT_URL=http://localhost:5173
PORT=5000
NODE_ENV=development
```

See `server/README.md` for detailed environment variable documentation.

## API Endpoints

- `GET /` - Health check
- `GET /health` - Health check with service info
- `GET /api-docs` - Swagger API documentation

### Authentication
- `POST /api/auth/login` - Admin login

### Content
- `GET /api/content/` - Get all announcements
- `POST /api/content/` - Create announcement (requires admin auth)

### Forms
- `POST /api/forms/disabled` - Submit disabled registration form

### Staff
- `GET /api/staff/health` - Staff service health check

## File Structure

```
.
├── client/              # Frontend application
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── pages/      # Page components
│   │   ├── hooks/      # Custom React hooks
│   │   └── lib/        # Utilities and configuration
│   └── package.json
│
└── server/             # Backend API server
    ├── src/
    │   ├── routes/     # API routes
    │   ├── controllers/# Route controllers
    │   ├── models/     # MongoDB models
    │   ├── middleware/ # Express middleware
    │   ├── utils/      # Utility functions
    │   ├── validation/ # Zod validation schemas
    │   └── constants/  # Constants
    ├── .env            # Environment variables
    └── package.json
```

## Development Notes

- Frontend runs on `http://localhost:5173` (Vite default)
- Backend runs on `http://localhost:5000` (configurable via PORT env var)
- All API routes are prefixed with `/api`
- Swagger documentation available at `/api-docs` when server is running

## License

MIT
