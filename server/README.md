# Gram Panchayat Server

Unified backend server for the Gram Panchayat web application.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables:
   - Copy `.env.example` to `.env` (or use the existing `.env` file)
   - Update the values with your actual configuration

3. Create demo admin (optional):
   ```bash
   npm run seed   # Creates a demo admin (username: admin, password: admin123)
   ```

4. Run the server:
   ```bash
   npm run dev    # Development mode with nodemon
   npm start      # Production mode
   ```

## Environment Variables

The following environment variables are required:

### `MONGODB_URI` (Required)
- **Description**: MongoDB connection string
- **Format**: `mongodb+srv://username:password@cluster.mongodb.net/database_name?retryWrites=true&w=majority`
- **Example**: `mongodb+srv://admin:password@cluster.mongodb.net/grampanchayat?retryWrites=true&w=majority`
- **Note**: For MongoDB Atlas, get this from your cluster connection settings

### `JWT_SECRET` (Required)
- **Description**: Secret key for signing and verifying JWT tokens
- **Format**: Any strong random string (minimum 32 characters recommended)
- **Generate**: Run `node -e "import('crypto').then(c => console.log(c.randomBytes(32).toString('hex')))"` or use an online generator
- **Security**: Never commit this to version control. Use a strong, random value in production.

### `CLIENT_URL` (Optional)
- **Description**: Frontend URL for CORS configuration
- **Default**: `http://localhost:5173`
- **Example**: `http://localhost:5173` (development) or `https://yourdomain.com` (production)

### `PORT` (Optional)
- **Description**: Port on which the server will run
- **Default**: `5000`
- **Example**: `5000`, `3000`, `8000`

### `NODE_ENV` (Optional)
- **Description**: Node.js environment
- **Default**: `development`
- **Values**: `development`, `production`, `test`

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

## Project Structure

```
server/
├── src/
│   ├── app.js              # Express app configuration
│   ├── server.js           # Server entry point
│   ├── routes/             # API routes
│   ├── controllers/        # Route controllers
│   ├── models/             # MongoDB models
│   ├── middleware/         # Express middleware
│   ├── utils/              # Utility functions
│   ├── validation/         # Zod validation schemas
│   ├── constants/          # Constants
│   └── scripts/             # Utility scripts (seed, etc.)
├── package.json
├── .env                    # Environment variables (not committed)
└── README.md
```

## Demo Admin

A demo admin account can be created using the seed script:

```bash
npm run seed
```

This creates an admin with:
- **Username**: `admin`
- **Password**: `admin123`

⚠️ **Important**: Change the password after first login in production!

## Notes

- The server uses ES modules (`type: "module"` in package.json)
- MongoDB connection is established automatically on server start
- All routes are prefixed with `/api` except health checks
- The seed script checks if an admin already exists to avoid duplicates

