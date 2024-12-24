# CRUD Operations Project

This project is built using the MERN stack (MongoDB, Express, React, and Node.js). It performs CRUD (Create, Read, Update, Delete) operations efficiently, offering a robust example of a full-stack application.

---

## Project Structure

- **Frontend Folder**: Contains all the React-related code for the user interface.
- **Backend Folder**: Contains all the Node.js and Express code for server-side operations.

---

## Prerequisites

Ensure you have the following installed on your system:

- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB (either locally or through MongoDB Atlas)

---

## Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install Dependencies**:
   - Navigate to the `Frontend` folder and install dependencies:
     ```bash
     cd Frontend
     npm install
     ```
   - Navigate to the `Backend` folder and install dependencies:
     ```bash
     cd ../Backend
     npm install
     ```

3. **Set Up Environment Variables**:
   - In the `Backend` folder, create a `.env` file and add the following:
     ```env
     MONGO_URL=<Your MongoDB Connection URL>
     PORT=3000
     ```

---

## Running the Application

1. **Start the Backend**:
   - Navigate to the `Backend` folder:
     ```bash
     cd Backend
     npm i
     nodemon index.js
     ```
   - The backend will run on `http://localhost:3000` by default.

2. **Start the Frontend**:
   - Navigate to the `Frontend` folder:
     ```bash
     cd ../Frontend
     npm run dev
     ```
   - The frontend will run on `http://localhost:5173` by default.

---

## Features

- **Create**: Add new data to the database.
- **Read**: Fetch and display data from the database.
- **Update**: Edit existing data.
- **Delete**: Remove data from the database.

---

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

---

## File Structure

```
|-- Frontend
|   |-- public
|   |-- src
|       |-- components
|       |-- App.jsx
|       |-- index.css
|       |-- main.jsx
|
|-- Backend
|   |-- models
|   |-- routes
|   |-- controllers
|   |-- index.js
|-- README.md
```

---

## Author

- **Abhishek Yadav**

Feel free to contribute to this project or reach out for any questions!
