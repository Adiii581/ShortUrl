Flask & React URL Shortener
A full-stack URL shortening service built with a Python/Flask backend and a React frontend. The application allows users to enter a long URL and receive a shortened, unique link that redirects to the original URL and tracks the number of clicks.

🚀 About The Project
This project is a complete web application that demonstrates the integration of a RESTful API backend with a modern, single-page frontend.

Key Features:

Shorten Links: Accepts any valid URL and generates a unique 6-character short code.

Redirect Service: The generated short links redirect users to the original URL.

Click Tracking: Counts every time a shortened link is used.

Analytics: Provides a simple API endpoint to view all links, sorted by the most clicked.

🛠️ Technologies Used
Backend
Python

Flask

Flask-SQLAlchemy

PostgreSQL

Gunicorn

Frontend
React

JavaScript

Axios

HTML5 & CSS3

Deployment
Backend: Heroku

Frontend: Vercel

⚙️ How to Run Locally
To get a local copy up and running, follow these steps.

Prerequisites
Python (3.9+ recommended)

Node.js & npm (v18+ recommended)

PostgreSQL server running locally

1. Clone the Repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2. Backend Setup
# Navigate to the backend directory
cd path/to/your/backend

# Create and activate a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`

# Install dependencies
pip install -r requirements.txt

# Set up the database connection
# (Make sure your PostgreSQL server is running and you've created a database)
export DATABASE_URL="postgresql://user:password@localhost/url_shortener"

# Run the Flask application
flask run

The backend will now be running on http://localhost:5000.

3. Frontend Setup
# Navigate to the frontend directory in a new terminal
cd path/to/your/frontend

# Install dependencies
npm install

# Start the React development server
npm start

The frontend will now be running on http://localhost:3000 and will be able to communicate with the local backend.
