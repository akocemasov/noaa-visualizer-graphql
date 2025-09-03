# 🌌 NOAA Data Visualizer

A **Vite + React 19 + Apollo GraphQL** application for visualizing real-time **NOAA SWPC (Space Weather Prediction Center)** data.  
Built with modern tools like **MUI**, **Recharts**, and **TypeScript**, the app is for **self-learning purposes**.

---

## ✨ Features

- **Vite + React 19** – fast development, modern build system, type-safe React components.
- **Apollo GraphQL** – full-stack GraphQL API for fetching NOAA data.
- **Express server** – serves GraphQL API and client build in production.
- **TypeScript** – type-safe code for reliability.
- **MUI (Material UI)** – responsive UI with light/dark theme toggle.
- **Recharts** – scientific-like visualization of planetary K-index data.
- **Lazy loading** – improves performance and reduces unused JS.
- **Server + client combined** – single deployment with Express serving both GraphQL API and static client files.
- **NOAA SWPC API integration** – fetches real-time planetary K-index data.
- **Error handling & retry policy** – compliant with NOAA’s API usage guidelines.

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/akocemasov/noaa-visualizer-graphql.git
cd noaa-visualizer-graphql
```

### 2. Install dependencies

```bash
npm run install:all
```

### 3. Run locally

```bash
npm run dev
```
* App will be available at [http://localhost:5173](http://localhost:5173).
* GraphQL API runs on [http://localhost:4000/graphql](http://localhost:4000/graphql).

### 4. Build & Run production

```bash
npm run build
npm run start
```

* The Express server will serve both the client and GraphQL API.
* Default URL: [http://localhost:4000](http://localhost:4000).

---

## 🌐 App Preview

* Render.com deployment: [https://noaa-visualizer-graphql.onrender.com/](https://noaa-visualizer-graphql.onrender.com/)

---

## 📡 Data Source

Data comes from **NOAA Space Weather Prediction Center**’s public APIs:

* [Planetary K-Index (1 minute resolution)](https://services.swpc.noaa.gov/json/planetary_k_index_1m.json)

⚠️ **Usage policy**:

* Do not query more than **2 times per minute**.
* If a request fails, retry after **1 minute**.

---

## 📂 Project Structure

```
client/
 ├── src/
 │   ├── components/       # Reusable UI components
 │   │   ├── NavBar.tsx
 │   │   ├── ChartCard.tsx
 │   │   └── ...           
 │   ├── pages/            # App pages
 │   │   ├── HomePage.tsx
 │   │   └── AboutPage.tsx
 │   ├── graphql/          # Apollo client setup + queries
 │   └── theme.ts          # MUI theme setup
 ├── vite.config.ts
 └── package.json.         # Client package.json

server/
 ├── src/
 │   ├── index.ts          # Express + Apollo server
 │   └── schema.ts         # GraphQL typeDefs & resolvers
 └── package.json          # Server package.json

.env.example               # Environment variable placeholders
```

---

## 🛠️ Tech Stack

* **Framework**: [React 19](https://reactjs.org/) + [Vite](https://vitejs.dev/)
* **GraphQL**: [Apollo Server and Client](hhttps://www.apollographql.com/)
* **Server**: [Express 5](https://expressjs.com/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **UI Library**: [MUI](https://mui.com/)
* **Charts**: [Recharts](https://recharts.org/en-US/)
* **Deployment**: [Render.com](https://render.com/)

---

## 💡 Future Improvements

* Add more NOAA datasets (solar wind, aurora forecast, etc.).
* Interactive map visualization (D3.js or Leaflet).
* User-selectable time ranges for charts.
* Add unit & integration tests.

