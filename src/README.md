 # 🚀 Online leetCode Judge Backend 

## 📌 Project Summary

This project is a backend system for an online coding platform similar to LeetCode. It allows users to write, run, and submit code in multiple programming languages. The backend handles code execution, test case evaluation, user authentication, and submission management.

The system is built using Node.js, Express.js, and MongoDB, with secure APIs for handling coding problems and user submissions. It is designed to simulate real-world online judge platforms by providing verdicts such as Accepted, Wrong Answer, Runtime Error, and Time Limit Exceeded.

The project focuses on backend architecture, REST API development, database management, authentication, and secure code execution.  

## ✨ Features

- Users can create an account and login securely
- Users can solve coding problems online
- Code can be written and executed directly in the editor
- Supports multiple programming languages
- Users can test their code before submitting
- Backend checks outputs with test cases automatically
- Shows results like:
  - ✅ Accepted
  - ❌ Wrong Answer
  - ⏰ Time Limit Exceeded
  - ⚠️ Runtime Error
- Stores user submissions and coding history
- Admin can add and manage coding problems
- Secure API system with authentication
- Fast response using optimized backend logic
- Proper error handling and validation

- ## 🛠️ Tech Stack Used

| Technology | |
|------------|----------------------|
| Node.js : JavaScript runtime used to build the backend server |
| Express.js : Framework for creating APIs and handling routes |
| MongoDB : NoSQL database used to store users, problems, and submissions |
| Mongoose : Helps interact with MongoDB using schemas and models |
| JWT : Used for secure user authentication using tokens |
| bcrypt : Encrypts user passwords for security |
| Judge0 API / Docker : Executes user code safely in different programming languages |
| Postman : Used for testing backend APIs |
| Git : Version control system for tracking code changes |
| GitHub : Platform to store and manage project source code |

## 📊 API Flow Diagram

```text
        ┌─────────────────┐
        │    Frontend     │
        │  (React / UI)   │
        └────────┬────────┘
                 │
                 │ API Request
                 ▼
        ┌─────────────────┐
        │   Express API   │
        │  Node.js Server │
        └────────┬────────┘
                 │
     ┌───────────┼───────────┐
     │                       │
     ▼                       ▼
┌─────────────┐      ┌────────────────┐
│ Authentication │    │ Problem Routes │
│ JWT / bcrypt  │    │ CRUD Operations │
└──────┬────────┘    └────────┬───────┘
       │                      │
       ▼                      ▼
┌────────────────────────────────────┐
│            MongoDB Database        │
│ Users • Problems • Submissions     │
└────────────────────────────────────┘
                 │
                 ▼
      ┌────────────────────┐
      │  Code Execution    │
      │ Judge0 API/Docker  │
      └─────────┬──────────┘
                │
                ▼
      ┌────────────────────┐
      │ Test Case Checking │
      │ Compare Outputs    │
      └─────────┬──────────┘
                │
                ▼
      ┌────────────────────┐
      │ Verdict Response   │
      │ Accepted /REJECTED |
      └────────────────────





## 🚀 How to Run the Project

1.git clone https://github.com/yourusername/project-name.git
2.cd project-name
3. npm init -y
4.nmp i express, mongoose,jsonwebtoken,dotenv,validator,bycrypt.
5. nodemon ./src/index.js


