# 📌 Features
- REST API
- User Authentication (Login/Signup)
- JSON Data Handling
- Error Handling
- MongoDB Database Connection

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (Authentication)


BACKEND DEVELOPENT NOTES
1.What is server ?
A server is a system or program that listens to client requests, processes them, and sends back a response over a network.

What is a Package?
A package is a ready-made code/library that you can use in your project.
npm is a tool used to install and manage packages in Node.js projects.
Package is stored in the node modules folder of our system.
package.json is a file that contains project details and manages dependencies .
package-lock.json stores the exact versions of dependencies to ensure consistent installation

2. Creating and starting server using express.js.
1.npm init -y is used to quickly generate a package.json file with default values.
2. npm install express

In Express:
•	req (request) → data coming from client 
•	res (response) → data you send back to client
What is API ?
It is a way for client and server to communicate.
REST API ?
REST (Representational State Transfer): The most popular web architecture. It uses standard HTTP methods (GET, POST, PUT, DELETE) and is known for being lightweight and scalable.
GET: To fetch data from server
POST: To send data to server
PATCH: When data already on server and we want to update that data
DELETE: to delete data on server
✅ What is Status Code?
👉 Status code is a number sent by server to tell request success or error
📌 Common Status Codes:
•	200 → Success ✅ 
•	201 → Created ✅ 
•	400 → Bad request ❌ 
•	401 → Unauthorized ❌ 
•	404 → Not found ❌ 
•	500 → Server error ❌
Creating notes API and testing with POSTMAN
1.Src (app.js) // create server
Const express = require(“express”)
Const app=express()
module.exports = app
2. server.js // start the server
Const app=require(./src/app)
app.listen(3000,() =>{
console.log(“Server is running on port 3000”)
})
3. Now go to app.js perform some http operations.
app.use(express.json()); // middleware to parse json data
Const notes =[ ]   // creates empty array to       store multiple values
1.app.post(‘notes/’,(req,res)=>{
notes.push(req.body)
res.status(201).json({message:})
})
// req.body to get data sent by client
2. app.get(‘notes/’,()req,res=>{
res.status(200).json({}message:)
})
3.app.delete("/notes/:index", (req, res) => {
const index=(req.params.index); // to get value from url parameter
delete notes = [index]
});
4. app.patch("/notes/:index", (req, res) => {
const index=(req.params.index); // to get value from url parameter


. What is REST API ?
•	RESTful APIs follow client-server architecture, are stateless, use proper HTTP methods, operate on resource-based URLs, maintain a uniform interface, typically use JSON for data exchange, support layered systems, and allow caching for performance optimization.”.
    
H. What is Authentication ?
•	“Authentication is the process of verifying a user’s identity(suc as person is genuine or not), typically using credentials like passwords or tokens such as JWT.”
•	Client → Route → Middleware (auth check) → Controller → Response
•	JWT, session, and OAuth are three authentication methods. JWT is token-based and stateless, sessions store user data on the server, and OAuth allows authentication via third-party providers like Google. The choice depends on scalability and use case.”

G.What is Authorization?
•	Authorization determines what an authenticated user is allowed to access or perform in the system.
•	Authentication verifies identity, while authorization determines permissions after authentication.
•	I implement authorization using middleware where I check user roles or permissions (e.g., admin/user) before allowing access to protected routes.

