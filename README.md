
# Habits Tracker

Habits Tracker is a web application designed to help users track and manage their daily habits effectively. The app allows users to monitor progress, build routines, and improve productivity through consistent habit tracking.

This project is composed of:
- **Frontend**: Built with [Next.js](https://nextjs.org/), styled using [Tailwind CSS](https://tailwindcss.com/) and [shadcn/ui](https://shadcn.dev/).
- **Backend**: Developed with [.NET](https://dotnet.microsoft.com/) and uses PostgreSQL as the database.
- **Containerization**: Managed with [Docker](https://www.docker.com/) for simplified deployment and environment consistency.

---
## Features
- Add, update, and delete habits.
- Track your progress with calendar.
- View analytics for habit performance.
- Design for both desktop and mobile devices.

---

## Technologies Used
- **Frontend**: Next.js, Tailwind CSS, shadcn/ui
- **Backend**: .NET, PostgreSQL
- **Containerization**: Docker

---

## Getting Started
Follow these steps to set up the project locally or run it entirely using Docker.

### Prerequisites

Ensure the following are installed on your machine:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [.NET SDK](https://dotnet.microsoft.com/download)
- [Docker](https://www.docker.com/)

### Clone the Repository

```bash
git clone https://github.com/your-username/habits-tracker.git
cd habits-tracker
```

---

### Running the Application Locally

To run the project locally, you will need to start the PostgreSQL database in a Docker container.

1. Start the PostgreSQL container:
   ```bash
   cd backend
   docker compose up
   ```

2. Update the backend configuration to connect to the database:
   - Ensure `appsettings.json` in the `backend` directory includes the correct connection string:
     ```json
     "ConnectionStrings": {
       "DefaultConnection": "Host=localhost;Port=5432;Database=habits;Username=postgres;Password=yourpassword"
     }
     ```

3. Run the backend:
   ```bash
   dotnet restore
   dotnet ef database update
   dotnet run
   ```

4. Run the frontend:
   ```bash
   cd ../frontend
   npm install --legacy-peer--deps
   npm run dev
   ```

5. Create an .env file in the frontend directory and add the following environment variable:
```
	NEXT_PUBLIC_API_URL="http://localhost:5002"
```

6. Access the application:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:5002](http://localhost:5002)

---

## Folder Structure

```
habits-tracker
├── backend/                # Backend (ASP.NET Core)
│   ├── Controllers/        # API endpoints
│   ├── Models/             # Database models
│   ├── Repositories/       # Data access logic
│   └── Services/           # Business logic
├── frontend/               # Frontend (Next.js)
│   ├── components/         # UI components
│   ├── lib/                # Utility functions
│   ├── app/                # Next.js pages
│   ├── stores/             # State management
├── docker-stack.yml        # Docker Compose configuration
└── README.md               # Documentation
```

---

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.
