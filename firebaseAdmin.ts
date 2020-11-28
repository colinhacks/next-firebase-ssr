import * as firebaseAdmin from "firebase-admin";
// import serviceAccount from './secret.json';

// console.log(JSON.stringify(process.env, null, 2));
// console.log(process.env['PRIVATE_KEY']);

const privateKey = process.env["PRIVATE_KEY"];
const clientEmail = process.env["CLIENT_EMAIL"];
const projectId = process.env["PROJECT_ID"];

if (!privateKey || !clientEmail || !projectId) {
  console.log(
    `Failed to load Firebase credentials. Follow the instructions in the README to set your Firebase credentials inside environment variables.`
  );
}

// console.log(serviceAccount);

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: privateKey,
      clientEmail,
      projectId,
    }),
    databaseURL: `https://${projectId}.firebaseio.com`,
  });
}

export { firebaseAdmin };
