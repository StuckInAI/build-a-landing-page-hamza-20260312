# NexLaunch — Next.js Fullstack Landing Page

A modern, production-ready fullstack landing page built with Next.js 14, TypeORM, and SQLite.

## Features

- **Next.js 14** App Router with TypeScript
- **TypeORM + SQLite** for contact form persistence
- Fully responsive, modern design with CSS Modules
- Smooth scroll navigation
- Contact form with client & server validation
- Docker-ready with multi-stage builds

## Prerequisites

- Node.js 20+
- npm 10+
- Docker & Docker Compose (for containerized deployment)

## Getting Started

### 1. Install Dependencies

```bash
npm i
```

### 2. Configure Environment

Copy and adjust the `.env` file if needed:

```env
DATABASE_PATH=./database.sqlite
NEXT_PUBLIC_SITE_TITLE=Landing Page
```

### 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## API Endpoints

### POST `/api/contact`

Submit a contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I have a question..."
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Your message has been received!"
}
```

**Error Response (400):**
```json
{
  "error": "Name must be at least 2 characters long."
}
```

## Docker Deployment

### Build & Run with Docker Compose

```bash
# Build and start
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

The SQLite database is persisted in a named Docker volume (`sqlite_data`).

### Build Docker Image Manually

```bash
docker build -t nexlaunch .
docker run -p 3000:3000 -v $(pwd)/data:/app/data nexlaunch
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── api/
│       └── contact/
│           └── route.ts    # Contact API endpoint
├── components/             # React components with CSS Modules
├── entities/
│   └── ContactSubmission.ts # TypeORM entity
└── lib/
    └── database.ts         # Database connection utility
```

## Coolify Deployment

1. Push your code to a Git repository
2. In Coolify, create a new service → Docker Compose
3. Point it to your repository
4. Coolify will use the `docker-compose.yml` automatically
5. The SQLite volume ensures data persistence across deployments
