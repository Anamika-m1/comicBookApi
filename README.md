# Comic Book Store Backend

This is a Node.js backend application for managing a comic book store inventory. It provides RESTful API endpoints for creating, reading, updating, and deleting comic book entries.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Running the Application](#running-the-application)
5. [API Routes](#api-routes)
6. [Testing with Postman](#testing-with-postman)

## Prerequisites
Before we begin, ensure we have the following installed:
- Node.js (v22)
- npm (usually comes with Node.js)
- MongoDB (v4 or later)

## Installation
1. Clone the repository: git clone https://github.com/my-username/comic-book-store-backend.git
2. Navigate to the project directory: cd comicBook
3. Install the dependencies: 
   npm install,
   npm i --save-dev @types/cors,
   npm i --save-dev @types/express,
   npm install mongoose dotenv,
   npm install --save-dev nodemon 
 
## Configuration
1. Create a `.env` file in the root directory of the project.
2. Add the following environment variables to the `.env` file: 
  PORT=5001
  CONNECTION_STRING=mongodb+srv://your_username: your_password@your_cluster.mongodb.net/your_database

## Running the Application
1. Start the server:  npm run dev
2. The server should now be running on `http://localhost:5001` (or the port you specified in the .env file).

## API Routes

### Comic Books

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/comic-books | Create a new comic book |
| GET | /api/comic-books | Get all comic books (with pagination, sorting, and filtering) |
| GET | /api/comic-books/:id | Get a single comic book by ID |
| PUT | /api/comic-books/:id | Update a comic book |
| DELETE | /api/comic-books/:id | Delete a comic book |
| GET | /api/comic-books/search | Search for comic books |

### Detailed Route Information

#### Create a Comic Book
- **POST** `/api/comic-books`
- Body:
  ```json
  {
 "bookName": "Spider-Man: No Way Home",
 "authorName": "Preeti Chhibber",
 "yearOfPublication": 2021,
 "price": 19.99,
 "discount": 0,
 "numberOfPages": 112,
 "condition": "new",
 "description": "An exciting junior novel based on the new Spider-Man movie!"
  }

#### Get All Comic Books
GET /api/comic-books
Query Parameters:
page: Page number (default: 1)
limit: Number of items per page (default: 10)
sort: Sort field and order (e.g., price:desc)
Any field name can be used as a filter (e.g., authorName=Stan Lee)

#### Get a Single Comic Book
GET /api/comic-books/:id
Replace :id with the comic book's ID

#### Update a Comic Book
PUT /api/comic-books/:id
Replace :id with the comic book's ID
Body: Include any fields you want to update

#### Delete a Comic Book
DELETE /api/comic-books/:id
Replace :id with the comic book's ID

#### Search Comic Books
GET /api/comic-books/search
Query Parameters:
query: Search term






