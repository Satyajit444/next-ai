# Build a UI library with Next.js 13, React, Tailwind, Prisma, Stripe

Saka-ui is a UI library inspired by Material Design, offering a collection of reusable components for building modern and visually appealing user interfaces.

## Features

- **Material Design Inspired:**
  - Follows the principles of Material Design for a familiar and polished UI.

- **Component Library:**
  - A comprehensive collection of reusable and customizable UI components.

- **Responsive Design:**
  - Ensures seamless experiences across various screen sizes and devices.

- **Easy Integration:**
  - Simple integration into existing projects for a smooth adoption process.

- **Custom Theming:**
  - Allows easy customization to match branding and design preferences.

- **Modular Architecture:**
  - Designed with modularity, reducing overall bundle size.

- **Accessibility Support:**
  - Prioritizes accessibility for users with disabilities.

- **Cross-Browser Compatibility:**
  - Tested and optimized for compatibility with major web browsers.

- **Documentation:**
  - Comprehensive documentation with examples and guidelines.

- **Active Development:**
  - Regular updates and improvements to stay current with web development trends.

- **Community Support:**
  - Foster a community for users to seek help, share experiences, and contribute.

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/#############################
```

### Install packages

```shell
npm i
```

### Setup .env file


DATABASE_URL=

STRIPE_API_KEY=


NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Setup Prisma

Add MySQL Database (I used PlanetScale)

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
