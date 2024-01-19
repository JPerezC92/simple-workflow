<h1 align="center">
  ⚛️ Next.js Template
</h1>

<div align="center">
    <a href="https://nextjs.org/">
        <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    </a>
    <a href="https://www.typescriptlang.org/">
        <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    </a>
    <a href="https://tailwindcss.com/">
        <img src="https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    </a>
    <a href="https://eslint.org/">
        <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
    </a>
<br/>
<br/>
<p>
Template for creating a Next.js app with TypeScript, Tailwind CSS, and ESLint. Pre-configured with Vitest, React Testing Library and Cypress for testing.
</p>

</div>

## 🚀 Using this template
1. Create your project based on this template:
    - a) If you want to create a GitHub repository, we would recommend to use the GitHub "Use this template" button and clone your newly created repository
    - b) If you don't want to create a GitHub repository, you can use the [degit](https://github.com/Rich-Harris/degit) tool to clone this repository without the Git history:
        ```bash
        npx degit JPerezC92/nextjs-template#main my-nextjs-app
        ```

2. Start the app:
    ```bash
    cd my-nextjs-app    
    pnpm install
    pnpm dev
    ```    

3. Start coding!

## 🧪 Testing
### Unit Testing
This template uses [Vitest](https://vitest.netlify.app/) for unit testing. To run the tests:
```bash
pnpm test
```

### Integration Testing
This template uses [Cypress](https://docs.cypress.io/guides/overview/why-cypress) for integration testing. To run the tests:

```bash
pnpm cy:open
```

or

```bash
pnpm dev
pnpm cy:run
```

## 📦 Building for production
To build the app for production:
```bash
pnpm build
```

## 🧹 Linting
To lint the app:
```bash
pnpm lint
```

## 📝 Formatting
To format the app:
```bash
pnpm lint:fix
```

## 📚 Documentation
- [Next.js](https://nextjs.org/docs/getting-started)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [ESLint](https://eslint.org/docs/user-guide/getting-started)
- [Vitest](https://vitest.netlify.app/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress)
- [Tailwind Variants](https://www.tailwind-variants.org/)
