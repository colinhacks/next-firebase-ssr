# Next.js + Firebase + getServerSideProps

Full walkthrough and documentation at https://vriad.com/essays/nextjs-firebase-authentication.

> Update November 9, 2020: this repo has been updated to use the [redirect functionality](https://github.com/vercel/next.js/discussions/14890) introduced in `next@9.5.4`. Currently you must be on the `canary` release of Next for this approach to work (`yarn add next@canary`).

To run this example:

- Clone the repo: `git clone git@github.com:vriad/next-firebase-ssr.git`
- Add your Firebase client credentials to `firebaseClient.ts` and your service account (Admin) credentials to `secret.json`.
- Run `yarn dev`
