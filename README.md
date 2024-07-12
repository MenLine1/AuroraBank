# AuroraBank

AuroraBank is a fintech web application designed to manage your finances efficiently. Built with Next.js, TypeScript, Tailwind CSS and Appwrite, it allows users to connect multiple bank accounts, check transactions in real-time, transfer funds and more.

## Features

- **Authentication:** Secure SSR authentication with validations and authorization.
- **Connect Banks:** Integrates with Plaid to link multiple bank accounts.
- **Home Page:** Displays an overview of user accounts, including total balance, recent transactions, and spending categories.
- **My Banks:** Lists all connected banks with balances and account details.
- **Transaction History:** Offers pagination and filtering options for viewing transaction history.
- **Real-time Updates:** Reflects changes across all relevant pages upon connecting new bank accounts.
- **Funds Transfer:** Allows users to transfer funds using Dwolla, with necessary fields and recipient bank ID.
- **Responsiveness:** Adapts seamlessly to various screen sizes and devices for a consistent user experience.

## Technologies Used

- **Next.js:** A React framework for building server-side rendered web applications.
- **TypeScript:** A statically typed superset of JavaScript.
- **Tailwind CSS:** A utility-first CSS framework for quickly styling web applications.
- **Appwrite:** An open-source backend server for web developers.
- **Plaid:** A service for connecting bank accounts.
- **Dwolla:** A platform for transferring funds.
- **Zod:** A TypeScript-first schema declaration and validation library.
- **ShadCN:** A utility for connecting to various database systems.

## Getting Started

To run the AuroraBank application locally, follow these steps:

### Prerequisites

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

### Cloning the Repository

```bash
git clone https://github.com/MenLine1/AuroraBank.git
cd AuroraBank
```

### Installation

Install the project dependencies using npm:

```bash
npm install
```

### Running the Project

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Contributing

Contributions to AuroraBank are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name for your feature or fix.
3. Make your changes and commit them with clear, descriptive messages.
4. Push your changes to your fork and submit a pull request to the main repository.

## Live Demo

You can try out the AuroraBank application live on [Vercel](https://aurora-bank-two.vercel.app).
To fully experience all features, create your own account and connect your account using Plaid "good_user" login and password.
Or use the provided test account:

- **Login:** test321@user.com
- **Password:** testuser
