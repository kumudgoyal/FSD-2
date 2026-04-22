# 🚀 Experiment-16: CI/CD Pipeline Integration with Docker

## 📌 Objective

To create a Continuous Deployment (CD) pipeline using GitHub Actions, build Docker images for frontend and backend, and automatically deploy containers.

---

## 🧠 Overview

This experiment demonstrates:

* CI/CD pipeline using GitHub Actions
* Dockerization of frontend and backend
* Automated build and deployment process

---
## 🐳 Docker Setup

### 🔹 Frontend Dockerfile

```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]
```

---

### 🔹 Backend Dockerfile

```dockerfile
FROM python:3.10
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
CMD ["python", "run.py"]
```

---

## 🔄 GitHub Actions Workflow

File: `.github/workflows/main.yml`

### 🔹 Key Features:

* Install dependencies
* Run tests
* Build Docker images
* Run containers

---

## 🚀 Frontend Pipeline Steps

* Install dependencies
* Build project
* Build Docker image
* Run container on port **5005**

---

## 🚀 Backend Pipeline Steps

* Setup Python (3.10)
* Install dependencies
* Run tests (pytest)
* Build Docker image
* Run container on port **5000**

---

## 🧪 Commands Used

### Docker Commands

```bash
docker build -t frontend-app .
docker run -d -p 5005:4173 frontend-app

docker build -t backend-app .
docker run -d -p 5000:5000 backend-app
```

---

## 📊 Result

* CI/CD pipeline successfully created
* Frontend and backend Dockerized
* Automated deployment using GitHub Actions
* All pipeline steps executed successfully

---

## 🌟 Conclusion

This experiment helped in understanding:

* Real-world CI/CD workflows
* Docker containerization
* Automated deployment pipelines

---

## 🔗 Repository Link

👉 https://github.com/kumudgoyal/FSD-2

---

## 🙌 Author

**Kumud Goyal**
