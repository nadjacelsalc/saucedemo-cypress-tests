## README.md

# SauceDemo Cypress Automation Portfolio

This repository showcases a **QA Automation portfolio project** built with **Cypress** for the SauceDemo web application ([https://www.saucedemo.com](https://www.saucedemo.com)).

The project demonstrates test design, negative testing, Page Object Model implementation, and structured reporting skills. 

---

## 🎯 Project Goals

* Demonstrate hands-on experience with Cypress UI automation
* Apply Page Object Model (POM) for maintainable test architecture
* Cover critical user flows with positive and negative test cases
* Showcase understanding of QA processes, test planning, and reporting

---

## 🔧 Tech Stack

* **Cypress** – UI automation framework
* **JavaScript (ES6)**
* **Node.js**
* **Mochawesome** – test reporting
* **Page Object Model (POM)** design pattern

---

## 📂 Project Structure

```
cypress/
 ├── e2e/            # Test specifications by feature
 │   ├── login.cy.js
 │   ├── products.cy.js
 │   ├── cart.cy.js
 │   ├── checkout.cy.js
 │   └── menu.cy.js
 ├── pages/          # Page Object files
 │   ├── loginPage.js
 │   ├── productsPage.js
 │   ├── cartPage.js
 │   ├── checkoutonePage.js
 │   ├── checkouttwoPage.js
 │   └── menuPages.js
 ├── results/        # Mochawesome reports
 └── support/
```

---

## ▶️ How to Run the Tests

```bash
npm install
npx cypress open   # interactive mode
npx cypress run    # headless mode
```

---

## 👤 Test Accounts

The project uses built-in SauceDemo test users to validate different scenarios:

* `standard_user` – happy path scenarios
* `problem_user` – UI and data issues
* `performance_glitch_user` – performance-related behavior
* `locked_out_user` – authentication error handling

Password: `secret_sauce`

---

## 🧪 Test Coverage Overview

### Authentication

* Successful and unsuccessful login
* Logout validation

### Products

* Product list loading
* Sorting (A–Z, Z–A)
* Add / remove items from cart
* Negative scenarios for problematic users

### Cart

* Cart content validation
* Remove items
* Navigation to checkout

### Checkout

* Step One form validation
* Checkout overview
* Successful order completion
* Reset state impact on checkout flow

### Menu

* Menu open/close
* Navigation via menu options
* Reset App State behavior
* Negative menu availability scenarios

---

## 📊 Reporting & Debugging

* Mochawesome JSON reports generated after execution
* Automatic screenshots on test failure
* Clear test naming and traceable test cases

---

## 🧠 QA Skills Demonstrated

* Test case design & prioritization
* Negative and edge case testing
* Page Object Model implementation
* Debugging and root cause analysis
* Clean, readable, and maintainable automation code

---

## 👩‍💻 Author

**Nadja Čelik-Salčinović**
QA Automation Portfolio Project
