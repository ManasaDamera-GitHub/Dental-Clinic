Todays Dental Services Website

A full-stack dental clinic website built using **React.js** for the frontend and **Node.js + Express + MongoDB** for the backend. This application allows users to browse services, read FAQs, view clinic information, and submit contact forms that are saved to the database.

Features:

**Frontend (ReactJS)**

- Modern and responsive design using **Bootstrap** and custom **CSS** (`main.css`)
- Pages:
  - `Home` – Hero banner, quick service overview, FAQ
  - `About` – Clinic philosophy, doctor profile, mission
  - `Services` – List of dental services with images
  - `Contact` – Contact form with Axios submission
  - `FAQ` – Collapsible FAQ section with answers
- Navigation with **React Router**
- Icons via `react-icons` and `lucide-react`
- Axios used for form submission to backend API

**Backend (Node.js + Express + MongoDB)**

- Express server with CORS and JSON parsing
- MongoDB Atlas for data storage (via `mongoose`)
- Routes:
  - `GET /` – Fetch all user contact data
  - `POST /data` – Save contact form submission
- Contact form data stored in MongoDB:
  - Fields: `name`, `email`, `subject`, `message`


