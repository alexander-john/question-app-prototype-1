# Question App

This is a full-stack application that allows users to answer random programming questions. The app consists of a **React frontend** and a **Node.js/Express backend** with a **MongoDB database**.

## Features

- **Frontend**:
  - Built with React and styled using CSS.
  - Fetches random questions from the backend.
  - Allows users to submit their answers.

- **Backend**:
  - Built with Node.js and Express.
  - Provides an API to fetch random questions from the MongoDB database.
  - Uses Mongoose for database interaction.

- **Database**:
  - MongoDB is used to store programming questions.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Project Structure

```
question-app/
├── backend/               # Backend code
│   ├── models/            # Mongoose models
│   │   └── Question.js    # Question schema
│   ├── scripts/           # Utility scripts
│   │   └── seed.js        # Script to seed the database
│   ├── server.js          # Main server file
│   └── .env               # Environment variables (not tracked by Git)
├── question-app/          # Frontend code
│   ├── src/               # React source files
│   │   ├── App.jsx        # Main React component
│   │   ├── App.css        # Styles for the app
│   └── public/            # Static assets
├── README.md              # Project documentation
└── package.json           # Project dependencies and scripts
```

## Getting Started

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the following:
   ```plaintext
   MONGO_URI=<your-mongodb-connection-string>
   PORT=5000
   ```

4. Seed the database with sample questions:
   ```bash
   node scripts/seed.js
   ```

5. Start the backend server:
   ```bash
   npm start
   ```

The backend will run on [http://localhost:5000](http://localhost:5000).

### Frontend Setup

1. Navigate to the `question-app` directory:
   ```bash
   cd question-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The frontend will run on [http://localhost:3000](http://localhost:3000).

## API Endpoints

### GET /question
- **Description**: Fetches a random question from the database.
- **Response**:
  ```json
  {
    "_id": "1234567890abcdef",
    "text": "Write a function that reverses a string."
  }
  ```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

## License

This project is licensed under the [MIT License](LICENSE).