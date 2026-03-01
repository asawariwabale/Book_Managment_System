# Book_Managment_System

Book Management System is a full-stack web application that helps users efficiently manage book records and related information.
The system provides a secure backend using **Spring Boot** and **MySQL**, along with a responsive and modern frontend built using **React**, **JavaScript**, and **Bootstrap**.
This project demonstrates full-stack development skills including REST API creation, database integration, CRUD operations, and responsive UI design.

---
## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Screenshots](#Screenshots)

## Features

- **Book Management**
   - Add new books
   - Update book details
   - Delete books
   - View all books
 
- **User Authentication**

     Register and log in to access the system securely.

- **User Profile**
   - View account details
   - Manage personal information
   - Secure user-specific data access

- **Dashboard**
   - View all book records
   - Manage book data easily

- **Protected Endpoints**

     All backend APIs are secured. Each user can only access authorized data.

- **Responsive UI**

   - Built with React.js + Bootstrap
   - Fully responsive for desktop and mobile devices
   - Clean and user-friendly interface
 
## Tech Stack

🔹 **Backend**
   - [Java](https://www.oracle.com/java/)
   - [SpringBoot](https://spring.io/projects/spring-boot)
   - [Spring Data JPA](https://spring.io/projects/spring-data-jpa)
   - [Spring Security](https://spring.io/projects/spring-security) 
   - [Hibernate](https://hibernate.org/)
   - [Maven](https://maven.apache.org/)

🔹 **Frontend**
   - [React.js](https://reactjs.org/)
   - [React Rounter](https://reactrouter.com/)
   - [Boostrap](https://getbootstrap.com/)
   - [Axios](https://axios-http.com/)

 🔹 **Database**
   - [MySQL](https://www.mysql.com/) 

 ## Project Structure

 ```plaintext
Book-Management-System
│
├── backend (Spring Boot)
│   ├── controller
│   ├── service
│   ├── repository
│   ├── model
│   └── config
│
├── frontend (React)
│   ├── components
│   ├── pages
│   ├── services
│
└── README.md

```
## Installation

   ## 1.Clone the Repository
  ```bash
      git clone https://github.com/your-username/Book-Management-System.git cd Book-Management-System
  ```
  🔹 **Backend Setup (Spring Boot)**

  ## 2.Open in Eclipse
    
     - File → Import → Existing Maven Project
     - Select backend folder
   ## 3.Configure Database

```properties
spring.application.name=BookManagementSystem

server.port=8081
spring.datasource.url=jdbc:mysql://localhost:3307/book
spring.datasource.username=root
spring.datasource.password=root@123

spring.jpa.open-in-view=false
spring.jpa.hibernate.ddl-auto=update
```
## 4. Run Backend
Run:
```code
   BookManagementApplication.java
```
Backend runs on:

```Code
    http://localhost:8081
```
🔹 **Frontend Setup (React)**

## 5. Install Dependencies

```Bash
    cd frontend
    npm install
```

## 6. Start Frontend

```Bash
    npm start
```

Frontend runs on:

```Code
   http://localhost:3000
```

## Usage

### 1. Start the Backend
From the `backend` directory:

```bash
mvn spring-boot:run
```

- By default, runs on http://localhost:8081`

### Using Eclipse IDE

 1.Open the project in Eclipse

 2.Right-click on

```
BookManagmentSystemApplication.java
```
 3. Click:

   **Run As → Spring Boot App**

 Backend will start on:
 
 ```Code
     http://localhost:8081
 ```

### 2. Start the Frontend

Open a new terminal in the `frontend` directory:

```bash
npm start
```
- By default, runs on `http://localhost:3000`

 ### 3. Access the Application
  Open your browser at `http://localhost:3000`. You can sign up for a new account or log in if  you already have one.


  
