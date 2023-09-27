Web Dev Tools included in Threads Project:
-Next.Js
-React
-TypeScript
-Clerk/nextjs
-uploadthing
-mongoose
-svix
-Tailwind
-zod

Issues during coding:
-needed to install tailwindcss-animate plugin to compile and apply Tailwind styles
-import didn't update despite selecting options when moving file to another folder
-Organization switcher not appearing; needed to enable it in clerk account online
-shadcn overwrites previous global.css and tailwind.config.js (need to have save them in git to retrieve again)
-Clerk username show [object object] instead of Google username; (accidentally set user property to user object; insead of a value user.username). Set to null by Google but code allows to add it to the form using "upsert" to database.
*InvalidStateError: Failed to set the 'value' property on 'HTMLInputElement': This input element accepts a filename, which may only be programmatically set to the empty string. Solution: In input element for image add value={''}

===========================
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
