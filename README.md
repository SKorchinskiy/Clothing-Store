# Clothing Store

## Table of Contents

+ [Project Description](https://github.com/SKorchinskiy/Clothing-Store?tab=readme-ov-file#project-description)

+ [Project Structure](https://github.com/SKorchinskiy/Clothing-Store?tab=readme-ov-file#project-structure) 

+ [Project Workflow](https://github.com/SKorchinskiy/Clothing-Store?tab=readme-ov-file#project-workflow)

+ [Project Optimizations](https://github.com/SKorchinskiy/Clothing-Store?tab=readme-ov-file#project-optimizations)

+ [Why did I build this project ?](https://github.com/SKorchinskiy/Clothing-Store?tab=readme-ov-file#why-did-i-build-this-project-)

+ [What did I learn ?](https://github.com/SKorchinskiy/Clothing-Store?tab=readme-ov-file#what-did-i-learn-)

## Project Description

🥋 A Clothing Store serverless application with fully tested store functionality. The project was initially built using JavaScript, however was rewritten for TypeScript usage. The application is written using:
- **React** *for components*
- **React-Router-Dom** *for page routing*
- **Redux** *for state management*
- **Redux-Saga** *for asynchronous side effects (API calls)*
- **Cloud Firestore** *as a data storage*
- **Stripe** *as a payment service*
- **Jest and Testing Library** *as tools for testing User Interface for consistency*

> [!NOTE]
> Strpe service is used in test mode, thus it has no effect paying for products. It was made like that due to the fact that I don't have real products to sell.

## Project Structure 

```
📦 Clothing-Store
├─ .gitignore
├─ README.md
├─ netlify
│  └─ functions
│     └─ create-payment-intent.js
├─ package-lock.json
├─ package.json
├─ public
│  ├─ _redirects
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  ├─ mockServiceWorker.js
│  └─ robots.txt
├─ src
│  ├─ App..jsx
│  ├─ assets
│  │  ├─ crown.svg
│  │  └─ shopping-bag.svg
│  ├─ components
│  │  ├─ button
│  │  │  ├─ __tests__
│  │  │  │  ├─ __snapshots__
│  │  │  │  │  └─ button.component.test.js.snap
│  │  │  │  └─ button.component.test.js
│  │  │  ├─ button.component.tsx
│  │  │  └─ button.styles.tsx
│  │  ├─ cart-dropdown
│  │  │  ├─ __tests__
│  │  │  │  └─ cart-dropdown.component.test.js
│  │  │  ├─ cart-dropdown.component.tsx
│  │  │  └─ cart-dropdown.styles.tsx
│  │  ├─ cart-icon
│  │  │  ├─ __tests__
│  │  │  │  └─ cart-icon.component.test.js
│  │  │  ├─ cart-icon.component.tsx
│  │  │  └─ cart-icon.styles.tsx
│  │  ├─ cart-item
│  │  │  ├─ __tests__
│  │  │  │  ├─ __snapshots__
│  │  │  │  │  └─ cart-item.component.test.js.snap
│  │  │  │  ├─ cart-item.component.test.js
│  │  │  │  └─ stubs
│  │  │  │     └─ cart-item.stub.js
│  │  │  ├─ cart-item.component.tsx
│  │  │  └─ cart-item.styles.tsx
│  │  ├─ category-list
│  │  │  ├─ __tests__
│  │  │  │  ├─ __snapshots__
│  │  │  │  │  └─ category-list.component.test.js.snap
│  │  │  │  ├─ category-list.component.test.js
│  │  │  │  └─ stubs
│  │  │  │     └─ category-list.stub.js
│  │  │  ├─ category-list.component.tsx
│  │  │  └─ category-list.styles.tsx
│  │  ├─ category-preview
│  │  │  ├─ __tests__
│  │  │  │  ├─ __snapshots__
│  │  │  │  │  └─ category-preview.test.js.snap
│  │  │  │  ├─ category-preview.test.js
│  │  │  │  └─ stubs
│  │  │  │     └─ category-preview.stub.js
│  │  │  ├─ category-preview.component.tsx
│  │  │  └─ category-preview.styles.tsx
│  │  ├─ category
│  │  │  ├─ __tests__
│  │  │  │  ├─ __snapshots__
│  │  │  │  │  └─ category.component.test.js.snap
│  │  │  │  ├─ category.component.test.js
│  │  │  │  └─ stubs
│  │  │  │     └─ category.stub.js
│  │  │  ├─ category.component.tsx
│  │  │  └─ category.styles.tsx
│  │  ├─ dropdown-item
│  │  │  ├─ __tests__
│  │  │  │  ├─ __snapshots__
│  │  │  │  │  └─ dropdown-item.component.test.js.snap
│  │  │  │  ├─ dropdown-item.component.test.js
│  │  │  │  └─ stubs
│  │  │  │     └─ dropdown-item.stub.js
│  │  │  ├─ dropdown-item.component.tsx
│  │  │  └─ dropdown-item.styles.tsx
│  │  ├─ form-input
│  │  │  ├─ form-input.component.tsx
│  │  │  └─ form-input.styles.tsx
│  │  ├─ loader
│  │  │  ├─ loader.component.tsx
│  │  │  └─ loader.styles.tsx
│  │  ├─ payment-form
│  │  │  ├─ payment-form.component.tsx
│  │  │  └─ payment-form.styles.tsx
│  │  ├─ product-item
│  │  │  ├─ __tests__
│  │  │  │  ├─ __snapshots__
│  │  │  │  │  └─ product-item.component.test.js.snap
│  │  │  │  ├─ product-item.component.test.js
│  │  │  │  └─ stubs
│  │  │  │     └─ product-item.stub.js
│  │  │  ├─ product-item.component.tsx
│  │  │  └─ product-item.styles.tsx
│  │  ├─ sign-in-form
│  │  │  ├─ __tests__
│  │  │  │  ├─ __snapshots__
│  │  │  │  │  └─ sign-in-form.component.test.js.snap
│  │  │  │  ├─ sign-in-form.component.test.js
│  │  │  │  └─ stubs
│  │  │  │     └─ sign-in-user.stub.js
│  │  │  ├─ sign-in-form.component.tsx
│  │  │  └─ sign-in-form.styles.tsx
│  │  └─ sign-up-form
│  │     ├─ __tests__
│  │     │  ├─ __snapshots__
│  │     │  │  └─ sign-up-form.component.test.js.snap
│  │     │  ├─ sign-up-form.component.test.js
│  │     │  └─ stubs
│  │     │     └─ sign-up-user.stub.js
│  │     ├─ sign-up-form.component.tsx
│  │     └─ sign-up-form.styles.tsx
│  ├─ configs
│  │  ├─ __mocks__
│  │  │  └─ firebase.config.ts
│  │  └─ firebase.config.ts
│  ├─ custom.d.ts
│  ├─ hooks
│  │  └─ useResolution.hook.tsx
│  ├─ index.css
│  ├─ index.js
│  ├─ layout
│  │  ├─ __tests__
│  │  │  └─ Layout.test.js
│  │  ├─ header
│  │  │  ├─ __tests__
│  │  │  │  ├─ __snapshots__
│  │  │  │  │  └─ header.component.test.js.snap
│  │  │  │  └─ header.component.test.js
│  │  │  ├─ header.component.tsx
│  │  │  └─ header.styles.tsx
│  │  └─ layout.component.tsx
│  ├─ mocks
│  │  ├─ handlers.js
│  │  └─ mock-service-worker.js
│  ├─ pages
│  │  ├─ auth
│  │  │  ├─ auth.page.tsx
│  │  │  └─ auth.styles.tsx
│  │  ├─ category
│  │  │  ├─ category.page.tsx
│  │  │  └─ category.styles.tsx
│  │  ├─ checkout
│  │  │  ├─ checkout.page.tsx
│  │  │  └─ checkout.styles.tsx
│  │  ├─ home
│  │  │  └─ home.page.tsx
│  │  └─ shop
│  │     ├─ shop.page.tsx
│  │     └─ shop.styles.tsx
│  ├─ redux
│  │  ├─ actions
│  │  │  ├─ cart
│  │  │  │  ├─ cart.action.ts
│  │  │  │  └─ cart.type.ts
│  │  │  ├─ categories
│  │  │  │  ├─ categories.action.ts
│  │  │  │  └─ categories.type.ts
│  │  │  ├─ category
│  │  │  │  ├─ category.action.ts
│  │  │  │  └─ category.type.ts
│  │  │  ├─ create-action.helper.ts
│  │  │  └─ user
│  │  │     ├─ user.action.ts
│  │  │     └─ user.type.ts
│  │  ├─ reducers
│  │  │  ├─ cart
│  │  │  │  └─ cart.reducer.ts
│  │  │  ├─ categories
│  │  │  │  └─ categories.reducer.ts
│  │  │  ├─ category
│  │  │  │  └─ category.reducer.ts
│  │  │  ├─ root.reducer.ts
│  │  │  └─ user
│  │  │     └─ user.reducer.ts
│  │  ├─ sagas
│  │  │  ├─ __tests__
│  │  │  │  └─ user.saga.test.js
│  │  │  ├─ categories.saga.ts
│  │  │  ├─ category.saga.ts
│  │  │  ├─ root.saga.ts
│  │  │  └─ user.saga.ts
│  │  ├─ selectors
│  │  │  ├─ cart.selector.ts
│  │  │  ├─ categories.selector.ts
│  │  │  ├─ category.selector.ts
│  │  │  └─ user.selector.ts
│  │  └─ store
│  │     └─ store.ts
│  ├─ routes
│  │  └─ index.js
│  ├─ service-worker.js
│  ├─ serviceWorkerRegistration.js
│  └─ utils
│     ├─ __mocks__
│     │  ├─ categoryFactory.js
│     │  └─ firebase.utils.ts
│     ├─ firebase.utils.ts
│     ├─ stripe.utils.js
│     └─ test.utils.js
└─ tsconfig.json
```
©generated by [Project Tree Generator](https://woochanleee.github.io/project-tree-generator)

## Project Workflow

The project is deployed using Netlify. You can check it [here](https://curious-wisp-0e847c.netlify.app/). Netlify was chosen due to its availability and being free of charge to some limit.

![Application Workflow](https://drive.google.com/uc?id=1Q_acNMK5DhlyWWXr1gL2uSt2KUnpu6i-)

- **Authentication**: when using the application, you can sign up or sign in to it. If you prefer manually entering the credentials, they will be saved to the cloud firestore. It is required to save the credentials, so you can sign in whenever you want without registering each time. However, manually entering credentials for each service we use is tiring. Therefore, you can sign in using Google provider. A new window will be created where you'll need to choose your google account for service usage. You can checkout this page [here](https://curious-wisp-0e847c.netlify.app/auth).

![Authentication Page Screenshot](https://drive.google.com/uc?id=1OeEOb33P5DizNtIizaWyDSpSEqUOYdlV)

- **Main page**: After signing in or just being on the main page (being authenticated isn't mandatory for the application), you'll see all the categories of products that the clothing store provides. You can checkout this page [here](https://curious-wisp-0e847c.netlify.app/home).

![Main Page Screenshot](https://drive.google.com/uc?id=1M_T1_6TmOkv3Jg5TNERc6-_A748BVXux)

- **Specific Category Page**: By clicking on a category on the main page, you'll be redirected to the chosen category page. You can checkout this page [here](https://curious-wisp-0e847c.netlify.app/category/Mens).

![Mens Category Screenshot](https://drive.google.com/uc?id=1C8QkkWXHuf0p6qpXXl4np5U9l2Le5v1T)

- **Product Cart**: After hovering on the desired product, you can add it to the cart, which contains all the chosen products in specific amount. (It's located in the upper right corner)

![Product Cart Screenshot](https://drive.google.com/uc?id=1IOlKhXoH1nevAWsylSGAnlsMVJHH6jxT)

- **Shop Page**: On the shop page limited amount of each category products is gathered. You can checkout this page [here](https://curious-wisp-0e847c.netlify.app/shop)

![Shop Page Screentshot](https://drive.google.com/uc?id=16QvrrPQVVgBTxakuQ_iMOHBTyJdFOsSp)

- **Checkout Page**: Through the cart you can get to the checkout page, where chosen products are listed. You can checkout this page [here](https://curious-wisp-0e847c.netlify.app/checkout)

![Checkout Page Screeshot](https://drive.google.com/uc?id=1MttHy7EM0wN4Bxf0QCfp-0dc924CzFDQ)

## Project Optimizations

+ Web vitals

Here are measurements made with PageSpeed Insights. You can check detailed results [here](https://pagespeed.web.dev/analysis/https-curious-wisp-0e847c-netlify-app/r4iv81jok6?form_factor=desktop).

![PC Performance Screenshot](https://drive.google.com/uc?id=1LlM32TdVDjZQh6sKC1Fdif3V9Jd5QkKK)

![Mobile Performance Screenshots](https://drive.google.com/uc?id=1e5vdudCXKT25-0NOIfZWI-ltM09gSOgi)

> [!TIP]
> As you can see, efficiency isn't great for mobile version. It can be impoved by:
>  + storing images of different sizes in the data storage. This way the amount of data transfered via network is less
>  + using server side rendering. By using this strategy, the server is responsible for rendering, not client's device
>  + using CDN + Redis. It can significantly improve performance as product images are the same for each user, so the caching will be efficient

+ Different screen resolutions

You've previously seen screenshots of the applications made from laptop. Now, I want to demonstrate how the app looks from mobile. 
> [!NOTE]
> The application is created as a progressive web app, so it can be added on the main screen of your device

![Mobile Application Layout Home Page](https://drive.google.com/uc?id=19Pz4HE-fYatwtf3EID8r6q5BGBWuGuqY)
![Mobile Application Layout Shop Page](https://drive.google.com/uc?id=1yB9Zdc_mrZbm82l6mnhxam-Z4ta-6b-c)
![Mobile Application Layout Auth Page](https://drive.google.com/uc?id=1dLS4Ab0Nt8MTAq7zc-Rj3X2hGb9ImZ0t)
![Mobile Application Layout Product Cart](https://drive.google.com/uc?id=12N6X5sgyT-t3wetS7bS2oB364zsqY0Zi)
![Mobile Application Layout Checkout Page](https://drive.google.com/uc?id=1X-Y5DM9qK8W2sDX3siP336x_XLkaEJoI)

+ Partial Rendering

Each page is loaded using lazy loading strategy. The main idea is that the content is loaded not simultaneously from the begining, but by chunks. So the needed page is loaded only when it is needed. More about lazy loading you can read [here](https://en.wikipedia.org/wiki/Lazy_loading).

Code from the application given below. You can check it out [here](https://github.com/SKorchinskiy/Clothing-Store/blob/main/src/routes/index.js).
```
const Home = lazy(() => import("../pages/home/home.page"));
const Auth = lazy(() => import("../pages/auth/auth.page"));
const Shop = lazy(() => import("../pages/shop/shop.page"));
const Checkout = lazy(() => import("../pages/checkout/checkout.page"));
const Category = lazy(() => import("../pages/category/category.page"));
```
Also, during page loading the loader is shown

![Loader Screenshot](https://drive.google.com/uc?id=1UMimf5oBYtximrzGJG86INxBhJUxYIgb)

## Why did I build this project ?

I built Clothing Store project to improve my skills in web development. This application is the first relatively big application where I've gained lots of skills and knowledge. In the next section I've listed what I've learned during the project building process.

## What did I learn ?
+ **Technologies**: React, Redux, Redux-Saga, React-Router-Dom, Jest, Testing Library, Cloud Firestore, HTML, CSS
+ **Strategies and Concepts**: lazy loading, serverless functions, page routing, device resolution adaptation, progressive web applications, web vitals optimization, client side rendering, partial rendering, loaders, service workers
