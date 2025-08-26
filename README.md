# React + Vite

# Timesheet Management Portal — Frontend

This is the frontend for the Timesheet Management Portal built with React and styled using Bootstrap 5.
It provides interfaces for users and admins to manage timesheets.


1.Features
  A. User Features
      - Register & login.
      - Add, edit, delete timesheets.
      - View personal dashboard with timesheet entries.

  B. Admin Features
      - Admin authentication (separate login/register).
      - View all users’ timesheets in a dashboard.

  C. General
      - Start page with User and Admin entry buttons.
      - Protected routes using custom ProtectedRoute component.
      - Bootstrap UI.
      
2. Folder Structure
   src/
├── App.js
├── index.js
├── components/
│   ├── Navbar.jsx
│   ├── navbar.css
│   ├── ProtectedRoute.jsx
│
├── pages/
│   ├── Start.jsx             # Entry page (User/Admin buttons)
│   ├── UserAuth.jsx          # User auth selection page
│   ├── Login.jsx             # User login
│   ├── Register.jsx          # User registration
│   ├── AddTimeSheet.jsx      # Add new timesheet
│   ├── EditTimeSheet.jsx     # Edit timesheet
│   ├── AdminAuth.jsx         # Admin auth selection page
│   ├── AdminLogin.jsx        # Admin login
│   ├── AdminRegister.jsx     # Admin registration
│   ├── AdminDashboard.jsx    # Admin view of all timesheets


3. Setup & Run
## Navigate to frontend folder
cd frontend

## Install dependencies
npm install

## Start development server
npm run dev

4. Environment Variables
   VITE_API_BASE_URL=http://localhost:5000/api

5. Key Components
   - Navbar.jsx → Top navigation bar.
   - ProtectedRoute.jsx → Restricts access to authenticated users.
   - AdminDashboard.jsx → Admin view of all timesheets.
   - App.js → User dashboard with timesheet list.

6. Tech Stack
   - React 18
   - React Router DOM
   - Bootstrap 5
   - Axios (for API requests)
   - Vite (build tool)











  
