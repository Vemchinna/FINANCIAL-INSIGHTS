# 💰 Financial Insights

> **Making Finance Simple, Transparent & Accessible for Everyone**

Financial Insights is a full-stack web application designed to simplify complex financial decisions through interactive calculators, financial education, loan assistance, and personalized bank suggestions.

The platform helps users understand and estimate financial commitments related to **EMIs, education loans, insurance, gold loans, and other borrowing decisions** through a simple and interactive interface.

---

## 🚀 Features

### 📊 Financial Calculators

Financial Insights provides multiple interactive financial tools:

* **EMI Calculator**

  * Calculates monthly EMI
  * Principal amount
  * Total interest
  * Total repayment
  * Visual principal-vs-interest breakdown

* **Education Loan Calculator**

  * Calculates education-loan EMI
  * Accounts for moratorium-period interest
  * Estimates total interest
  * Calculates total repayment
  * Provides visual repayment analysis

* **Gold Loan Calculator**

  * Calculates gold value based on:

    * Weight
    * Purity
    * Gold rate
  * Estimates eligible loan amount
  * Uses a 75% loan-to-value calculation
  * Displays a visual value breakdown

* **Insurance Calculator**

  * Calculates total premiums
  * Coverage-to-premium ratio
  * Cost of coverage
  * Visual comparison of coverage and premiums

---

### 🏦 Bank Suggestion System

The application includes a rule-based bank recommendation system.

Users provide:

* Required loan amount
* Affordable monthly EMI
* Collateral type
* Collateral value

The system filters available banks based on:

* Minimum and maximum loan amount
* Accepted collateral
* Collateral value
* Interest rate
* Maximum repayment tenure

It then displays:

* Interest rate
* Loan amount
* Estimated EMI
* Tenure
* Total interest
* Total payment
* Processing fee
* Prepayment charges
* Special features

The currently configured bank dataset includes:

* State Bank of India
* HDFC Bank
* ICICI Bank
* Axis Bank
* Punjab National Bank
* Bank of Baroda

> **Note:** Bank information is currently maintained as static application data and is not fetched from live banking APIs.

---

### 👤 User Authentication

Financial Insights includes basic user authentication through the backend.

Users can:

* Create an account
* Log in
* Log out
* Maintain login state using browser `localStorage`

User information is stored in MongoDB using a Mongoose schema.

---

### ☁️ Calculation Persistence

When a logged-in user calculates an EMI, the calculation can be saved to MongoDB.

Stored information includes:

* User ID
* Loan amount
* Interest rate
* Loan tenure
* EMI
* Total interest
* Total payment
* Calculation timestamp

---

### 📈 Data Visualization

The project uses **Chart.js** to provide visual representations of financial calculations.

Charts include:

* EMI principal vs interest — Pie Chart
* Education loan breakdown — Pie Chart
* Insurance coverage vs premiums — Bar Chart
* Gold loan eligibility — Doughnut Chart

---

### 📚 Learning Center

The frontend also includes a financial learning section designed to help users understand concepts related to:

* Loans
* Insurance
* Financial planning
* Borrowing
* Repayment

The goal is to make financial concepts easier to understand for users without a strong financial background.

---

# 🛠️ Tech Stack

## Frontend

* HTML5
* CSS3
* JavaScript
* Bootstrap 5
* Bootstrap Icons
* Chart.js
* Browser LocalStorage

## Backend

* Node.js
* Express.js
* CORS
* dotenv

## Database

* MongoDB
* MongoDB Atlas
* Mongoose ODM

## Development

* Git
* GitHub
* npm

---

# 🏗️ Project Architecture

The application follows a simple full-stack architecture:

```text
                    ┌──────────────────────────┐
                    │       User / Browser     │
                    └────────────┬─────────────┘
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │        Frontend          │
                    │                          │
                    │ HTML + CSS + JavaScript  │
                    │ Bootstrap + Chart.js     │
                    └────────────┬─────────────┘
                                 │
                         HTTP REST API
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │       Node.js Server     │
                    │        Express.js        │
                    ├──────────────────────────┤
                    │ /api/signup              │
                    │ /api/login               │
                    │ /api/save-emi            │
                    └────────────┬─────────────┘
                                 │
                              Mongoose
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │        MongoDB            │
                    │                          │
                    │ Users                     │
                    │ Calculations              │
                    └──────────────────────────┘
```

---

# 📁 Project Structure

```text
Financial-Insights-Fullstack/
│
├── frontend/
│   └── FINAL OUTCOME.html
│       ├── Landing Page
│       ├── Navigation
│       ├── Financial Tools
│       ├── EMI Calculator
│       ├── Education Loan Calculator
│       ├── Bank Suggestion System
│       ├── Insurance Calculator
│       ├── Gold Loan Calculator
│       ├── Learning Center
│       ├── Login Modal
│       └── Signup Modal
│
├── backend/
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Calculation.js
│   │
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

### Backend Structure

#### `server.js`

Main Express server responsible for:

* Starting the backend server
* Connecting to MongoDB
* Handling CORS
* Parsing JSON requests
* User signup
* User login
* Saving EMI calculations

The backend currently runs on:

```text
http://localhost:5000
```

#### `models/User.js`

Defines the MongoDB user schema:

```text
name
email
password
createdAt
```

#### `models/Calculation.js`

Defines the EMI calculation schema:

```text
userId
loanAmount
interestRate
tenure
emi
totalInterest
totalPayment
createdAt
```

---

# 🔌 API Endpoints

## Health Check

```http
GET /
```

Returns:

```text
The Financial Insights backend is running!
```

---

## User Signup

```http
POST /api/signup
```

### Request

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

---

## User Login

```http
POST /api/login
```

### Request

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

---

## Save EMI Calculation

```http
POST /api/save-emi
```

### Request

```json
{
  "userId": "john@example.com",
  "loanAmount": 500000,
  "interestRate": 8.5,
  "tenure": 20,
  "emi": 43391.14,
  "totalInterest": 541871.36,
  "totalPayment": 1041871.36
}
```

---

# ⚙️ Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/Financial-Insights-Fullstack.git
```

