# Data Visualization Dashboard

## Overview
This project implements a data visualization dashboard that displays network performance metrics using Vue.js for the frontend and Node.js for the backend. The dashboard provides interactive visualizations of network statistics, focusing on delivering a clean, responsive, and user-friendly interface.

## Technology Stack
- **Frontend**: Vue.js 3 with Composition API
- **Backend**: Node.js with Express
- **Data Visualization**: Chart.js
- **API Communication**: Axios

## Design Decisions

### Frontend Architecture
1. **Vue.js 3 with Composition API**
   - Composition API enables better code reuse and maintainability
   - Component-based architecture for modular development

2. **Responsive Design**

### Backend Architecture
1. **RESTful API Design**
   - Clean and intuitive endpoint structure
   

2. **Data Structure**
   - Same data format as Edge Network revenue endpoint

## Setup Instructions

### Frontend Setup
1. Navigate to the client directory: `cd client`
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Access the application at `http://localhost:5173`

### Backend Setup
1. Navigate to the server directory: `cd server`
2. Install dependencies: `npm install`
3. Run the server: `node src/index.js`
4. API will be available at `http://localhost:3000`

## API Endpoints

- `GET /api/revenue` - Returns monthly revenue statistics