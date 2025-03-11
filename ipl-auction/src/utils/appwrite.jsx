import { Client, Databases } from 'appwrite';

// appwrite instance
const AWClient = new Client().setProject('67c99a5d002a056012a1');

// object for user database
const AWdb = new Databases(AWClient)


export { AWClient, AWdb };
