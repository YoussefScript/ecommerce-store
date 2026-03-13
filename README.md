# FakeStoreName Luxury Storefront ✨

### Developed by **Youssef Emad Kamel**

**FakeStoreName** is a high-end, premium e-commerce storefront designed for the modern fashion and lifestyle industry. It features a cinematic user experience, smooth micro-interactions, and a secure, streamlined checkout process.

---

## 💅 The Experience

- **Cinematic UI/UX**: Designed with a luxury aesthetic, featuring glassmorphism, smooth gradients, and high-frequency animations.
- **Instant Previews**: Quick-view modals for products to keep the browsing flow uninterrupted.
- **Dynamic Categories**: Effortless navigation through curated collections.
- **Advanced Cart System**: Persistent shopping cart with real-time updates and state management via **Zustand**.
- **Secure Checkout**: Integrated with **Stripe** for a world-class payment experience.
- **Member Access**: Secure customer profiles and protected checkout flow via **Clerk**.
- **Performance Optimized**: Lightning-fast image loading with Next.js Image optimization and tailored responsive design.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (Turbopack Powered)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Auth**: [Clerk](https://clerk.com/)
- **Payments**: [Stripe](https://stripe.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utility**: [Headless UI](https://headlessui.com/) & [Axios](https://axios-http.com/)

---

## ⚡ Quick Start

### 1. Environment Setup
Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api/your-store-id
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

### 2. Install & Run
```bash
npm install
npm run dev
```

---

## 📜 License

Copyright (c) 2026 **Youssef Emad Kamel**. 
All rights reserved. This project is protected by a proprietary [LICENSE](./LICENSE).

---

*“Style is a way to say who you are without having to speak.”* — **Youssef Emad Kamel**

