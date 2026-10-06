# Women's Healthcare Finder

## Overview

Women's Healthcare Finder is a full-stack web application designed to make it easier for women and adolescent girls to find the health services they need.

Finding the right healthcare support can be difficult, especially when comparing different services, locations, and provider types. This project aims to simplify that process by allowing users to search for nearby women's healthcare providers based on their postcode, the type of support they need, and whether they're looking for NHS or private services.

Users can search for services including fertility support, menopause care, pregnancy and maternity services, sexual health, family planning and contraception, and general women's health.

This project was originally created as part of the Code First Girls Full-Stack Development course by a team of six developers. Since completing the course, I've continued developing it independently by improving the application structure, expanding the provider dataset, migrating the database from MySQL to PostgreSQL with PostGIS, introducing Redux for state management, and continuing to refine the overall user experience and maintainability.

---

## Screenshot

![Homepage](./docs/images/homepage.png)

---

## Features

Users can:

* Browse NHS resources on various health conditions
* Search for women's healthcare providers using a UK postcode.
* Choose the type of healthcare support they're looking for.
* Filter providers by NHS, private, or all available providers.
* Find nearby healthcare providers within a selected search radius (5, 10, 25, 50 miles, or anywhere in the UK).
* View provider details, including:

  * Provider name
  * Address
  * Contact information
  * Website

---

## Tech Stack

### Frontend

* React
* Vite
* Redux Toolkit
* React Router
* Mantine UI
* CSS Modules

### Backend

* Node.js
* Express.js

### Database

- Neon (PostgreSQL)
- PostGIS

### APIs

* Postcodes.io API

### Testing

* Vitest

---

## What's Changed

Since the original Code First Girls project, I've continued developing the application by:

* Refactoring the backend into controllers, routes, database, and utility modules.
* Moving the frontend into its own dedicated folder.
* Migrating the database from MySQL to PostgreSQL with PostGIS.
* Expanding the healthcare provider dataset.
* Introducing Redux for state management.
* Adding Resources and About pages.
* Improving the overall project structure, documentation, and maintainability.
  
## Getting Started

### Prerequisites

- Node.js
- Git

### 1. Clone the repository

```bash
git clone https://github.com/Molly-Lester/Womens-Healthcare-Finder.git
cd Womens-Healthcare-Finder
```

If you don’t have Git, download the repository as a ZIP and open the extracted project folder.

### 2. Install frontend dependencies

From the project root:

```bash
cd frontend
npm install
```

### 3. Install backend dependencies

Open a separate terminal at the project root:

```bash
cd backend
npm install
```

### 4. Create the backend environment file

In the `backend` folder, create a file named `.env`. Add the Neon connection string in the next step:

```env
DATABASE_URL="your-neon-connection-string"
```

Keep `.env` private and do not commit it to Git.

### 5. Create your Neon project

Create your own project in the [Neon Console](https://console.neon.tech/). Use the default branch and database Neon creates for the project.

In the project dashboard, click **Connect** and copy the connection string and replace `your-neon-connection-string` in `backend/.env` with the full string. The backend reads this value from `DATABASE_URL`.

### 6. Set up the database

The SQL setup and data file is located at:

```text
backend/db/Womens-Healthcare-Finder-DB.sql
```

For a new, empty database, open the Neon SQL Editor for the correct database, paste in the contents of the SQL file and run the script. It creates the tables and relationships, enables PostGIS, and adds the clinic data.

### 7. Run the application

Start the backend in one terminal:

```bash
cd backend
npm start
```

The backend runs at [http://localhost:3000](http://localhost:3000).

Start the frontend in a second terminal:

```bash
cd frontend
npm run dev
```

The frontend runs at [http://localhost:5173](http://localhost:5173).

### Running Tests

Frontend tests use Vitest. From the `frontend` folder, run:

```bash
npm test
```

## Future Improvements

There are still some ideas I'd like to explore as I continue developing the project:

* Increase test coverage for different search scenarios and API responses.
* Continue refining the user interface and accessibility.

---

## Contributors

This project was originally created as part of the Code First Girls Full-Stack Development course by:

* Molly Lester
* Destiny Iyamu Omoragbon
* Danielle Brereton-Smith
* Saamiya Kudah
* Tapiwa Chibagidi
* Tia Benvenuti

### Team Contributions

**Molly Lester**

* Built the backend API, including provider search, postcode geocoding, and distance-based filtering.
* Helped develop the frontend, focusing on the user interface, search experience, error handling, and overall usability.
* Continued developing the project independently after the bootcamp by refactoring the codebase, migrating the database to PostgreSQL with PostGIS, expanding the provider dataset, adding Redux for state management, and improving the project documentation.

**Destiny Iyamu Omoragbon**

* Built key parts of the search experience, including category selection, provider filtering, API integration, and the results page.

**Danielle Brereton-Smith**

* Designed the original database, gathered the healthcare provider data, and helped connect the frontend and backend.

**Saamiya Kudah**

* Contributed to the styling of the results page and created the project presentation.

**Tapiwa Chibagidi**

* Worked on the project documentation and wrote frontend tests using Vitest and React Testing Library.

**Tia Benvenuti**

* Came up with the original project idea and created the wireframes that guided the application's design and user flow.
