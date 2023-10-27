# AdoptifyMe Client 🐱

<p align="center"><img src="public\homepage.png" a alt='homepage-image' width='600px' heigh='600px'></p>

**Welcome to the AdoptifyMe frontend repository for this project!**
<p align="justify"> AdoptifyMe is a web platform designed to simplify the process of pet adoption from shelters and connecting users with their future furry companions. Not only can you adopt pets from registered stores, but if you come across a stray animal, you can also add it to the database for another user to adopt. To ensure the perfect match, potential pet owners must complete a brief owner questionnaire before finalizing the adoption. AdoptifyMe makes pet adoption easy, convenient, and tailored to suit the needs and preferences of both pets and their future owners.<p/>

## Project Overview

AdoptifyMe's frontend is built using React, and it provides a user-friendly interface to explore pets available for adoption, create user profiles, and more.

For the Backend code, please visit the AdoptifyMe serverrepository.

[![Backend Repository](https://img.shields.io/badge/Backend-Repository-brightgreen.svg)](https://github.com/MariaG6/AdoptifyMe-server)

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Custom Components](#custom-components)
- [Context Providers](#context-providers)
- [Services](#services)
- [Contribution](#contribution)
- [Deployment](#deployment) 🚀
- [Authors](#authors)

## Features

- **Pet Adoption Profiles**: Create and customize your own user profile to help shelters and other users get to know you.

- **Search and Explore**: Easily search and browse pets available for adoption from various sources, including registered stores and other users.

- **Adopt a Pet**: Initiate the adoption process by selecting a pet, filling out a questionnaire to ensure compatibility, and making arrangements for the adoption.

- **Stray Pets Inclusion**: If you find a stray animal, you can add it to our database to give it the chance to find a new loving home.

- **Communication**: Connect with pet shops, shelters, and other users to discuss adoption details and ask questions.

- **Shop Owner Features**: Shop owners have the capability to view adoption applications from other users interested in adopting their pets. They can review and accept or reject user applications based on the provided questionnaires.

- **Admin Dashboard**: Administrators have the ability to view and manage all user profiles, pet listings, and shop information. They can also remove unwanted listings and users as needed.

- **Error Handling**: Our platform is designed to provide smooth user experiences, with error handling to ensure issues are addressed effectively.

## Project Structure

- `public/`: Contains static assets and the main HTML file.
- `src/`: Contains the React application source code.
  - `api/`: Handles API calls and interactions with the backend.
  - `assets/images/`: Contains images used in the application.
  - `components/`: Custom React components used throughout the app.
  - `context/`: Manages global state and context providers.
  - `pages/`: Represents the different pages and views in the application.
  - `services/`: Provides service functions and utilities.
  - `utils/`: Includes utility functions and helpers.
- `App.js`: The main entry point of the application.
- `index.js`: Renders the application into the DOM.
- `App.css`, `index.css`: Styling files.
- `package.json`, `package-lock.json`: Manage project dependencies.

## Installation

To set up and run the AdoptifyMe frontend locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/MariaG6/AdoptifyMe-client.git
   ```

2. Navigate to the project directory:

   ```bash
   cd AdoptifyMe-client
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run start
   ```

The frontend will be accessible in your web browser at `http://localhost:3000`.

## Custom Components

The `components/` directory contains custom React components that are used to build the user interface and interactive elements of the application.

## Context Providers

The `context/` directory manages global state and context providers for the application, ensuring data can be shared across components.

## Services

The `services/` directory provides service functions and utility scripts, such as handling API requests.

## Contribution

If you wish to contribute to this project, please follow these steps:

1. Fork the repository.

2. Create a new branch for your contribution:

   ```bash
   git checkout -b my-contribution
   ```

3. Make your changes, document new features, and ensure the application is working correctly.

4. Submit a Pull Request with your changes.

## Deployment

👉 [AdoptifyMe](https://adoptifyme.netlify.app/) 

## Authors

[Franklin](https://github.com/franklinosei) & [María](https://github.com/MariaG6)

<p align="center"> Thank you for using and contributing to the AdoptifyMe Repository! 👋 <p/>
