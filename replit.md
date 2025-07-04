# Aviation Squawk Code Generator

## Overview

This is a full-stack web application that generates valid aviation squawk codes (transponder codes) for educational and training purposes. The application ensures that emergency codes (7500, 7600, 7700) are never generated, maintaining aviation safety standards.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **UI Library**: Radix UI components with shadcn/ui styling
- **Styling**: Tailwind CSS with custom aviation-themed design system and dark mode support
- **State Management**: React hooks and TanStack Query for server state
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth UI transitions and interactions
- **Theme System**: Custom theme provider with localStorage persistence
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for squawk code operations
- **Security**: Read-only mode support via environment variable
- **Code Expiry**: Automatic 10-minute expiration system
- **Conflict Prevention**: Active code checking to prevent duplicates
- **Development**: Hot reloading with tsx and Vite middleware integration

### Data Storage Solutions
- **Database**: PostgreSQL with Neon Database serverless
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Enhanced with expiry tracking and active status fields
- **Code Management**: Automatic cleanup of expired codes
- **Migrations**: Drizzle Kit for database schema management

## Key Components

### Frontend Components
- **Enhanced Squawk Generator**: Modern tabbed interface with Generator, History, and Information tabs
- **Code Display**: Animated code presentation with copy-to-clipboard functionality
- **History Management**: Real-time active codes list with countdown timers
- **Theme System**: Light/dark mode toggle with smooth transitions
- **UI Components**: Comprehensive set of Radix UI components with Framer Motion animations
- **Toast System**: User notifications for actions and errors with success/failure states
- **Responsive Design**: Mobile-first approach with enhanced Tailwind breakpoints

### Backend Services
- **Smart Code Generation**: Secure random generation with conflict prevention
- **Expiry Management**: Automatic 10-minute code expiration system
- **Validation**: Ensures codes follow aviation standards (0-7 digits only)
- **Emergency Code Filtering**: Prevents generation of reserved emergency codes
- **Read-Only Mode**: Environment-based protection against unauthorized use
- **API Endpoints**: Enhanced RESTful services for generate, history, clear, and validation

### Database Schema
- **Users Table**: User management with username/password authentication
- **Enhanced Squawk Codes Table**: Code tracking with generation time, expiry time, and active status
- **Automatic Cleanup**: Database functions to expire old codes and prevent conflicts
- **Type Safety**: Enhanced Zod schemas for runtime validation and type inference

## Data Flow

1. **User Interaction**: User clicks generate button on frontend
2. **API Request**: Frontend makes request to `/api/squawk/generate`
3. **Code Generation**: Backend generates random 4-digit octal code
4. **Validation**: System ensures code is not an emergency code
5. **Database Storage**: Valid code is optionally stored with timestamp
6. **Response**: Code returned to frontend with metadata
7. **UI Update**: Frontend displays new code with visual feedback

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon Database connection for PostgreSQL
- **@tanstack/react-query**: Server state management and caching with real-time updates
- **@radix-ui/***: Comprehensive UI component library
- **drizzle-orm**: Type-safe database operations with enhanced querying
- **express**: Web application framework with session management
- **vite**: Build tool and development server
- **framer-motion**: Animation library for smooth UI transitions
- **next-themes**: Theme management system for light/dark mode

### Development Tools
- **TypeScript**: Static type checking and enhanced developer experience
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Drizzle Kit**: Database schema management and migrations
- **ESBuild**: Fast JavaScript bundler for production builds

### Quality Assurance
- **Unit Tests**: Basic test suite for code generation logic validation
- **Type Safety**: Comprehensive TypeScript coverage across frontend and backend
- **Error Handling**: Robust error boundaries and fallback mechanisms

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static assets
2. **Backend Build**: ESBuild bundles server code for Node.js
3. **Database Setup**: Drizzle migrations ensure schema is up-to-date
4. **Asset Optimization**: Static files are optimized for production

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string for Neon Database
- **NODE_ENV**: Environment-specific configuration
- **Production**: Serves static files and API from single Express server

### Hosting Architecture
- **Single Server**: Express serves both API and static frontend
- **Database**: Neon Database for serverless PostgreSQL
- **Static Assets**: Served directly from Express with proper caching headers

## Changelog

```
Changelog:
- July 04, 2025. Initial setup with basic squawk code generation
- July 04, 2025. Added PostgreSQL database integration with Neon Database
- July 04, 2025. Fixed button visibility issue by switching from custom aviation-gradient to standard blue styling
- July 04, 2025. Major enhancement release with comprehensive feature set:
  • Added tabbed interface (Generator, History, Information)
  • Implemented copy-to-clipboard functionality with confirmation toasts
  • Added real-time history tracking with countdown timers
  • Implemented 10-minute automatic code expiry system
  • Added "Clear All" functionality for session management
  • Enhanced button states with loading spinners and disabled states
  • Added smooth animations and transitions using Framer Motion
  • Implemented light/dark mode toggle with theme persistence
  • Added read-only mode protection via environment variable
  • Created comprehensive unit test suite for code generation logic
  • Enhanced database schema with expiry tracking and active status
  • Improved conflict prevention by checking active codes before generation
- July 04, 2025. Enhanced dark/light mode transitions with smooth CSS animations
- July 04, 2025. Implemented protected credits system for public GitHub repository:
  • Created ProtectedCredits component with obfuscated validation
  • Added copyright notices and attribution requirements
  • Protected creator attribution from accidental modification
  • Created comprehensive README with attribution guidelines
  • Enhanced Information tab with protected copyright notice
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```