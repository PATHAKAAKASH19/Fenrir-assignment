# Fenrir Security Assignment

A modern, responsive security dashboard built with React, TypeScript, and Vite. This project features a login page, a main dashboard with scan summaries, and a detailed live scan console.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd assignment
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`.

## 🛠 Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons:** [Tabler Icons](https://tabler-icons.io/)
- **State Management:** [Zustand](https://docs.pmnd.rs/zustand/)
- **Animations:** [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **Routing:** [React Router 7](https://reactrouter.com/)

## ✨ Key Features

- **Authentication:** Sleek login page with modern UI.
- **Security Dashboard:** Overview of critical, high, medium, and low severity vulnerabilities.
- **Scan Management:** Filterable and searchable table of security scans (Greybox/Blackbox).
- **Live Scan Console:** Real-time activity logs and finding logs with severity indicators.
- **Theme Support:** Dark and Light mode support using `ThemeProvider`.
- **Responsive Design:** Fully optimized for mobile and desktop screens.

## 📁 Project Structure

```text
src/
├── components/     # UI components and layout parts
│   ├── layout/     # Theme and layout wrappers
│   └── ui/         # Reusable UI elements (Button, Input, etc.)
├── data/           # Mock data for demonstration
├── pages/          # Full page components (Login, Dashboard)
├── store/          # Zustand state management
├── utils/          # Helper functions and utilities
└── App.tsx         # Root component and routing logic
```

## ⚠️ Known Limitations

- **Mock Data:** Currently, all scan results and logs are powered by [mockData.ts](file:///home/pheonix/all-projects/my-completed-projects/fenrir-security/assignment/src/data/mockData.ts).
- **Placeholders:** Some buttons (like "New scan" and "Column") are UI placeholders and do not have full backend functionality.
- **Persistence:** User session and scan filters are not persisted across page reloads.
