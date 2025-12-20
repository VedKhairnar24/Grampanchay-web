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

## API Use Cases

### 1. Health Check

#### GET `/health`
Check if the server is running.

**Request:**
```bash
curl http://localhost:5000/health
```

**Response (200 OK):**
```json
{
  "status": "ok",
  "service": "gram-panchayat-server"
}
```

---

### 2. Admin Login

#### POST `/api/auth/login`
Authenticate admin user and receive JWT token.

**Request:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "password": "admin123"
  }'
```

**Request Body:**
```json
{
  "username": "admin",
  "password": "admin123"
}
```

**Response (200 OK):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTIzNDU2Nzg5MGFiY2QiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDAwMDAwMDAsImV4cCI6MTcwMDA4NjQwMH0.example"
}
```

**Error Response (401 Unauthorized):**
```json
{
  "message": "Invalid credentials"
}
```

**Usage:**
Include the token in subsequent requests:
```bash
Authorization: Bearer <token>
```

---

### 3. Get All Announcements

#### GET `/api/content/`
Retrieve all announcements (public endpoint, no authentication required).

**Request:**
```bash
curl http://localhost:5000/api/content/
```

**Response (200 OK):**
```json
[
  {
    "_id": "651234567890abcdef123456",
    "title": "Village Development Meeting",
    "content": "All villagers are invited to attend the monthly development meeting on Saturday at 10 AM.",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  },
  {
    "_id": "651234567890abcdef123457",
    "title": "Health Camp Announcement",
    "content": "Free health checkup camp will be organized next week. Please register at the panchayat office.",
    "createdAt": "2024-01-14T09:15:00.000Z",
    "updatedAt": "2024-01-14T09:15:00.000Z"
  }
]
```

**Empty Response (200 OK):**
```json
[]
```

---

### 4. Create Announcement

#### POST `/api/content/`
Create a new announcement (requires admin authentication).

**Request:**
```bash
curl -X POST http://localhost:5000/api/content/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your-jwt-token>" \
  -d '{
    "title": "New Village Initiative",
    "content": "We are launching a new initiative to improve village infrastructure. All residents are welcome to participate."
  }'
```

**Request Body:**
```json
{
  "title": "New Village Initiative",
  "content": "We are launching a new initiative to improve village infrastructure. All residents are welcome to participate."
}
```

**Response (201 Created):**
```json
{
  "_id": "651234567890abcdef123458",
  "title": "New Village Initiative",
  "content": "We are launching a new initiative to improve village infrastructure. All residents are welcome to participate.",
  "createdAt": "2024-01-16T14:20:00.000Z",
  "updatedAt": "2024-01-16T14:20:00.000Z"
}
```

**Error Responses:**

**401 Unauthorized (Missing/Invalid Token):**
```json
{
  "message": "Unauthorized"
}
```

**403 Forbidden (Not Admin):**
```json
{
  "message": "Access denied"
}
```

**400 Bad Request (Validation Error):**
```json
{
  "error": [
    {
      "code": "too_small",
      "minimum": 5,
      "type": "string",
      "inclusive": true,
      "exact": false,
      "message": "Title must be at least 5 characters long",
      "path": ["title"]
    }
  ]
}
```

**Validation Rules:**
- `title`: Minimum 5 characters
- `content`: Minimum 10 characters

---

### 5. Submit Disabled Registration Form

#### POST `/api/forms/disabled`
Submit a disabled person registration form (public endpoint).

**Request:**
```bash
curl -X POST http://localhost:5000/api/forms/disabled \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Rajesh Kumar",
    "address": "House No. 123, Bharadenagar Village",
    "disabilityType": "Physical",
    "contactNumber": "9876543210"
  }'
```

**Request Body:**
```json
{
  "fullName": "Rajesh Kumar",
  "address": "House No. 123, Bharadenagar Village",
  "disabilityType": "Physical",
  "contactNumber": "9876543210"
}
```

**Response (201 Created):**
```json
{
  "message": "Form submitted",
  "record": {
    "_id": "651234567890abcdef123459",
    "fullName": "Rajesh Kumar",
    "address": "House No. 123, Bharadenagar Village",
    "disabilityType": "Physical",
    "contactNumber": "9876543210",
    "status": "Pending",
    "createdAt": "2024-01-16T15:45:00.000Z",
    "updatedAt": "2024-01-16T15:45:00.000Z"
  }
}
```

**Note:** The `status` field defaults to `"Pending"` if not provided.

---

### 6. Staff Health Check

#### GET `/api/staff/health`
Check staff service health status.

**Request:**
```bash
curl http://localhost:5000/api/staff/health
```

**Response (200 OK):**
```json
{
  "status": "ok",
  "service": "staff"
}
```

---

## Authentication Flow

1. **Login** → Get JWT token
   ```bash
   POST /api/auth/login
   Body: { "username": "admin", "password": "admin123" }
   Response: { "token": "..." }
   ```

2. **Use Token** → Include in Authorization header
   ```bash
   Authorization: Bearer <token>
   ```

3. **Protected Routes** → Access admin-only endpoints
   ```bash
   POST /api/content/
   Headers: { "Authorization": "Bearer <token>" }
   ```

## Error Responses

All endpoints may return the following error responses:

**500 Internal Server Error:**
```json
{
  "message": "Server Error"
}
```

**400 Bad Request:**
```json
{
  "error": [
    {
      "code": "validation_error",
      "message": "Validation error details",
      "path": ["fieldName"]
    }
  ]
}
```

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

