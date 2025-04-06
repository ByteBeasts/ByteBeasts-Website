# ByteBeasts Game Studio Landing Page - Architecture Overview

## Project Overview
This document outlines the architecture for the ByteBeasts Game Studio landing page, a Web3-focused gaming platform with newsletter subscription functionality. The project uses a modern stack with React/TypeScript for the frontend and NestJS for the backend services.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript (TSX)
- **State Management**: React Context API with hooks for local state
- **Styling**: Tailwind CSS with custom theme for the neon/cyberpunk design aesthetic
- **Build Tools**: Vite for fast development and optimized production builds
- **Testing**: Jest and React Testing Library

### Backend Architecture
- **Framework**: NestJS (TypeScript-based Node.js framework)
- **API Style**: RESTful with versioned endpoints
- **Authentication**: JWT for admin access to subscription data
- **Validation**: Class-validator for DTO validation
- **Rate Limiting**: Built-in Throttler module to prevent subscription abuse

### Database Architecture
- **Primary Database**: PostgreSQL
- **ORM**: TypeORM for database interactions
- **Schema**: Normalized design with appropriate indexes
- **Migrations**: Automated migration system for version control

### Infrastructure
- **Development Environment**: VSCode on MacBook Pro M3
- **API Testing**: Postman for testing and documenting API endpoints
- **Version Control**: Git with GitHub
- **CI/CD**: GitHub Actions for automated testing and deployment
- **Hosting**: 
  - Frontend: Vercel/Netlify for static hosting
  - Backend: AWS ECS or Digital Ocean App Platform
  - Database: Managed PostgreSQL service (AWS RDS or Digital Ocean Managed Databases)

## Core Components

### Frontend Components
1. **Landing Page Sections**:
   - Hero section with Web3 game showcase
   - Features/About section
   - Game preview gallery
   - Community links (Discord, Twitter, Instagram, GitHub)
   - Newsletter subscription form
   - Footer with legal information

2. **Subscription Form Component**:
   - Email input with validation
   - Submit button with loading state
   - Success/error messaging
   - GDPR compliance checkbox

### Backend Services
1. **Subscription Module**:
   - Controller for handling API requests
   - Service for business logic
   - Repository for database interactions
   - DTOs for request/response validation
   - Entity definitions for ORM

2. **Email Service**:
   - Integration with SendGrid or AWS SES
   - Email template management
   - Scheduled sending capability for weekly updates
   - Tracking for open/click rates

3. **Admin Module** (future expansion):
   - Subscriber management dashboard
   - Newsletter campaign creation and scheduling
   - Analytics for subscription engagement

### Database Schema
1. **Subscribers Table**:
   ```
   id: UUID (PK)
   email: VARCHAR(255) UNIQUE NOT NULL
   subscribed_at: TIMESTAMP NOT NULL
   is_confirmed: BOOLEAN DEFAULT FALSE
   confirmation_token: VARCHAR(64) UNIQUE
   confirmation_sent_at: TIMESTAMP
   confirmed_at: TIMESTAMP
   last_email_sent_at: TIMESTAMP
   unsubscribed_at: TIMESTAMP
   ip_address: VARCHAR(45)
   user_agent: TEXT
   ```

2. **Campaigns Table** (for future expansion):
   ```
   id: UUID (PK)
   title: VARCHAR(255) NOT NULL
   content: TEXT NOT NULL
   sent_at: TIMESTAMP
   scheduled_for: TIMESTAMP
   created_at: TIMESTAMP NOT NULL
   updated_at: TIMESTAMP NOT NULL
   status: ENUM('draft', 'scheduled', 'sending', 'sent', 'canceled')
   ```

3. **Campaign_Metrics Table** (for future expansion):
   ```
   id: UUID (PK)
   campaign_id: UUID (FK)
   subscriber_id: UUID (FK)
   delivered_at: TIMESTAMP
   opened_at: TIMESTAMP
   clicked_at: TIMESTAMP
   ```

## API Endpoints

### Subscription API
- `POST /api/v1/subscribe`
  - Creates a new subscription
  - Sends confirmation email
  - Rate limited to prevent abuse
  - Validates email format

- `GET /api/v1/subscribe/confirm/:token`
  - Confirms subscription using token
  - Redirects to thank you page

- `POST /api/v1/subscribe/unsubscribe`
  - Handles unsubscribe requests
  - Requires email and valid token

