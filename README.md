This README is also available in Portuguese: [Leia em Português](README.pt-BR.md)

# TaskFlow – Task Management System

TaskFlow is a web application built with Django to help users manage their daily tasks in an organized and secure way.  
The project was designed to simulate a real-world task management system, focusing on clean architecture, authentication, and core backend concepts.

---

## Project Overview

TaskFlow allows users to create, organize, and track tasks while ensuring that each user has access only to their own data.  
The application focuses on simplicity, usability, and maintainable code, following Django best practices.

This project was developed as a portfolio application to demonstrate backend and web development skills using Django.

---

## Features

- User registration and authentication
- Secure login and logout
- Create, update, and delete tasks
- Task status control:
  - Pending
  - In Progress
  - Completed
- Task due dates
- Filter tasks by status
- Access restriction: users can only view and manage their own tasks

---

## Technologies Used

- Python 3
- Django
- Django Templates
- HTML5
- CSS3
- SQLite (development)
- PostgreSQL (production)
- Git & GitHub

---

## Project Architecture

The application follows Django’s **MVT (Model-View-Template)** architecture:

- **Models**: responsible for data structure and database rules
- **Views**: handle application logic and request flow
- **Templates**: manage the user interface rendering

The project is organized into separate apps to improve readability, scalability, and maintainability.

---
