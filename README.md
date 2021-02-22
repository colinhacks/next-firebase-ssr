# Next.js + Firebase + getServerSideProps

This project demonstrates how to implement authenticated server-side rendering with Next.js and Firebase Authentication.

> Update November 19, 2020: A bug has been fixed where the Firebase tokens would expire after an hour without being refreshed. All tokens are now force refreshed every 10 minutes.

> Update November 9, 2020: this repo has been updated to use the [redirect functionality](https://github.com/vercel/next.js/discussions/14890) introduced in `next@9.5.4` . Currently you must be on the `canary` release of Next for this approach to work ( `yarn add next@canary` ).

### Versions

* `next@10`
* `react@17`
* `firebase@8`
* `firebase-admin@9.4`
* `nookies@2.5`

### Documentation

Full walkthrough and documentation here: [Authenticated server-side rendering with Next.js and Firebase](https://colinhacks.com/essays/nextjs-firebase-authentication).

### How to use

To run this example:

* Clone the repo: `git clone git@github.com:vriad/next-firebase-ssr.git`
* Navigate into directory: `cd next-firebase-ssr`
* Install dependencies: `yarn`
* Create a Firebase project if you haven't already. Make sure you go into the Authentication tab in the Console, go to "Sign-in method", and enable "Email/Password"
* Add your Firebase client credentials to `firebaseClient.ts`. To get these, go to the Firebase Console > open your project > Gear Icon > Project Settings > General > Your apps > Firebase SDK Snippet > click the "Config" radio button > copy/paste.
* Add your service account (Admin) credentials to the project. To do this, go to the Firebase Console > open your project > click the gear icon > Project Settings > Service Accounts > click Node.js > Generate new private key. Open the JSON file that downloads. Then create a copy of `.env.local.example` and rename it to `.env.local`. This is the file where you will put your secret Firebase credentials. Copy/paste the  values from the private key JSON file over to the new `.env.local` file:  `privateKey` becomes `PRIVATE_KEY`,   `project_id` becomes `PROJECT_ID`, and `clientEmail` becomes `CLIENT_EMAIL`.
* Run `yarn dev`
* Go to `localhost:3000`
