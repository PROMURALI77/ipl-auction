import { Client, Account } from 'appwrite';

// appwrite instance
const AWClient = new Client().setProject('67c99a5d002a056012a1');

// object for user authentication
const AWAuth = new Account(AWClient)

export { AWClient, AWAuth };
