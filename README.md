<div align="center">
  <img height="400" src="https://github.com/shahbaz-kamal/vaultPay-server/blob/development/src/app/assets/git_banner.png"  />
</div>

###

<h1 align="left"> 🏦 VaultPay - payment system</h1>

**VaultPay** is a secure digital wallet and payment platform built using **React**, **TypeScript**, and **MongoDB (Mongoose)**. It enables users to **add**, **withdraw**, and **transfer** money securely with real-time transaction processing. The system includes **role-based access control** with **Admin**, **Agent**, and **User** roles — each having distinct privileges.

Users can **add balance to their wallets via SSLCommerz**, a reliable online payment gateway ensuring safe and verified transactions. Admins can manage **system balance**, **transaction charges**, and **commissions**. The platform is powered by **JWT authentication**, **Zod validation**, and **BcryptJS encryption** to ensure robust security and data integrity across all operations.

## 🔗 Live  link

###

[Click Here](https://vaultpay-by-shahbaz.netlify.app)
## 🔗 Backend  link

###

[Click Here](https://vault-pay-server.vercel.app)

## 👨‍💼Login Info

- **Super Admin Email** — super.vaultpay@gmail.com
- **Super Admin Password** — 123456Aa
- **Agent Email** — shahbazkamal384@gmail.com
- **Agent Password** — 123456Aa
- **User Email** — tamimchowdhury120096@gmail.com
- **User Password** — 123456Aa


## ✨ Features:

- **Role-Based Access Control** — Separate functionalities for **Admin**, **Super Admin**, **Agent**, and **User** roles.
- **Secure Authentication** — Implemented using **JWT** and **BcryptJS** for safe login and password protection.
  - **Forget Password:** All Users can easily set new password if password is forgotten through reset option sent via email.
  - **Set Password:** Users can set password, if initially registered with google. After setting passord he/she can use credential based login.
  - **Change Password:** Users can change password easily by providing old password.
  - **OTP Verification:** Users is verified via email by sending OTP upon register with email and password
- **Add Balance via SSLCommerz** — Users can easily add money to their wallets using the SSLCommerze
- **SSLCommerz payment gateway**. Also users can send money to other users.
- **Cash out, send money and cash in** — Real-time transaction system for seamless fund management.
- **Invoice via Email** — All users gets there there invoice as pdf instantly via email. Also can download transaction invoice any time from there dashboard.
- **Admin Dashboard** — Admins can monitor total balance, manage commissions, and set transaction charges.
  - **Analytics** — Admins can view a huge nomber of statistical information in this page via different types of chart. like user & agent overview (totaluser/agents), active vs inactive users , system information, transaction overview by type and top performers for both users and agents.
  - **Transaction History** — Admins can view a total transaction history . Also can filter and search transaction history by user name, email , transaction date etc.
  - **Agent and user Management** — Admins can view agent and users information and also can update the status of user and some basic information of users
  - **Client Messages** — Admins can view client messages that came through contact us page from frontend.
  - **NewsLetter Information** — Admins can view emails, whose users subscribed for newsletter via newsletter section.
- **Agents Dashboard** — Agents can perform cash in and add money as well as some more operation like can get statistical data, profile info etc.
  - **Wallet Summary** — Huge statistical data for logged in agent by using different types of chart.
  - **Transaction History** — Logged in agent can view his/her transaction history . Can use filter and search by different parameters.
- **Users Dashboard** — Users can perform cash out,send money and add money as well as some more operation like can get statistical data, profile info etc.

  - **Wallet Insights** — Huge statistical data for logged in user through different types of chart.
  - **Transaction History** — Logged in user can view his/her transaction history . Can use filter and search by different parameters.

- **Data Validation** — Robust input validation using **Zod** to ensure clean and error-free data.
- **Error Handling** — Centralized error management with descriptive responses for smooth debugging.
- **TypeScript Support** — Strongly typed backend ensuring better maintainability and scalability.
- **Database Management** — Built with **MongoDB (Mongoose)** for flexible and efficient data modeling.
- **Users can**
  - Add Money to their wallet from SSLCommerze
  - Send money to other users with a transaction charge.
  - Initiates cash out to agents to withdraw.
- **Agents can**
  - Add Money to their wallet from SSLCommerze.
  - Initiates cash in to user wallet. (user will receive money from agent)
- **Admins can**
  - View all transactions.
  - Update all users profiles certain fields.
- **Super Admin can**
  - View all transactions.
  - Update users profiles as well as admin's profile .
  - can keep track of client message, newsletter subscriber

## 🛠 Technology Used

###

 <div align="left">
  <img src="https://i.ibb.co.com/KpNvmBZb/atom-1.png" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://i.ibb.co.com/tTdS8wN9/icons8-redux-480.png" height="40" alt="express logo"  />
  <img width="12" />
  <img src="https://i.ibb.co.com/yFgT8ftf/typescript.png" height="40" alt="typescript logo"  />
  <img width="12" />
  <img src="https://images.seeklogo.com/logo-png/51/1/shadcn-ui-logo-png_seeklogo-519786.png" height="40" alt="mongodb logo"  />

</div>

## 💥 Dependencies:

```json
{
 "@hookform/resolvers": "^5.2.2",
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-popover": "^1.1.15",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-switch": "^1.2.6",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@reduxjs/toolkit": "^2.9.2",
    "@tailwindcss/vite": "^4.1.14",
    "@tanstack/react-table": "^8.21.3",
    "axios": "^1.13.1",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^4.1.0",
    "flowbite": "^4.0.0",
    "gsap": "^3.13.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.545.0",
    "next-themes": "^0.4.6",
    "radix-ui": "^1.4.3",
    "react": "^19.1.1",
    "react-day-picker": "^9.11.1",
    "react-dom": "^19.1.1",
    "react-fast-marquee": "^1.6.5",
    "react-hook-form": "^7.66.0",
    "react-redux": "^9.2.0",
    "react-router": "^7.9.4",
    "recharts": "^2.15.4",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.4.0",
    "tailwindcss": "^4.1.14",
    "zod": "^4.1.12"
}
```

## 💥Dev Dependencies:

```json
{
    "@eslint/js": "^9.36.0",
    "@types/node": "^24.6.0",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0",
    "tw-animate-css": "^1.4.0",
    "typescript": "~5.9.3",
    "typescript-eslint": "^8.45.0",
    "vite": "^7.1.7",
    "vite-tsconfig-paths": "^5.1.4"
}
```

<!-- ## 📁 Project Structure

```
vaultPay-server/
├── .env.example
├── .gitignore
├── eslint.config.mjs
├── package-lock.json
├── package.json
├── src/
│   ├── app/
│   │   ├── config/
│   │   │   ├── env.ts
│   │   │   └── passport.ts
│   │   ├── constants.ts
│   │   ├── errorHelpers/
│   │   │   └── AppError.ts
│   │   ├── helpers/
│   │   │   ├── handleCastError.ts
│   │   │   ├── handleDuplicateError.ts
│   │   │   ├── handleValidationError.ts
│   │   │   └── handleZodError.ts
│   │   ├── interfaces/
│   │   │   ├── error.types.ts
│   │   │   └── index.d.ts
│   │   ├── middlewares/
│   │   │   ├── checkAuth.ts
│   │   │   ├── globalErrorHandler.ts
│   │   │   ├── logger.ts
│   │   │   ├── notFoundError.ts
│   │   │   └── validateRequest.ts
│   │   ├── modules/
│   │   │   ├── auth/
│   │   │   │   ├── auth.controller.ts
│   │   │   │   ├── auth.route.ts
│   │   │   │   └── auth.service.ts
│   │   │   ├── sslCommerz/
│   │   │   │   ├── sslCommerze.interface.ts
│   │   │   │   └── sslCommerze.service.ts
│   │   │   ├── system/
│   │   │   │   ├── system.interface.ts
│   │   │   │   └── system.model.ts
│   │   │   ├── transaction/
│   │   │   │   ├── transaction.controller.ts
│   │   │   │   ├── transaction.interface.ts
│   │   │   │   ├── transaction.model.ts
│   │   │   │   ├── transaction.route.ts
│   │   │   │   ├── transaction.service.ts
│   │   │   │   └── transaction.validation.ts
│   │   │   ├── user/
│   │   │   │   ├── user.controller.ts
│   │   │   │   ├── user.interface.ts
│   │   │   │   ├── user.model.ts
│   │   │   │   ├── user.route.ts
│   │   │   │   ├── user.service.ts
│   │   │   │   └── user.validation.ts
│   │   │   └── wallet/
│   │   │       ├── wallet.controller.ts
│   │   │       ├── wallet.interface.ts
│   │   │       ├── wallet.model.ts
│   │   │       ├── wallet.route.ts
│   │   │       ├── wallet.service.ts
│   │   │       └── wallet.validation.ts
│   │   ├── routes/
│   │   │   └── index.ts
│   │   └── utils/
│   │       ├── calculateTransactionFee.ts
│   │       ├── catchAsync.ts
│   │       ├── generateTransactionId.ts
│   │       ├── jwt.ts
│   │       ├── QueryBuilder.ts
│   │       ├── seedSuperAdmin.ts
│   │       ├── seedSystemInformation.ts
│   │       ├── sendResponse.ts
│   │       ├── setAuthCookie.ts
│   │       └── userToken.ts
│   ├── app.ts
│   └── server.ts
└── tsconfig.json
``` -->



## 🔧 Installation Guidline:

###

1. First clone the project by running

```bash
  git clone https://github.com/shahbaz-kamal/vaultpay-client.git
```

2. Change your directory to the cloned folder by

```bash
  cd folder_name
```

3. Run the following to install dependencies:

```bash
npm install
```

4. Create a .env file in root directory of the project and add the following variable :

```bash
VITE_BASE_URL=https://vault-pay-server.vercel.app/api/v1


```

5. Run the following command to run the project:

```bash
npm run dev
```



### Thank you:
