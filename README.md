# TanStack React POC

This is a proof-of-concept React application showcasing the power of **TanStack** libraries including **TanStack Table**, **TanStack Query**, and **TanStack Router** along with **TypeScript** and **Tailwind CSS**.

## Features

- Paginated character table using **TanStack Table**
- API data fetching with caching using **TanStack Query**
- Routing with **TanStack Router** (including nested and dynamic routes)
- State persistence via URL (e.g., `?page=3`)
- Detail page for characters using dynamic route and query
- UI styled with **Tailwind CSS**
- Type-safe data handling with **TypeScript**
- Refresh button avoids unnecessary API calls with caching logic

## Screenshots
![home](https://github.com/user-attachments/assets/f57c5635-dfdd-482d-83e8-c699395539bf)

![characterListTable](https://github.com/user-attachments/assets/d3becf2f-da89-42a6-827b-403e9e8608dc)

![characterListTablePagination](https://github.com/user-attachments/assets/0a3dcbda-3d20-4748-91d8-70637cc3293a)

![characterDetails](https://github.com/user-attachments/assets/f44ea336-bfec-4de2-9eb5-604a2c2d2815)


## Technologies Used

- React + Vite
- TypeScript
- TanStack Query (React Query)
- TanStack Table
- TanStack Router
- Tailwind CSS
- Axios

## Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/ratankavade/tanstack-react-POC/tree/develop
cd tanstack-react-poc
npm install
npm run dev