### Admin API (future expansion)
- `GET /api/v1/admin/subscribers`
  - List all subscribers with pagination
  - Filterable by status

- `POST /api/v1/admin/campaigns`
  - Create new email campaign
  
- `PUT /api/v1/admin/campaigns/:id`
  - Update existing campaign
  
- `POST /api/v1/admin/campaigns/:id/send`
  - Send or schedule campaign

## Security Considerations
- CSRF protection on all forms
- Rate limiting on subscription endpoints
- Input validation and sanitization
- HTTPS-only communication
- Secure handling of subscriber data (GDPR compliance)
- JWT with appropriate expiration for admin access
- Environment-based configuration management

## Development Workflow
1. Local development using VSCode on MacBook Pro M3
2. API testing with Postman
3. Version control with Git/GitHub
4. CI/CD pipeline for automated testing and deployment
5. Staging environment for QA before production release

### 1. Setting up the Frontend (React/TypeScript with Vite)

```bash
# Create React TypeScript project with Vite
npm create vite@latest bytebeasts-frontend -- --template react-ts

# Navigate to project directory
cd bytebeasts-frontend

# Install core dependencies
npm install

# Install additional dependencies for the project
npm install react-router-dom axios tailwindcss postcss autoprefixer

# Setup Tailwind CSS
npx tailwindcss init -p

# Install dev dependencies
npm install -D jest @testing-library/react @testing-library/jest-dom
```

### 2. Setting up the Backend (NestJS)

```bash
# Install NestJS CLI globally
npm install -g @nestjs/cli

# Create a new NestJS project
nest new bytebeasts-backend

# Navigate to project directory
cd bytebeasts-backend

# Install additional dependencies
npm install @nestjs/typeorm typeorm pg class-validator class-transformer 
npm install @nestjs/throttler @nestjs/config

# Install email sending library
npm install @nestjs-modules/mailer nodemailer

# Install JWT for future admin authentication
npm install @nestjs/jwt @nestjs/passport passport passport-jwt

# Install dev dependencies
npm install -D @types/nodemailer
```

### 3. Setting up PostgreSQL (using Docker for development)

```bash
# Create a Docker container running PostgreSQL
docker run --name bytebeasts-postgres -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_USER=bytebeasts -e POSTGRES_DB=bytebeasts_db -p 5432:5432 -d postgres:latest
```

### 4. Initial Backend Setup for Subscription Module

```bash
# Generate subscription module and related files
cd bytebeasts-backend
nest generate module subscription
nest generate controller subscription
nest generate service subscription

# Generate DTOs and entities
mkdir -p src/subscription/dto
mkdir -p src/subscription/entities
```

### 5. Project Configuration Files

For TypeORM configuration in NestJS, create an `ormconfig.js` file in the backend root:

```bash
# Create TypeORM config
echo 'module.exports = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "bytebeasts",
  password: "mysecretpassword",
  database: "bytebeasts_db",
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: false,
  migrations: ["dist/migrations/*{.ts,.js}"],
  cli: {
    migrationsDir: "src/migrations"
  }
}' > bytebeasts-backend/ormconfig.js

# Create .env file for backend
echo 'DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=bytebeasts
DATABASE_PASSWORD=mysecretpassword
DATABASE_NAME=bytebeasts_db
JWT_SECRET=your_jwt_secret_key_here
EMAIL_HOST=smtp.example.com
EMAIL_USER=noreply@bytebeasts.com
EMAIL_PASSWORD=your_email_password
EMAIL_FROM=ByteBeasts <noreply@bytebeasts.com>
FRONTEND_URL=http://localhost:5173' > bytebeasts-backend/src/.env
```

### 6. Set Up Git for Version Control

```bash
# Initialize Git in both projects
cd bytebeasts-frontend
git init
echo "node_modules\n.env\ndist\n.DS_Store" > .gitignore
git add .
git commit -m "Initial frontend setup"

cd ../bytebeasts-backend
git init
echo "node_modules\n.env\ndist\n.DS_Store" > .gitignore
git add .
git commit -m "Initial backend setup"
```

### 7. Configure Postman for API Testing

- Create a new Postman collection named "ByteBeasts API"
- Add a new request for "Subscribe" with POST method to `http://localhost:3000/api/v1/subscribe`
- Configure body as raw JSON with an example email subscription request
- Save and export the collection for sharing with your team