<!-- <div align="center">
  <img height="400" src="https://github.com/shahbaz-kamal/book-nest-with-mongoose/blob/main/src/assets/git_banner/git_banner_2.JPG"  />
</div> -->

###

<h1 align="left"> 🏦 VaultPay - payment system</h1>

**VaultPay** is a secure digital wallet and payment platform built using **React**, **TypeScript**, and **MongoDB (Mongoose)**. It enables users to **add**, **withdraw**, and **transfer** money securely with real-time transaction processing. The system includes **role-based access control** with **Admin**, **Agent**, and **User** roles — each having distinct privileges.

Users can **add balance to their wallets via SSLCommerz**, a reliable online payment gateway ensuring safe and verified transactions. Admins can manage **system balance**, **transaction charges**, and **commissions**. The platform is powered by **JWT authentication**, **Zod validation**, and **BcryptJS encryption** to ensure robust security and data integrity across all operations.

## 🔗 Live deployment link

###

[Click Here](https://vaultpay-by-shahbaz.netlify.app)

## 👨‍💼Login Info

- **Super Admin Email** — super.vaultpay@gmail.com
- **Super Admin Password** — 123456Aa
- **User Email** — tamimchowdhury120096@gmail.com
- **User Password** — 123456Aa
- **User Email** — shahbazkamal384@gmail.com
- **User Password** — 123456Aa


## ✨ Features:

- **Role-Based Access Control** — Separate functionalities for **Admin**, **Super Admin**, **Agent**, and **User** roles.
- **Secure Authentication** — Implemented using **JWT** and **BcryptJS** for safe login and password protection.
- **Add Balance via SSLCommerz** — Users can easily add money to their wallets using the **SSLCommerz payment gateway**. Also users can send money to other users.
- **Cash out, send money and cash in** — Real-time transaction system for seamless fund management.
- **Admin Dashboard** — Admins can monitor total balance, manage commissions, and set transaction charges.
- **Agent Management** — Agents can process cash in and assist users with transactions.
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
  git clone https://github.com/shahbaz-kamal/vaultPay-server.git
```

2. Change your directory to the cloned folder by

```bash
  cd folder_name
```

3. Run the following to install dependencies:

```bash
npm install
```

4. Create a .env file in root directory of the project and add the following variables :

```bash
PORT=****
DB_URL=***************************
NODE_ENV=development

#jwt
JWT_ACCESS_TOKEN_SECRET=***************************
JWT_ACCESS_TOKEN_EXPIRES_IN=**  # 1d/2d
JWT_REFRESH_TOKEN_SECRET=***************************
JWT_REFRESH_TOKEN_EXPIRES_IN=**  # 1d,2d

#bcrypt
BCRYPT_SALT_ROUND=**  # 5/10

#SUPER_ADMIN
SUPER_ADMIN_EMAIL=*************************** # an email you want to create super admin (super@gmail.com)
SUPER_ADMIN_PASSWORD=***************************

#Google
GOOGLE_CLIENT_ID=*************************** # google OAuth Client Id
GOOGLE_CLIENT_SECRET=*************************** # google OAuth Client secret
GOOGLE_CALLBACK_URL=*************************** # google OAuth callback Url (ex: http://localhost:5000/api/v1/auth/google/callback)

#express-session
EXPRESS_SESSION_SECRET=***************************

#FRONTEND_URl
FRONTEND_URl=***************************   #example:http://localhost:5173

#Backened_URL
BACKENED_URL=***************************   #example:http://localhost:5000

# #SSLCommerze
SSL_STORE_ID=*************************** #sslCommerz store Id
SSL_STORE_PASS=*************************** #sslCommerz store Password
SSL_ADDMONEY_API=*************************** #sslCommerz Session API to generate transaction
SSL_VALIDATION_API=*************************** #sslCommerz Validation API


#SSL Commerze BAkened URl
SSL_SUCCESS_BACKEND_URL=*************************** # Backened URL to hit if SSLCommerze is successfull
SSL_FAIL_BACKEND_URL=*************************** # Backened URL to hit if SSLCommerze is failed
SSL_CANCEL_BACKEND_URL=*************************** # Backened URL to hit if SSLCommerze is Canceled

#SSL Commerze FRONTENDURL
SSL_SUCCESS_FRONTEND_URL=*************************** # Frontend URL to hit if SSLCommerze is successfull
SSL_FAIL_FRONTEND_URL=*************************** # Frontend URL to hit if SSLCommerze is failed
SSL_CANCEL_FRONTEND_URL=*************************** # Frontend URL to hit if SSLCommerze is failed

```

5. Run the following command to run the project:

```bash
npm run dev
```

6. Use Postman to send request as per above instructions

### Thank you:
