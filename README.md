# Notes API

A simple RESTful Notes API built with Node.js, Express, TypeScript, and MongoDB.

## Features

- Create a note
- Get all notes
- Get single note by ID
- Update a note
- Delete a note
- MongoDB database connection
- TypeScript support
- Express REST API structure

## Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- Nodemon

## Project Structure

```text
notes-api/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.ts
│
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/notes-api.git
```

Move into project folder:

```bash
cd notes-api
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in root folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

## Run Project

Development mode:

```bash
npm run dev
```

Build TypeScript:

```bash
npm run build
```

Run production build:

```bash
npm start
```

## API Endpoints

### Create Note

```http
POST /api/notes
```

### Get All Notes

```http
GET /api/notes
```

### Get Single Note

```http
GET /api/notes/:id
```

### Update Note

```http
PUT /api/notes/:id
```

### Delete Note

```http
DELETE /api/notes/:id
```

## Example Request Body

```json
{
  "title": "Learn TypeScript",
  "content": "Practice CRUD API project"
}
```

## Author

Created by Ponnuru Sundar Raja
