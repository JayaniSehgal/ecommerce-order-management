# EcommerceManagementApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

#### Story

Develop an e-commerce order management system for a company selling various products. The system should
enable customers to place orders, track their orders, and manage their account information.

## Story Flow

#### **1. Project Setup (10 Marks)**

● Create a project folder structure with necessary files.
● Implement core Angular functionalities.
● Add firebase and link with database/firestore

#### **2. Authentication & Authorization (15 Marks)**

● Implement user registration and login (Email and password based login)
● Redirect new users having no profile info to profile page to complete their profile first.
● Allow customers to create and manage their accounts (Profile page: Name, email, phone, address, pin
code).
● All inputs in all forms and fields must have validation for length and pattern.

#### **3. UI (15 Marks)**

● Design a user-friendly and minimalist UI with product catalog, shopping cart, checkout, and order tracking pages. Avoid using fancy colours or designs to save time. If you get time you can design whatever time permits.
● Login page. Same for admin and user. Default role will remain as a user while signing up. Manually update role for admin from first user onboarding or edit from firebase DB.
● Home page (only logged in user can access),
● Cart (user based products),
● Orders page (Orders placed by user with name, date, time, price, status ), use a image from internet as
placeholder. Same image can be used at all places.
● Implement data binding and routing for navigation.
● Admin can login and land to an inventory page that will be the same as the user dashboard.
● Admin can add or reduce product quantity.
● Product card will have a quantity section in bottom with add and subtract button with quantity in middle
Example: | + | 2 | - |. This can be used for both admin and user but it will have different functionality. Users use it to add product quantity to cart and admin use it to update the inventory.

#### **4. Problem Solving : Order and inventory management (15 Marks)**

● Process orders and update inventory levels.
● Manage customer orders, including tracking and status updates (Placed, Processing, On the way,
Delivered).
● All product inventory has to be on firebase
● Quantity has to be in sync, if 2 users are placing orders at the same time. Quantity has to reduce on
order placing.
● Orders can be placed without payment integration but we have to show the order summary in the cart.
● Manager/ Admin can see the order details (Item list with price, total price, user info ) and update the
status. Dropdown can be used.

#### **5. Coding Standards (10 Marks)**

● Use services, promises, observables, and other Angular functionalities.
● Implement data filtering, mapping, and error handling.
● Appropriate use of browser storage based on requirement
● Optimize the application for speed and efficiency.
● Use lazy loading and caching techniques to improve performance.

#### **6. Angular & TypeScript Concepts (15 Marks)**

● Follow Angular coding standards and best practices as mentioned on Osmosys github
● Ensure code modularity, reusability, and clean formatting.

#### **7. Deployment & Submission (15 Marks)**

● At Least 1 Commit each hour
● Complete code and feature
● Deploy the application on Firebase Hosting.
● Submit the deployed URL and GitHub repository link before the deadline (Today 7PM).
● Share at least 3 user credentials that can be tested on deployed app.(1 admin and 2 user)
Note: All other rules are same as the previous exam
