# Issue Tracker
This project is an Issue Tracker built following the tutorial by Mosh Hammedani. It allows users to track issues, assign them to users, and manage their status.
## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Demo](#demo)
- [Contact](#contact)

## Features

- User authentication and authorization
- Create, read, update, and delete issues
- Assign issues to users
- Track the status of issues
- User-friendly interface

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/issue-tracker.git
   ```
2. Navigate to the project directory:
   ```bash
   cd issue-tracker
   ```
3. Install dependencies:
   ```bash
    npm install
   ```
4. Set up the environment variables. Create a .env file in the root directory and add the following:
    ```bash
    DATABASE_URL=your_database_url
    JWT_SECRET=your_jwt_secret
    ```
5. Run database migrations:
    ```bash
    npx prisma migrate dev --name init
    ```
6. Start the development server:
    ```bash
    npm run dev
    ```
## Usage 
1. Open your web browser and go to http://localhost:3000.
2. Register a new account or log in with an existing one.
3. Start tracking issues by creating, assigning, and updating their statuses.
   
## Technologies Used
- Nextjs
- NextAuth (Google Authentification)
- React
- MySql 
- Prisma (ORM)
- JWT for authentication
- Radix-UI for UI components
- TailwindCSS for styling
  
## Demo

### Home Page
![image](https://github.com/user-attachments/assets/b1b58848-2563-44dd-bf8c-53c15e9d9553)

### Dashboard Page
![image](https://github.com/user-attachments/assets/c17e568a-10f1-4477-bb92-46968da810db)

### Issues Page
![image](https://github.com/user-attachments/assets/2823b922-4546-48af-a830-41fd1cef6f8d)

### Adding New issue
![image](https://github.com/user-attachments/assets/4022f5de-f8b5-4147-8b74-9c24e693b7b0)

### Preview Page
![image](https://github.com/user-attachments/assets/9628084a-d2b5-4ece-9436-7612032fb3e9)

### Assigning new issue to user
![image](https://github.com/user-attachments/assets/cb806bea-c752-42c3-8faf-a1827b16494a)

### New issue deisplayed in Dashboard
![image](https://github.com/user-attachments/assets/55ad88d7-168b-452a-8d7e-911d4955daa3)

## Contact
For any inquiries or feedback, please reach out to:

- **Name**: Ayoub Dahmen
- **Email**: ayoub1dahmen@gmail.com
- **GitHub**: ayowaaab
  