Navigate into the project:

```bash
cd Financial-Insights-Fullstack
```

---

## 2. Install Backend Dependencies

```bash
cd backend
npm install
```

---

## 3. Configure Environment Variables

Create a `.env` file inside the `backend` directory:

```env
MONGO_URI=your_mongodb_connection_string
```

Example:

```text
backend/
├── .env
├── server.js
├── package.json
└── models/
```

**Never commit `.env` to GitHub.**

The project already includes:

```gitignore
node_modules/
.env
```

---

## 4. Start the Backend

Inside the `backend` directory:

```bash
node server.js
```

You should see:

```text
Database connected successfully!
Server is running on http://localhost:5000
```

---

## 5. Run the Frontend

Open:

```text
frontend/FINAL OUTCOME.html
```

For the best development experience, use **VS Code Live Server** or another local static web server.

Make sure the backend is running before using:

* Signup
* Login
* EMI calculation persistence

---

# 🧮 Financial Logic

### EMI Calculation

The application uses the standard reducing-balance EMI formula:

```text
EMI = P × r × (1+r)ⁿ
     ─────────────────────
        (1+r)ⁿ - 1
```

Where:

```text
P = Principal loan amount
r = Monthly interest rate
n = Number of monthly installments
```

The application then calculates:

```text
Total Payment = EMI × Number of Months

Total Interest = Total Payment - Principal
```

---

### 🎓 Education Loan

The education loan calculator additionally calculates interest accumulated during the entered moratorium period before calculating the repayment EMI.

---

### 🥇 Gold Loan

The gold calculator first estimates pure gold quantity:

```text
Pure Gold = Weight × (Purity / 24)
```

Then:

```text
Gold Value = Pure Gold × Gold Rate
```

And the current implementation estimates eligible loan value as:

```text
Eligible Loan = Gold Value × 75%
```

---

### 🛡️ Insurance

The insurance calculator estimates:

```text
Total Premiums = Annual Premium × Policy Term
```

and:

```text
Coverage Ratio = Sum Assured / Total Premiums
```

---

# 🔐 Authentication Flow

```text
User
 │
 ├── Signup
 │      │
 │      ▼
 │   Frontend
 │      │
 │      ▼
 │   POST /api/signup
 │      │
 │      ▼
 │   Express Server
 │      │
 │      ▼
 │   Mongoose
 │      │
 │      ▼
 │   MongoDB
 │
 └── Login
        │
        ▼
     POST /api/login
        │
        ▼
     MongoDB
        │
        ▼
     User verified
        │
        ▼
     localStorage
```

---

# 🎯 Project Objectives

Financial Insights was developed with the following objectives:

* Simplify financial decision-making
* Make financial calculations accessible to everyday users
* Provide interactive financial tools
* Improve financial awareness and education
* Help users understand loan repayment obligations
* Provide basic loan and bank comparisons
* Demonstrate full-stack web development
* Integrate a frontend application with REST APIs and MongoDB

---

# 🔮 Future Improvements

Potential improvements include:

* 🔐 Password hashing using bcrypt
* 🔑 JWT-based authentication
* 👤 User dashboard
* 📊 Personal calculation history
* 🏦 Live bank/loan information APIs
* 🔗 Real bank application redirects
* 📱 Progressive Web App support
* 📈 Advanced financial analytics
* 💾 Export calculations as PDF
* 🔔 Financial reminders
* 🧠 Personalized financial insights
* 🛡️ Input validation and stronger API security
* 🧪 Automated frontend and backend testing
* 🚀 Production deployment

---

# ⚠️ Current Limitations

This repository represents the current implementation of the project.

Some components are prototype-level:

* Bank information is stored as static frontend data.
* Bank "Apply Now" currently displays an informational alert rather than performing a real bank redirect.
* Authentication is implemented as a basic prototype.
* Passwords should be hashed before production deployment.
* API URLs currently point to `localhost:5000`.
* Financial calculations are estimates and should not be treated as professional financial advice.
* No automated test suite is currently included.

---

# 🔒 Security Notice

The repository intentionally excludes environment variables through `.gitignore`.

```text
.env
node_modules/
```

Never commit credentials, database connection strings, API keys, or other secrets to the repository.

For production deployment, authentication and sensitive data handling should be strengthened with:

* Password hashing
* JWT/session-based authentication
* HTTPS
* Secure cookies
* Request validation
* Rate limiting
* Environment-based configuration
* Proper authorization checks

---

# 👨‍💻 Development

This project demonstrates the integration of:

```text
Frontend
   ↓
JavaScript
   ↓
REST APIs
   ↓
Node.js + Express
   ↓
Mongoose
   ↓
MongoDB
```

It serves as a practical example of building a full-stack financial utility platform using modern web technologies.

---

# 📜 License

This project is currently available for educational and development purposes.

If you plan to distribute or commercialize the project, add an appropriate open-source or proprietary license.

---

## ⭐ Financial Insights

**Understand your money. Calculate your options. Make informed decisions.**
