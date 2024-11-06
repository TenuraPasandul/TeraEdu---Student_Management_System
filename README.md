# TeraEdu - Student Management System

TeraEdu is a comprehensive Student Management System built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This application provides essential functionalities to manage students, teachers, and courses efficiently. It includes user registration, course management, authentication, and various other features to streamline educational management tasks.

## Features

### Core Features

1. **User Registration**
   - Allows students and teachers to register with essential details such as name, email, and password.
   - Supports profile picture upload during registration for a personalized experience.

2. **Course Management**
   - Teachers can be assigned to courses they teach.
   - Students can enroll in available courses, each managed by a designated teacher.

3. **Authentication**
   - Secure login sessions are maintained using JWT tokens.
   - Passwords are securely hashed with Bcrypt for additional security.

4. **Form Validations**
   - Utilizes React Hook Form for efficient user input management and validation on the frontend.

### Optional Features

1. **Payment Gateway Integration**
   - Integrates payment gateways like Stripe or PayPal to process payments before course enrollment.
   - Ensures safe and secure transaction handling.

2. **Homework Upload**
   - Allows students to upload homework files for their enrolled courses.
   - Uses Multer to handle file uploads efficiently on the server.

3. **Profile Picture Storage**
   - Efficient storage and retrieval mechanisms for profile pictures, optimized for performance.

## Tech Stack

### Backend
- **Express.js** and **Node.js**: Handles server operations and API routing.
- **MongoDB** with **Mongoose**: Models and manages data effectively.
- **JWT**: Provides secure login sessions.
- **Bcrypt**: Hashes passwords for secure storage.
- **Multer**: Manages file uploads, including profile pictures and homework files.

### Frontend
- **React.js**: Builds a responsive and dynamic user interface.
- **Material-UI**: Ensures a consistent and modern design across the application.
- **Redux**: Manages application state effectively.
- **React Hook Form**: Streamlines form handling and validation for a better user experience.

## Installation

### Prerequisites
- Node.js
- MongoDB
- A payment gateway account (optional for payment feature)

### Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/TenuraPasandul/TeraEdu---Student_Management_System.git
   cd TeraEdu---Student_Management_System
