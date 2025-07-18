<a id="readme-top"></a>

# 📚 G SCORES - Student Score Searcher and Statistical System

<!-- TABLE OF CONTENTS -->

## 🚩 Table of Contents

-   [🧠 About The Project](#-about-the-project)
-   [📌 Live Demo](#-live-demo)
-   [🛠️ Built With](#️-built-with)
-   [⚙️ Getting Started](#-getting-started)
    -   [📋 Prerequisites](#-prerequisites)
    -   [📦 Installation](#-installation)
    -   [🚀 Usage](#-usage)
-   [📄 API Documentation](#-api-documentation)
-   [🤝 Contributing](#-contributing)
-   [📬 Contact](#-contact)

<!-- ABOUT THE PROJECT -->

## 🧠 About The Project

This project is a full-stack web application for **searching student exam scores** and generating **statistical reports**.  
It allows users to **look up results by registration number**, and provides **visual analytics** on score distribution, and more.

The frontend is built using **React** and styled with **Ant Design**, ensuring a modern, clean, and responsive user interface.  
The backend is powered by **Spring Boot**, offering a scalable and secure RESTful API.

🔍 **Key Features**:

-   🔎 Search for candidates’ exam results by registration number
-   📊 Interactive statistics and filtering on exam results
-   💻 Frontend built with React + Ant Design
-   🚀 Backend REST API with Spring Boot
-   🧩 Modular architecture for future extensibility

---

<p align="right"><a href="#readme-top">⬆️</a></p>

## 📌 Live Demo

-   [Client](https://g-scores-one.vercel.app/)
-   [Server](https://backend-gscore-latest.onrender.com/api/v1/health)

---

<p align="right"><a href="#readme-top">⬆️</a></p>

## 🛠️ Built With

-   [React](https://react.dev/)
-   [Ant Design](https://ant.design/)
-   [Java 21](https://www.oracle.com/java/)
-   [Spring Boot](https://spring.io/projects/spring-boot)
-   [Docker](https://www.docker.com/)
-   [PostgreSQL](https://www.postgresql.org/)

---

<p align="right"><a href="#readme-top">⬆️</a></p>

<!-- GETTING STARTED -->

## 🚀 Getting Started

Follow these steps to run the project locally.

### 📋 Prerequisites

Ensure you have the following installed on your machine:

-   **Node.js**
-   **Java 17** or **21**
-   **Python 3**
-   **Maven**
-   **Docker** & **Docker Compose**
-   **PostgreSQL** (if not using Docker for DB)
-   **Git**

### 📦 Installation

1. Clone the repository [G Score](https://github.com/Kant2510/g-scores)
    ```bash
    git clone https://github.com/Kant2510/g-scores.git
    cd g-score
    ```
2. (Database Setup) .csv to PostgreSQL
    ```bash
    // First you must cd to database/
    cd database
    pip install requirements.txt
    // If you use Windows, run this command on Git Bash
    sh run.sh
    ```
3. (Backend Setup) Build the backend
    ```bash
    // Make sure you are in backend/ folder
    cd backend
    ./mvnw clean install
    docker-compose up --build
    ```
4. (Frontend Setup) Run the frontend
    ```bash
    // Make sure you are in frontend/ folder
    cd frontend
    yarn install
    yarn start
    ```

---

<p align="right"><a href="#readme-top">⬆️</a></p>

<!-- USAGE EXAMPLES -->

### 📜 Usage

-   Check running containers:
    ```bash
    docker ps
    ```
-   Inspect logs:
    ```bash
    docker logs backend
    ```
-   Try the project:
    ```
    http://localhost:3000/
    ```

---

<p align="right"><a href="#readme-top">⬆️</a></p>

## 📄 API Documentation

1. Score query:

-   Endpoint: https://backend-gscore-latest.onrender.com/api/v1/scores/search
-   Method: POST
-   Request body:
    ```bash
    {
        "registration_number": "12345678"
    }
    ```

2. Score statistic report:

-   Endpoint: https://backend-gscore-latest.onrender.com/api/v1/reports/statistic
-   Method: GET

3. Top 10 group A report:

-   Endpoint: https://backend-gscore-latest.onrender.com/api/v1/reports/top-list
-   Method: GET

---

<p align="right"><a href="#readme-top">⬆️</a></p>

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create.  
Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<p align="right"><a href="#readme-top">⬆️</a></p>

## 📬 Contact

-   Email: [auletuannhat@gmail.com](mailto:auletuannhat@gmail.com)
-   Github: [Kant2510](https://github.com/Kant2510/ielts-learning-backend-system)
-   LinkedIn: [Nhat Au](https://www.linkedin.com/in/nhat-au-73a629283)

---

<p align="right"><a href="#readme-top">⬆️</a></p>

**Happy coding!** 🚀✨
