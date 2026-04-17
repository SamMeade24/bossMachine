# Boss Machine API

## Overview

This project is a RESTful API built with Express.js as part of the Codecademy Full-Stack Developer path.

The API powers a fictional "Boss Machine" app used to manage:
- Minions
- Million-dollar ideas
- Meetings

It supports full CRUD operations and includes custom middleware for validation.

---

## Features

- Full CRUD routes for:
  - /api/minions
  - /api/ideas
  - /api/meetings
- Custom middleware:
  - checkMillionDollarIdea to validate idea profitability
- In-memory database using helper functions
- RESTful routing structure

---

## Tech Stack

- Node.js
- Express.js
- JavaScript

---

## Getting Started

Install dependencies and start the server:

`npm install`
`npm run start`

Server runs on:

http://localhost:4001/api

---

## Testing

Run the test suite:

`npm run test`

---

## Notes

This project focuses on backend API development, routing, and middleware.