# 🏨 Hotel Guest Management System

A mini full-stack project for managing hotel guest records, built as part of a Full-Stack Development Intern assignment.

This project features a **React + TypeScript** frontend (built with Vite) and a **Pocketbase** backend for easy, local data storage and CRUD operations.

---

## 📁 Project Structure

/hotel-guest-management
│
├── /client # React frontend (Vite + TailwindCSS)
├── /server # Pocketbase backend
└── README.md # Setup and run instructions


---

## 🚀 Tech Stack

### Frontend:

- [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) – for fast development and build
- [Tailwind CSS](https://tailwindcss.com/) – utility-first styling
- [TanStack Query](https://tanstack.com/query) *(optional)* – server state management
- [TanStack Router](https://tanstack.com/router) *(optional)* – routing
- [Jotai](https://jotai.org/) *(optional)* – client state management

### Backend:

- [Pocketbase](https://pocketbase.io/) – local backend with built-in SQLite DB
- [Pocketbase JS SDK](https://pocketbase.io/docs/js-sdk) – for API integration

---

## 🔧 Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) v16+
- [Git](https://git-scm.com/)
- [Pocketbase](https://pocketbase.io/docs/) (Download binary)

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/Afrar11/hotel-guest-management.git
cd hotel-guest-management

2. Start Pocketbase Backend
a. Navigate to the server directory

cd server

b. Download Pocketbase binary (if not already present)

Go to: https://pocketbase.io/download/

Extract the binary into the server folder.

c. Run the server

./pocketbase serve

Pocketbase will be available at: http://127.0.0.1:8090

d. Access Admin UI

Go to http://127.0.0.1:8090/_/

Use the following credentials:

Email: mohamedafrar98@yahoo.com
Password: IamBatman@2025

3. Set Up the Frontend
a. Navigate to the client directory

cd ../client

b. Install dependencies
npm install

c. Run the development server
npm run dev

Frontend will be live at: http://localhost:5173

🗃️ Pocketbase Configuration
Collection: guests

| Field Name      | Type   | Required | Unique |
| --------------- | ------ | -------- | ------ |
| first\_name     | String | ✅        | ❌      |
| last\_name      | String | ✅        | ❌      |
| email           | String | ✅        | ✅      |
| phone           | String | ❌        | ❌      |
| address         | String | ❌        | ❌      |
| date\_of\_birth | Date   | ❌        | ❌      |
| created         | Auto   | ✅        | ✅      |

3-5 sample guest records added via Admin UI

Basic CRUD permissions enabled for the collection

✨ Features
✅ CRUD Operations

View all guests

Add a new guest

Edit guest details

Delete guest record

✅ Search/Filter

Filter guests by name or email

✅ Routing

/guests → Guest list

/guests/new → Add new guest

/guests/:id → Edit/View guest

📝 Git History

Git commit history shows step-by-step progress and feature implementation.

📩 Contact

For any queries or clarifications, feel free to reach out.