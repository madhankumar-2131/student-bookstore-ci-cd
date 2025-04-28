# Student Bookstore CI/CD

This project is a simple student bookstore application that integrates continuous integration and deployment (CI/CD) using GitHub Actions, and deploys to Netlify. Every time code is pushed to the `main` branch, the project is automatically built, tested, and deployed to Netlify.

## Features

- CI/CD pipeline with GitHub Actions.
- Automated deployment to Netlify.
- Node.js and npm-based project setup.
- Tests for the project are run during the pipeline.

## Prerequisites

Before running the project, you need to have the following:

- [Node.js](https://nodejs.org/) installed (version 16 or higher).
- [Netlify Account](https://www.netlify.com/) for deployment.
- [GitHub Account](https://github.com/) to host the code and configure GitHub Actions.

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/student-bookstore-ci-cd.git
cd student-bookstore-ci-cd
