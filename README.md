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

**Deployment Instructions**
**🔹 Frontend on Vercel:**
1.Push the frontend code to a GitHub repository.
2.Go to Vercel and click “New Project”.
3.Import the GitHub repo.
4.Set the root directory to FrontEnd.
5.Vercel auto-detects React and deploys it.
6.After deployment, update Axios URLs in frontend to point to Render backend.

**🔹 Backend on Render:**
1.Push your backend code to GitHub.
2.Visit Render and click “New Web Service”.
3.Connect your GitHub repo.
4.Set the root directory to the backend folder.
5.Configure the service:
    Build Command: npm install
    Start Command: node server.js
    Environment Variables:
        ATLAS_URI=your_mongodb_connection_string
        PORT=3000
6.Click Deploy and note the backend URL.

