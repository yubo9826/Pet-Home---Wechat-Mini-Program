# PetHome

![](media/image1.jpeg)

> A comprehensive WeChat mini-program service platform for pet owners and potential pet owners

## Project Introduction

PetHome is a pet service platform based on a WeChat mini-program, offering one-stop services including pet adoption, purchase of pet supplies, pet grooming, medical care, and boarding. It aims to help users access pet-related services more conveniently and provide a warm home for stray animals at the same time.

## Table of Contents

- [Project Introduction](#project-introduction)
- [Functional Features](#functional-features)
- [Technology Stack](#technology-stack)
- [Installation and Operation](#installation-and-operation)
- [Project Structure](#project-structure)
- [Special Features](#special-features)
- [Shortcomings and Improvement Plans](#shortcomings-and-improvement-plans)
- [Course Reflections](#course-reflections)
- [Developer](#developer)
- [License](#license)

## Functional Features

### 🐾 Pet Browsing and Adoption
- Browse information of pets to be adopted (photos, age, personality, etc.)
- Supports filtering and search functions

![Introduction to Pets](Work%20demonstration%20picture/Introduction%20to%20Pets.png)

### 📅 Service Reservation
- Make online appointments for pet grooming, medical care, boarding, training and other services
- View service details and user reviews

![Pet Grooming Service](Work%20demonstration%20picture/Pet%20grooming%20service.png)
![Pet Medical Services](Work%20demonstration%20picture/Pet%20medical%20services.png)
![Pet Boarding Service](Work%20demonstration%20picture/Pet%20boarding%20service.png)

### 🛒 Pet Supplies Mall
- Purchase pet food, supplies and other goods
- Shopping cart and order management

### ❤️ Personalized Recommendations
- Recommend pets and services based on users' browsing history and preferences

### 👥 Community Interaction
- Users can share their pet-keeping experiences and ask questions for communication
- Professional pet doctors and trainers are online to answer your questions

![Popular Activities](Work%20demonstration%20picture/Popular%20activities.png)

### 👤 User Center
- Personal information management
- Order and reservation record viewing
- Functions such as logging out

![User Settings](Work%20demonstration%20picture/User%20Settings%20for%20mini-programs.png)

## Technology Stack

### Front-end
- **Framework**: uni-app + Vue.js
- **Style**: SCSS
- **Layout**: Flex layout
- **Components**: Custom components + uni-ui component library

### Function Implementation
- `swiper` implements carousel images
- `scroll-view` implements pull-down refreshing and pull-up loading
- Responsive interface design

## Project Screenshot

| Main Page | Mini-program Functions | Back-end Management |
|-----------|------------------------|---------------------|
| ![Main Page](Work%20demonstration%20picture/Main%20page.png) | ![Mini-program Functions](Work%20demonstration%20picture/Mini-program%20function.png) | ![Back-end Management](Work%20demonstration%20picture/Mini%20Program%20Backend.png) |

## Installation and Operation

```bash
# Cloning Project
git clone https://github.com/your-username/pet-home.git

# Install Dependencies
npm install

# Run to the WeChat Developer Tools
npm run dev:mp-weixin
```

## Project Structure

```
src/
├── components/     # Public components
├── pages/         # Page files
├── static/        # Static resources
├── styles/        # Style file
├── utils/         # Utility functions
└── App.vue        # Root component
```

## Special Features

- ✅ Modern UI design, excellent user experience
- ✅ Responsive layout, compatible with multiple screens
- ✅ Pull down to refresh, pull up to load more
- ✅ Carousel automatically plays
- ✅ Clear classification, convenient navigation

## Shortcomings and Improvement Plans

Currently, the project still has the following points that can be optimized:

- ❌ No backend support, data is local simulation
- ❌ Weak user interaction functions (such as commenting, liking, sharing)
- ❌ Lack of data persistence and user system
- ❌ Performance and compatibility await further testing

**Future plans:**
- Develop a backend management system
- Add user authentication and data encryption
- Introduce cloud development or build your own server
- Optimize performance and user experience

## Course Reflections

This project is the final work of the "Mobile Internet Application Development" course. Through this development practice, I have deeply studied WeChat Mini Program development, Vue.js framework, responsive design and front-end engineering, etc., and improved my project construction and problem-solving abilities.

## Developer

- **Name**: Yu Bo
- **Direction**: Mobile Internet Application Development

## License

This project is only for learning and exchange purposes and has not yet selected an open-source license. For commercial use, please contact the author.

