# AI Text Classification API

## Project Overview

This project is a REST API that classifies text into different categories using Google's Gemini AI model.

The API accepts text as input and returns its predicted category along with a confidence score.

## Technologies Used

- Node.js
- JavaScript (ES Modules)
- Express.js
- Google Gemini API
- Postman

## Project Structure

The project is organized into three main folders inside `src`:

- `controllers` – Handles incoming requests and sends responses.
- `routes` – Defines the API endpoint.
- `services` – Handles text classification using the Gemini API.

The main application file is `src/app.js`. It sets up Express and registers the routes.

Configuration files such as `.env`, `.env.example`, `.gitignore`, and `package.json` are maintained in the project root.

## Classification Categories

The API classifies text into one of the following four categories:

1. **Complaint:** Text expressing dissatisfaction or reporting a problem.
2. **Query:** Text asking a question or requesting information.
3. **Feedback:** Text sharing an opinion, suggestion, appreciation, or evaluation.
4. **Other:** General statements, observations, greetings, or text that does not fit the other categories.

## Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project folder

```bash
cd AI-Text-Classification
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory.

Add the following:

```env
PORT=3000
GEMINI_API_KEY=your_gemini_api_key
```

Replace `your_gemini_api_key` with your Google Gemini API key.

### 5. Environment Example

An `.env.example` file is included in the project to show the required environment variables.

Copy `.env.example` to `.env` and add your Gemini API key.

Example `.env.example`:

```env
PORT=3000
GEMINI_API_KEY=
```

### 6. Start the application

Development mode:

```bash
npm run dev
```

Or:

```bash
npm start
```

The server will run at:

`http://localhost:3000`

## API Documentation

### Classify Text

**Endpoint:** `/api/classify`

**Method:** POST

**Content-Type:** `application/json`

### Request Body

```json
{
    "text": "My order arrived broken and customer support is not helping me."
}
```

### Successful Response

**Status Code:** `200 OK`

```json
{
    "status": 200,
    "message": "Text classified successfully",
    "data": {
        "category": "Complaint",
        "confidence": 0.99
    }
}
```

### Validation Error

If the text is missing, empty, or not a valid string:

**Status Code:** `400 Bad Request`

```json
{
    "status": 400,
    "message": "Valid text string is required"
}
```

### Server Error

If an unexpected error occurs:

**Status Code:** `500 Internal Server Error`

```json
{
    "status": 500,
    "message": "Internal Server Error"
}
```

## How AI Is Used

The application uses Google's Gemini API for text classification.

The input text is sent to the Gemini model along with instructions describing the four classification categories.

The model returns a JSON response containing the predicted category and its confidence score. The service parses this response and sends the result back through the API.

The confidence score is the model's estimated confidence in its classification.

## Testing

The API was tested using Postman with different text inputs covering all four classification categories.